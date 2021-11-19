import {Canvas} from '@react-three/fiber';
import {Desk} from '../desk';
import {Lights} from '../lighting';
import {Laptop} from '../desk/laptop';
import {CameraControls} from '../cameracontrols';
import {Stats} from '@react-three/drei';
import {deg2rad} from '../../utils/helpers';
import {useYScroll} from '../../utils/useYScroll';
import { a } from '@react-spring/three'

export function ThreeCanvas() {
  const [y] = useYScroll([0, 800], {domTarget: window});

  return (
    <>
      <Canvas
        camera={{position: [0, 3, 0], rotation: [deg2rad(-90), 0, 0]}}
        shadows={true}
        onCreated={(state) => state.gl.setClearColor('white')}
      >
        <Stats />
        {/* <a.group rotation-x={deg2rad(y.to((y) => (y / 50) * 25))}> */}
        <a.group rotation-x={y.to((y) => (y / 750) * -1)}>
        {/* <a.group rotation-x={deg2rad(y.to((y) => (y / 1) * 1))}> */}
            <Desk position={[0, 0, 0]} />
            <Laptop position={[0, 0, 0.2]} rotation={[0, deg2rad(-5), 0]} />
            <Lights />
        </a.group>
        {/* <CameraControls /> */}
      </Canvas>
    </>
  );
}
