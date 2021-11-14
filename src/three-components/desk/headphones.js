import {Box, Torus, Cylinder} from '@react-three/drei';
import {Materials} from '../../utils/materials';
import {deg2rad} from '../../utils/helpers';

export function Headphones(aProps) {
  const {position, rotation} = aProps;

  function applyBlackMaterial() {
    return <meshStandardMaterial {...Materials.blackMetalStandard} />;
  }

  return (
    <group position={position} rotation={rotation}>
      <Torus castShadow receiveShadow position={[0, 0, 0]} args={[0.2, 0.03, 8, 8, deg2rad(180)]}>
        {applyBlackMaterial()}
      </Torus>
      <Cylinder castShadow receiveShadow position={[-0.2, -0.1, 0]} args={[0.125, 0.125, 0.1, 8]} rotation={[0, 0, deg2rad(90)]}>
        {applyBlackMaterial()}
      </Cylinder>
      <Torus castShadow receiveShadow position={[-0.14, -0.1, 0]} args={[0.1, 0.02, 8, 8]} rotation={[0, deg2rad(90), 0]}>
        {applyBlackMaterial()}
      </Torus>
      <Cylinder castShadow receiveShadow position={[0.2, -0.1, 0]} args={[0.125, 0.125, 0.1, 8]} rotation={[0, 0, deg2rad(90)]}>
        {applyBlackMaterial()}
      </Cylinder>
      <Torus castShadow receiveShadow position={[0.14, -0.1, 0]} args={[0.1, 0.02, 8, 8]} rotation={[0, deg2rad(90), 0]}>
        {applyBlackMaterial()}
      </Torus>
    </group>
  );
}
