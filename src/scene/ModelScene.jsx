import { Canvas } from "@react-three/fiber";

import {
    OrbitControls,
    Environment,
    Grid,
    ContactShadows,
} from "@react-three/drei";

import Model from "../components/Model";

function ModelScene({ isRotating, showGrid }) {
    return (
        <Canvas
            shadows
            camera={{
                position: [0, 1.5, 5],
                fov: 38,
            }}
        >
            <color attach="background" args={["#05070a"]} />

            <ambientLight intensity={0.6} />

            <directionalLight
                position={[5, 8, 5]}
                intensity={3}
                castShadow
            />

            <directionalLight
                position={[-5, 3, 2]}
                intensity={1.5}
            />

            <Environment preset="studio" />

            <Model isRotating={isRotating} />

            <ContactShadows
                position={[0, -1.15, 0]}
                opacity={0.45}
                scale={10}
                blur={2.5}
                far={4}
            />

            {showGrid && (
                <Grid
                    args={[20, 20]}
                    cellSize={0.5}
                    cellThickness={0.5}
                    cellColor="#123f4a"
                    sectionSize={2}
                    sectionThickness={1}
                    sectionColor="#0b2430"
                    fadeDistance={20}
                    infiniteGrid
                />
            )}

            <OrbitControls
                enableRotate={false}
                enableZoom={false}
                enablePan={false}
            />
        </Canvas>
    );
}

export default ModelScene;