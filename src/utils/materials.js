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
    // emissive: Colors.black,
    // specular: Colors.sun,
    // shininess: 60,
  }),
  darkMetalShine: new THREE.MeshPhongMaterial({
    color: Colors.darkMetal,
    // emissive: Colors.black,
    // specular: Colors.sun,
    // shininess: 60,
  }),
  darkMetalBasic: new THREE.MeshBasicMaterial({
    color: Colors.darkMetal,
    // emissive: Colors.black,
    // specular: Colors.sun,
    // shininess: 60,
  }),
  blackMetalBasic: new THREE.MeshBasicMaterial({
    color: Colors.blackMetal,
  }),
  blackMetalStandard: new THREE.MeshStandardMaterial({
    color: Colors.blackestMetal,
  }),
  paperStandard: new THREE.MeshStandardMaterial({
    color: Colors.paper,
  }),
  penStandard: new THREE.MeshStandardMaterial({
    color: Colors.pen,
    roughness: 0
  }),
  wood: new THREE.MeshPhongMaterial({
    color: Colors.wood,
  }),
  green: new THREE.MeshStandardMaterial({
    color: Colors.green,
  }),
  purple: new THREE.MeshPhongMaterial({
    color: Colors.purple,
  }),
};
