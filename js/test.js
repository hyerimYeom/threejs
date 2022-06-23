import * as THREE from './three.module.js'
import WebGL from './WebGL.js';

// const geometry = new THREE.

if ( WebGL.isWebGLAvailable() ) {
	// Initiate function or other initializations here

    //1. Set up the renderer, scene and camera
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement );

    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();


    //2. Define a material that - nothing happened
    const material = new THREE.LineBasicMaterial ({color : 0xffffff});

    //3. After material we will need a geometry with some vertices
    const points = [];
    // points.push(new THREE.Vector3( -10, 0, 0));
    points.push(new THREE.Vector3( 0, 10, 0));
    points.push(new THREE.Vector3( 10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // 4. Now that we have points for two lines and a material, we can put them together to form a line.
    const line = new THREE.Line( geometry, material );

    // 5. All that's left is to add it to the scene and call render.
    scene.add( line );
    renderer.render(scene, camera);

	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}