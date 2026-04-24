"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Float,
    MeshTransmissionMaterial,
    Icosahedron,
    Environment,
    Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

function PointyBlob() {
    const meshRef = useRef<THREE.Mesh>(null);
    const wireframeRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Native pointer tracking for smooth, subtle interaction
        const targetX = (state.pointer.x * Math.PI) / 10;
        const targetY = (state.pointer.y * Math.PI) / 10;

        // Smooth rotation combining mouse position and slow continuous spin
        if (meshRef.current) {
            meshRef.current.rotation.y = THREE.MathUtils.lerp(
                meshRef.current.rotation.y,
                targetX + time * 0.15,
                0.05,
            );
            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                -targetY + time * 0.1,
                0.05,
            );
        }

        // Make the wireframe slightly pulse and follow the main shape
        if (wireframeRef.current) {
            wireframeRef.current.rotation.y = THREE.MathUtils.lerp(
                wireframeRef.current.rotation.y,
                targetX + time * 0.15,
                0.05,
            );
            wireframeRef.current.rotation.x = THREE.MathUtils.lerp(
                wireframeRef.current.rotation.x,
                -targetY + time * 0.1,
                0.05,
            );

            const scale = 1 + Math.sin(time * 2) * 0.03;
            wireframeRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <group>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1}>
                {/* The Main Pointy Glass Shape (Low-poly Icosahedron) */}
                <Icosahedron ref={meshRef} args={[1.8, 0]}>
                    <MeshTransmissionMaterial
                        backside
                        samples={4}
                        thickness={1.5}
                        chromaticAberration={0.6}
                        anisotropy={0.3}
                        distortion={0.2}
                        distortionScale={0.3}
                        temporalDistortion={0.1}
                        color="#818cf8"
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </Icosahedron>

                {/* Inner glowing solid core */}
                <Icosahedron args={[0.8, 0]}>
                    <meshStandardMaterial
                        color="#c084fc"
                        emissive="#c084fc"
                        emissiveIntensity={1.5}
                        wireframe={false}
                    />
                </Icosahedron>

                {/* Outer subtle wireframe shell */}
                <Icosahedron ref={wireframeRef} args={[2.0, 0]}>
                    <meshStandardMaterial
                        color="#4f46e5"
                        wireframe={true}
                        transparent
                        opacity={0.15}
                    />
                </Icosahedron>
            </Float>
        </group>
    );
}

export default function LoginScene3D() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
            <Canvas
                camera={{ position: [0, 0, 7], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true }}
            >
                {/* Elegant, calm lighting */}
                <ambientLight intensity={0.4} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.2}
                    penumbra={1}
                    intensity={2}
                    color="#ffffff"
                />
                <directionalLight
                    position={[-10, -10, -5]}
                    intensity={1.5}
                    color="#6366f1"
                />
                <pointLight
                    position={[0, -5, 5]}
                    intensity={1}
                    color="#a855f7"
                />

                <PointyBlob />

                {/* Subtle ambient particles */}
                <Sparkles
                    count={100}
                    scale={12}
                    size={1.5}
                    speed={0.2}
                    opacity={0.3}
                    color="#818cf8"
                />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
