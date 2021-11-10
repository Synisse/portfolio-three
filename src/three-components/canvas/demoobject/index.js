import {Sphere} from '@react-three/drei';
import {Materials} from '../../../utils/materials';

export function DemoObject() {
    return (
        <Sphere castShadow receiveShadow position={[0,0,0]} args={[1, 32, 16]}>
            <meshPhongMaterial {...Materials.demoColor} />
        </Sphere>
    );
}