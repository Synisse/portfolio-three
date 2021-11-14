import {Box, Cylinder} from '@react-three/drei';
import {Materials} from '../../utils/materials';
import {deg2rad} from '../../utils/helpers';

export function Notepad(aProps) {
  const {position, rotation} = aProps;

  function applyPaperMaterial() {
    return <meshStandardMaterial {...Materials.paperStandard} />;
  }

  function applyPenMaterial() {
    return <meshStandardMaterial {...Materials.penStandard} />;
  }

  return (
    <group position={position} rotation={rotation}>
      <Box castShadow receiveShadow position={[0, 0.2, 0]} args={[0.4, 0.05, 0.5]}>
        {applyPaperMaterial()}
      </Box>
      <Cylinder castShadow receiveShadow position={[0.1, 0.24, 0]} args={[0.0175, 0.0175, 0.35, 8]} rotation={[0, deg2rad(-62), deg2rad(90)]}>
        {applyPenMaterial()}
      </Cylinder>
    </group>
  );
}
