import {Torus, Cylinder, Box} from '@react-three/drei';
import {Materials} from '../../utils/materials';
import {deg2rad} from '../../utils/helpers';

export function Mug(aProps) {
  const {position, rotation, scale} = aProps;

  function applyBlackMaterial() {
    return <meshStandardMaterial {...Materials.paperStandard} />;
  }

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <group position={[0,0,0]} rotation={[0,0,0]}>
        <Box castShadow receiveShadow position={[0, 0, 0]} args={[0.1, 0.25, 0.02]}>
          {applyBlackMaterial()}
        </Box>
        <Box castShadow receiveShadow position={[0.0785, 0, -0.0324]} rotation={[0, deg2rad(45), 0]} args={[0.1, 0.25, 0.02]}>
          {applyBlackMaterial()}
        </Box>
        <Box castShadow receiveShadow position={[-0.0785, 0, -0.0324]} rotation={[0, deg2rad(-45), 0]} args={[0.1, 0.25, 0.02]}>
          {applyBlackMaterial()}
        </Box>
        <Box castShadow receiveShadow position={[-0.1109, 0, -0.111]} rotation={[0, deg2rad(-90), 0]} args={[0.1, 0.25, 0.02]}>
          {applyBlackMaterial()}
        </Box>
      </group>
      <group position={[0,0,-0.2218]} rotation={[0,deg2rad(-180),0]}>
        <Box castShadow receiveShadow position={[0, 0, 0]} args={[0.1, 0.25, 0.02]}>
          {applyBlackMaterial()}
        </Box>
        <Box castShadow receiveShadow position={[0.0785, 0, -0.0324]} rotation={[0, deg2rad(45), 0]} args={[0.1, 0.25, 0.02]}>
          {applyBlackMaterial()}
        </Box>
        <Box castShadow receiveShadow position={[-0.0785, 0, -0.0324]} rotation={[0, deg2rad(-45), 0]} args={[0.1, 0.25, 0.02]}>
          {applyBlackMaterial()}
        </Box>
        <Box castShadow receiveShadow position={[-0.1109, 0, -0.111]} rotation={[0, deg2rad(-90), 0]} args={[0.1, 0.25, 0.02]}>
          {applyBlackMaterial()}
        </Box>
      </group>
      <Cylinder castShadow receiveShadow position={[0, -0.112, -0.1]} rotation={[0,deg2rad(-22.5),0]} args={[0.12, 0.12, 0.025, 8]}>
        {applyBlackMaterial()}
      </Cylinder>
      <Torus castShadow receiveShadow position={[0.13, 0.01, -0.115]} rotation={[0, 0, deg2rad(-105)]} args={[0.06, 0.01, 8, 8, deg2rad(210)]}>
        {applyBlackMaterial()}
      </Torus>
    </group>
  );
}
