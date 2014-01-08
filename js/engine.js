app.engine={
	frame:0,
	init:function(){
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
		app.scene.cube.uniforms.amplitude.value =app.scene.cube.uniforms2.amplitude.value= 0.5 * (1.0 + Math.sin(this.frame))

		  // update the frame counter
		  this.frame += 0.1;
		app.scene.camera.controls.update();
		app.scene.renderer.render( app.scene.scene, app.scene.camera.camera );
	}
}