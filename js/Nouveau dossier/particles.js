app.particles={
	init:function(){
		// ------------ Glass particles
		for ( var i = 0; i < 500; i ++ ) {
			var col=Math.floor(Math.random()*9).toString();
			var randcol="0x"+col+col+col+col+col+col;
			var colnum=Number(randcol)
			var randopac=0.1+Math.random()*0.1;
			var material = new THREE.MeshPhongMaterial( { color:colnum,opacity:randopac,transparent:true,reflectivity:1,shininess: 100,shading: THREE.FlatShading} );
			var geometry = new THREE.CylinderGeometry( 0, Math.random()*2, Math.random()*2, 3, 4 );
			var mesh = new THREE.Mesh( geometry, material );


			mesh.position.x = 40-Math.random()*60*Math.cos(6*i*Math.PI/180);
			mesh.position.y = (Math.random())*30-3;
			mesh.position.z = 40-Math.random()*60*Math.sin(6*i*Math.PI/180);

			mesh.scale.x = Math.random()*0.7;
			mesh.scale.y = Math.random()*0.7;
			mesh.scale.z = Math.random()*0.7;

			app.settings.scene.add( mesh );
			mesh.mapositionX=mesh.position.x;
			mesh.mapositionY=mesh.position.y;
			mesh.mapositionZ=mesh.position.z;
			app.settings.particlesArray.push( mesh );
		}
		//------------ Black stuff particles
		for ( var k = 0; k <75; k ++ ) {
			var material = new THREE.MeshLambertMaterial( { color:0x111111,reflectivity:1,shading: THREE.FlatShading} );
			var geometry = new THREE.CubeGeometry(Math.random(), Math.random()*2, Math.random()*1.5);
			var mesh = new THREE.Mesh( geometry, material );

			var cube = new THREE.BoxHelper(mesh);
			cube.material.color.setRGB( 0.25, 0.25, 0.25 );
			cube.scale.set( 1, 1, 1 );
			app.settings.scene.add( cube );

			var rdm1=Math.random()*10;
			var rdm2=Math.random()*10;
			if(Math.random()<0.5){
				mesh.position.z = Math.random()*80;
				mesh.position.y = (Math.random())*30-10;
				(Math.random()<0.5) ? mesh.position.x = rdm1+82 : mesh.position.x = rdm1-12 ;
			}else{
				mesh.position.x = Math.random()*80;
				mesh.position.y = (Math.random())*30-10;
				(Math.random()<0.5) ? mesh.position.z = rdm1+82 : mesh.position.z = rdm1-12 ;
			}

			mesh.scale.x = Math.random()*0.5;
			mesh.scale.y = Math.random()*0.6;
			mesh.scale.z = Math.random()*0.4;

			app.settings.scene.add( mesh );
			mesh.mapositionX=mesh.position.x;
			mesh.mapositionY=mesh.position.y;
			mesh.mapositionZ=mesh.position.z;
			app.settings.particlesArray.push( mesh );
		}
	},
	renderParticles:function(){
		var timer = 0.0001 * Date.now();
		for ( var i = 0, il = app.settings.particlesArray.length; i < il; i ++ ) {

			var glass = app.settings.particlesArray[ i ];
			glass.rotation.x+=0.003;
			glass.rotation.y+=0.001;
			glass.position.x = glass.mapositionX+Math.cos(timer-glass.mapositionX);
			glass.position.y = glass.mapositionY+ Math.sin(timer+ glass.mapositionY);
			glass.position.z = glass.mapositionZ+Math.cos(timer-glass.mapositionZ);
		}
	}
}