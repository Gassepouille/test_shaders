app.mouse={
	tabActiv:[],
	init:function(){
		this.projector = { x: 0, y: 0 };
		this.mouse = { x: 0, y: 0 };
		this.INTERSECTED=null;
		this.boolhover=false;
		this.tabActiv=[];
		this.projector = new THREE.Projector();
		document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
		document.addEventListener( 'click', this.mouseClickTest, false );
	},
	onDocumentMouseMove:function(event){
		app.mouse.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		app.mouse.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	},
	mouseHoverTest:function(){
		this.resetValues();
		var vector = new THREE.Vector3( this.mouse.x, this.mouse.y, 1 );
		this.projector.unprojectVector( vector, app.settings.camera );
		var ray = new THREE.Raycaster( app.settings.camera.position, vector.sub( app.settings.camera.position ).normalize() );

		var intersects = ray.intersectObjects( app.settings.scene.children );
		
		if ( intersects.length > 0 ){
			// if the closest object this.this.intersected is not the currently stored intersection object
			if ( intersects[ 0 ].object != this.INTERSECTED ) {
			    // restore previous intersection
				if ( this.INTERSECTED ) {
					$("html").css("cursor", "default");
					app.sprite.removeSprite();
					// -------------Test of the names in the array of the active cubes
					for (var m = 0; m < this.tabActiv.length; m++) {
						if (this.INTERSECTED.name==this.tabActiv[m].name) {
							this.boolhover=true;
							break;
						};
					};
					// -------------If this is a project and it's not already in the array : push
					if (!this.boolhover) {
						for (var n = 0; n < 9; n++) {
							if (this.INTERSECTED.name=="project"+n) {
								this.tabActiv.push(this.INTERSECTED);
								this.INTERSECTED.children[0].material.opacity=1;
								break;
							};
						};
						for (var r = 0; r < 4; r++) {
							if (this.INTERSECTED.name=="social"+r) {
								this.tabActiv.push(this.INTERSECTED);
								this.INTERSECTED.children[0].material.opacity=1;
								break;
							};
						};
					};
					this.boolhover=false;
				}
				// store reference to closest object as current intersection object
				this.INTERSECTED = intersects[ 0 ].object;
				// Test to see if this we hover on a project
				for (var i = 0; i < 9; i++) {
					if (intersects[0].object.name=="project"+i) {
						$("html").css("cursor", "pointer");
						app.sprite.addSprite(i);
						this.INTERSECTED.children[0].material.opacity=0;
					};
				};
				for (var p = 0; p < 4; p++) {
					if (intersects[0].object.name=="social"+p) {
						$("html").css("cursor", "pointer");
					};
				};
			}else{
				// To see if the object is reducting or not 
				for (var m = 0; m < this.tabActiv.length; m++) {
					if (this.INTERSECTED.name==this.tabActiv[m].name) {
						this.boolhover=true;
						break;
					};
				};
				// Test to see if the intersected object is a project
				if (!this.boolhover) {
					for (var n = 0; n < 9; n++) {
						if (this.INTERSECTED.name=="project"+n) {
							var testProject=true;
							break;
						};
					};
					for (var q = 0; q <4; q++) {
						if (this.INTERSECTED.name=="social"+q) {
							var testProject=true;
							break;
						};
					};
					if (testProject) {
						this.INTERSECTED.material.opacity-=0.025;
						this.INTERSECTED.scale.x+=0.02;
						this.INTERSECTED.scale.y+=0.02;
						this.INTERSECTED.scale.z+=0.02;
						if (this.INTERSECTED.scale.x>1.5) {
							this.INTERSECTED.scale.x=1.5;
							this.INTERSECTED.scale.y=1.5;
							this.INTERSECTED.scale.z=1.5;
						};
						if (this.INTERSECTED.material.opacity<0) this.INTERSECTED.material.opacity=0;
					};	
				};
				this.boolhover=false;
			}
		}else{
			// if there are no intersection at all
			if ( this.INTERSECTED ) {
				app.sprite.removeSprite();
			}
			$("html").css("cursor", "default");
			// remove previous intersection object reference by setting current intersection object to "nothing"
			this.INTERSECTED = null;
		}
	},
	mouseClickTest:function(){

		var vector = new THREE.Vector3( app.mouse.mouse.x, app.mouse.mouse.y, 1 );
		app.mouse.projector.unprojectVector( vector, app.settings.camera );
		var ray = new THREE.Raycaster( app.settings.camera.position, vector.sub( app.settings.camera.position ).normalize() );

		var intersects = ray.intersectObjects( app.settings.scene.children );
		
		// if there is one (or more) intersections
		if ( intersects.length > 0 ){
			for (var i = 0; i < 9; i++) {
				if (intersects[0].object.name=="project"+i) {
					switch(i){
					case 0:
					  window.open('projects/project0/index.html', '_blank');
					  break;
					case 1:
					  window.open('projects/project1/index.html', '_blank');
					  break;
					case 2:
					  window.open('projects/project2/html/index.html', '_blank');
					  break;
					case 3:
					  window.open('projects/project3/index.html', '_blank');
					  break;
					case 4:
					  window.open('projects/project4/index.html', '_blank');
					  break;
					case 5:
					  window.open('projects/project5/', '_blank');
					  break;
					case 6:
					  window.open('projects/project6/index.html', '_blank');
					  break;
					case 7:
					  window.open('projects/project7/index.html', '_blank');
					  break;
					case 8:
					  window.open('projects/project8/index.html', '_blank');
					  break;
					}

				};
			};
			for (var o = 0; o < 4; o++) {
				if (intersects[0].object.name=="social"+o) {
					switch(o){
					case 0:
					  window.open('http://www.twitter.com/Gassepouille', '_blank');
					  break;
					case 1:
					  window.open('http://www.linkedin.com/pub/gaspard-guillaume/73/3ba/55a', '_blank');
					  break;
					case 2:
					  window.open('https://github.com/Gassepouille', '_blank');
					  break;
					case 3:
					  window.open('utils/cv.pdf', '_blank');
					  break;
					}
					
				};
			};
		}
	},
	resetValues:function(){
		var myNumber=[];
		this.mybool=false;
		if (this.tabActiv.length>0) {
			for (var j = 0; j < this.tabActiv.length; j++) {
				this.tabActiv[j].material.opacity+=0.035;
				this.tabActiv[j].scale.x-=0.02;
				this.tabActiv[j].scale.y-=0.02;
				this.tabActiv[j].scale.z-=0.02;
				if (this.tabActiv[j].scale.x<1) {
					this.tabActiv[j].scale.x=1;
					this.tabActiv[j].scale.y=1;
					this.tabActiv[j].scale.z=1;
					this.mybool=true;
				};
				if (this.tabActiv[j].material.opacity>0.9) {
					this.tabActiv[j].material.opacity=0.9;
				};
				if (this.tabActiv[j].material.opacity==0.9 && this.mybool==true) {
					myNumber.push(j);
				}
			};
		};
		if (myNumber.length!=0) {
			for (var l = 0; l < myNumber.length; l++) {
				this.tabActiv.splice(myNumber[l],1);
			};
			
		}
	}
}