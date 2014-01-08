app.camera = {
	init: function(){

        app.settings.scene = new THREE.Scene();

        app.settings.camera = new THREE.PerspectiveCamera(
            35,             // Field of view
            app.settings.sceneWidth / app.settings.sceneHeight,      // Aspect ratio
            0.1,            // Near plane
            10000           // Far plane
        );

        app.settings.camera.position.set( app.settings.campos.cube.x, app.settings.campos.cube.y, app.settings.campos.cube.z );
        // app.settings.camera.position.set( 40, 2, 40);
        app.settings.arrayHere[1]=true;
        $("#webgl-menu li:nth-child(4)").children().css("border-bottom","4px solid #687c80")
	},
    camRenderView:function(){
        var vecteur = new THREE.Vector3(app.engine.myFocus.x,app.engine.myFocus.y,app.engine.myFocus.z);
        // var vecteur = new THREE.Vector3(39,10,39);
        app.settings.camera.lookAt(vecteur);
    }
};