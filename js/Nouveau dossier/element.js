app.element = {
	init: function(){
		var couleur=0x111111;
		this.addCube(app.settings.size,couleur);
		this.addPyram(app.settings.size,couleur);
		this.addSphere(app.settings.size2,couleur);
		this.addDonuts(app.settings.size3,app.settings.size4,couleur);
		this.addMainLine();
		// -- Small cubes for projects
		this.addProjects();

		// ---- graph for skills
		this.addGraph();
		// -- Buena vista social Cubes
		for (var i = 0; i < 4; i++) {
			this.addCubeSocial(i);
			this.addCoolStuff();
		};
		
	},
	addSphere: function(size,mycolor){
		var geometry = new THREE.SphereGeometry(size,32, 16);
		var material = new THREE.MeshBasicMaterial( { color:0x333333, wireframe:true} );
		app.settings.meshSphere = new THREE.Mesh( geometry, material );

		
		var geometry2 = new THREE.SphereGeometry(size-0.001,32, 16);
		var material2 = new THREE.MeshLambertMaterial( { color:mycolor,reflectivity:1,shading: THREE.FlatShading} );
		var monmesh2 = new THREE.Mesh( geometry2, material2 );

		app.settings.meshSphere.add( monmesh2 );
		// -------- position de l'objet dans le décors 
		app.settings.meshSphere.position.x = 40;
		app.settings.scene.add( app.settings.meshSphere );
	},
	addCube: function(size,mycolor){
		var geometry2 = new THREE.CubeGeometry(size,size,size);
		var material2 = new THREE.MeshLambertMaterial( { color:mycolor,reflectivity:1,shading: THREE.FlatShading} );
		app.settings.meshCube = new THREE.Mesh( geometry2, material2 );

		var cube = new THREE.BoxHelper(app.settings.meshCube);
		cube.material.color.setRGB( 0.25, 0.25, 0.25 );
		cube.scale.set( 1, 1, 1 );
		app.settings.scene.add( cube );

		// -------- position de l'objet dans le décors 
		app.settings.meshCube.position.x = 80;
		app.settings.meshCube.position.z = 40;
		app.settings.scene.add( app.settings.meshCube );
	},
	addPyram: function(size,mycolor){
		var geometry = new THREE.TetrahedronGeometry(size,0);
		var material = new THREE.MeshBasicMaterial( { color:0x333333, wireframe:true} );
		app.settings.meshPyram = new THREE.Mesh( geometry, material );

		var geometry2 = new THREE.TetrahedronGeometry(size-0.001,0);
		var material2 = new THREE.MeshLambertMaterial( { color:mycolor,reflectivity:1,shading: THREE.FlatShading} );
		var monmesh2= new THREE.Mesh( geometry2, material2 );

		app.settings.meshPyram.add( monmesh2 );

		// -------- position de l'objet dans le décors 
		app.settings.meshPyram.position.x = 40;
		app.settings.meshPyram.position.z = 80;
		app.settings.scene.add(app.settings.meshPyram);
	},
	addDonuts: function(size, size1,mycolor){
		var geometry = new THREE.TorusGeometry(size, size1, 16, 40);
		var material = new THREE.MeshBasicMaterial( { color:0x333333, wireframe:true} );
		app.settings.meshDonuts = new THREE.Mesh( geometry, material );

		var geometry2 = new THREE.TorusGeometry(size-0.001, size1-0.001, 16, 40);
		var material2 = new THREE.MeshLambertMaterial( { color:mycolor,reflectivity:1,shading: THREE.FlatShading} );
		var monmesh2 = new THREE.Mesh( geometry2, material2 );

		app.settings.meshDonuts.add( monmesh2 );
		// -------- position de l'objet dans le décors 
		app.settings.meshDonuts.position.z = 40;
		app.settings.meshDonuts.rotation.y = 15;
		app.settings.scene.add( app.settings.meshDonuts );
	},
	addMainLine:function(){
		var geometry =new THREE.CylinderGeometry( 0.15, 0.05, 14, 20, 4 );
		var material = new THREE.MeshBasicMaterial( { color:0x333333, wireframe:true} );
		var monmesh = new THREE.Mesh( geometry, material );
		monmesh.position.x = 0;
		monmesh.position.y = 0;
		monmesh.position.z = 34.5;
		monmesh.rotation.x = Math.PI*0.5;


		var geometry2 =new THREE.CylinderGeometry( 0.1499, 0.0499, 13.99, 20, 4 );
		var material2 = new THREE.MeshPhongMaterial( { color:0x111111, wireframe:false} );
		var monmesh2 = new THREE.Mesh( geometry2, material2 );

		app.settings.scene.add( monmesh );
		monmesh.add( monmesh2 );
	},
	addProjects:function(){
		var j=1.5;
		for (var i = 0; i < 9; i++) {
			if (i%3==0 && i!=0) j-=1.5;
			var k=44+(i%3)*1.5;
			this.addSmallCubes(80,j,k,i);
		};
	},
	addSmallCubes:function(posX,posY,posZ,i){

		var geometry = new THREE.CubeGeometry( 1, 1, 1 );
		var material = new THREE.MeshLambertMaterial( { color:0x111111, transparent:true, opacity:0.9} );
		var monmesh = new THREE.Mesh( geometry, material );
		monmesh.position.x = posX;
		monmesh.position.y = posY;
		monmesh.position.z = posZ;
		monmesh.rotation.y = 1.15;
		monmesh.name = "project"+i;

		var cube = new THREE.BoxHelper(monmesh);
		cube.material.color.setRGB( 0.25, 0.25, 0.25 );
		cube.material.transparent=true;
		cube.scale.set( 1, 1, 1 );
		monmesh.add(cube);

		var texture = THREE.ImageUtils.loadTexture( 'utils/screenshotsProjects/project'+i+'.png' );
		texture.anisotropy = app.settings.renderer.getMaxAnisotropy();
		var geometry2 = new THREE.CubeGeometry( 0.99, 0.99, 0.99 );
		var material2 = new THREE.MeshBasicMaterial( { color:0xffffff, map: texture} );
		var monmesh2 = new THREE.Mesh( geometry2, material2 );
		monmesh.add(monmesh2);

		
		app.settings.scene.add( monmesh );
		app.settings.arrayProjects.push(monmesh);
	},
	addGraph:function(){
		this.tabArray()  

		this.addBar(34.2,1.8,80,4);
		this.addBar(32.5,1.3,80,3);
		this.addBar(31,1.3,80,3);
		this.addBar(29.5,0.55,80,1.5);
		this.addBar(28.3,0.3,80,1);
	},
	tabArray:function(){
		var material = new THREE.LineBasicMaterial({
	        color: 0x111111
	    });
	    for (var i = 0; i < 5; i++) {
	    	var geometry = new THREE.Geometry();
		    geometry.vertices.push(new THREE.Vector3(34.6, -0.2+i, 80));
		    geometry.vertices.push(new THREE.Vector3(28, -0.2+i, 80));
		    var line = new THREE.Line(geometry, material);
		    app.settings.scene.add( line );
	    };
	},
	addBar:function(posX,posY,posZ,height){

		var geometry = new THREE.CubeGeometry( 0.3, 0.1, 0.3 );
		var material = new THREE.MeshLambertMaterial( { color:0x111111,reflectivity:1,shading: THREE.FlatShading} );
		var monmesh = new THREE.Mesh( geometry, material );
		monmesh.position.x = posX;
		monmesh.position.y = -0.15;
		monmesh.position.z = posZ;

		var cube = new THREE.BoxHelper(monmesh);
		cube.material.color.setRGB( 0.25, 0.25, 0.25 );
		cube.scale.set( 1, 1, 1 );
		monmesh.add( cube );
		app.settings.mybars.push(monmesh);
		app.settings.scene.add( monmesh );
	},
	addCubeSocial:function(i){
		var geometry = new THREE.CubeGeometry( 0.4, 0.4, 0.4 );
		var material = new THREE.MeshLambertMaterial( { color:0x111111, transparent:true, opacity:0.9} );
		var monmesh = new THREE.Mesh( geometry, material );
		monmesh.position.x = 39+i*0.6;
		monmesh.position.y = 11;
		monmesh.position.z = 36-i*0.6;
		monmesh.rotation.y = 0.8;
		monmesh.rotation.z = -0.5;
		monmesh.rotation.x = -0.25;
		monmesh.name = "social"+i;

		var cube = new THREE.BoxHelper(monmesh);
		cube.material.color.setRGB( 0.25, 0.25, 0.25 );
		cube.material.transparent=true;
		cube.scale.set( 1, 1, 1 );
		monmesh.add(cube);

		var texture = THREE.ImageUtils.loadTexture( 'utils/img/media'+i+'.png' );
		texture.anisotropy = app.settings.renderer.getMaxAnisotropy();
		var geometry2 = new THREE.CubeGeometry( 0.39, 0.39, 0.39 );
		var material2 = new THREE.MeshBasicMaterial( { color:0xffffff, map: texture} );
		var monmesh2 = new THREE.Mesh( geometry2, material2 );
		
		monmesh.add(monmesh2);
		app.settings.scene.add( monmesh );
	},
	addCoolStuff:function(){
		var geometry = new THREE.SphereGeometry(0.1,32, 16);
		var material = new THREE.MeshBasicMaterial( { color:0x333333, wireframe:true} );
		var mesh= new THREE.Mesh( geometry, material );

		var geometry2 = new THREE.SphereGeometry(0.1-0.001,32, 16);
		var material2 = new THREE.MeshLambertMaterial( {color:0x111111,reflectivity:1,shading: THREE.FlatShading} );
		var monmesh2 = new THREE.Mesh( geometry2, material2 );

		mesh.add( monmesh2 );
		// -------- position de l'objet dans le décors 
		mesh.position.x = 42;
		mesh.position.y = 11;
		mesh.position.z = 37;
		app.settings.coolPosition.x=42;
		app.settings.coolPosition.y=11;
		app.settings.coolPosition.z=37;
		app.settings.scene.add( mesh );
		app.settings.coolArray.push( mesh );
	}
};