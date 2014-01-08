app.clock={
	init:function(){
		this.setBase();
		this.setCenter();
		var pos={};
		for (var i = 0; i < 12; i++) {
			pos.z=42-Math.round(50*Math.cos(30*i*Math.PI/180));
			pos.x=38-Math.round(50*Math.sin(30*i*Math.PI/180));
			var text=12-parseInt(i);
			if (i<3) pos.x-=2;
			this.setNumber(text,pos);
		};
		// seconds hand, minutes hand, hours hand
		this.setHands()
	},
	setBase:function(){
		var geometry =new THREE.CylinderGeometry( 55,55, 2, 100, 4 );
		var material = new THREE.MeshBasicMaterial( { color:0xffffff} );
		var monmesh = new THREE.Mesh( geometry, material );
		monmesh.position.x = 40;
		monmesh.position.y = -6;
		monmesh.position.z = 40;
		app.settings.scene.add( monmesh );

		var geometry2 = new THREE.TorusGeometry(55, 1, 16, 43);
		var material2 = new THREE.MeshPhongMaterial( { color:0x000000,reflectivity:1,shading: THREE.FlatShading} );
		var monmesh2 = new THREE.Mesh( geometry2, material2 );
		monmesh2.position.x = 40;
		monmesh2.position.y = -5.5;
		monmesh2.position.z = 40;
		monmesh2.rotation.x =-Math.PI/2;
		app.settings.scene.add( monmesh2 );

		for (var i = 0; i < 60; i++) {
			if (i%5!=0) {
				var geometry4 = new THREE.CubeGeometry(3,0.5,0.5);
				var material4 = new THREE.MeshPhongMaterial( { color:0x000000,reflectivity:1,shading: THREE.FlatShading} );
				var monmesh4 = new THREE.Mesh( geometry4, material4 );
				monmesh4.position.x = 40-50*Math.cos(6*i*Math.PI/180)
				monmesh4.position.y = -5;
				monmesh4.position.z = 40-50*Math.sin(6*i*Math.PI/180);
				monmesh4.rotation.y =(360-6*i)*Math.PI/180;
				app.settings.scene.add(monmesh4)

				var geometry5 = new THREE.CubeGeometry(50,0.1,0.1);
				var material5 = new THREE.MeshPhongMaterial( { color:0xeeeeee,reflectivity:1,shading: THREE.FlatShading,opacity:0.5, transparent:true} );
				var monmesh5 = new THREE.Mesh( geometry5, material5 );
				monmesh5.position.x = 40-25*Math.cos(6*i*Math.PI/180)
				monmesh5.position.y = -5;
				monmesh5.position.z = 40-25*Math.sin(6*i*Math.PI/180);
				monmesh5.rotation.y =(360-6*i)*Math.PI/180;
				app.settings.scene.add(monmesh5)


			};

		};
	},
	setNumber:function(texte,pos){
		var materialFront = new THREE.MeshPhongMaterial( { color:0x000000,reflectivity:1,shading: THREE.FlatShading} );
		var materialSide = new THREE.MeshPhongMaterial( { color:0x000000,reflectivity:1,shading: THREE.FlatShading} );
		var materialArray = [ materialFront, materialSide ];
		var textGeom = new THREE.TextGeometry( texte, {
			size: 5, height: 0.2, curveSegments: 4,
			font: "champagne & limousines", weight: "bold", style: "normal", material: 0, extrudeMaterial: 1
		});

		var textMaterial = new THREE.MeshFaceMaterial(materialArray);
		var textMesh = new THREE.Mesh(textGeom, textMaterial );
		
		textMesh.position.set( pos.x, -5, pos.z);
		// convert deg to rad Math.PI/180
		textMesh.rotation.set(-Math.PI/2,0,0);

		app.settings.scene.add(textMesh);
	},
	setHands:function(){
		// --Seconds hand
			app.settings.pivotSec=new THREE.Object3D();
			app.settings.pivotSec.position.x=40;
			app.settings.pivotSec.position.z=40;
			var material = new THREE.MeshPhongMaterial( { color:0x000000,reflectivity:1,shininess: 100,shading: THREE.FlatShading} );
			var geometry = new THREE.CylinderGeometry( 0,1, 50, 3, 4 );
			var mesh = new THREE.Mesh( geometry, material );
			mesh.position.y = -5;
			mesh.position.z =-25;
			mesh.rotation.x =-Math.PI/2;

			var geometry2 = new THREE.TorusGeometry(2, 0.15, 16, 43);
			var material2 = new THREE.MeshPhongMaterial( { color:0x000000,reflectivity:1,shading: THREE.FlatShading} );
			var monmesh2 = new THREE.Mesh( geometry2, material2 );
			monmesh2.position.y = -5;
			monmesh2.position.z = -40;
			monmesh2.rotation.x =-Math.PI/2;

			app.settings.pivotSec.add(mesh)
			app.settings.pivotSec.add(monmesh2)
			app.settings.scene.add( app.settings.pivotSec );

		// --minutes hand
			app.settings.pivotMin=new THREE.Object3D();
			app.settings.pivotMin.position.x=40;
			app.settings.pivotMin.position.z=40;
			var material = new THREE.MeshPhongMaterial( { color:0x000000,reflectivity:1,shininess: 100,shading: THREE.FlatShading} );
			var geometry = new THREE.CylinderGeometry( 0,1.2, 40, 3, 4 );
			var mesh = new THREE.Mesh( geometry, material );
			mesh.position.y = -5;
			mesh.position.z =-20;
			mesh.rotation.x =-Math.PI/2;

			var geometry2 = new THREE.TorusGeometry(2, 0.25, 16, 43);
			var material2 = new THREE.MeshPhongMaterial( { color:0x000000,reflectivity:1,shading: THREE.FlatShading} );
			var monmesh2 = new THREE.Mesh( geometry2, material2 );
			monmesh2.position.y = -5;
			monmesh2.position.z = -25;
			monmesh2.rotation.x =-Math.PI/2;

			app.settings.pivotMin.add(mesh)
			app.settings.pivotMin.add(monmesh2)
			app.settings.scene.add( app.settings.pivotMin );

		// --hours hand
			app.settings.pivotHours=new THREE.Object3D();
			app.settings.pivotHours.position.x=40;
			app.settings.pivotHours.position.z=40;
			var material = new THREE.MeshPhongMaterial( { color:0x000000,reflectivity:1,shininess: 100,shading: THREE.FlatShading} );
			var geometry = new THREE.CylinderGeometry( 0,1.5, 30, 3, 4 );
			var mesh = new THREE.Mesh( geometry, material );
			mesh.position.y = -5;
			mesh.position.z =-15;
			mesh.rotation.x =-Math.PI/2;

			var geometry2 = new THREE.TorusGeometry(2, 0.35, 16, 43);
			var material2 = new THREE.MeshPhongMaterial( { color:0x000000,reflectivity:1,shading: THREE.FlatShading} );
			var monmesh2 = new THREE.Mesh( geometry2, material2 );
			monmesh2.position.y = -5;
			monmesh2.position.z = -20;
			monmesh2.rotation.x =-Math.PI/2;

			app.settings.pivotHours.add(mesh)
			app.settings.pivotHours.add(monmesh2)
			app.settings.scene.add( app.settings.pivotHours );
	},
	setCenter:function(){
		var geometry3 =new THREE.CylinderGeometry( 3,3, 3, 100, 4 );
		var material2 = new THREE.MeshPhongMaterial( { color:0x000000,reflectivity:1,shininess: 100,shading: THREE.FlatShading} );
		var monmesh3 = new THREE.Mesh( geometry3, material2 );
		monmesh3.position.x = 40;
		monmesh3.position.y = -4.5;
		monmesh3.position.z = 40;
		app.settings.scene.add( monmesh3 );

		// ------------------------star

		var starPoints = [];
	
		starPoints.push( new THREE.Vector2 (   0,  5 ) );
		starPoints.push( new THREE.Vector2 (  1,  1 ) );
		starPoints.push( new THREE.Vector2 (  5,  0 ) );
		starPoints.push( new THREE.Vector2 (  1, -1 ) );
		starPoints.push( new THREE.Vector2 (   0, -5 ) );
		starPoints.push( new THREE.Vector2 ( -1, -1 ) );
		starPoints.push( new THREE.Vector2 ( -5,  0 ) );
		starPoints.push( new THREE.Vector2 ( -1,  1 ) );
		
		var starShape = new THREE.Shape( starPoints );

		var extrusionSettings = {
			size: 30, height: 4, curveSegments: 3,
			bevelThickness: 1, bevelSize: 2, bevelEnabled: false,
			material: 0, extrudeMaterial: 1
		};
		
		var starGeometry = new THREE.ExtrudeGeometry( starShape, extrusionSettings );
		
		var materialFront = new THREE.MeshPhongMaterial( { color: 0xffffff } );
		var materialFront2 = new THREE.MeshPhongMaterial( { color: 0x000000} );
		var materialSide = new THREE.MeshPhongMaterial( { color: 0xffffff } );
		var materialSide2 = new THREE.MeshPhongMaterial( { color: 0x000000} );
		var materialArray = [ materialFront, materialSide ];
		var materialArray2 = [ materialFront2, materialSide2 ];
		var starMaterial = new THREE.MeshFaceMaterial(materialArray);
		var starMaterial2 = new THREE.MeshFaceMaterial(materialArray2);
		
		var star = new THREE.Mesh( starGeometry, starMaterial );
		star.position.set(40,-3.5,40);
		star.scale.x=1.5;
		star.scale.y=1.5;
		star.rotation.x=Math.PI/2;

		var star2 = new THREE.Mesh( starGeometry, starMaterial2 );
		star2.scale.x=2.5;
		star2.scale.y=2.5;
		star2.position.z=0.05;
		star.add(star2);
		app.settings.scene.add(star);


	},
	renderClock:function(){
		// ------ Seconds
		var mseconds=new Date().getMilliseconds();
		var seconds=new Date().getSeconds();
		var msdegre=seconds*6+mseconds*0.006;
		app.settings.pivotSec.rotation.y=-msdegre*Math.PI/180;	
		// ---- Minutes
		var minute=new Date().getMinutes();
		var mdegre=minute*6+seconds*0.1+mseconds*0.0001;
		app.settings.pivotMin.rotation.y=-mdegre*Math.PI/180;
		// ---- Hours
		var heure=new Date().getHours();
		var hdegre=heure*30+minute*0.5;
		app.settings.pivotHours.rotation.y=-hdegre*Math.PI/180;
	}
}