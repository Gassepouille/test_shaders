app.engine = {
	ici:0,
	labas:-1,
	myFocus:{},
	init: function(){
		this.myFocus.x=app.settings.camfoc.cube.x;
		this.myFocus.y=app.settings.camfoc.cube.y;
		this.myFocus.z=app.settings.camfoc.cube.z;
		 window.requestAnimFrame = (function(){
	      return  window.requestAnimationFrame       || 
	              window.webkitRequestAnimationFrame || 
	              window.mozRequestAnimationFrame    || 
	              window.oRequestAnimationFrame      || 
	              window.msRequestAnimationFrame     || 
	              function( callback ){
	                window.setTimeout(callback, 1000 / 60);
	              };
	    })();
	    (function animLoop(){
	    	requestAnimFrame(animLoop);
	    	app.engine.render();
	    })()
	},
	render:function(){
			this.update();
			app.settings.renderer.render( app.settings.scene, app.settings.camera );
	},
	update:function(){

		this.bigFormsRotation();
		// ------------- Camera movement on click
		this.cameraMove();
		// ------------- Particles render
		app.particles.renderParticles();

		// ------- Render clock

		app.clock.renderClock();

		// animation skills
		if (app.settings.arrayHere[2]) app.animation.skills();

		// animation timeline
		if (app.settings.arrayHere[3]) app.animation.timeline();

		// --------------- Mousehover listener
		if (app.settings.arrayHere[1] && app.settings.start==true && app.settings.boolmove==false){
			app.mouse.mouseHoverTest();
		}
		if (app.settings.arrayHere[4] && app.settings.start==true && app.settings.boolmove==false){
			app.mouse.mouseHoverTest();
		} 
		
	},
	endCameraMove:function(){
		app.settings.arrayHere[this.ici]=false;
		app.settings.arrayGoto[this.labas]=false;
		app.settings.arrayHere[this.labas]=true;
		this.ici=this.labas;
		this.labas=-1;
		app.settings.boolmove=false;
		$("#webgl-menu li:nth-child("+(5-parseInt(this.ici))+")").children().css("border-bottom","3px solid #687c80")

	},
	cameraMove:function(){
		for (var i = 0; i < app.settings.arrayGoto.length; i++) {
			if(app.settings.arrayHere[i]){
				this.ici=i;
			}
			if(app.settings.arrayGoto[i] && !app.settings.arrayHere[i]){
				this.labas=i;
				app.settings.boolmove=true;
			}
			
		};
		if (app.settings.boolmove==true) {
			var obj=app.curves.paths.selectpath(this.ici,this.labas);
			app.curves.rendercamera(obj.num,obj.sens,this.labas);
		}else{
			app.camera.camRenderView();
		}
		app.light.renderLightPos();
	},
	bigFormsRotation:function(){
			app.settings.meshCube.rotation.x += 0.005;
			app.settings.meshCube.rotation.y += 0.01;

			app.settings.meshPyram.rotation.x += 0.005;
			app.settings.meshPyram.rotation.y += 0.01;

			app.settings.meshSphere.rotation.x += 0.005;
			app.settings.meshSphere.rotation.y += 0.01;

			app.settings.meshDonuts.rotation.z += 0.01;


			var timer = 0.0005 * Date.now();
			for (var i = 0; i < app.settings.coolArray.length; i++) {
				switch(i){
				case 0:
				  	app.settings.coolArray[i].position.x=app.settings.coolPosition.x+Math.cos(timer);
					app.settings.coolArray[i].position.y=app.settings.coolPosition.y+Math.sin(timer);
				  	break;
				case 1:
				  	app.settings.coolArray[i].position.x=app.settings.coolPosition.x+Math.cos(timer);
					app.settings.coolArray[i].position.z=app.settings.coolPosition.z+Math.sin(timer);
				  	break;
				case 2:
				  	app.settings.coolArray[i].position.z=app.settings.coolPosition.z+Math.cos(timer);
					app.settings.coolArray[i].position.y=app.settings.coolPosition.y+Math.sin(timer);
				  	break;
				case 3:
				  	app.settings.coolArray[i].position.x=app.settings.coolPosition.x-Math.sin(timer);
					app.settings.coolArray[i].position.y=app.settings.coolPosition.y-Math.cos(timer);
				  	break;
				}
				
			};
	}
};