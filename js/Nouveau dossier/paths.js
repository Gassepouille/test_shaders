app.curves.paths={
	init:function(){
		var spline0 = new THREE.SplineCurve3([
				  new THREE.Vector3(40, 0, 12),
				  new THREE.Vector3(54, -4, 25),
				  new THREE.Vector3(85, 0, 32),
				  new THREE.Vector3(89, 5, 48),
				  new THREE.Vector3(82, 3, 55),
				  new THREE.Vector3(73, 1, 52),
				  new THREE.Vector3(68, 0, 40)]);
		app.settings.arrayPaths.push(spline0);
		var spline1 = new THREE.SplineCurve3([
				  new THREE.Vector3(68, 0, 40),
				  new THREE.Vector3(50, -2, 45),
				  new THREE.Vector3(40, 0, 60),
				  new THREE.Vector3(20, 5, 68),
				  new THREE.Vector3(20, 2, 80),
				  new THREE.Vector3(35, 0, 94),
				  new THREE.Vector3(47, 0, 88),
				  new THREE.Vector3(50, -2, 78),
				  new THREE.Vector3(46, 0, 71),
				  new THREE.Vector3(40, 0, 68)]);
		app.settings.arrayPaths.push(spline1);
		var spline2 = new THREE.SplineCurve3([
				  new THREE.Vector3(40, 0, 68),
				  new THREE.Vector3(20, 5, 40),
				  new THREE.Vector3(0, 0, 20),
				  new THREE.Vector3(-10, -4, 30),
				  new THREE.Vector3(-9, -2, 40),
				  new THREE.Vector3(0, 0, 50),
				  new THREE.Vector3(7, -2, 49),
				  new THREE.Vector3(12, 0, 40)]);
		app.settings.arrayPaths.push(spline2);
		var spline3 = new THREE.SplineCurve3([
				  new THREE.Vector3(12, 0, 40),
				  new THREE.Vector3(30, 5, 19),
				  new THREE.Vector3(55, 5, 0),
				  new THREE.Vector3(45, 3, -10),
				  new THREE.Vector3(35, -3, -7),
				  new THREE.Vector3(30, -4, 0),
				  new THREE.Vector3(32, -2, 8),
				  new THREE.Vector3(40, 0, 12)]);
		app.settings.arrayPaths.push(spline3);
		var spline4 = new THREE.SplineCurve3([
				  new THREE.Vector3(40, 0, 12),
				  new THREE.Vector3(40, -2, 40),
				  new THREE.Vector3(30, 2, 54),
				  new THREE.Vector3(40, 0, 68)]);
		app.settings.arrayPaths.push(spline4);
		var spline5 = new THREE.SplineCurve3([
				  new THREE.Vector3(68, 0, 40),
				  new THREE.Vector3(40, -2, 40),
				  new THREE.Vector3(26, 2, 30),
				  new THREE.Vector3(12, 0, 40)]);
		app.settings.arrayPaths.push(spline5);
		var spline6 = new THREE.SplineCurve3([
				  new THREE.Vector3(68, 0, 40),
				  new THREE.Vector3(54, 3, 20),
				  new THREE.Vector3(40, 0, 12)]);
		app.settings.arrayPaths.push(spline6);
		var spline7 = new THREE.SplineCurve3([
				  new THREE.Vector3(40, 0, 68),
				  new THREE.Vector3(60, -3, 60),
				  new THREE.Vector3(68, 0, 40)]);
		app.settings.arrayPaths.push(spline7);
		var spline8 = new THREE.SplineCurve3([
				  new THREE.Vector3(12, 0, 40),
				  new THREE.Vector3(20, 3, 54),
				  new THREE.Vector3(40, 0, 68)]);
		app.settings.arrayPaths.push(spline8);
		var spline9 = new THREE.SplineCurve3([
				  new THREE.Vector3(40, 0, 12),
				  new THREE.Vector3(20, -3, 20),
				  new THREE.Vector3(12, 0, 40)]);
		app.settings.arrayPaths.push(spline9);

		// --------------
		var spline10 = new THREE.SplineCurve3([
				  new THREE.Vector3(40, 0, 12),
				  new THREE.Vector3(40, 2, 40)]);
		app.settings.arrayPaths.push(spline10);
		var spline11 = new THREE.SplineCurve3([
				  new THREE.Vector3(68, 0, 40),
				  new THREE.Vector3(40, 2, 40)]);
		app.settings.arrayPaths.push(spline11);
		var spline12 = new THREE.SplineCurve3([
				  new THREE.Vector3(40, 0, 68),
				  new THREE.Vector3(40, 2, 40)]);
		app.settings.arrayPaths.push(spline12);
		var spline13 = new THREE.SplineCurve3([
				  new THREE.Vector3(12, 0, 40),
				  new THREE.Vector3(40, 2, 40)]);
		app.settings.arrayPaths.push(spline13);

	},
	selectpath:function(rhere,rthere){
		if ((rhere==0 && rthere==1) || (rhere==1 && rthere==0)) {
			return (rhere==0)?  {num:0,sens:true}: {num:6,sens:true};
		};
		if ((rhere==0 && rthere==2) || (rhere==2 && rthere==0)) {
			return (rhere==0)? {num:4,sens:true}: {num:4,sens:false};
		};
		if ((rhere==1 && rthere==2) || (rhere==2 && rthere==1)) {
			return (rhere==1)? {num:1,sens:true}: {num:7,sens:true};
		};		
		if ((rhere==1 && rthere==3) || (rhere==3 && rthere==1)) {
			return (rhere==1)? {num:5,sens:true}: {num:5,sens:false};
		};
		if ((rhere==2 && rthere==3) || (rhere==3 && rthere==2)) {
			return (rhere==2)? {num:2,sens:true}: {num:8,sens:true};
		};
		if ((rhere==3 && rthere==0) || (rhere==0 && rthere==3)) {
			return (rhere==3)? {num:3,sens:true}: {num:9,sens:true};
		};
		// ---------------
		if ((rhere==0 && rthere==4) || (rhere==4 && rthere==0)) {
			return (rhere==0)? {num:10,sens:true}: {num:10,sens:false};
		};
		if ((rhere==1 && rthere==4) || (rhere==4 && rthere==1)) {
			return (rhere==1)? {num:11,sens:true}: {num:11,sens:false};
		};
		if ((rhere==2 && rthere==4) || (rhere==4 && rthere==2)) {
			return (rhere==2)? {num:12,sens:true}: {num:12,sens:false};
		};
		if ((rhere==3 && rthere==4) || (rhere==4 && rthere==3)) {
			return (rhere==3)? {num:13,sens:true}: {num:13,sens:false};
		};


	}
}