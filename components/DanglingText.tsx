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

export const DanglingText = ({
  text,
  position,
  parentRotationRef,
  color,
  scale = 1 / 3,
  isUserInteracting = false,
}: DanglingTextProps) => {
  const group = useRef<THREE.Group>(null);
  // Physics state
  const [swing, setSwing] = useState(0);
  const swingVelocity = useRef(0);
  const lastParentRot = useRef(0);

  // Removed collision detection and bounce animation

  // For a little random sway
  const [randomSeed] = useState(() => Math.random() * 1000);

  // 3D floating animation - simplified approach
  const [floatOffset, setFloatOffset] = useState({ x: 0, y: 0, z: 0 });
  const lastFloatUpdate = useRef(0);
  const lastInteractionTime = useRef(0);
  const [floatSeeds] = useState(() => ({
    x: Math.random() * 1000,
    y: Math.random() * 1000 + 300,
    z: Math.random() * 1000 + 600,
    speedX: 0.3 + Math.random() * 0.3, // Reduced: 0.3 - 0.6
    speedY: 0.6 + Math.random() * 0.4, // Reduced: 0.6 - 1.0
    speedZ: 0.2 + Math.random() * 0.2, // Reduced: 0.2 - 0.4
  }));

  useFrame((state, delta) => {
    if (!parentRotationRef.current) return;

    // Get parent's Y rotation (azimuthal angle)
    const parentY = parentRotationRef.current.rotation.y;

    // Update interaction time for debouncing
    if (isUserInteracting) {
      lastInteractionTime.current = state.clock.elapsedTime;
    }

    // Check if we should pause animations (during interaction + 200ms after)
    const timeSinceInteraction =
      state.clock.elapsedTime - lastInteractionTime.current;
    const shouldPauseAnimations =
      isUserInteracting || timeSinceInteraction < 0.2;

    // Removed collision detection and gravity animation for cleaner movement

    // Improved spring physics for swing: more responsive, less oscillation
    const stiffness = 4; // Increased stiffness for faster response
    const damping = 3; // Increased damping for less oscillation
    const target = parentY;
    const force = stiffness * (target - swing);
    swingVelocity.current += force * delta;
    swingVelocity.current *= Math.exp(-damping * delta);

    // Reduced random sway for more stability and performance
    const sway = Math.sin(state.clock.elapsedTime * 0.5 + randomSeed) * 0.01; // Reduced speed and amplitude

    // 3D floating animation - throttled updates for better performance
    const time = state.clock.elapsedTime;

    // Simple approach: only update when not interacting
    if (!shouldPauseAnimations && time - lastFloatUpdate.current >= 0.032) {
      lastFloatUpdate.current = time;

      // Reduced amplitude for gentler movement
      const newFloatOffset = {
        x: Math.sin(time * floatSeeds.speedX + floatSeeds.x) * 0.12,
        y: Math.sin(time * floatSeeds.speedY + floatSeeds.y) * 0.08,
        z: Math.sin(time * floatSeeds.speedZ + floatSeeds.z) * 0.06,
      };

      setFloatOffset(newFloatOffset);
    }

    // Only update swing if there's significant change and user is not interacting
    const swingChange = swingVelocity.current * delta + sway * delta * 0.1;
    if (
      !shouldPauseAnimations &&
      (Math.abs(swingChange) > 0.003 || Math.abs(target - swing) > 0.02)
    ) {
      setSwing((prev) => {
        const next = prev + swingChange;
        if (group.current) {
          group.current.rotation.z = next;
        }
        return next;
      });
    }

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
      position={[
        position[0] + floatOffset.x,
        position[1] + floatOffset.y,
        position[2] + floatOffset.z,
      ]}
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
