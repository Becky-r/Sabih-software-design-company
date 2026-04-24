"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Float,
    MeshDistortMaterial,
    Sphere,
    PerspectiveCamera,
    Environment,
} from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.2;
            meshRef.current.rotation.y = time * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 100, 100]} scale={2}>
                <MeshDistortMaterial
                    color="#4338ca"
                    speed={3}
                    distort={0.4}
                    radius={1}
                    metalness={0.6}
                    roughness={0.2}
                />
            </Sphere>
        </Float>
    );
}

function ParticleField({ count = 200 }) {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 15;
            p[i * 3 + 1] = (Math.random() - 0.5) * 15;
            p[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }
        return p;
    }, [count]);

    const pointsRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                {/*<bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={points}
                    itemSize={3}
                    args={}
                />*/}
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#818cf8"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />

                <ambientLight intensity={0.5} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={1}
                />
                <pointLight
                    position={[-10, -10, -10]}
                    color="#4338ca"
                    intensity={2}
                />

                <AnimatedSphere />
                <ParticleField />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
