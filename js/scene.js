app.scene={
	init:function(){
		this.setScene();
		this.camera.init();
		this.cube.init();
		this.light.init();

	},
	setScene: function(){
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
        document.body.insertBefore(this.renderer.domElement,document.body.firstChild);
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.scene = new THREE.Scene();

	},
}