(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Index_atlas_1", frames: [[1202,1082,840,859],[0,0,1920,1080],[0,1082,1200,675]]},
		{name:"Index_atlas_2", frames: [[0,370,532,246],[0,0,490,368],[534,496,281,340],[492,0,489,246],[534,248,480,246],[0,618,317,159]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logoporschesinfondo = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Porche1jfif = function() {
	this.initialize(ss["Index_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Porche2 = function() {
	this.initialize(img.Porche2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3200,1800);


(lib.porche3 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.porche4 = function() {
	this.initialize(ss["Index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.porche4();
	this.instance.setTransform(3.4,-808.75,1.6077,1.2407);

	this.instance_1 = new lib.porche3();
	this.instance_1.setTransform(3.4,0.25,1.0048,0.7755);

	this.instance_2 = new lib.Porche2();
	this.instance_2.setTransform(-1932.6,0.25,0.6029,0.4653);

	this.instance_3 = new lib.Porche1jfif();
	this.instance_3.setTransform(-1929.6,-837.75,6.086,5.2674);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1932.6,-837.7,3865.3,1675.5);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.porche4();
	this.instance.setTransform(3.4,-808.75,1.6077,1.2407);

	this.instance_1 = new lib.porche3();
	this.instance_1.setTransform(3.4,0.25,1.0048,0.7755);

	this.instance_2 = new lib.Porche2();
	this.instance_2.setTransform(-1932.6,0.25,0.6029,0.4653);

	this.instance_3 = new lib.Porche1jfif();
	this.instance_3.setTransform(-1929.6,-837.75,6.086,5.2674);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1932.6,-837.7,3865.3,1675.5);


(lib.btnPoryectos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266,123);


(lib.btnNosotros = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,184);


(lib.btnHome = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.5,170);


(lib.btnContacto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.5,123);


(lib.btnCatalogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,123);


// stage content:
(lib.Index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btnhome.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('index.html', '_self');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btnnosotros.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('Nosotros.html', '_self');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btnproyectos.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('Poyectos.html', '_self');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btncatalogo.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('Catalogo.html', '_self');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btncontacto.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('Contacto.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(253));

	// Botones
	this.btncontacto = new lib.btnContacto();
	this.btncontacto.name = "btncontacto";
	this.btncontacto.setTransform(1780.9,156.9,1,1,0,0,0,122.2,61.6);
	new cjs.ButtonHelper(this.btncontacto, 0, 1, 1);

	this.btncatalogo = new lib.btnCatalogo();
	this.btncatalogo.name = "btncatalogo";
	this.btncatalogo.setTransform(1519.75,156.9,1,1,0,0,0,119.9,61.6);
	new cjs.ButtonHelper(this.btncatalogo, 0, 1, 1);

	this.btnproyectos = new lib.btnPoryectos();
	this.btnproyectos.name = "btnproyectos";
	this.btnproyectos.setTransform(1232.05,156.9,1,1,0,0,0,132.9,61.6);
	new cjs.ButtonHelper(this.btnproyectos, 0, 1, 1);

	this.btnnosotros = new lib.btnNosotros();
	this.btnnosotros.name = "btnnosotros";
	this.btnnosotros.setTransform(955.6,187.2,1,1,0,0,0,122.4,91.9);
	new cjs.ButtonHelper(this.btnnosotros, 0, 1, 1);

	this.btnhome = new lib.btnHome();
	this.btnhome.name = "btnhome";
	this.btnhome.setTransform(725,164.35,1,1,0,0,0,70.4,85);
	new cjs.ButtonHelper(this.btnhome, 0, 1, 1);

	this.instance = new lib.logoporschesinfondo();
	this.instance.setTransform(134,13,0.3708,0.2867);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("EiWiAUEMAAAgoHMEtFAAAMAAAAoHg");
	this.shape.setTransform(963.525,121.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.btnhome},{t:this.btnnosotros},{t:this.btnproyectos},{t:this.btncatalogo},{t:this.btncontacto}]}).to({state:[]},209).wait(44));

	// Fondo
	this.instance_1 = new lib.porche4();
	this.instance_1.setTransform(1936,278,1.6077,1.2407);

	this.instance_2 = new lib.porche3();
	this.instance_2.setTransform(1936,1087,1.0048,0.7755);

	this.instance_3 = new lib.Porche2();
	this.instance_3.setTransform(0,1087,0.6029,0.4653);

	this.instance_4 = new lib.Porche1jfif();
	this.instance_4.setTransform(3,249,6.086,5.2674);

	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.setTransform(1932.6,1086.75);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.setTransform(1932.6,242.25);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_5}]},49).to({state:[{t:this.instance_6}]},26).to({state:[{t:this.instance_6}]},36).to({state:[{t:this.instance_6}]},23).to({state:[{t:this.instance_6}]},32).to({state:[{t:this.instance_6}]},15).to({state:[{t:this.instance_6}]},36).to({state:[{t:this.instance_6}]},20).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).to({_off:true,y:242.25},26).wait(178));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},26).wait(36).to({y:276.2},0).to({x:-5.65},23).wait(32).to({startPosition:0},0).to({y:1056.25},15).wait(36).to({startPosition:0},0).to({x:1932.65},20).wait(16));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-978.2,-55.5,4843.5,1980);
// library properties:
lib.properties = {
	id: '7CED549561F25F45B84C037151A23775',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Porche2.jpg?1778209530937", id:"Porche2"},
		{src:"images/Index_atlas_1.png?1778209530906", id:"Index_atlas_1"},
		{src:"images/Index_atlas_2.png?1778209530906", id:"Index_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7CED549561F25F45B84C037151A23775'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;