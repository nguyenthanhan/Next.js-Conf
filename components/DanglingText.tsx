import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { BoxLetter } from "./BoxLetter";
import * as THREE from "three";

interface DanglingTextProps {
  text: string;
  position: [number, number, number];
  parentRotationRef: React.RefObject<THREE.Group>;
  color: string;
  scale?: number;
  isUserInteracting?: boolean;
}

// Animation configuration constants
const ANIMATION_CONFIG = {
  FLOAT_UPDATE_INTERVAL: 0.016, // ~60fps for smoother animation
  INTERACTION_DEBOUNCE: 0.1, // Reduced to 100ms for faster response
  SWING_THRESHOLD: 0.003,
  SWING_TARGET_THRESHOLD: 0.02,
  SWAY_INFLUENCE: 0.1,
  AMPLITUDE: {
    X: 0.12,
    Y: 0.08,
    Z: 0.06,
  },
  SPEED_RANGE: {
    X: { min: 0.3, max: 0.6 },
    Y: { min: 0.6, max: 1.0 },
    Z: { min: 0.2, max: 0.4 },
  },
} as const;

export const DanglingText = ({
  text,
  position,
  parentRotationRef,
  color,
  scale = 1 / 3,
  isUserInteracting = false,
}: DanglingTextProps) => {
  const group = useRef<THREE.Group>(null);

  // Animation state
  const [swing, setSwing] = useState(0);
  const [floatOffset, setFloatOffset] = useState({ x: 0, y: 0, z: 0 });

  // Animation refs for performance
  const swingVelocity = useRef(0);
  const lastParentRot = useRef(0);
  const lastFloatUpdate = useRef(0);

  // Random seeds for natural movement
  const [randomSeed] = useState(() => Math.random() * 1000);
  const [floatSeeds] = useState(() => ({
    x: Math.random() * 1000,
    y: Math.random() * 1000 + 300,
    z: Math.random() * 1000 + 600,
    speedX:
      ANIMATION_CONFIG.SPEED_RANGE.X.min +
      Math.random() *
        (ANIMATION_CONFIG.SPEED_RANGE.X.max -
          ANIMATION_CONFIG.SPEED_RANGE.X.min),
    speedY:
      ANIMATION_CONFIG.SPEED_RANGE.Y.min +
      Math.random() *
        (ANIMATION_CONFIG.SPEED_RANGE.Y.max -
          ANIMATION_CONFIG.SPEED_RANGE.Y.min),
    speedZ:
      ANIMATION_CONFIG.SPEED_RANGE.Z.min +
      Math.random() *
        (ANIMATION_CONFIG.SPEED_RANGE.Z.max -
          ANIMATION_CONFIG.SPEED_RANGE.Z.min),
  }));

  // Helper function to update float animation
  const updateFloatAnimation = (time: number): void => {
    if (time - lastFloatUpdate.current < ANIMATION_CONFIG.FLOAT_UPDATE_INTERVAL)
      return;

    lastFloatUpdate.current = time;
    const newFloatOffset = {
      x:
        Math.sin(time * floatSeeds.speedX + floatSeeds.x) *
        ANIMATION_CONFIG.AMPLITUDE.X,
      y:
        Math.sin(time * floatSeeds.speedY + floatSeeds.y) *
        ANIMATION_CONFIG.AMPLITUDE.Y,
      z:
        Math.sin(time * floatSeeds.speedZ + floatSeeds.z) *
        ANIMATION_CONFIG.AMPLITUDE.Z,
    };
    setFloatOffset(newFloatOffset);
  };

  // Helper function to update swing physics
  const updateSwingPhysics = (
    parentY: number,
    delta: number,
    currentTime: number
  ): void => {
    // Spring physics constants
    const stiffness = 4;
    const damping = 3;

    // Calculate spring force
    const force = stiffness * (parentY - swing);
    swingVelocity.current += force * delta;
    swingVelocity.current *= Math.exp(-damping * delta);

    // Add natural sway
    const sway = Math.sin(currentTime * 0.5 + randomSeed) * 0.01;
    const swingChange =
      swingVelocity.current * delta +
      sway * delta * ANIMATION_CONFIG.SWAY_INFLUENCE;

    // Update swing if change is significant
    if (
      Math.abs(swingChange) > ANIMATION_CONFIG.SWING_THRESHOLD ||
      Math.abs(parentY - swing) > ANIMATION_CONFIG.SWING_TARGET_THRESHOLD
    ) {
      setSwing((prev) => {
        const next = prev + swingChange;
        if (group.current) {
          group.current.rotation.z = next;
        }
        return next;
      });
    }
  };

  useFrame((state, delta) => {
    // Completely disable animation when user is interacting
    if (isUserInteracting) {
      // console.log('Animation paused - user interacting');
      return;
    }

    if (!parentRotationRef.current) return;

    const parentY = parentRotationRef.current.rotation.y;
    const currentTime = state.clock.elapsedTime;

    // console.log('Animation running');
    updateFloatAnimation(currentTime);
    updateSwingPhysics(parentY, delta, currentTime);

    lastParentRot.current = parentY;
  });

  // Split text into letters and center - memoized for performance
  const { letters, totalWidth, letterSpacing } = useMemo(() => {
    const letterArray = text.toUpperCase().split("");
    const spacing = 0.95; // Balanced spacing - not too tight, not too loose
    const width = (letterArray.length - 1) * spacing;
    return { letters: letterArray, totalWidth: width, letterSpacing: spacing };
  }, [text]);

  return (
    <group
      ref={group}
      position={
        isUserInteracting
          ? position
          : [
              position[0] + floatOffset.x,
              position[1] + floatOffset.y,
              position[2] + floatOffset.z,
            ]
      }
    >
      {letters.map((letter, idx) =>
        letter !== " " ? (
          <BoxLetter
            key={idx}
            letter={letter}
            position={[idx * letterSpacing - totalWidth / 2, 0, 0]}
            scale={scale}
            color={color}
          />
        ) : null
      )}
    </group>
  );
};
