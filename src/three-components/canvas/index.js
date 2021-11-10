import {Canvas} from '@react-three/fiber';
import {DemoObject} from './demoobject';
import {Stars, Stats} from '@react-three/drei';

export function ThreeCanvas() {
    return (
    <Canvas shadows={true} onCreated={(state) => state.gl.setClearColor('black')}>
        <Stats />
        <Stars />
        <DemoObject></DemoObject>
        <ambientLight color={0xdddddd} />
    </Canvas>
    );
}