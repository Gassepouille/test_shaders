app.animation={
	// animation of the skills and timeline scenes
	initTimeline:function(){
		var contenu=app.settings.contenuTimeline;
		for (var i =  0; i <contenu.length; i++) {
			this.addTexttimeline(contenu[i].texte,app.font.mesSpec,contenu[i].pos,contenu[i].rot,contenu[i].size);
		};
	},
	skills:function(){
		for (var i = 0; i < app.settings.mybars.length; i++) {
			app.settings.mybars[i].scale.y+=0.2;
			if (app.settings.mybars[0].scale.y>40)app.settings.mybars[0].scale.y=40;
			if (app.settings.mybars[1].scale.y>30)app.settings.mybars[1].scale.y=30;
			if (app.settings.mybars[2].scale.y>30)app.settings.mybars[2].scale.y=30;
			if (app.settings.mybars[3].scale.y>15)app.settings.mybars[3].scale.y=15;
			if (app.settings.mybars[4].scale.y>10)app.settings.mybars[4].scale.y=10;
			app.settings.mybars[i].position.y=app.settings.mybars[i].geometry.height*app.settings.mybars[i].scale.y*0.5-0.2;
			
		};
	},
	addTexttimeline:function(texte,spec,pos,rot,size){
		var materialFront = new THREE.MeshLambertMaterial( { color:spec.color,reflectivity:1,shading: THREE.FlatShading,transparent:true,opacity:0} );
		var materialSide = new THREE.MeshLambertMaterial( { color:spec.colorSide,reflectivity:1,shading: THREE.FlatShading,transparent:true,opacity:0} );
		var materialArray = [ materialFront, materialSide ];
		var textGeom = new THREE.TextGeometry( texte, {
			size: size, height: spec.height, curveSegments: spec.curveSegments,
			font: spec.font, weight: spec.weight, style: spec.style, bevelThickness: spec.bevelThickness, bevelSize: spec.bevelSize, bevelEnabled: spec.bevelEnabled,
			material: 0, extrudeMaterial: 1
		});

		var textMaterial = new THREE.MeshFaceMaterial(materialArray);
		var textMesh = new THREE.Mesh(textGeom, textMaterial );
		
		textMesh.position.set( pos.x, pos.y, 41);
		textMesh.rotation.set(rot.x,0,rot.z);
		textMesh.myposZ=pos.z;
		textMesh.myrotY=rot.y;
		app.settings.ArrayTxtTl.push(textMesh);
		app.settings.scene.add(textMesh);

	},
	timeline:function(){
		for (var i = 0; i < app.settings.ArrayTxtTl.length; i++) {
			if (app.settings.ArrayTxtTl[i].position.z>app.settings.ArrayTxtTl[i].myposZ) app.settings.ArrayTxtTl[i].position.z-=0.05;
			if (app.settings.ArrayTxtTl[i].material.materials[0].opacity<1) app.settings.ArrayTxtTl[i].material.materials[0].opacity+=0.004;
			if (app.settings.ArrayTxtTl[i].material.materials[1].opacity<1) app.settings.ArrayTxtTl[i].material.materials[1].opacity+=0.004;
			if (app.settings.ArrayTxtTl[i].rotation.y<app.settings.ArrayTxtTl[i].myrotY) app.settings.ArrayTxtTl[i].rotation.y+=0.005;
		};
	}
}