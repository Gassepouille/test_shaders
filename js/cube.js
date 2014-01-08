app.scene.cube={
	init:function(){
		this.addCube1();
		this.addCube2();
	},
	addCube1:function(){
		var vShader = $("#vertexShader");
		var fShader = $("#fragmentShader");

		var geometry = new THREE.CubeGeometry(6,6,6);


		this.uniforms = {
		  amplitude: { type: 'f', value: 0 }
		};
		this.attributes = {
		  displacement: {type: 'v3', value: [] }
		};
	  	var verts = geometry.vertices.length;

		var values = this.attributes.displacement.value;

		for (var v = 0; v < verts; v++) {
		  var vec = geometry.vertices[v];
		  values[v]= new THREE.Vector3( -vec.x, Math.random()*vec.y,Math.random()*vec.z );
		}
		var shaderMaterial =
		  new THREE.ShaderMaterial({
		  	uniforms:       this.uniforms,
      		attributes:     this.attributes,
		    vertexShader:   vShader.text(),
		    fragmentShader: fShader.text()
		  });


  		this.meshCube1 = new THREE.Mesh( geometry, shaderMaterial );
		// -------- position de l'objet dans le décors 
		this.meshCube1.position.x = -5;
		this.meshCube1.position.z = 0;
		this.meshCube1.position.y = 0;
		app.scene.scene.add( this.meshCube1 );
	},
	addCube2:function(){
		var vShader = $("#vertexShader");
		var fShader = $("#fragmentShader");
		var geometry = new THREE.CubeGeometry(4,4,4);

		this.uniforms2 = {
		  amplitude: { type: 'f', value: 0 }
		};
		this.attributes2 = {
		  displacement: {type: 'v3', value: [] }
		};
	  	var verts = geometry.vertices.length;

		var values = this.attributes2.displacement.value;

		for (var v = 0; v < verts; v++) {
		  var vec = geometry.vertices[v];
		  if (v<2 || (v>3 && v<6)) {
			values[v]= new THREE.Vector3( vec.x+vec.x*Math.cos(Math.PI*0.5)+vec.z*Math.sin(Math.PI*0.5), 0,vec.z-vec.x*Math.sin(Math.PI*0.5)+vec.z*Math.cos(Math.PI*0.5) );
		  }else{
		  	values[v]= new THREE.Vector3( vec.x+vec.x*Math.cos(-Math.PI*0.5)+vec.z*Math.sin(-Math.PI*0.5), 0,vec.z-vec.x*Math.sin(-Math.PI*0.5)+vec.z*Math.cos(-Math.PI*0.5) );
		  }
		}
		var shaderMaterial =
		  new THREE.ShaderMaterial({
		  	uniforms:       this.uniforms2,
      		attributes:     this.attributes2,
		    vertexShader:   vShader.text(),
		    fragmentShader: fShader.text()
		  });


		this.meshCube2 = new THREE.Mesh( geometry, shaderMaterial );

		// -------- position de l'objet dans le décors 
		this.meshCube2.position.x = 5;
		this.meshCube2.position.z = 0;
		this.meshCube2.position.y = 0;
		app.scene.scene.add( this.meshCube2 );
	}
}