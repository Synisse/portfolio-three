import {Box} from '@react-three/drei';
import {deg2rad} from '../../utils/helpers';
import {Materials} from '../../utils/materials';
import {Headphones} from './headphones';
import {Notepad} from './notepad';
import {Mug} from './mug';

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
      <Headphones position={[-1,0.142,0]} rotation={[deg2rad(-106), deg2rad(0), deg2rad(-20)]}/>
      <Notepad position={[0.9,-0.125,0]} rotation={[0,deg2rad(-25),0]}/>
      <Mug position={[1.3,0.16,0.4]} rotation={[0, deg2rad(-60),0]} scale={[0.9, 0.9, 0.9]}/>
      {renderFrame()}
    </group>
  );
}
