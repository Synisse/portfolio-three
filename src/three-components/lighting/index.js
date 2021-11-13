import {useHelper} from '@react-three/drei';
import {useRef} from 'react';
import {DirectionalLightHelper, PointLightHelper} from 'three';

export function Lights() {
  const pointLight = useRef();
  const directionalLight = useRef();
  useHelper(pointLight, PointLightHelper);
  useHelper(directionalLight, DirectionalLightHelper);

  return (
    <>
      <ambientLight color={0xdddddd} />
      <pointLight
        ref={pointLight}
        position={[0, 5, 5]}
        castShadow={true}
        receiveShadow={true}
        color={0xf7f0c0}
        intensity={1}
      />
      <directionalLight
        ref={directionalLight}
        castShadow
        position={[10, 10, 2]}
        intensity={1.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <hemisphereLight groundColor={0xa8cdfa} color={0xf7f0c0} />
    </>
  );
}
