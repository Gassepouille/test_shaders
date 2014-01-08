app.sprite={
	addSprite:function(id){
		var crateTexture = THREE.ImageUtils.loadTexture( 'utils/descriptionProjects/project'+id+'.png' );		
	   	var crateMaterial = new THREE.SpriteMaterial( { map: crateTexture, useScreenCoordinates: false } );
		var sprite2 = new THREE.Sprite( crateMaterial );
		sprite2.position.set( 80, 0, 51.2 );
		sprite2.scale.set( 3, 3, 1.0 ); // imageWidth, imageHeight
		sprite2.name="projectSprite";
		app.settings.scene.add( sprite2 );
	},
	removeSprite:function(){
		var selectedObject = app.settings.scene.getObjectByName("projectSprite");
    	app.settings.scene.remove( selectedObject );
	}
}