app.font={
	mesSpec:{
		height : 0.05,
		curveSegments : 4,
		font : "champagne & limousines", 
		weight : "bold", 
		style : "normal",
		bevelThickness: 0,
		bevelSize: 0.02,
		bevelEnabled : false,
		color:0x111111,
		// color:0xffffff,
		colorSide:0x111111,
	},
	init: function(){
		var contenu=app.settings.contenu;
		for (var i =  0; i <contenu.length; i++) {
			this.addText(contenu[i].texte,this.mesSpec,contenu[i].pos,contenu[i].rot,contenu[i].size);
		};
		
	},
	addText:function(texte,spec,pos,rot,size){
		var materialFront = new THREE.MeshLambertMaterial( { color:spec.color,reflectivity:1,shading: THREE.FlatShading} );
		var materialSide = new THREE.MeshLambertMaterial( { color:spec.colorSide,reflectivity:1,shading: THREE.FlatShading} );



		var materialArray = [ materialFront, materialSide ];
		var textGeom = new THREE.TextGeometry( texte, {
			size: size, height: spec.height, curveSegments: spec.curveSegments,
			font: spec.font, weight: spec.weight, style: spec.style, bevelThickness: spec.bevelThickness, bevelSize: spec.bevelSize, bevelEnabled: spec.bevelEnabled,
			material: 0, extrudeMaterial: 1
		});

		var textMaterial = new THREE.MeshFaceMaterial(materialArray);
		var textMesh = new THREE.Mesh(textGeom, textMaterial );
		
		textMesh.position.set( pos.x, pos.y, pos.z);
		textMesh.rotation.set(rot.x,rot.y,rot.z);
		app.settings.scene.add(textMesh);
	}
}	