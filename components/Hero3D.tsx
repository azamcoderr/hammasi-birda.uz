"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function HeroShapes() {
  return (
    <Float speed={1.2} rotationIntensity={1} floatIntensity={1.4}>
      <mesh position={[-1.5, 0.6, 0]}>
        <torusKnotGeometry args={[0.55, 0.2, 120, 16]} />
        <meshStandardMaterial color="#7c3aed" roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[1.3, -0.4, -0.6]}>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color="#06b6d4" roughness={0.25} metalness={0.6} />
      </mesh>
      <mesh position={[0, -1, 0.6]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#e879f9" roughness={0.3} metalness={0.5} />
      </mesh>
    </Float>
  );
}

export function Hero3D() {
  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-3xl border border-panel-border bg-slate-950/40 shadow-glass">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <color attach="background" args={["#05070f"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 3, 2]} intensity={1} />
        <HeroShapes />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/70" />
    </div>
  );
}
