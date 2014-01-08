app.scene.light={
	init:function(){      
      // directional lighting
		this.pointLight = new THREE.PointLight(0xffffff,1,20);

		this.pointLight.position={x:-5,y:5,z:5}

		app.scene.scene.add(this.pointLight);
	}
}