import {Box, Cylinder} from '@react-three/drei';
import {Materials} from '../../utils/materials';
import {deg2rad} from '../../utils/helpers';
import {useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {Direction} from '../../enums/direction';
import {TextMesh} from '../text';
import {CodingBlocks} from './codingblocks';

export function Laptop(aProps) {
  const {position, rotation} = aProps;

  const MAX_ROTATION = deg2rad(110);
  const MIN_ROTATION = deg2rad(0);
  let currentRotation = 0;
  let animationRunning = false;
  let direction = Direction.OPENING;

  const screenGroup = useRef();

  useFrame(() => {
    if (animationRunning) {
      if (direction === Direction.CLOSING) {
        if (currentRotation < MAX_ROTATION) {
          currentRotation += 0.02;
          screenGroup.current.rotation.x = currentRotation;
        } else {
          animationRunning = false;
        }
      }

      if (direction === Direction.OPENING) {
        if (currentRotation > MIN_ROTATION) {
          currentRotation -= 0.02;
          screenGroup.current.rotation.x = currentRotation;
        } else {
          animationRunning = false;
        }
      }
    }
  });

  document.addEventListener('click', logKey);

  function logKey(e) {
    console.log('pressed');
    if (direction === Direction.OPENING) {
      direction = Direction.CLOSING;
    } else {
      direction = Direction.OPENING;
    }

    animationRunning = true;
  }

  function applyMetalMaterial() {
    return <meshPhongMaterial {...Materials.metalShine} />;
  }

  function renderBottom() {
    return (
      <>
        <Box name="bottom-frame" castShadow receiveShadow position={[0, 0.075, 0]} args={[0.8, 0.05, 0.5]}>
          {applyMetalMaterial()}
        </Box>
        <Box name="touchpad" castShadow receiveShadow position={[0, 0.085, 0.15]} args={[0.25, 0.05, 0.15]}>
          <meshPhongMaterial {...Materials.darkMetalShine} />
        </Box>
        <Box name="keyboard" castShadow receiveShadow position={[0, 0.085, -0.08]} args={[0.6, 0.05, 0.24]}>
          <meshPhongMaterial {...Materials.darkMetalShine} />
        </Box>
      </>
    );
  }

  function renderScreen() {
    return (
      <group position={[0, 0.1, -0.26]} ref={screenGroup} rotation={[deg2rad(0), 0, 0]}>
        {/* <axesHelper args={[10]} /> */}
        <Box
          name="screen-frame"
          castShadow
          receiveShadow
          position={[0, 0.225, -0.11]}
          args={[0.8, 0.05, 0.5]}
          rotation={[deg2rad(70), 0, 0]}
        >
          {applyMetalMaterial()}
        </Box>

        <Box
          name="screen"
          position={[0, 0.23, -0.105]}
          args={[0.75, 0.05, 0.45]}
          rotation={[deg2rad(70), 0, 0]}
        >
          <meshBasicMaterial {...Materials.blackMetalBasic} />
        </Box>

        <Cylinder
          name="bracket"
          castShadow
          receiveShadow
          position={[0, 0, 0]}
          args={[0.02, 0.02, 0.5, 8]}
          rotation={[0, 0, deg2rad(90)]}
        >
          {applyMetalMaterial()}
        </Cylinder>

        <TextMesh position={[0.05, 0.18, -0.1]} rotation={[deg2rad(-20), deg2rad(180), deg2rad(0)]} text={'S'}/>
        <CodingBlocks position={[0.025, -0.03, 0]} rotation={[deg2rad(-20), deg2rad(180), deg2rad(0)]} />
      </group>
    );
  }

  return (
    <group position={position} rotation={rotation}>
      {renderBottom()}
      {renderScreen()}
    </group>
  );
}
