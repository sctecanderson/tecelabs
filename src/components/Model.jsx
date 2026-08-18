import { useFrame, useThree } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function Model({ isRotating }) {
  const { scene } = useGLTF(
  `${import.meta.env.BASE_URL}models/baseRolo.glb`
);

  const modelRef = useRef();
  const { size } = useThree();

  const isMobile = size.width < 700;
  const isTablet = size.width < 1100;

  const scale = isMobile
    ? 1.7
    : isTablet
      ? 2.2
      : 2.8;

  const positionX = isMobile
    ? 0.8
    : isTablet
      ? 1.2
      : 1.6;

  useFrame((_, delta) => {
    if (isRotating && modelRef.current) {
      modelRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <group
      ref={modelRef}
      position={[positionX, -0.1, 0]}
    >
      <Center>
        <primitive
          object={scene}
          scale={scale}
        />
      </Center>
    </group>
  );
}

export default Model;