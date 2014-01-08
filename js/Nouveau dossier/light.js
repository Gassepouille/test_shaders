app.light={
	light2:{},
	init:function(){      
      // directional lighting
		app.settings.pointLight = new THREE.PointLight(0xffffff,1,45);
		app.settings.scene.add(app.settings.pointLight);

		app.settings.hemiLight = new THREE.HemisphereLight( 0x758282, 0x758282, 1 ); 
		app.settings.scene.add( app.settings.hemiLight )

	},
	renderLightPos:function(){
		app.settings.pointLight.position=app.settings.camera.position;
		// this.light2.distance+=1;
		// app.settings.pointLight.position=this.myFocus;
		var minute=new Date().getMinutes();
		var mseconds=new Date().getMilliseconds();
		var seconds=new Date().getSeconds();
		if (minute%2==0) {
			app.settings.hemiLight.intensity=0.4+(0.01*seconds+0.00001*mseconds);
		}else{
			app.settings.hemiLight.intensity=1-(0.01*seconds+0.00001*mseconds);
		}
	}
}