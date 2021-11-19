import {Box} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import {Materials} from '../../utils/materials';
import {useRef} from 'react';
import {throttle} from 'lodash';

export function CodingBlocks(aProps) {
  const {position, rotation} = aProps;

  // TODO: clean that stuff up
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();

  const codeBlocks = [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8];

  const renderLoop = throttle(() => {
      let visibleBlocks = codeBlocks.filter((aCodeBlock) => aCodeBlock.current.visible);

      if (codeBlocks.length !== visibleBlocks.length) {
        codeBlocks[visibleBlocks.length].current.visible = true;
      } else {
        codeBlocks.forEach((aCodeBlock) => {
          aCodeBlock.current.visible = false;
        });
      }
  }, 1000);

  useFrame(() => {
    renderLoop();
  });

  function applyGreenMaterial() {
    return <meshStandardMaterial {...Materials.green} />;
  }

  function applyPurpleMaterial() {
    return <meshPhongMaterial {...Materials.purple} />;
  }

  function renderCodeBlocks() {
      return (
        <>
          <Box ref={ref1} position={[0.3, 0.575, 0]} args={[0.3, 0.05, 0.05]} visible={false}>
            {applyGreenMaterial()}
          </Box>
          <Box ref={ref2} position={[0.35, 0.5, 0]} args={[0.2, 0.05, 0.05]} visible={false}>
            {applyPurpleMaterial()}
          </Box>
          <Box ref={ref3} position={[0.25, 0.425, 0]} args={[0.4, 0.05, 0.05]} visible={false}>
            {applyGreenMaterial()}
          </Box>
          <Box ref={ref4} position={[0.4, 0.35, 0]} args={[0.1, 0.05, 0.05]} visible={false}>
            {applyGreenMaterial()}
          </Box>
          <Box ref={ref5} position={[0.325, 0.275, 0]} args={[0.15, 0.05, 0.05]} visible={false}>
            {applyGreenMaterial()}
          </Box>
          <Box ref={ref6} position={[0.125, 0.275, 0]} args={[0.15, 0.05, 0.05]} visible={false}>
            {applyGreenMaterial()}
          </Box>
          <Box ref={ref7} position={[0.295, 0.2, 0]} args={[0.21, 0.05, 0.05]} visible={false}>
            {applyGreenMaterial()}
          </Box>
          <Box ref={ref8} position={[0.4, 0.125, 0]} args={[0.1, 0.05, 0.05]} visible={false}>
            {applyGreenMaterial()}
          </Box>
        </>
      );
  }

  return (
    <group position={position} rotation={rotation} scale={[0.8, 0.8, 0.8]}>
      {renderCodeBlocks()}
      {console.log('rendering')}
    </group>
  );
}
