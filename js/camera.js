app.scene.camera={
	init:function(){
		this.camera = new THREE.PerspectiveCamera(
            35,             // Field of view
            window.innerWidth/window.innerHeight,      // Aspect ratio
            0.1,            // Near plane
            10000           // Far plane
        );

        this.camera.position.set( 25,25,25 );
        this.camera.lookAt( app.scene.scene.position );

        this.controls = new THREE.OrbitControls( this.camera, app.scene.renderer.domElement );
	}
}