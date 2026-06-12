import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';

function Orb() {
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.35, 1]} />
        <MeshDistortMaterial color="#f5b82e" speed={2} distort={0.35} roughness={0.25} metalness={0.75} />
      </mesh>
      <Sphere args={[1.9, 32, 32]} scale={[1, 1, 1]}>
        <meshStandardMaterial color="#7c3aed" transparent opacity={0.08} roughness={0.4} metalness={0.1} />
      </Sphere>
    </Float>
  );
}

export default function ThreeScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 4, 5]} intensity={2.1} color="#fff6d8" />
        <directionalLight position={[-4, -3, 4]} intensity={1.4} color="#b18cff" />
        <Orb />
        <Stars radius={42} depth={22} count={800} factor={2.6} saturation={0} fade speed={0.7} />
      </Canvas>
    </div>
  );
}