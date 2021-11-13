import * as THREE from 'three';
import {Colors} from './colors';

export const Materials = {
  demoColor: new THREE.MeshPhongMaterial({
    color: Colors.orange,
    emissive: Colors.black,
    specular: Colors.sun,
    shininess: 60,
  }),
  woodShine: new THREE.MeshPhongMaterial({
    color: Colors.wood,
    emissive: Colors.black,
    specular: Colors.sun,
    shininess: 60,
  }),
  metalShine: new THREE.MeshPhongMaterial({
    color: Colors.blackMetal,
    emissive: Colors.black,
    specular: Colors.sun,
    shininess: 60,
  }),
  wood: new THREE.MeshPhongMaterial({
    color: Colors.wood,
  }),
};
