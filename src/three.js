import { BoxBufferGeometry } from 'three/src/geometries/BoxGeometry';
import { DirectionalLight } from 'three/src/lights/DirectionalLight';
import { Mesh } from 'three/src/objects/Mesh';
import { MeshNormalMaterial } from 'three/src/materials/MeshNormalMaterial';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { Scene } from 'three/src/scenes/Scene';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';

// Treeshake only the things we need 🌲
const THREE = {
	DirectionalLight,
  BoxBufferGeometry,
  Mesh,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
};

window.THREE = THREE;
