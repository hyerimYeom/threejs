import * as THREE from './three.module.js'
import WebGL from './WebGL.js';

// const geometry = new THREE.

if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here

    
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}