import * as THREE from 'three';
import {Colors} from './colors';

export const Materials = {
  demoColor: new THREE.MeshPhongMaterial({
    color: Colors.orange,
    emissive: Colors.black,
    specular: Colors.sun,
    shininess: 60,
  })
};