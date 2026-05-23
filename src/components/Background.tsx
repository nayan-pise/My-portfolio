"use client";
import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleNetwork = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { mouse, viewport } = useThree();

  const particleCount = 200;
  const maxDistance = 1.5;

  // Generate particles
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const vel = [];
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
      vel.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
      });
    }
    return [pos, vel];
  }, [particleCount]);

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;

    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const linePositions = [];
    
    // Convert mouse position to world coordinates roughly
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Update position based on velocity
      positionsArray[i3] += velocities[i].x;
      positionsArray[i3 + 1] += velocities[i].y;

      // Mouse repulsion
      const dx = mouseX - positionsArray[i3];
      const dy = mouseY - positionsArray[i3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 2) {
        positionsArray[i3] -= (dx / dist) * 0.02;
        positionsArray[i3 + 1] -= (dy / dist) * 0.02;
      }

      // Bounds check
      if (positionsArray[i3] < -viewport.width / 2 || positionsArray[i3] > viewport.width / 2) velocities[i].x *= -1;
      if (positionsArray[i3 + 1] < -viewport.height / 2 || positionsArray[i3 + 1] > viewport.height / 2) velocities[i].y *= -1;

      // Check distances for lines
      for (let j = i + 1; j < particleCount; j++) {
        const j3 = j * 3;
        const dx2 = positionsArray[i3] - positionsArray[j3];
        const dy2 = positionsArray[i3 + 1] - positionsArray[j3 + 1];
        const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

        if (dist2 < maxDistance) {
          linePositions.push(
            positionsArray[i3], positionsArray[i3 + 1], positionsArray[i3 + 2],
            positionsArray[j3], positionsArray[j3 + 1], positionsArray[j3 + 2]
          );
        }
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    linesRef.current.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#4fd1c5" transparent opacity={0.6} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#319795" transparent opacity={0.15} />
      </lineSegments>
    </>
  );
};

export default function Background() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ParticleNetwork />
    </Canvas>
  );
}
