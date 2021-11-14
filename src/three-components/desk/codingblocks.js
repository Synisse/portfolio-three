import {Box} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
import {Materials} from '../../utils/materials';
import {useState} from 'react';

export function CodingBlocks(aProps) {
  const {position, rotation} = aProps;

  const DELTA_THRESHOLD = 0.003;
  let currentDelta = 0;

  const [codeBlocks, setCodeBlocks] = useState([
    {
      position: [0.3, 0.575, 0],
      size: [0.3, 0.05, 0.05],
      visible: false,
      materialCallback: applyGreenMaterial,
    },
    {
      position: [0.35, 0.5, 0],
      size: [0.2, 0.05, 0.05],
      visible: false,
      materialCallback: applyPurpleMaterial,
    },
    {
      position: [0.25, 0.425, 0],
      size: [0.4, 0.05, 0.05],
      visible: false,
      materialCallback: applyGreenMaterial,
    },
    {
      position: [0.4, 0.35, 0],
      size: [0.1, 0.05, 0.05],
      visible: false,
      materialCallback: applyGreenMaterial,
    },
    {
      position: [0.325, 0.275, 0],
      size: [0.15, 0.05, 0.05],
      visible: false,
      materialCallback: applyGreenMaterial,
    },
    {
      position: [0.125, 0.275, 0],
      size: [0.15, 0.05, 0.05],
      visible: false,
      materialCallback: applyGreenMaterial,
    },
    {
      position: [0.295, 0.2, 0],
      size: [0.21, 0.05, 0.05],
      visible: false,
      materialCallback: applyGreenMaterial,
    },
    {
      position: [0.295, 0.2, 0],
      size: [0.21, 0.05, 0.05],
      visible: false,
      materialCallback: applyGreenMaterial,
    },
    {
      position: [0.4, 0.125, 0],
      size: [0.1, 0.05, 0.05],
      visible: false,
      materialCallback: applyGreenMaterial,
    },
  ]);

  useFrame(({clock}) => {
    currentDelta += clock.getDelta();

    if (currentDelta > DELTA_THRESHOLD) {
      currentDelta = 0;
      let visibleBlocks = codeBlocks.filter((aCodeBlock) => aCodeBlock.visible);

      let copyBlocks = codeBlocks.slice();

      if (codeBlocks.length !== visibleBlocks.length) {
        copyBlocks[visibleBlocks.length].visible = true;
        setCodeBlocks(copyBlocks);
      } else {
        copyBlocks.forEach((aCodeBlock) => {
          aCodeBlock.visible = false;
        });
      }
    }
  });

  function applyGreenMaterial() {
    return <meshStandardMaterial {...Materials.green} />;
  }

  function applyPurpleMaterial() {
    return <meshPhongMaterial {...Materials.purple} />;
  }

  function renderCodeBlocks() {
    return codeBlocks.map((aCodeBlock) => {
      return (
        <Box name="seventh-line-first-block" position={aCodeBlock.position} args={aCodeBlock.size} visible={aCodeBlock.visible}>
          {aCodeBlock.materialCallback()}
        </Box>
      );
    });
  }

  return (
    <group position={position} rotation={rotation} scale={[0.8, 0.8, 0.8]}>
      {renderCodeBlocks()}
      {console.log('rendering')}
    </group>
  );
}
