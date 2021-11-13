import FiraSansBold from '../../fonts/3d-fonts/Fira Sans_Bold.json';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader';
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry';
import {extend} from '@react-three/fiber';

extend({TextGeometry});

export function TextMesh(aProps) {
    const {position, rotation, text} = aProps;

  const font = new FontLoader().parse(FiraSansBold);

  const textOptions = {
    font,
    size: 0.15,
    height: 0.025,
  };

  return (
    <mesh name="brand" position={position} rotation={rotation}>
      <textGeometry attach="geometry" args={[text, textOptions]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
}
