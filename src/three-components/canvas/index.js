import {Canvas, useThree} from '@react-three/fiber';
import {Desk} from '../desk';
import {Lights} from '../lighting';
import {Laptop} from '../laptop';
import {CameraControls} from '../cameracontrols';
import {Stats} from '@react-three/drei';
import {deg2rad} from '../../utils/helpers';

export function ThreeCanvas() {
  // useThree(({camera}) => {
  //     camera.rotation.set(deg2rad(30), 0, 0);
  // });

  return (
    <Canvas
      camera={{position: [0, 2, 5], rotation: [deg2rad(-20), 0, 0]}}
      shadows={true}
      onCreated={(state) => state.gl.setClearColor('green')}
    >
      <Stats />
      <Desk position={[0, 0, 0]} />
      <Laptop position={[0, 0, 0.2]} rotation={[0, deg2rad(-5), 0]}/>
      <Lights />
      <CameraControls />
    </Canvas>
  );
}
