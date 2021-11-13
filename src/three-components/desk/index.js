import {Box} from '@react-three/drei';
import {Materials} from '../../utils/materials';

export function Desk(aProps) {
  const {position} = aProps;

  function applyMetalMaterial() {
    return <meshPhongMaterial {...Materials.metalShine} />;
  }

  function renderLeg(xPosition) {
    return (
      <>
        <Box name="frame-top" castShadow receiveShadow position={[xPosition, -0.1, 0]} args={[0.4, 0.1, 1.4]}>
          {applyMetalMaterial()}
        </Box>

        <Box name="frame-bottom" castShadow receiveShadow position={[xPosition, -1.6, 0]} args={[0.4, 0.1, 1.4]}>
          {applyMetalMaterial()}
        </Box>

        <Box name="pole-bottom" castShadow receiveShadow position={[xPosition, -1.2, 0]} args={[0.3, 0.8, 0.3]}>
          {applyMetalMaterial()}
        </Box>

        <Box name="pole-top" castShadow receiveShadow position={[xPosition, -0.4, 0]} args={[0.2, 0.8, 0.2]}>
          {applyMetalMaterial()}
        </Box>
      </>
    );
  }

  function renderFrame() {
    return (
      <>
        {renderLeg(-2.1)}
        {renderLeg(2.1)}
      </>
    );
  }

  return (
    <group position={position}>
      <Box castShadow receiveShadow position={[0, 0, 0]} args={[5, 0.1, 2]}>
        <meshPhongMaterial {...Materials.wood} />
      </Box>
      {renderFrame()}
    </group>
  );
}
