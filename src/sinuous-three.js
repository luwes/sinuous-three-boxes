/* global THREE */
import { h } from 'sinuous';
import { subscribe, cleanup } from 'sinuous/observable';

// This is not the proper way to abstract the Three.js parent-child model but
// Sinuous has no notion of these API's so I worked with what was available.

export function Scene(props, camera, light, meshes) {
	const scene = new THREE.Scene();
	scene.add(light);

	subscribe(() => {
		scene.remove.apply(scene, scene.children.slice(2));
		meshes().forEach(mesh => scene.add(mesh));
	});

	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setClearColor(0xffffff);

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	onWindowResize();
	window.addEventListener('resize', onWindowResize);

	let frame = requestAnimationFrame(function loop() {
		frame = requestAnimationFrame(loop);
		renderer.render(scene, camera);
	});

	cleanup(() => {
		cancelAnimationFrame(frame);
		window.removeEventListener('resize', onWindowResize);
	});

	return html`<div class=container>
		${renderer.domElement}
	</div>`;
}

export function PerspectiveCamera({ location }) {
	const aspect = window.innerWidth / window.innerHeight;
	const camera = new THREE.PerspectiveCamera(106, aspect, 1, 1000);
	camera.position.set(...location);
	return camera;
}

export function DirectionalLight({ direction }) {
	const light = new THREE.DirectionalLight(0x000000);
	light.position.set(...direction);
	return light;
}

export function Mesh({ geometry, rotation }) {
	const material = new THREE.MeshNormalMaterial();
	const mesh = new THREE.Mesh(geometry, material);
	subscribe(() => {
		mesh.rotation.set(...rotation());
	});
	return mesh;
}

export function box() {
	return new THREE.BoxBufferGeometry(2, 2, 2);
}
