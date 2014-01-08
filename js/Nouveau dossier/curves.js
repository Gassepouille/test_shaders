app.curves={
	mytime:0,
	speedCam:50,
	accel:0.3,
	descel:0.3,
	tube:{},
	init:function(){
		this.parent = new THREE.Object3D();
		app.settings.scene.add( this.parent );
		this.paths.init();
		this.drawPath();
	},
	drawPath:function(){
		var myArray=app.settings.arrayPaths;
		for (var i = 0; i < myArray.length; i++) {
			this.tube["spline"+i]={};
			var pipeSpline =myArray[i]
			this.tube["spline"+i] = new THREE.TubeGeometry(pipeSpline, 100, 1, 10, false, false);
			var material = new THREE.MeshBasicMaterial( { color:0xff00ff,visible:false} );
			var tubeMesh = new THREE.Mesh( this.tube["spline"+i], material );
			tubeMesh.scale.set( 1, 1, 1 );
			this.parent.add( tubeMesh );
		};
	},
	rendercamera:function(num,sens,labas,ici){
			this.mytime+=this.speedCam;
			var looptime = 40 * 1000;
			var t = ( this.mytime % looptime ) / looptime;

			if (sens) {
				var pos = this.tube["spline"+num].path.getPointAt( t );
			}else{
				 var pos = this.tube["spline"+num].path.getPointAt( 1-t );
			}
			
			// interpolation
			var segments = this.tube["spline"+num].tangents.length;

			var pickt = t * segments;
			var pick = Math.floor( pickt );
			var pickNext = ( pick + 1 ) % segments;
			

			var dir = this.tube["spline"+num].path.getTangentAt( t );

			if (t>0.20 && t<0.80 && this.speedCam<130) {
				this.accel+=0.01;
				this.speedCam+=this.accel;
			};
			if (t>0.75 && this.speedCam>39) {
				this.descel+=0.01;
				this.speedCam-=this.descel;
			};


			
			if (t>0.998) {
				if (sens) {
					var pos = this.tube["spline"+num].path.getPointAt( 1 );
				}else{
					 var pos = this.tube["spline"+num].path.getPointAt( 0 );
				}
				app.engine.endCameraMove();
				this.mytime=0;
				this.accel=0.3;
				this.descel=0.3;
				this.speedCam=50;
			};
			app.settings.camera.position = pos;
			this.calculFocus(labas,ici);
			var vecteur = new THREE.Vector3(app.engine.myFocus.x,app.engine.myFocus.y,app.engine.myFocus.z);
			app.settings.camera.lookAt(vecteur);
			
	},
	calculFocus:function(labas){

		switch(labas){
		case 0:
		  var newFoc=app.settings.camfoc.sphere;
		  break;
		case 1:
		  var newFoc=app.settings.camfoc.cube;
		  break;
		case 2:
		  var newFoc=app.settings.camfoc.pyram;
		  break;
	  	case 3:
		  var newFoc=app.settings.camfoc.donuts;
		  break;
		case 4:
		  var newFoc=app.settings.camfoc.contact;
		  break;
		}

		this.focusDirection(newFoc)	

		
	},
	focusDirection:function(newFoc){
		var coefSpeedX=Math.abs(newFoc.x-app.engine.myFocus.x);
		var coefSpeedY=Math.abs(newFoc.y-app.engine.myFocus.y);
		var coefSpeedZ=Math.abs(newFoc.z-app.engine.myFocus.z);
		if (app.engine.myFocus.x<newFoc.x) {
			app.engine.myFocus.x+=(0.2*(coefSpeedX/100)+0.15);
		}
		if(app.engine.myFocus.x>newFoc.x){
			app.engine.myFocus.x-=(0.2*(coefSpeedX/100)+0.15);
		}
		if (app.engine.myFocus.y<newFoc.y) {
			app.engine.myFocus.y+=(0.18*(coefSpeedY/100)+0.1);
		}
		if(app.engine.myFocus.y>newFoc.y){
			app.engine.myFocus.y-=(0.18*(coefSpeedY/100)+0.1);
		}
		if (app.engine.myFocus.z<newFoc.z) {
			app.engine.myFocus.z+=(0.2*(coefSpeedZ/100)+0.15);
		}
		if(app.engine.myFocus.z>newFoc.z){
			app.engine.myFocus.z-=(0.2*(coefSpeedZ/100)+0.15);
		}
	}
}