var app = {
	init: function(){
		this.getSizeScene();
		this.setScene();
		this.linkListeners();
		app.camera.init();
		app.light.init();
		app.element.init();
		app.particles.init();

		app.clock.init();

		app.font.init();
		app.animation.initTimeline();
		app.curves.init();
		this.addSkyBox();
		// Engine
		app.engine.init();
		//  changer le canvas au resize de la fenêtre
		app.resizechanges();
		app.setSizeCam();
        $( window ).resize(function() {
		  app.resizechanges();
		  app.setSizeCam();
		});
	},
	initMickey:function(){
		app.mouse.init();
		app.settings.start=true;
	},
	setScene: function(){
		app.settings.renderer = new THREE.WebGLRenderer({ antialias: true });
		app.settings.renderer.physicallyBasedShading = true;
        this.setSizeScene();
        document.body.insertBefore(app.settings.renderer.domElement,document.body.firstChild);
	},
	getSizeScene: function(){
		app.settings.sceneWidth=window.innerWidth;
		app.settings.sceneHeight=window.innerHeight;
	},
	setSizeScene:function(){
		app.settings.renderer.setSize( app.settings.sceneWidth, app.settings.sceneHeight );
	},
	setSizeCam:function(){
		var ratio=app.settings.sceneWidth / app.settings.sceneHeight;
		app.settings.camera.aspect	= ratio;

		if (ratio<1.98) {
			app.settings.camera.fov=35+38*(1.989-ratio);
		}else{
			app.settings.camera.fov=35
		}
		
		app.settings.camera.updateProjectionMatrix();
	},
	resizechanges:function(){
		this.getSizeScene();
		this.setSizeScene();
	},
	addSkyBox:function(){
		var geometry = new THREE.SphereGeometry(60,32, 16);
		// var material = new THREE.MeshPhongMaterial( { color:0x758282,reflectivity:1,side: THREE.BackSide} );
		var material = new THREE.MeshPhongMaterial( { color:0xffffff,reflectivity:1,side: THREE.BackSide} );
		var skybox = new THREE.Mesh( geometry, material );
		skybox.position.x = 40;
		skybox.position.z = 40;
		app.settings.scene.add( skybox );
	},
	linkListeners:function(){
		$("#webgl-menu li").on("click",function(){
			$("#webgl-menu li").children().css("border-bottom","none")
			var mybool=false;
			// disable click during animation
			for (var i = 0; i < app.settings.arrayGoto.length; i++) {
				if(app.settings.arrayGoto[i]) mybool=true;
			};
			// if click and static position
			if (!app.settings.arrayHere[this.value] && !mybool) {
				app.settings.arrayGoto[this.value]=true;
			};
			if (app.settings.arrayHere[this.value]) {
				$(this).children().css("border-bottom","3px solid #687c80")
			};
		})
		$("#webgl-menu li").on("mouseover",function(e){
			var mybool=false;
			// disable hover during animation
			for (var i = 0; i < app.settings.arrayGoto.length; i++) {
				if(app.settings.arrayGoto[i]) mybool=true;
			};
			// if click and static position
			if (!app.settings.arrayHere[this.value] && !mybool) {
				$(this).children().css("border-bottom","3px solid #687c80")
			};
		});
		$("#webgl-menu li").on("mouseout",function(e){
			if (!app.settings.arrayHere[this.value])$(this).children().css("border-bottom","none")
		});
	}
};