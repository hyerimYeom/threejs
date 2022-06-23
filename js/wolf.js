import * as THREE from './three.module.js'
import { GLTFLoader } from './GLTFLoader.js';
// // Instantiate a loader
// const loader = new GLTFLoader();

// // Optional: Provide a DRACOLoader instance to decode compressed mesh data
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
// loader.setDRACOLoader( dracoLoader );

// // Load a glTF resource
// loader.load(
// 	// resource URL
// 	'models/gltf/duck/duck.gltf',
// 	// called when the resource is loaded
// 	function ( gltf ) {

// 		scene.add( gltf.scene );

// 		gltf.animations; // Array<THREE.AnimationClip>
// 		gltf.scene; // THREE.Group
// 		gltf.scenes; // Array<THREE.Group>
// 		gltf.cameras; // Array<THREE.Camera>
// 		gltf.asset; // Object

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );


const loader = new GLTFLoader();

loader.load( '../img/wolf.gltf', function ( gltf ) {
	const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );

    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();
	
	scene.add( gltf.scene );
	renderer.render(scene, camera);

	animate();


}, undefined, function ( error ) {

	console.error( error );

} );