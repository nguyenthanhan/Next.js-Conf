import { useRef, useState, useEffect } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { BoxLetter } from "./BoxLetter";
import { DanglingText } from "./DanglingText";
import { isMobile } from "../utils/deviceDetection";
import * as THREE from "three";

export const Scene = () => {
  const orbitControlsRef = useRef<any>(null);
  const heimerGroupRef = useRef<THREE.Group>(null);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(0.5);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const lastDragVelocity = useRef(0);
  const dragStartTime = useRef(0);
  const dragStartAngle = useRef(0);

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  useEffect(() => {
    const controls = orbitControlsRef.current;
    if (!controls) return;

    const handleStart = () => {
      setIsUserInteracting(true);
      dragStartTime.current = Date.now();
      dragStartAngle.current = controls.getAzimuthalAngle();
    };

    const handleEnd = () => {
      const endTime = Date.now();
      const endAngle = controls.getAzimuthalAngle();
      const timeDiff = (endTime - dragStartTime.current) / 1000; // Convert to seconds
      const angleDiff = endAngle - dragStartAngle.current;

      if (timeDiff > 0) {
        // Calculate velocity (radians per second)
        const velocity = angleDiff / timeDiff;
        lastDragVelocity.current = velocity;

        // Convert velocity to auto-rotate speed (degrees per second)
        // OrbitControls autoRotateSpeed is in degrees per second
        // REVERSE THE DIRECTION by negating the velocity
        const newSpeed = -(velocity * 180) / Math.PI;

        // Set speed to match initial page load speed (0.5)
        // Keep the direction based on drag, but use consistent speed
        const direction = newSpeed >= 0 ? 1 : -1;
        setAutoRotateSpeed(direction * 0.5);
      }

      setIsUserInteracting(false);
    };

    controls.addEventListener("start", handleStart);
    controls.addEventListener("end", handleEnd);

    return () => {
      controls.removeEventListener("start", handleStart);
      controls.removeEventListener("end", handleEnd);
    };
  }, []);

  return (
    <>
      {/* Heimer group */}
      <group ref={heimerGroupRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <BoxLetter
          letter="H"
          position={[-6.25, 0, 0]}
          color="#0070f3"
          enableRandomMovement
          isUserInteracting={isUserInteracting}
        />
        <BoxLetter
          letter="E"
          position={[-3.75, 0, 0]}
          color="#0070f3"
          enableRandomMovement
          isUserInteracting={isUserInteracting}
        />
        <BoxLetter
          letter="I"
          position={[-1.25, 0, 0]}
          color="#0070f3"
          enableRandomMovement
          isUserInteracting={isUserInteracting}
        />
        <BoxLetter
          letter="M"
          position={[1.25, 0, 0]}
          color="#0070f3"
          enableRandomMovement
          isUserInteracting={isUserInteracting}
        />
        <BoxLetter
          letter="E"
          position={[3.75, 0, 0]}
          color="#0070f3"
          enableRandomMovement
          isUserInteracting={isUserInteracting}
        />
        <BoxLetter
          letter="R"
          position={[6.25, 0, 0]}
          color="#0070f3"
          enableRandomMovement
          isUserInteracting={isUserInteracting}
        />
        {/* Dangling Software Developer text centered below HEIMER */}
        <DanglingText
          text="Software Developer"
          position={[0, -3.5, 0]}
          parentRotationRef={heimerGroupRef}
          color="#666666"
          scale={1 / 3}
          isUserInteracting={isUserInteracting}
        />
      </group>
      <OrbitControls
        ref={orbitControlsRef}
        enableZoom
        enablePan
        enableRotate
        autoRotate={!isUserInteracting}
        autoRotateSpeed={autoRotateSpeed}
        target={[0, 0, 0]}
        minDistance={0}
        maxDistance={100}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
      <Environment
        files={
          isMobileDevice
            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download3-7FArHVIJTFszlXm2045mQDPzsZqAyo.jpg"
            : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dither_it_M3_Drone_Shot_equirectangular-jpg_San_Francisco_Big_City_1287677938_12251179%20(1)-NY2qcmpjkyG6rDp1cPGIdX0bHk3hMR.jpg"
        }
        background
      />
    </>
  );
};
