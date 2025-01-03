000000var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-86951-7"]);
_gaq.push(["_trackPageview"]);
(function() {
    
})();

function circles(a) {
    this.init(a)
}
circles.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    count: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over"
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(e, b) {
        var g, l, k, h, f, c, j, a;
        this.context.lineWidth = BRUSH_SIZE;
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.1 * BRUSH_PRESSURE + ")";
        l = e - this.prevMouseX;
        k = b - this.prevMouseY;
        h = Math.sqrt(l * l + k * k) * 2;
        f = Math.floor(e / 100) * 100 + 50;
        c = Math.floor(b / 100) * 100 + 50;
        j = Math.floor(Math.random() * 10);
        a = h / j;
        for (g = 0; g < j; g++) {
            this.context.beginPath();
            this.context.arc(f, c, (j - g) * a, 0, Math.PI * 2, true);
            this.context.stroke()
        }
        this.prevMouseX = e;
        this.prevMouseY = b
    },
    strokeEnd: function() {}
};

function chrome(a) {
    this.init(a)
}
chrome.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    points: null,
    count: null,
    init: function(a) {
        this.context = a;
        if (RegExp(" AppleWebKit/").test(navigator.userAgent)) {
            this.context.globalCompositeOperation = "darker"
        }
        this.points = new Array();
        this.count = 0
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, c) {
        var e, b, a, g;
        this.points.push([f, c]);
        this.context.lineWidth = BRUSH_SIZE;
				//added 05/16/17 BertrandtheHealer
				this.context.lineCap = "round";
				//end add
				this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.1 * BRUSH_PRESSURE + ")";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(f, c);
        this.context.stroke();
				//added 05/16/17 BertrandtheHealer
				this.context.lineWidth = 1;
				//end add
        for (e = 0; e < this.points.length; e++) {
            b = this.points[e][0] - this.points[this.count][0];
            a = this.points[e][1] - this.points[this.count][1];
            g = b * b + a * a;
            if (g < 1000) {
                this.context.strokeStyle = "rgba(" + Math.floor(Math.random() * COLOR[0]) + ", " + Math.floor(Math.random() * COLOR[1]) + ", " + Math.floor(Math.random() * COLOR[2]) + ", " + 0.1 * BRUSH_PRESSURE + " )";
                this.context.beginPath();
                this.context.moveTo(this.points[this.count][0] + (b * 0.2), this.points[this.count][1] + (a * 0.2));
                this.context.lineTo(this.points[e][0] - (b * 0.2), this.points[e][1] - (a * 0.2));
                this.context.stroke()
            }
        }
        this.prevMouseX = f;
        this.prevMouseY = c;
        this.count++
    },
    strokeEnd: function() {}
};

function fur(a) {
    this.init(a)
}
fur.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    points: null,
    count: null,
    init: function(a) {
        this.context = a;
        this.points = new Array();
        this.count = 0
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, c) {
        var e, b, a, g;
        this.points.push([f, c]);
        this.context.lineWidth = BRUSH_SIZE;
				//added 05/16/17 BertrandtheHealer
				this.context.lineCap = "round";
				//end add
			  this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.1 * BRUSH_PRESSURE + ")";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(f, c);
				this.context.stroke();
        for (e = 0; e < this.points.length; e++) {
            b = this.points[e][0] - this.points[this.count][0];
            a = this.points[e][1] - this.points[this.count][1];
            g = b * b + a * a;
            if (g < 2000 && Math.random() > g / 2000) {
                this.context.beginPath();
                this.context.moveTo(f + (b * 0.5), c + (a * 0.5));
                this.context.lineTo(f - (b * 0.5), c - (a * 0.5));
                this.context.stroke()
            }
        }
        this.prevMouseX = f;
        this.prevMouseY = c;
        this.count++
    },
    strokeEnd: function() {}
};

function grid(a) {
    this.init(a)
}
grid.prototype = {
    context: null,
    init: function(a) {
        this.context = a;
        if (RegExp(" AppleWebKit/").test(navigator.userAgent)) {
            this.context.globalCompositeOperation = "darker"
        }
    },
    destroy: function() {},
    strokeStart: function(b, a) {},
    stroke: function(f, d) {
        var e, a, g, c, b;
        a = Math.round(f / 100) * 100;
        g = Math.round(d / 100) * 100;
        c = (a - f) * 10;
        b = (g - d) * 10;
				//added 05/16/17 BertrandtheHealer
				this.context.lineCap = "round";
				//end add
        this.context.lineWidth = BRUSH_SIZE;
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.01 * BRUSH_PRESSURE + ")";
        for (e = 0; e < 50; e++) {
            this.context.beginPath();
            this.context.moveTo(a, g);
            this.context.quadraticCurveTo(f + Math.random() * c, d + Math.random() * b, a, g);
            this.context.stroke()
        }
    },
    strokeEnd: function() {}
};

function longfur(a) {
    this.init(a)
}
longfur.prototype = {
    context: null,
    points: null,
    count: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over";
        this.points = new Array();
        this.count = 0
    },
    destroy: function() {},
    strokeStart: function(b, a) {},
    stroke: function(g, c) {
        var f, e, b, a, h;
        this.points.push([g, c]);
        this.context.lineWidth = BRUSH_SIZE;
			  this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.1 * BRUSH_PRESSURE + ")";
				//added 05/16/17 BertrandtheHealer
				this.context.lineCap = "round";
				//end add
        for (f = 0; f < this.points.length; f++) {
            e = -Math.random();
            b = this.points[f][0] - this.points[this.count][0];
            a = this.points[f][1] - this.points[this.count][1];
            h = b * b + a * a;
            if (h < 4000 && Math.random() > h / 4000) {
                this.context.beginPath();
                this.context.moveTo(this.points[this.count][0] + (b * e), this.points[this.count][1] + (a * e));
                this.context.lineTo(this.points[f][0] - (b * e) + Math.random() * 2, this.points[f][1] - (a * e) + Math.random() * 2);
                this.context.stroke()
            }
        }
        this.count++
    },
    strokeEnd: function() {}
};

function ribbon(a) {
    this.init(a)
}
ribbon.prototype = {
    context: null,
    mouseX: null,
    mouseY: null,
    painters: null,
    interval: null,
    init: function(b) {
        var c = this;
        this.context = b;
        this.context.globalCompositeOperation = "source-over";
        this.mouseX = SCREEN_WIDTH / 2;
        this.mouseY = SCREEN_HEIGHT / 2;
        this.painters = new Array();
        for (var a = 0; a < 50; a++) {
            this.painters.push({
                dx: SCREEN_WIDTH / 2,
                dy: SCREEN_HEIGHT / 2,
                ax: 0,
                ay: 0,
                div: 0.1,
                ease: Math.random() * 0.2 + 0.6
            })
        }
        this.interval = setInterval(d, 1000 / 60);

        function d() {
            var e;
            this.context.lineWidth = BRUSH_SIZE;
						//added 05/16/17 BertrandtheHealer
				    this.context.lineCap = "round";
				    //end add
					  this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.1 * BRUSH_PRESSURE + ")";
            for (e = 0; e < c.painters.length; e++) {
                c.context.beginPath();
                c.context.moveTo(c.painters[e].dx, c.painters[e].dy);
                c.painters[e].dx -= c.painters[e].ax = (c.painters[e].ax + (c.painters[e].dx - c.mouseX) * c.painters[e].div) * c.painters[e].ease;
                c.painters[e].dy -= c.painters[e].ay = (c.painters[e].ay + (c.painters[e].dy - c.mouseY) * c.painters[e].div) * c.painters[e].ease;
                c.context.lineTo(c.painters[e].dx, c.painters[e].dy);
                c.context.stroke()
            }
        }
    },
    destroy: function() {
        clearInterval(this.interval)
    },
    strokeStart: function(c, a) {
        this.mouseX = c;
        this.mouseY = a;
        for (var b = 0; b < this.painters.length; b++) {
            this.painters[b].dx = c;
            this.painters[b].dy = a
        }
        this.shouldDraw = true
    },
    stroke: function(b, a) {
        this.mouseX = b;
        this.mouseY = a
    },
    strokeEnd: function() {}
};

function shaded(a) {
    this.init(a)
}
shaded.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    points: null,
    count: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over";
        this.points = new Array();
        this.count = 0
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, c) {
				//added 05/16/17 BertrandtheHealer
			  this.context.lineWidth = BRUSH_SIZE;
				//added 05/16/17 BertrandtheHealer
				this.context.lineCap = "round";
				//end add
				this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.5 * BRUSH_PRESSURE + ")";
			  this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(f, c);
        this.context.stroke();
				//end add
        var e, b, a, g;
        this.points.push([f, c]);
        for (e = 0; e < this.points.length; e++) {
            b = this.points[e][0] - this.points[this.count][0];
            a = this.points[e][1] - this.points[this.count][1];
            g = b * b + a * a;
            if (g < 1000) {
                this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + ((1 - (g / 1000)) * 0.1 * BRUSH_PRESSURE) + " )";
                this.context.beginPath();
                this.context.moveTo(this.points[this.count][0], this.points[this.count][1]);
                this.context.lineTo(this.points[e][0], this.points[e][1]);
                this.context.stroke()
            }
        }
        this.prevMouseX = f;
        this.prevMouseY = c;
        this.count++
    },
    strokeEnd: function() {}
};

function simple(a) {
    this.init(a)
}
simple.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over"
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(b, a) {
        this.context.lineWidth = BRUSH_SIZE;//added 05/16/17 BertrandtheHealer
				//added 05/16/17 BertrandtheHealer
			  this.context.strokeStyle = "rgb(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ")";
				this.context.fillStyle = "rgb(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ")";
				
				this.context.lineCap = "round";
				//end add
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(b, a);
        this.context.stroke();
				
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    strokeEnd: function() {}
};

function sketchy(a) {
    this.init(a)
}
sketchy.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    points: null,
    count: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over";
        this.points = new Array();
        this.count = 0
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, c) {
        var e, b, a, g;
        this.points.push([f, c]);
        this.context.lineWidth = BRUSH_SIZE;
				//added 05/16/17 BertrandtheHealer
				this.context.lineCap = "round";
				//end add
				this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.1 * BRUSH_PRESSURE + ")";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(f, c);
        this.context.stroke();
				//added 05/16/17 BertrandtheHealer
				this.context.lineWidth = 1;
				//end add
        for (e = 0; e < this.points.length; e++) {
            b = this.points[e][0] - this.points[this.count][0];
            a = this.points[e][1] - this.points[this.count][1];
            g = b * b + a * a;
            if (g < 4000 && Math.random() > (g / 2000)) {
							this.context.beginPath();
              this.context.moveTo(this.points[this.count][0] + (b * 0.3), this.points[this.count][1] + (a * 0.3));
              this.context.lineTo(this.points[e][0] - (b * 0.3), this.points[e][1] - (a * 0.3));
              this.context.stroke()
            }
        }
        this.prevMouseX = f;
        this.prevMouseY = c;
        this.count++
    },
    strokeEnd: function() {}
};

function squares(a) {
    this.init(a)
}
squares.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over"
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, d) {
        var b, a, g, e, c;
        b = f - this.prevMouseX;
        a = d - this.prevMouseY;
        g = 1.57079633;
        e = Math.cos(g) * b - Math.sin(g) * a;
        c = Math.sin(g) * b + Math.cos(g) * a;
        this.context.lineWidth = BRUSH_SIZE;
				//added 05/16/17 BertrandtheHealer
				this.context.lineCap = "round";
				//end add
        this.context.fillStyle = "rgba(" + BACKGROUND_COLOR[0] + ", " + BACKGROUND_COLOR[1] + ", " + BACKGROUND_COLOR[2] + ", " + BRUSH_PRESSURE + ")";
        this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + BRUSH_PRESSURE + ")";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX - e, this.prevMouseY - c);
        this.context.lineTo(this.prevMouseX + e, this.prevMouseY + c);
        this.context.lineTo(f + e, d + c);
        this.context.lineTo(f - e, d - c);
        this.context.lineTo(this.prevMouseX - e, this.prevMouseY - c);
        this.context.fill();
        this.context.stroke();
        this.prevMouseX = f;
        this.prevMouseY = d
    },
    strokeEnd: function() {}
};

function web(a) {
    this.init(a)
}
web.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    points: null,
    count: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over";
        this.points = new Array();
        this.count = 0
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, c) {
        var e, b, a, g;
        this.points.push([f, c]);
        this.context.lineWidth = BRUSH_SIZE;
				//added 05/16/17 BertrandtheHealer
				this.context.lineCap = "round";
				//end add
				this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ", " + 0.5 * BRUSH_PRESSURE + ")";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(f, c);
        this.context.stroke();
				this.context.lineWidth = 1;
        for (e = 0; e < this.points.length; e++) {
            b = this.points[e][0] - this.points[this.count][0];
            a = this.points[e][1] - this.points[this.count][1];
            g = b * b + a * a;
            if (g < 2500 && Math.random() > 0.9) {
                this.context.beginPath();
                this.context.moveTo(this.points[this.count][0], this.points[this.count][1]);
                this.context.lineTo(this.points[e][0], this.points[e][1]);
                this.context.stroke()
            }
        }
        this.prevMouseX = f;
        this.prevMouseY = c;
        this.count++
    },
    strokeEnd: function() {}
};
//added 05/16/17 BertrandtheHealer
function rainbow(a) {
    this.init(a)
}
rainbow.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
		hsl: [0,'100%','50%'],
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over"
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a;
    },
    stroke: function(b, a) {
        this.context.lineWidth = BRUSH_SIZE;
				if (this.hsl[0] >= 360) {
					this.hsl[0] = 0;
				}
				this.hsl[0] = this.hsl[0]+1;
			  this.context.strokeStyle = "hsl(" + this.hsl[0] + ", " + this.hsl[1] + ", " + this.hsl[2] + ")";
				this.context.fillStyle = "hsl(" + this.hsl[0] + ", " + this.hsl[1] + ", " + this.hsl[2] + ")";
				//added 05/16/17 BertrandtheHealer
				this.context.lineCap = "round";
				//end add
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(b, a);
        this.context.stroke();
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    strokeEnd: function() {}
};

function dots(a) {
    this.init(a)
}
dots.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over"
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    stroke: function(f, c) {
			  this.context.lineWidth = BRUSH_SIZE;
				this.context.fillStyle = "rgb(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + ")";
        if (Math.hypot(f - this.prevMouseX, c - this.prevMouseY) > BRUSH_SIZE*1.5) {
					this.context.beginPath();
				  this.context.arc(f, c, BRUSH_SIZE/2, 0, 2 * Math.PI);
				  this.context.fill();
          this.prevMouseX = f;
          this.prevMouseY = c
				}
    },
    strokeEnd: function() {}
};

function eraser(a) {
    this.init(a)
}
eraser.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    init: function(a) {
        this.context = a;
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a
				this.context.globalCompositeOperation = "destination-out"
    },
    stroke: function(b, a) {
        this.context.lineWidth = BRUSH_SIZE;
			  this.context.strokeStyle = "rgb(0,0,0)";
				this.context.fillStyle = "rgb(0,0,0)";
				this.context.lineCap = "round";
        this.context.beginPath();
        this.context.moveTo(this.prevMouseX, this.prevMouseY);
        this.context.lineTo(b, a);
        this.context.stroke();
			
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    strokeEnd: function() {
			this.context.globalCompositeOperation = "source-over"
		}
};

function glitter(a) {
    this.init(a)
}
glitter.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
		brushSize: null,
		shadeVariance: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over"
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a;
				this.brushSize = BRUSH_SIZE;
				if (this.brushSize < 4) {
					this.brushSize = 4;
				}
				this.shadeVariance = 0;
    },
    stroke: function(b, a) {
				var i;
				var x = b;
				var y = a;
				var rad = 4;
				for (i = 0; i < randomIntegerBetween(30, 40); i++) {
					this.shadeVariance = randomIntegerBetween(-20,20);
					this.context.fillStyle = "rgba(" + TRIM2255(+COLOR[0] + +this.shadeVariance) + ", " + TRIM2255(+COLOR[1] + +this.shadeVariance) + ", " + TRIM2255(+COLOR[2] + +this.shadeVariance) + "," + Math.random() + ")";
					x = x + randomIntegerBetween(-(BRUSH_SIZE/4), +(BRUSH_SIZE/4));
					y = y + randomIntegerBetween(-(BRUSH_SIZE/4), +(BRUSH_SIZE/4));
					rad = randomIntegerBetween(BRUSH_SIZE/8, BRUSH_SIZE/4);
					this.context.beginPath();
					this.context.arc(x, y, rad/2, 0, 2 * Math.PI);
					this.context.fill();
				}
				console.log("# of dots="+i);
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    strokeEnd: function() {}
};

function watercolor(a) {
    this.init(a)
}
watercolor.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over"
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a;
    },
    stroke: function(b, a) {
				var i;
				var x = b;
				var y = a;
				var x2 = this.prevMouseX;
				var y2 = this.prevMouseY;
				var rad = 4;
				var brushSize = BRUSH_SIZE;
				if (brushSize < 4) {
					brushSize = 4;
				}
				console.log("brushSize="+brushSize);
			
				for (i = 0; i < randomIntegerBetween(5, 10); i++) {
					this.context.lineCap = "round";
					x = b + randomIntegerBetween(-(brushSize/2), +(brushSize/2));
					y = a + randomIntegerBetween(-(brushSize/2), +(brushSize/2));
					
					x2 = this.prevMouseX + randomIntegerBetween(-(brushSize/2), +(brushSize/2));
					y2 = this.prevMouseY + randomIntegerBetween(-(brushSize/2), +(brushSize/2));
					
					this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + "," + .1 + ")";
					this.context.lineWidth = randomIntegerBetween(brushSize/2, brushSize);
					this.context.beginPath();
					this.context.moveTo(x2, y2);
					this.context.lineTo(x, y);
					this.context.stroke();
				}
				
				console.log("# of dots="+i);
        this.prevMouseX = b;
        this.prevMouseY = a
    },
    strokeEnd: function() {}
};

function zigzag(a) {
    this.init(a)
}
zigzag.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
		prevLineX: null,
		prevLineY: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over"
				console.log('Zigzag Init');
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a;
				this.prevLineX = b;
				this.prevLineY = a;
				console.log('Zigzag Stroke Start');
    },
    stroke: function(b, a) {
			var x = b;
			var y = a;
			var maxDev = 12;
			maxDev = Math.hypot(b - this.prevMouseX, a - this.prevMouseY)
			if (maxDev > BRUSH_SIZE) {
			console.log('Zigzag Stroke');
			
			this.context.lineCap = "round";
			x = b + randomIntegerBetween(-(maxDev), +(maxDev));
			y = a + randomIntegerBetween(-(maxDev), +(maxDev));
			
			this.context.strokeStyle = "rgba(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2] + "," + BRUSH_PRESSURE *.7 + ")";
			this.context.lineWidth = BRUSH_SIZE;
			this.context.beginPath();
			this.context.moveTo(this.prevLineX, this.prevLineY);
			this.context.lineTo(x, y);
			this.context.stroke();
			
			this.prevMouseX = b;
      this.prevMouseY = a;
			this.prevLineX = x;
			this.prevLineY = y;
			}
    },
    strokeEnd: function() {}
};

function calligraphy(a) {
    this.init(a)
}
calligraphy.prototype = {
    context: null,
    prevMouseX: null,
    prevMouseY: null,
		prevLineX: null,
		prevLineY: null,
    init: function(a) {
        this.context = a;
        this.context.globalCompositeOperation = "source-over"
    },
    destroy: function() {},
    strokeStart: function(b, a) {
        this.prevMouseX = b;
        this.prevMouseY = a;
    },
    stroke: function(b, a) {
			var brushSize = 6;
			if (BRUSH_SIZE > 6) {
				brushSize = BRUSH_SIZE;
			}
			this.context.lineWidth = 1;
			this.context.strokeStyle = "rgb(" + COLOR[0] + ", " + COLOR[1] + ", " + COLOR[2]+ ")";
			var i;
			for (i = 0; i < brushSize; i++) {
				var x = +b + +i;
				var prevX = +this.prevMouseX + +i;
				this.context.beginPath();
				this.context.moveTo(this.prevMouseX + i, this.prevMouseY - (i/2));
				this.context.lineTo(b + i, a - (i/2));
				this.context.stroke();
			}
			this.prevMouseX = b;
		  this.prevMouseY = a;
    },
    strokeEnd: function() {}
};
//end add

function randomIntegerBetween(min, max) {
    return Math.floor(Math.random() * (+max - +min + +1)) + +min;
}

function TRIM2255(num) {
	if(num > 255){
		return 255;
	} else if (num < 0) {
		return 0;
	} else {
		return num;
	}
}

function HSB2RGB(j, d, c) {
    var e, g, l, h, k, b, a, m;
    if (c == 0) {
        return [0, 0, 0]
    }
    j *= 0.016666667;
    d *= 0.01;
    c *= 0.01;
    h = Math.floor(j);
    k = j - h;
    b = c * (1 - d);
    a = c * (1 - (d * k));
    m = c * (1 - (d * (1 - k)));
    switch (h) {
        case 0:
            e = c;
            g = m;
            l = b;
            break;
        case 1:
            e = a;
            g = c;
            l = b;
            break;
        case 2:
            e = b;
            g = c;
            l = m;
            break;
        case 3:
            e = b;
            g = a;
            l = c;
            break;
        case 4:
            e = m;
            g = b;
            l = c;
            break;
        case 5:
            e = c;
            g = b;
            l = a;
            break
    }
    return [e, g, l]
}

function RGB2HSB(c, d, k) {
    var j, h, e, g, b, a;
    j = Math.min(Math.min(c, d), k);
    a = Math.max(Math.max(c, d), k);
    if (j == a) {
        return [0, 0, a * 100]
    }
    h = (c == j) ? d - k : ((d == j) ? k - c : c - d);
    e = (c == j) ? 3 : ((d == j) ? 5 : 1);
    g = Math.floor((e - h / (a - j)) * 60) % 360;
    b = Math.floor(((a - j) / a) * 100);
    a = Math.floor(a * 100);
    return [g, b, a]
}

function isHidden(a) {
    return (a.offsetParent === null)
}

function ColorSelector(a) {
    this.init(a)
}
ColorSelector.prototype = {
    container: null,
    color: [0, 0, 0],
    hueSelector: null,
    luminosity: null,
    luminosityData: null,
    luminositySelector: null,
    luminosityPosition: null,
    dispatcher: null,
    changeEvent: null,
    init: function(k) {
        var m = this,
            b, g, d;
        this.container = document.createElement("div");
        this.container.style.position = "absolute";
        this.container.style.width = "250px";
        this.container.style.height = "250px";
        this.container.style.visibility = "hidden";
        this.container.style.cursor = "pointer";
        this.container.addEventListener("mousedown", l, false);
        this.container.addEventListener("touchstart", f, false);
        g = document.createElement("canvas");
        g.width = k.width;
        g.height = k.height;
        b = g.getContext("2d");
        b.drawImage(k, 0, 0, g.width, g.height);
        d = b.getImageData(0, 0, g.width, g.height).data;
        this.container.appendChild(g);
        this.luminosity = document.createElement("canvas");
        this.luminosity.style.position = "absolute";
        this.luminosity.style.left = "0px";
        this.luminosity.style.top = "0px";
        this.luminosity.width = 250;
        this.luminosity.height = 250;
        this.container.appendChild(this.luminosity);
        this.hueSelector = document.createElement("canvas");
        this.hueSelector.style.position = "absolute";
        this.hueSelector.style.left = ((g.width - 15) / 2) + "px";
        this.hueSelector.style.top = ((g.height - 15) / 2) + "px";
        this.hueSelector.width = 15;
        this.hueSelector.height = 15;
        b = this.hueSelector.getContext("2d");
        b.lineWidth = 2;
        b.strokeStyle = "rgba(0, 0, 0, 0.5)";
        b.beginPath();
        b.arc(8, 8, 6, 0, Math.PI * 2, true);
        b.stroke();
        b.strokeStyle = "rgba(256, 256, 256, 0.8)";
        b.beginPath();
        b.arc(7, 7, 6, 0, Math.PI * 2, true);
        b.stroke();
        this.container.appendChild(this.hueSelector);
        this.luminosityPosition = [(k.width - 15), (k.height - 15) / 2];
        this.luminositySelector = document.createElement("canvas");
        this.luminositySelector.style.position = "absolute";
        this.luminositySelector.style.left = (this.luminosityPosition[0] - 7) + "px";
        this.luminositySelector.style.top = (this.luminosityPosition[1] - 7) + "px";
        this.luminositySelector.width = 15;
        this.luminositySelector.height = 15;
        b = this.luminositySelector.getContext("2d");
        b.drawImage(this.hueSelector, 0, 0, this.luminositySelector.width, this.luminositySelector.height);
        this.container.appendChild(this.luminositySelector);
        this.dispatcher = document.createElement("div");
        this.changeEvent = document.createEvent("Events");
        this.changeEvent.initEvent("change", true, true);

        function l(n) {
            window.addEventListener("mousemove", c, false);
            window.addEventListener("mouseup", h, false);
            e(n.clientX - m.container.offsetLeft, n.clientY - m.container.offsetTop)
        }

        function c(n) {
            e(n.clientX - m.container.offsetLeft, n.clientY - m.container.offsetTop)
        }

        function h(n) {
            window.removeEventListener("mousemove", c, false);
            window.removeEventListener("mouseup", h, false);
            e(n.clientX - m.container.offsetLeft, n.clientY - m.container.offsetTop)
        }

        function f(n) {
            if (n.touches.length == 1) {
                n.preventDefault();
                window.addEventListener("touchmove", a, false);
                window.addEventListener("touchend", j, false);
                e(n.touches[0].pageX - m.container.offsetLeft, n.touches[0].pageY - m.container.offsetTop)
            }
        }

        function a(n) {
            if (n.touches.length == 1) {
                n.preventDefault();
                e(n.touches[0].pageX - m.container.offsetLeft, n.touches[0].pageY - m.container.offsetTop)
            }
        }

        function j(n) {
            if (n.touches.length == 0) {
                n.preventDefault();
                window.removeEventListener("touchmove", a, false);
                window.removeEventListener("touchend", j, false)
            }
        }

        function e(o, t) {
            var q, p, r, n, s;
            q = o - 125;
            p = t - 125;
            r = Math.sqrt(q * q + p * p);
            if (r < 90) {
                m.hueSelector.style.left = (o - 7) + "px";
                m.hueSelector.style.top = (t - 7) + "px";
                m.updateLuminosity([d[(o + (t * 250)) * 4], d[(o + (t * 250)) * 4 + 1], d[(o + (t * 250)) * 4 + 2]])
            } else {
                if (r > 100) {
                    n = q / r;
                    s = p / r;
                    m.luminosityPosition[0] = (n * 110) + 125;
                    m.luminosityPosition[1] = (s * 110) + 125;
                    m.luminositySelector.style.left = (m.luminosityPosition[0] - 7) + "px";
                    m.luminositySelector.style.top = (m.luminosityPosition[1] - 7) + "px"
                }
            }
            o = Math.floor(m.luminosityPosition[0]);
            t = Math.floor(m.luminosityPosition[1]);
            m.color[0] = m.luminosityData[(o + (t * 250)) * 4];
            m.color[1] = m.luminosityData[(o + (t * 250)) * 4 + 1];
            m.color[2] = m.luminosityData[(o + (t * 250)) * 4 + 2];
            m.dispatchEvent(m.changeEvent)
        }
    },
    show: function() {
        this.container.style.visibility = "visible"
    },
    hide: function() {
        this.container.style.visibility = "hidden"
    },
    getColor: function() {
        return this.color
    },
    setColor: function(c) {
        var a, e, f, d, b = Math.PI / 180;
        this.color = c;
        a = RGB2HSB(c[0] / 255, c[1] / 255, c[2] / 255);
        e = a[0] * b;
        f = (a[1] / 100) * 90;
        this.hueSelector.style.left = ((Math.cos(e) * f + 125) - 7) + "px";
        this.hueSelector.style.top = ((Math.sin(e) * f + 125) - 7) + "px";
        d = HSB2RGB(a[0], a[1], 100);
        d[0] *= 255;
        d[1] *= 255;
        d[2] *= 255;
        this.updateLuminosity(d);
        e = (a[2] / 100) * 360 * b;
        this.luminosityPosition[0] = (Math.cos(e) * 110) + 125;
        this.luminosityPosition[1] = (Math.sin(e) * 110) + 125;
        this.luminositySelector.style.left = (this.luminosityPosition[0] - 7) + "px";
        this.luminositySelector.style.top = (this.luminosityPosition[1] - 7) + "px";
        this.dispatchEvent(this.changeEvent)
    },
    updateLuminosity: function(j) {
        var d, f, l, g, p, b, a, o = 100,
            h = 120,
            k, n = 1080 / 2,
            e = 1 / n,
            c = Math.PI / 180,
            m = (n / 360);
        b = this.luminosity.width / 2;
        a = this.luminosity.height / 2;
        d = this.luminosity.getContext("2d");
        d.lineWidth = 3;
        d.clearRect(0, 0, this.luminosity.width, this.luminosity.height);
        for (k = 0; k < n; k++) {
            f = k / m * c;
            l = Math.cos(f);
            g = Math.sin(f);
            p = 255 - (k * e) * 255;
            d.strokeStyle = "rgb(" + Math.floor(j[0] - p) + "," + Math.floor(j[1] - p) + "," + Math.floor(j[2] - p) + ")";
            d.beginPath();
            d.moveTo(l * o + b, g * o + a);
            d.lineTo(l * h + b, g * h + a);
            d.stroke()
        }
        this.luminosityData = d.getImageData(0, 0, this.luminosity.width, this.luminosity.height).data
    },
    addEventListener: function(b, c, a) {
        this.dispatcher.addEventListener(b, c, a)
    },
    dispatchEvent: function(a) {
        this.dispatcher.dispatchEvent(a)
    },
    removeEventListener: function(b, c, a) {
        this.dispatcher.removeEventListener(b, c, a)
    }
};

function Palette() {
    var e, d, b, a, n = 90,
        m = 1080,
        f = 1 / m,
        l = m / 360,
        c = Math.PI / 180,
        j, h, k, g, o;
    e = document.createElement("canvas");
    e.width = 250;
    e.height = 250;//changed from 250 05/01/17 BertrandtheHealer
    b = e.width / 2;
    a = 250 / 2;//changed to 250 from e.height 05/01/17 BertrandtheHealer
    d = e.getContext("2d");
    d.lineWidth = 1;
    for (j = 0; j < m; j++) {
        h = j / l * c;
        k = Math.cos(h);
        g = Math.sin(h);
        d.strokeStyle = "hsl(" + Math.floor((j * f) * 360) + ", 100%, 50%)";
        d.beginPath();
        d.moveTo(k + b, g + a);
        d.lineTo(k * n + b, g * n + a);
        d.stroke()
    }
    o = d.createRadialGradient(b, b, 0, b, b, n);
    o.addColorStop(0, "rgba(255, 255, 255, 1)");
    o.addColorStop(1, "rgba(255, 255, 255, 0)");
    d.fillStyle = o;
    d.fillRect(0, 0, e.width, e.height);
    return e
}

function Menu() {
    this.init()
}
Menu.prototype = {
    container: null,
    foregroundColor: null,
    backgroundColor: null,
    selector: null,
    save: null,
    clear: null,
    pointerSize: null,//added 05/01/17 BertrandtheHealer
    resetButton: null,//added 05/01/17 BertrandtheHealer
    files: null,//added 05/01/17 BertrandtheHealer
    fileButton: null,//added 05/02/17 BertrandtheHealer
    Dialog: null,//added 05/01/17 BertrandtheHealer
    about: null,
    init: function() {
        var b, c, d, e = 17,
            a = 17;
        this.container = document.createElement("div");
        this.container.className = "gui";
        this.container.id = "Menu";
        this.container.style.position = "absolute";
        this.container.style.top = "0px";
				this.draghandle = document.createElement('span');
				this.draghandle.innerHTML = '  \u22EE  ';
				this.draghandle.id = "DragHandle";
				this.draghandle.style.cursor = "move";
				this.draghandle.title = "Drag to move menu";
        this.container.appendChild(this.draghandle);
        this.foregroundColor = document.createElement("canvas");
        this.foregroundColor.style.marginBottom = "-3px";
        this.foregroundColor.style.cursor = "pointer";
        this.foregroundColor.width = e;
        this.foregroundColor.height = a;
        this.foregroundColor.title = "Change Foreground Color (or press 'shift')";//added 05/01/17 BertrandtheHealer
        this.container.appendChild(this.foregroundColor);
        this.setForegroundColor(COLOR);
        c = document.createTextNode(" ");
        this.container.appendChild(c);
        this.backgroundColor = document.createElement("canvas");
        this.backgroundColor.style.marginBottom = "-3px";
        this.backgroundColor.style.cursor = "pointer";
        this.backgroundColor.width = e;
        this.backgroundColor.height = a;
        this.backgroundColor.title = "Change Background Color";//added 05/01/17 BertrandtheHealer
        this.container.appendChild(this.backgroundColor);
        this.setBackgroundColor(BACKGROUND_COLOR);
        c = document.createTextNode(" ");
        this.container.appendChild(c);
        //begin add 05/01/17 BertrandtheHealer
        this.fileButton = document.createElement("span");
        this.fileButton.className = "button";
        this.fileButton.id = "fileButton";
        this.fileButton.innerHTML = "Upl<u style='color:white'>o</u>ad";
        this.fileButton.title = "Load image as background (or press 'o)";
        if (IOS){//if the browser is ios the button won't work so hide it
          this.fileButton.style = "display:none;";
          this.fileButton.style.visibility = "hidden";
          this.fileButton.style.display = "none";
				}
        this.container.appendChild(this.fileButton);
        this.files = document.createElement("input");
        this.files.type = "file";
        this.files.id = "files";
				if (!IOS){//if the browser is ios the button won't work so show the picker
          this.files.style = "display:none;";
					this.files.style.visibility = "hidden";
          this.files.style.display = "none";
				}
        this.files.title = "Load image as background(or press 'o)";
        this.container.appendChild(this.files);
        c = document.createTextNode(" ");
        this.container.appendChild(c);
				//reduce brush size
				this.reduceBrush = document.createElement("span");
        this.reduceBrush.className = "button";
        this.reduceBrush.id = "reduceBrush";
        this.reduceBrush.innerHTML = "<";
        this.reduceBrush.title = "Reduce brush size";//added 05/01/17 BertrandtheHealer
        this.container.appendChild(this.reduceBrush);
				//brush size indicator
        this.pointerSize = document.createElement("span");
        this.pointerSize.className = "button";
        this.pointerSize.id = "pointerSize";
        this.pointerSize.innerHTML = "1px";
        this.pointerSize.title = "Brush Size (change using up and down arrow keys)";//added 05/01/17 BertrandtheHealer
        this.container.appendChild(this.pointerSize);
				//increase brush size
				this.increaseBrush = document.createElement("span");
        this.increaseBrush.className = "button";
        this.increaseBrush.id = "increaseBrush";
        this.increaseBrush.innerHTML = ">";
        this.increaseBrush.title = "Increase brush size";//added 05/01/17 BertrandtheHealer
        this.container.appendChild(this.increaseBrush);
        c = document.createTextNode(" ");
        this.container.appendChild(c);
        //end add
        this.selector = document.createElement("select");
				
        for (i = 0; i < BRUSHES.length; i++) {
					b = document.createElement("option");
					b.id = i;
					b.innerHTML = BRUSHES[i].toUpperCase();
					if (!BRUSHES[i]){
						b.disabled = true;
					}
					if (IOS && BRUSHES[i].toUpperCase() == "GRID") {
						b.disabled = true;
					}
					this.selector.appendChild(b)
        }
        this.selector.title = "Change Brush Styles";//added 05/01/17 BertrandtheHealer
        this.container.appendChild(this.selector);
        d = document.createTextNode(" | ");
        this.container.appendChild(d);
        this.save = document.createElement("span");
        this.save.className = "button";
        this.save.innerHTML = "<u style='color:white'>S</u>ave";
        this.save.title = "Save Canvas (or press 's')";//added 05/01/17 BertrandtheHealer
        this.container.appendChild(this.save);
        c = document.createTextNode(" ");
        this.container.appendChild(c);
        this.clear = document.createElement("Clear");
        this.clear.className = "button";
        this.clear.innerHTML = "<u style='color:white'>C</u>lear";
        this.clear.title = "Clear Canvas (or press 'delete')";//added 05/01/17 BertrandtheHealer
        this.container.appendChild(this.clear);
        //begin add 05/01/17 BertrandtheHealer
			  c = document.createTextNode(" ");
        this.container.appendChild(c);
		    this.resetButton = document.createElement("span");
        this.resetButton.className = "button";
			  this.resetButton.id = "resetButton";
        this.resetButton.innerHTML = "<u style='color:white'>R</u>eset";
			  this.resetButton.title = "Reset Colors and Brush Size (or press 'r')";//added 05/01/17 BertrandtheHealer
        if (IOS) {
					this.resetButton.style.visibility = "hidden";
					this.resetButton.style.display = "none";
				}
				this.container.appendChild(this.resetButton);
				//end add
        d = document.createTextNode(" | ");
        this.container.appendChild(d);
        this.about = document.createElement("About");
        this.about.className = "button";
        this.about.innerHTML = "<u style='color:white'>A</u>bout";
				this.about.title = "Information about this application";
        this.container.appendChild(this.about);
				this.draghandle2 = document.createElement('span');
				this.draghandle2.innerHTML = '  \u22EE  ';
				this.draghandle2.id = "DragHandle2";
				this.draghandle2.style.cursor = "move";
				this.draghandle2.title = "Drag to move menu";
        this.container.appendChild(this.draghandle2);
    },
    setForegroundColor: function(a) {
        var b = this.foregroundColor.getContext("2d");
				b.fillStyle = "rgb(0, 0, 0)";
        b.fillRect(0, 0, this.foregroundColor.width, this.foregroundColor.height);
        b.fillStyle = "rgb(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
        b.fillRect(1, 1, this.foregroundColor.width-2, this.foregroundColor.height-2);
        
    },
    setBackgroundColor: function(a) {
        var b = this.backgroundColor.getContext("2d");
				b.fillStyle = "rgb(0, 0, 0)";
        b.fillRect(0, 0, this.backgroundColor.width, this.backgroundColor.height);
        b.fillStyle = "rgb(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
        b.fillRect(1, 1, this.backgroundColor.width-2, this.backgroundColor.height-2);
				
    }
};

function About() {
    this.init()
}
About.prototype = {
    container: null,
    init: function() {
        var b, a;
        this.container = document.createElement("div");
        this.container.className = "gui";
        this.container.id = "About";
        this.container.style.position = "absolute";
        this.container.style.top = "0px";
        this.container.style.visibility = "hidden";
        a = document.createElement("div");
        a.style.margin = "10px 10px";
        a.style.textAlign = "left";
        this.container.appendChild(a);
        b = document.createElement("p");
        b.style.textAlign = "center";
        b.innerHTML = '<strong>SKETCHY</strong> Version ' + REV + ' by <a href="https://github.com/BertrandtheHealer" target="_blank">BertrandtheHealer</a></br>an improved version of <strong>HARMONY</strong> by <a href="http://twitter.com/mrdoob" target="_blank">Mr.doob</a>';//added 05/01/17 BertrandtheHealer
        a.appendChild(b);
				
        b = document.createElement("hr");//edited 05/01/17 BertrandtheHealer
        a.appendChild(b);//edited 05/01/17 BertrandtheHealer
        b = document.createElement("p");
        b.style.textAlign = "center";
        b.innerHTML = 'Shortcuts: </br><span class="key" onclick="increaseBrush();">UP</span>: increase brush size</br><span class="key" onclick="decreaseBrush();">DOWN</span>: decrease brush size</br><span class="key">LEFT</span> default brush size<br /><span class="key">SHIFT</span>: open foreground color picker<br /><span class="key" onclick="moveMenu();">TAB</span>: move menu out of the way<br /><span class="key">S</span>: download image<br /><span class="key">R</span>: reset brush<br /><span class="key">O</span>: upload background image<br /><span class="key">BACKSPACE</span> or <span class="key">C</span>: clear canvas<br /><span class="key">ESC</span>: close about window/color selector<br /><span class="key">CTRL+CLICK</span>: set brush color from image<br /><span class="key">SCROLL</span>: change brush size<br />Drag <span class="key">\u22EE</span>s to move menu<br /><br/><a onclick="writeBackgroundData();" style="cursor:pointer;"><u>Brush Examples</u></a>';//changed to reflect code additions/changes - 05/01/17 BertrandtheHealer, 04/07/18 BertrandtheHealer
        a.appendChild(b);
        b = document.createElement("hr");//edited 05/01/17 BertrandtheHealer
        a.appendChild(b);//edited 05/01/17 BertrandtheHealer
        b = document.createElement("p");
        b.style.textAlign = "center";
        b.innerHTML = '<a href="http://mrdoob.com/projects/harmony/" target="_blank">Original App</a> | <a href="https://github.com/sketchier/sketchier.github.io" target="_blank">Source Code</a>';//edited 05/01/17 BertrandtheHealer
        a.appendChild(b);
        b = document.createElement("hr");
        a.appendChild(b);
        b = document.createElement("p");
				b.style.textAlign = "center";
        b.innerHTML = "Please support Mr.doob:";//changed 05/01/17 BertrandtheHealer
        a.appendChild(b);
        b = document.createElement("p");
        b.style.textAlign = "center";
        b.innerHTML = '<a href="http://flattr.com/thing/288/Harmony" target="_blank"><img src="https://api.flattr.com/button/button-compact-static-100x17.png" alt="Flattr this" title="Flattr this" border="0" /></a> <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="VY7767JMMMYM4"><input type="image" src="https://www.paypal.com/en_GB/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online."><img alt="" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1"></form>';
        a.appendChild(b)
    },
    show: function() {
        this.container.style.visibility = "visible"
    },
    hide: function() {
        this.container.style.visibility = "hidden"
    }
};
const REV = 8,
    BRUSHES = ["sketchy", "shaded", "chrome", "fur", "longfur", "web", "", "simple", "squares", "ribbon", "", "rainbow", "dots", "glitter", "watercolor", "zigzag", "calligraphy", "", "circles", "grid", "", "eraser"],
    USER_AGENT = navigator.userAgent.toLowerCase();
var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    BRUSH_SIZE = 1,
    BRUSH_PRESSURE = 1,
    IOS = false,
		android = false,
		chrome = false,
    COLOR = [0, 0, 0],
    BACKGROUND_COLOR = [250, 250, 250],
    STORAGE = window.localStorage,
    brush, saveTimeOut, wacom, i, mouseX = 0,
    mouseY = 0,
    container, foregroundColorSelector, backgroundColorSelector, menu, about, canvas, flattenCanvas, context, isFgColorSelectorVisible = false,
    isBgColorSelectorVisible = false,
    isAboutVisible = false,
    isMenuMouseOver = false,
    shiftKeyIsDown = false,
		clickToDraw = false,
    altKeyIsDown = false;
init();

function init() {
    var hash, palette, embed, localStorageImage;
    if (USER_AGENT.search("android") > -1 || USER_AGENT.search("iphone") > -1) {
        BRUSH_SIZE = 2
    }
		STORAGE = isLocalStorageSupported();
    var isChromium = window.chrome,
			winNav = window.navigator,
			vendorName = winNav.vendor,
			isOpera = USER_AGENT.indexOf("OPR") > -1,
			isIEedge = USER_AGENT.indexOf("Edge") > -1,
            isIOSChrome = USER_AGENT.match("CriOS"),
            isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
			if(isIOSChrome){
				chrome = false;
				alert("You are not using Google Chrome. This website may not function properly");
			} else if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
				chrome = true;
			} else if(isFirefox){}else{
				chrome = false;
				alert("Use the most recent Chrome or Firefox browser for better functionality");
			}
    if (/ipad|iphone|ipod/.test(USER_AGENT) && !window.MSStream) {
      IOS = true;
    }
		if (/Android/.test(navigator.userAgent)) {
			android = true;
		}
    container = document.createElement("div");
    document.body.appendChild(container);
    canvas = document.createElement("canvas");
		canvas.id = "canvas";
		canvas.style.position = "absolute";
    canvas.style.top = "0px";
		canvas.style.left = "0px";
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    canvas.style.cursor = "crosshair";
    container.appendChild(canvas);
    context = canvas.getContext("2d");
    flattenCanvas = document.createElement("canvas");
    flattenCanvas.width = SCREEN_WIDTH;
    flattenCanvas.height = SCREEN_HEIGHT;
    palette = new Palette();
    foregroundColorSelector = new ColorSelector(palette);
    foregroundColorSelector.addEventListener("change", onForegroundColorSelectorChange, false);
    container.appendChild(foregroundColorSelector.container);
    backgroundColorSelector = new ColorSelector(palette);
    backgroundColorSelector.addEventListener("change", onBackgroundColorSelectorChange, false);
    container.appendChild(backgroundColorSelector.container);
    menu = new Menu();
    if (!IOS && !android) {//added 05/01/17 BertrandtheHealer
      //in safari on ios, click events are generated on touchend
      menu.foregroundColor.addEventListener("click", onMenuForegroundColor, false);
      menu.backgroundColor.addEventListener("click", onMenuBackgroundColor, false);
      menu.save.addEventListener("click", onMenuSave, false);
      menu.clear.addEventListener("click", onMenuClear, false);
      menu.about.addEventListener("click", onMenuAbout, false);
      menu.pointerSize.addEventListener("click", onMenuPointerSize, false);//added 05/01/17 BertrandtheHealer
      menu.resetButton.addEventListener("click", onMenuReset, false);//added 05/01/17 BertrandtheHealer
      menu.fileButton.addEventListener("click", onMenuFile, false);//added 05/01/17 BertrandtheHealer
			menu.increaseBrush.addEventListener("click", increaseBrush, false)//added 05/16/17 BertrandtheHealer
			menu.reduceBrush.addEventListener("click", decreaseBrush, false)//added 05/16/17 BertrandtheHealer
    }
    menu.foregroundColor.addEventListener("touchend", onMenuForegroundColor, false);
    menu.backgroundColor.addEventListener("touchend", onMenuBackgroundColor, false);
    menu.save.addEventListener("touchend", onMenuSave, false);
    menu.clear.addEventListener("touchend", onMenuClear, false);
    menu.about.addEventListener("touchend", onMenuAbout, false);
    menu.pointerSize.addEventListener("touchend", onMenuPointerSize, false);
    menu.resetButton.addEventListener("touchend", onMenuReset, false);
    menu.fileButton.addEventListener("touchend", onMenuFile, false);//added 05/01/17 BertrandtheHealer
		menu.increaseBrush.addEventListener("touchend", increaseBrush, false)//added 05/16/17 BertrandtheHealer
		menu.reduceBrush.addEventListener("touchend", decreaseBrush, false)//added 05/16/17 BertrandtheHealer
    menu.selector.addEventListener("change", onMenuSelectorChange, false);
    menu.files.addEventListener('change', handleFileSelect, false);
    menu.container.addEventListener("mouseover", onMenuMouseOver, false);
    menu.container.addEventListener("mouseout", onMenuMouseOut, false);
    container.appendChild(menu.container);
    if (STORAGE) {
        if (localStorage.canvas) {
            localStorageImage = new Image();
            localStorageImage.addEventListener("load", function(event) {
                localStorageImage.removeEventListener(event.type, arguments.callee, false);
                context.drawImage(localStorageImage, 0, 0)
            }, false);
            localStorageImage.src = localStorage.canvas
        }
        if (localStorage.brush_color_red) {
            COLOR[0] = localStorage.brush_color_red;
            COLOR[1] = localStorage.brush_color_green;
            COLOR[2] = localStorage.brush_color_blue
        }
        if (localStorage.background_color_red) {
            BACKGROUND_COLOR[0] = localStorage.background_color_red;
            BACKGROUND_COLOR[1] = localStorage.background_color_green;
            BACKGROUND_COLOR[2] = localStorage.background_color_blue
        }
				if (localStorage.brushSize) {
					BRUSH_SIZE = localStorage.brushSize;
					setBrushSize(BRUSH_SIZE);
				}
        document.body.style.backgroundImage = localStorage.bgimage;//added 05/03/17 BertrandtheHealer
    }
    foregroundColorSelector.setColor(COLOR);
		if (!document.body.style.backgroundImage) {
			backgroundColorSelector.setColor(BACKGROUND_COLOR);
		}
    if (window.location.hash) {
        hash = window.location.hash.substr(1, window.location.hash.length);
        for (i = 0; i < BRUSHES.length; i++) {
            if (hash == BRUSHES[i]) {
                brush = eval("new " + BRUSHES[i] + "(context)");
                menu.selector.selectedIndex = i;
                break
            }
        }
    }
    if (!brush) {
        brush = eval("new " + BRUSHES[0] + "(context)")
    }
    about = new About();
    container.appendChild(about.container);
    window.addEventListener("mousemove", onWindowMouseMove, false);
    window.addEventListener("mousewheel", onWindowMouseWheel, false);
    window.addEventListener("DOMMouseScroll", onWindowMouseWheel, false);
    window.addEventListener("resize", onWindowResize, false);
		window.addEventListener("orientationchange", onWindowResize, false);
    window.addEventListener("keydown", function(event){event.preventDefault();onWindowKeyDown(event);}, false);
    window.addEventListener("keyup", onWindowKeyUp, false);
    window.addEventListener("blur", onWindowBlur, false);
		window.addEventListener("beforeunload", beforeUnload, false);
    document.addEventListener("mousedown", onDocumentMouseDown, false);
    document.addEventListener("mouseout", onDocumentMouseOut, false);
    canvas.addEventListener("mousedown", onCanvasMouseDown, false);
    canvas.addEventListener("touchstart", onCanvasTouchStart, false);
    onWindowResize(null);
}

function isLocalStorageSupported() {
  var testKey = 'test', storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

function beforeUnload() {
	if (STORAGE) {
		saveToLocalStorage();
	}
}

function onWindowMouseMove(a) {
    mouseX = a.clientX;
    mouseY = a.clientY;
}

function onWindowMouseWheel(e) {
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if(delta == 1){
            increaseBrush();
        }else if(delta == -1){
            decreaseBrush();
        }
        return false;
}

function onWindowResize() {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    menu.container.style.left = ((SCREEN_WIDTH - menu.container.offsetWidth) / 2) + "px";
    about.container.style.maxHeight = SCREEN_HEIGHT-20+"px";
    about.container.style.left = ((SCREEN_WIDTH - about.container.offsetWidth) / 2) + "px";
    about.container.style.top = ((SCREEN_HEIGHT - about.container.offsetHeight) / 2) + "px";
}

function increaseBrush() {//added 05/01/17 BertrandtheHealer
	setBrushSize(+BRUSH_SIZE + +1);
}

function decreaseBrush() {//added 05/01/17 BertrandtheHealer
  setBrushSize(+BRUSH_SIZE - +1);
}

function onWindowKeyDown(a) {
    if (shiftKeyIsDown) {
        return
    }
    switch (a.keyCode) {
        case 16:
            shiftKeyIsDown = true;
            foregroundColorSelector.container.style.left = mouseX - 125 + "px";
            foregroundColorSelector.container.style.top = mouseY - 125 + "px";
            foregroundColorSelector.container.style.visibility = "visible";
            break;
        case 17://ctrl key - changed from 18(alt key) 04/07/18 BertrandtheHealer
            altKeyIsDown = true;
            break;
        case 40://down arrow - changed from 'd' 05/01/16 BertrandtheHealer
            decreaseBrush();
            break;
        case 38://up arrow - changed from 'f' 05/01/16 BertrandtheHealer
				  increaseBrush();
          break
        case 37://left arrow - added 05/01/16 BertrandtheHealer
          setBrushSize(1);
          break
        case 8://delete key pressed - added by BertrandtheHealer 05/01/17
          onMenuClear();//promt the user to clear canvas
          break
        case 82://r key pressed: reset pointer color - added by BertrandtheHealer 05/01/17
          onMenuReset();
          break
        case 27://esc key pressed: reset pointer color - added by BertrandtheHealer 05/01/17
          cleanPopUps();
          break
        case 79://o key pressed: load background image- added by BertrandtheHealer 05/01/17
          onMenuFile();
          break
        case 83://s key pressed: save image- added by BertrandtheHealer 05/01/17
	        onMenuSave();
          break
        case 9://tab key press: move menu - 05/06/17 BertrandtheHealer
	        moveMenu();
          break
			  case 67:// c key pressed: switch clickToDraw - 05/17/17 BertrandtheHealer
				  clickToDraw = !clickToDraw;
					onMenuClear();
					break
				case 65://a key pressed: open about menubar
					onMenuAbout();
					break
                 case 48: //0 key pressed:
                    BRUSH_PRESSURE = 1;
                    break;
        
                case 49: //1 key pressed:											
                    BRUSH_PRESSURE = 0.1;
                    break;
        
                case 50: //2 key pressed:
                    BRUSH_PRESSURE = 0.2;
                    break;
        
                case 51: //3 key pressed: 
                    BRUSH_PRESSURE = 0.3;
                    break;
        
                case 52: //4 key pressed:
                    BRUSH_PRESSURE = 0.4;
                    break;
        
                case 53: //5 key pressed:
                    BRUSH_PRESSURE = 0.5;
                    break;
        
                case 54: //6 ksy pressed:
                    BRUSH_PRESSURE = 0.6;
                    break;
        
                case 55: //7 key pressed:
                    BRUSH_PRESSURE = 0.7;
                    break;
        
                case 56: //8 key pressed:
                    BRUSH_PRESSURE = 0.8;
                    break;
        
                case 57: //9 key pressed:
                    BRUSH_PRESSURE = 0.9;
                    break;            
    }
}

//added 05/16/17 BertrandtheHealer
function setBrushSize(pixels){
	if (pixels < 1) {
		BRUSH_SIZE = 1;
		document.getElementById("pointerSize").innerHTML = "1px";//added 05/01/17 BertrandtheHealer
	}else{
		BRUSH_SIZE=pixels;
	  document.getElementById("pointerSize").innerHTML = pixels+"px";//added 05/01/17 BertrandtheHealer
	}
	if (STORAGE){
		localStorage.brushSize = BRUSH_SIZE;
	}
}
//end add

function moveMenu() {
	if (menu.container.style.top == "0px") {
            menu.container.style.top = "40px";
	  }else{
            menu.container.style.top = "0px";
	  }
}

function onWindowKeyUp(event) {
    switch (event.keyCode) {
        case 16:
            shiftKeyIsDown = false;
            foregroundColorSelector.container.style.visibility = "hidden";
            break;
        case 17://ctrl key, changed from 18 (alt key) 04/07/18 BertrandtheHealer
            altKeyIsDown = false;
            break;
        case 82:
            brush.destroy();
            brush = eval("new " + BRUSHES[menu.selector.selectedIndex] + "(context)");
            break
    }
    context.lineCap = BRUSH_SIZE == 1 ? "butt" : "round"
}

function onWindowBlur(a) {
    shiftKeyIsDown = false;
    altKeyIsDown = false
}

function onDocumentMouseDown(a) {
    if (!isMenuMouseOver) {
        a.preventDefault()
    }
}

function onDocumentMouseOut(a) {
    onCanvasMouseUp()
}

function onForegroundColorSelectorChange(a) {
    COLOR = foregroundColorSelector.getColor();
    menu.setForegroundColor(COLOR);
    if (STORAGE) {
        localStorage.brush_color_red = COLOR[0];
        localStorage.brush_color_green = COLOR[1];
        localStorage.brush_color_blue = COLOR[2]
    }
}

function onBackgroundColorSelectorChange(a) {
    BACKGROUND_COLOR = backgroundColorSelector.getColor();
    menu.setBackgroundColor(BACKGROUND_COLOR);
		document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "rgb(" + BACKGROUND_COLOR[0] + ", " + BACKGROUND_COLOR[1] + ", " + BACKGROUND_COLOR[2] + ")";
    if (STORAGE) {
        localStorage.background_color_red = BACKGROUND_COLOR[0];
        localStorage.background_color_green = BACKGROUND_COLOR[1];
        localStorage.background_color_blue = BACKGROUND_COLOR[2];
				localStorage.bgimage = document.body.style.backgroundImage;//added 05/03/17 BertrandtheHealer
    }
}

function writeBackgroundData() {
  if (!confirm("This will overwrite any existing background. Are you sure you want to do this?")) {
        return;
  }
    document.body.style.backgroundImage = 'url("data:image/png;base64,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O//8dPddd6UNNtggbbnllgkgwUuFnj17pmeeecZK2L59+8QLoIMPOSQdc/TRdg6F97XXXZduuOEGewFx2mmnmSI59726EqoYSToLAFMvuvhie3nRlIN2k5/dl19+uaS8DNBa3qqotPHNDVQFsP7P//5v2nCDDSzCv956K31y/fUN5AFXt9hii0a97GhKm66JcfEZPXfuXPMx/alPfSptvPHGZgbah+cQ7mj69OkTK1HWxM4RdQ4LhAXCAmGBsEBYoGYsEGC1ElidfXpKC89JqddpaUWfs2um4aIgYQFZgE2K2AUeqDRlyhTz+TlgwIAwUDNbYMaMGenHP/5xWrhokUEfbXi0ww47pO9973vpM4ccEq4AmtnmlZKbOXNmuvzyy9N27dunV15+2eAosBvocMhnPpO+ecIJ6cEHH0xTHnww7TtyZOrQoUNJaYdf3DPPPNPgKdD83nvuMeXx97///bTXkCGmDAO8HnjAAaVioGK96eabLV1/TJ061WBU3HeVWqz89SF77WVtBQRvylEOqOo87crGZEcdeWS67LLLmpLVahWXewaFNy8knly2zF483D95sqmF5fZkjz33TN27d0/bd+xoL/LatWsXytWV2AuAqY888v/Y+w4wqYrs+ztgQgQRkYwkJSk5CIiiYI4oiogR3XVd3TX9UNlVccUA7q45rgExYgIUMIGgCErOQUFAclYQFBTE+X/n2mf+1/L1TPdMz0zPzH3fN19Pv65XdetUeFWnTt2aphivXbdOhg0dqgtFuECwnnf++VK9WjXt79q2bevkaj6WhUftCDgCjoAj4Ag4Ao5Adgg4sZpA/ciYerFIhkhm21cSCO1BHIGCR+D5QYPk7rvvlg7t28tjjz2W8InoBW9p0U3xw48+kgcfeECWffONHgoG1RbIGrhaABkHQtsPOirY8n30scfknnvukcGDB0v9evUEJHcih9yBQLrzzjvlzLPOkteHDJEuXbtKzwsukBcGD5a3335bPhs/Xj4dP14+GTdOPpswQU444QSpV6+eTPriC3Ut0KZ1axk4cKCWPa5evXrJqtWr5aEHH3RyNckqEBKqKD8cstesaVNZvWaN1KheXQ9es/+DfMU9fuI3/I+t0tu3bxerUA0JVZQjSHAslKxauVLJQb9EFi5cqG4vgOWzzzwjkyZPFizaAWf8YSGpTJky+o7581VXabng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CFaffXztHQECBAgQIHCCwEiYeMJqN4eobNPZM1XbBlUD0Kv2vzIrrBKOrm3fXqByZOyrTIxLgMC5Ak98n1/xeXCuutEIECBwTwHB6j2Pm60mQIAAAQIEvligEqo+kWcv9Oz7PBr+VsMUM1Gf2F32icB/BSpf4tzNrHoOvdt+2V4CBAi8U0Cw+k596yZAgAABAgQIDAp8Y7hXfWbdqI3QYbAZLUbggQJPPB9865dyD2xPu0SAwAcJCFY/6GDYFAIECBAgQIAAgfcJjAay79tiayZA4CqBp54PnrpfV/WBcQkQILAnIFjdE/I6AQIECBAgQIAAAQIECBAgQIAAAQIEZgKCVS1BgAABAgQIECBAgAABAgQIECBAgACBUECwGoIpJ0CAAAECBAgQIECAAAECBAgQIECAgGBVDxAgQIAAAQIECBAgQIAAAQIECBAgQCAUEKyGYMoJECBAgAABAgQIECBAgAABAgQIECAgWNUDBAgQIECAAAECBAgQIECAAAECBAgQCAUEqyGYcgIECBAgQIAAAQIECBAgQIAAAQIECAhW9QABAgQIECBAgAABAgQIECBAgAABAgRCAcFqCKacAAECBAgQIECAAAECBAgQIECAAAECglU9QIAAAQIECBAgQIAAAQIECBAgQIAAgVBAsBqCKSdAgAABAgQIECBAgAABAgQIECBAgIBgVQ8QIECAAAECBAgQIECAAAECBAgQIEAgFBCshmDKCRAgQIAAAQIECBAgQIAAAQIECBAgIFjVAwQIECBAgAABAgQIECBAgAABAgQIEAgFBKshmHICBAgQIECAAAECBAgQIECAAAECBAgIVvUAAQIECBAgQIAAAQIECBAgQIAAAQIEQgHBagimnAABAgQIECBAgAABAgQIECBAgAABAoJVPUCAAAECBAgQIECAAAECBAgQIECAAIFQQLAagiknQIAAAQIECBAgQIAAAQIECBAgQICAYFUPECBAgAABAgQIECBAgAABAgQIECBAIBQQrIZgygkQIECAAAECBAgQIECAAAECBAgQICBY1QMECBAgQIAAAQIECBAgQIAAAQIECBAIBQSrIZhyAgQIECBAgAABAgQIECBAgAABAgQICFb1AAECBAgQIECAAAECBAgQIECAAAECBEIBwWoIppwAAQIECBAgQIAAAQIECBAgQIAAAQKCVT1AgAABAgQIECBAgAABAgQIECBAgACBUECwGoIpJ0CAAAECBAgQIECAAAECBAgQIECAgGBVDxAgQIAAAQIECBAgQIAAAQIECBAgQCAUEKyGYMoJECBAgAABAgQIECBAgAABAgQIECAgWNUDBAgQIECAAAECBAgQIECAAAECBAgQCAUEqyGYcgIECBAgQIAAAQIECBAgQIAAAQIECAhW9QABAgQIECBAgAABAgQIECBAgAABAgRCAcFqCKacAAECBAgQIECAAAECBAgQIECAAAECglU9QIAAAQIECBAgQIAAAQIECBAgQIAAgVBAsBqCKSdAgAABAgQIECBAgAABAgQIECBAgIBgVQ8QIECAAAECBAgQIECAAAECBAgQIEAgFBCshmDKCRAgQIAAAQIECBAgQIAAAQIECBAgIFjVAwQIECBAgAABAgQIECBAgAABAgQIEAgFBKshmHICBAgQIECAAAECBAgQIECAAAECBAgIVvUAAQIECBAgQIAAAQIECBAgQIAAAQIEQgHBagimnAABAgQIECBAgAABAgQIECBAgAABAoJVPUCAAAECBAgQIECAAAECBAgQIECAAIFQQLAagiknQIAAAQIECBAgQIAAAQIECBAgQICAYFUPECBAgAABAgQIECBAgAABAgQIECBAIBQQrIZgygkQIECAAAECBAgQIECAAAECBAgQICBY1QMECBAgQIAAAQIECBAgQIAAAQIECBAIBQSrIZhyAgQIECBAgAABAgQIECBAgAABAgQICFb1AAECBAgQIECAAAECBAgQIECAAAECBEIBwWoIppwAAQIECBAgQIAAAQIECBAgQIAAAQKCVT1AgAABAgQIECBAgAABAgQIECBAgACBUECwGoIpJ0CAAAECBAgQIECAAAECBAgQIECAgGBVDxAgQIAAAQIECBAgQIAAAQIECBAgQCAUEKyGYMoJECBAgAABAgQIECBAgAABAgQIECAgWNUDBAgQIECAAAECBAgQIECAAAECBAgQCAUEqyGYcgIECBAgQIAAAQIECBAgQIAAAQIECAhW9QABAgQIECBAgAABAgQIECBAgAABAgRCAcFqCKacAAECBAgQIECAAAECBAgQIECAAAECglU9QIAAAQIECBAgQIAAAQIECBAgQIAAgVBAsBqCKSdAgAABAgQIECBAgAABAgQIECBAgIBgVQ8QIECAAAECBAgQIECAAAECBAgQIEAgFBCshmDKCRAgQIAAAQIECBAgQIAAAQIECBAgIFjVAwQIECBAgAABAgQIECBAgAABAgQIEAgFBKshmHICBAgQIECAAAECBAgQIECAAAECBAgIVvUAAQIECBAgQIAAAQIECBAgQIAAAQIEQgHBagimnAABAgQIECBAgAABAgQIECBAgAABAoJVPUCAAAECBAgQIECAAAECBAgQIECAAIFQQLAagiknQIAAAQIECBAgQIAAAQIECBAgQICAYFUPECBAgAABAgQIECBAgAABAgQIECBAIBQQrIZgygkQIECAAAECBAgQIECAAAECBAgQICBY1QMECBAgQIAAAQIECBAgQIAAAQIECBAIBQSrIZhyAgQIECBAgAABAgQIECBAgAABAgQICFb1AAECBAgQIECAAAECBAgQIECAAAECBEIBwWoIppwAAQIECBAgQIAAAQIECBAgQIAAAQKCVT1AgAABAgQIECBAgAABAgQIECBAgACBUECwGoIpJ0CAAAECBAgQIECAAAECBAgQIECAgGBVDxAgQIAAAQIECBAgQIAAAQIECBAgQCAUEKyGYMoJECBAgAABAgQIECBAgAABAgQIECAgWNUDBAgQIECAAAECBAgQIECAAAECBAgQCAUEqyGYcgIECBAgQIAAAQIECBAgQIAAAQIECAhW9QABAgQIECBAgAABAgQIECBAgAABAgRCAcFqCKacAAECBAgQIECAAAECBAgQIECAAAECglU9QIAAAQIECBAgQIAAAQIECBAgQIAAgVBAsBqCKSdAgAABAgQIECBAgAABAgQIECBAgIBgVQ8QIECAAAECBAgQIECAAAECBAgQIEAgFBCshmDKCRAgQIAAAQIECBAgQIAAAQIECBAgIFjVAwQIECBAgAABAgQIECBAgAABAgQIEAgFBKshmHICBAgQIECAAAECBAgQIECAAAECBAgIVvUAAQIECBAgQIAAAQIECBAgQIAAAQIEQgHBagimnAABAgQIECBAgAABAgQIECBAgAABAoJVPUCAAAECBAgQIECAAAECBAgQIECAAIFQQLAagiknQIAAAQIECBAgQIAAAQIECBAgQICAYFUPECBAgAABAgQIECBAgAABAgQIECBAIBQQrIZgygkQIECAAAECBAgQIECAAAECBAgQICBY1QMECBAgQIAAAQIECBAgQIAAAQIECBAIBQSrIZhyAgQIECBAgAABAgQIECBAgAABAgQICFb1AAECBAgQIECAAAECBAgQIECAAAECBEIBwWoIppwAAQIECBAgQIAAAQIECBAgQIAAAQKCVT1AgAABAgQIECBAgAABAgQIECBAgACBUECwGoIpJ0CAAAECBAgQIECAAAECBAgQIECAgGBVDxAgQIAAAQIECBAgQIAAAQIECBAgQCAUEKyGYMoJECBAgAABAgQIECBAgAABAgQIECAgWNUDBAgQIECAAAECBAgQIECAAAECBAgQCAUEqyGYcgIECBAgQIAAAQIECBAgQIAAAQIECAhW9QABAgQIECBAgAABAgQIECBAgAABAgRCAcFqCKacAAECBAgQIECAAAECBAgQIECAAAECglU9QIAAAQIECBAgQIAAAQIECBAgQIAAgVBAsBqCKSdAgAABAgQIECBAgAABAgQIECBAgIBgVQ8QIECAAAECBAgQIECAAAECBAgQIEAgFBCshmDKCRAgQIAAAQIECBAgQIAAAQIECBAgIFjVAwQIECBAgAABAgQIECBAgAABAgQIEAgFBKshmHICBAgQIECAAAECBAgQIECAAAECBAgIVvUAAQIECBAgQIAAAQIECBAgQIAAAQIEQgHBagimnAABAgQIECBAgAABAgQIECBAgAABAoJVPUCAAAECBAgQIECAAAECBAgQIECAAIFQQLAagiknQIAAAQIECBAgQIAAAQIECBAgQICAYFUPECBAgAABAgQIECBAgAABAgQIECBAIBQQrIZgygkQIECAAAECBAgQIECAAAECBAgQICBY1QMECBAgQIAAAQIECBAgQIAAAQIECBAIBQSrIZhyAgQIECBAgAABAgQIECBAgAABAgQICFb1AAECBAgQIECAAAECBAgQIECAAAECBEIBwWoIppwAAQIECBAgQIAAAQIECBAgQIAAAQKCVT1AgAABAgQIECBAgAABAgQIECBAgACBUECwGoIpJ0CAAAECBAgQIECAAAECBAgQIECAgGBVDxAgQIAAAQIECBAgQIAAAQIECBAgQCAUEKyGYMoJECBAgAABAgQIECBAgAABAgQIECAgWNUDBAgQIECAAAECBAgQIECAAAECBAgQCAUEqyGYcgIECBAgQIAAAQIECBAgQIAAAQIECAhW9QABAgQIECBAgAABAgQIECBAgAABAgRCAcFqCKacAAECBAgQIECAAAECBAgQIECAAAECglU9QIAAAQIECBAgQIAAAQIECBAgQIAAgVBAsBqCKSdAgAABAgQIECBAgAABAgQIECBAgIBgVQ8QIECAAAECBAgQIECAAAECBAgQIEAgFBCshmDKCRAgQIAAAQIECBAgQIAAAQIECBAgIFjVAwQIECBAgAABAgQIECBAgAABAgQIEAgFBKshmHICBAgQIECAAAECBAgQIECAAAECBAgIVvUAAQIECBAgQIAAAQIECBAgQIAAAQIEQgHBagimnAABAgQIECBAgAABAgQIECBAgAABAoJVPUCAAAECBAgQIECAAAECBAgQIECAAIFQQLAagiknQIAAAQIECBAgQIAAAQIECBAgQICAYFUPECBAgAABAgQIECBAgAABAgQIECBAIBQQrIZgygkQIECAAAECBAgQIECAAAECBAgQICBY1QMECBAgQIAAAQIECBAgQIAAAQIECBAIBQSrIZhyAgQIECBAgAABAgQIECBAgAABAgQICFb1AAECBAgQIECAAAECBAgQIECAAAECBEIBwWoIppwAAQIECBAgQIAAAQIECBAgQIAAAQKCVT1AgAABAgQIECBAgAABAgQIECBAgACBUECwGoIpJ0CAAAECBAgQIECAAAECBAgQIECAgGBVDxAgQIAAAQIECBAgQIAAAQIECBAgQCAUEKyGYMoJECBAgAABAgQIECBAgKJhiRkAAACRSURBVAABAgQIECAgWNUDBAgQIECAAAECBAgQIECAAAECBAgQCAUEqyGYcgIECBAgQIAAAQIECBAgQIAAAQIECAhW9QABAgQIECBAgAABAgQIECBAgAABAgRCAcFqCKacAAECBAgQIECAAAECBAgQIECAAAECglU9QIAAAQIECBAgQIAAAQIECBAgQIAAgVDgb7XGPna+O15RAAAAAElFTkSuQmCC")';
    document.body.style.backgroundColor = 'rgb(255,255,255)';
}

function onMenuForegroundColor() {
    cleanPopUps();
    foregroundColorSelector.show();
    foregroundColorSelector.container.style.left = ((SCREEN_WIDTH - foregroundColorSelector.container.offsetWidth) / 2) + "px";
    foregroundColorSelector.container.style.top = ((SCREEN_HEIGHT - foregroundColorSelector.container.offsetHeight) / 2) + "px";
    isFgColorSelectorVisible = true
}

function onMenuBackgroundColor() {
    cleanPopUps();
    backgroundColorSelector.show();
    backgroundColorSelector.container.style.left = ((SCREEN_WIDTH - backgroundColorSelector.container.offsetWidth) / 2) + "px";
    backgroundColorSelector.container.style.top = ((SCREEN_HEIGHT - backgroundColorSelector.container.offsetHeight) / 2) + "px";
    isBgColorSelectorVisible = true
}

function onMenuSelectorChange() {
    if (BRUSHES[menu.selector.selectedIndex] == "") {
        return
    }
    brush.destroy();
    brush = eval("new " + BRUSHES[menu.selector.selectedIndex] + "(context)");
    window.location.hash = BRUSHES[menu.selector.selectedIndex];
    menu.selector.blur(); //lose focus so more keypress events can be accepted - BertrandtheHealer 05/01/17
}

function onMenuMouseOver() {
    isMenuMouseOver = true
}

function onMenuMouseOut() {
    isMenuMouseOver = false
}

function onMenuSave() {
  flatten();
  /*window.open(flattenCanvas.toDataURL("image/png"), "mywindow");*/
	if (!android && !IOS) {
	var file_path = flattenCanvas.toDataURL("image/png");
	var a = document.createElement('A');
	a.href = file_path;
	a.download = 'drawing.png';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	}
	else {
		window.open(flattenCanvas.toDataURL("image/png"), "_blank");
	}
  saveToLocalStorage();
}

function onMenuClear() {
    if (!confirm("Discard your drawing? This cannot be undone.")) {
        return
    }
		/*if (STORAGE) {
			context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
			saveToLocalStorage();
			document.body.innerHTML = '';
		  init();
		} else {*/
			SCREEN_WIDTH = window.innerWidth;
      SCREEN_HEIGHT = window.innerHeight;
      canvas.width = SCREEN_WIDTH;
      canvas.height = SCREEN_HEIGHT;
      flattenCanvas.width = SCREEN_WIDTH;
      flattenCanvas.height = SCREEN_HEIGHT;
      context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
			if (STORAGE) {
      saveToLocalStorage();
			}
		  onMenuSelectorChange();//hopefully will fix ios bug 05/05/17 BertrandtheHealer
		//}
}

function onMenuAbout() {
    cleanPopUps();
    isAboutVisible = true;
    about.show()
}

function onMenuPointerSize() {//added 05/01/17 BertrandtheHealer
  if (IOS) {
    alert("Click 'UP' to increase size and 'DOWN' to decrease.");
    onMenuAbout();
  }
  if (!IOS) {
    alert("To change the brush size:\n* Up Arrow to increase\n* Down Arrow to decrease\n* Left Arrow to reset");
  }  
}

function onMenuReset(alert) {//added 05/01/17 BertrandtheHealer	completely rewritten 05/18/18 BertrandtheHealer
  if (!(alert == true)) {
    if (!confirm("Reset brush and background? This cannot be undone.")) {
      return
    } 
  }
	
		//reset localStorage for brush color
		if (STORAGE) {
		localStorage.brush_color_red = 0;
    localStorage.brush_color_green = 0;
    localStorage.brush_color_blue = 0;
		}
		COLOR[0] = 0;
		COLOR[1] = 0;
		COLOR[2] = 0;
		menu.setForegroundColor(COLOR);
		//reset localStorage for brush size
		if (STORAGE) {
		localStorage.brushSize = 1;
		}
		setBrushSize(1);
		//reset brush type
		menu.selector.selectedIndex = 0;
    onMenuSelectorChange();
		//reset localStorage for background color
		if (STORAGE) {
		localStorage.background_color_red = 255;
    localStorage.background_color_green = 255;
    localStorage.background_color_blue = 255;
		}
		BACKGROUND_COLOR[0] = 255;
		BACKGROUND_COLOR[1] = 255;
		BACKGROUND_COLOR[2] = 255;
		if (STORAGE) {
		localStorage.bgimage = "";
		}
		document.body.style.backgroundImage = "";
		document.body.style.backgroundColor = "rgb(" + BACKGROUND_COLOR[0] + ", " + BACKGROUND_COLOR[1] + ", " + BACKGROUND_COLOR[2] + ")";
		menu.setBackgroundColor(BACKGROUND_COLOR);
		//save canvas
		if (STORAGE) {
		saveToLocalStorage();
		}
		//reload from scratch
		//document.body.innerHTML = '';
		//init();
	}

function onMenuFile() {//added 05/02/17 BertrandtheHealer
  menu.files.click();
}

function handleFileSelect() {//added 05/02/17 BertrandtheHealer
    var files = this.files;
    // If no files were selected, or no FileReader support, return
    if (!window.FileReader) {
    	alert("Your browser does not support FileReader");
      return;
    }
    if (IOS) {
      alert("Due to a limitation in iOS, the background image will not appear in saved image.");
    }
    if (!files.length) {
    	alert("You didn't select anything");
      return;
    }
    var reader = new FileReader();// Create a new instance of the FileReader
    reader.readAsDataURL(files[0]);// Read the local file as a DataURL
    reader.onloadend = function(){
      // When loaded, set image data as background of page
      document.body.style.backgroundImage = "url(" + this.result + ")";
      if (STORAGE) {//added 05/03/17 BertrandtheHealer
        localStorage.bgimage = document.body.style.backgroundImage;
      }
      document.body.style.backgroundColor = "rgba(0,0,0,0)";
    }
    onMenuClear();
}

function onCanvasMouseDown(b) {
    var c, a;
    clearTimeout(saveTimeOut);
    if (!cleanPopUps()){
			if (altKeyIsDown) {
                flatten();
                c = flattenCanvas.getContext("2d").getImageData(0, 0, flattenCanvas.width, flattenCanvas.height).data;
                a = (b.clientX + (b.clientY * canvas.width)) * 4;
                foregroundColorSelector.setColor([c[a], c[a + 1], c[a + 2]]);
                return
			}
			BRUSH_PRESSURE = wacom && wacom.isWacom ? wacom.pressure : 1;
			brush.strokeStart(b.clientX, b.clientY);
			brush.stroke(b.clientX, b.clientY);
			window.addEventListener("mousemove", onCanvasMouseMove, false);
			window.addEventListener("mouseup", onCanvasMouseUp, false)
	  }
}

function onCanvasMouseMove(a) {
    BRUSH_PRESSURE = wacom && wacom.isWacom ? wacom.pressure : 1;
    brush.stroke(a.clientX, a.clientY)
}

function onCanvasMouseUp() {
    brush.strokeEnd();
    window.removeEventListener("mousemove", onCanvasMouseMove, false);
    window.removeEventListener("mouseup", onCanvasMouseUp, false);
    if (STORAGE) {
        clearTimeout(saveTimeOut);
        saveTimeOut = setTimeout(saveToLocalStorage, 2000, true)
    }
}

function onCanvasTouchStart(a) {
		a.preventDefault();
		if (!cleanPopUps()){
			if (a.touches.length == 1) {
        brush.strokeStart(a.touches[0].pageX, a.touches[0].pageY);
			   brush.stroke(a.touches[0].pageX, a.touches[0].pageY);
        window.addEventListener("touchmove", onCanvasTouchMove, false);
        window.addEventListener("touchend", onCanvasTouchEnd, false)
			}	
		}
}

function onCanvasTouchMove(a) {
	a.preventDefault();
    if (a.touches.length == 1) {
        brush.stroke(a.touches[0].pageX, a.touches[0].pageY)
    }
}

function onCanvasTouchEnd(a) {
	a.preventDefault();
    if (a.touches.length == 0) {
        brush.strokeEnd();
        window.removeEventListener("touchmove", onCanvasTouchMove, false);
        window.removeEventListener("touchend", onCanvasTouchEnd, false);
    }
}

function saveToLocalStorage() {
  localStorage.canvas = canvas.toDataURL("image/png");
	localStorage.bgimage = document.body.style.backgroundImage;//added 05/03/17 BertrandtheHealer
}

function flatten() {
  var img = new Image;
  img.src = document.body.style.backgroundImage.replace('url("', '').replace('")', '');
  var a = flattenCanvas.getContext("2d");
  a.fillStyle = "rgb(" + BACKGROUND_COLOR[0] + ", " + BACKGROUND_COLOR[1] + ", " + BACKGROUND_COLOR[2] + ")";
  a.fillRect(0, 0, canvas.width, canvas.height);
  //begin add 05/03/17 BertrandtheHealer
  a.drawImage(img, 0, 0, SCREEN_WIDTH, (SCREEN_WIDTH*img.height)/img.width);//draw resized background image
  a.drawImage(canvas, 0, 0);
  //end add
}

function cleanPopUps() {
	var toReturn = false;
    if (isFgColorSelectorVisible) {
			if (!isHidden(foregroundColorSelector)) {
				toReturn = true;
			}
        foregroundColorSelector.hide();
        isFgColorSelectorVisible = false;
    }
    if (isBgColorSelectorVisible) {
			  if (!isHidden(backgroundColorSelector)) {
				  toReturn = true;
			  }
        backgroundColorSelector.hide();
        isBgColorSelectorVisible = false;
    }
    if (isAboutVisible) {
			  if (!isHidden(about)) {
				  toReturn = true;
			  }
        about.hide();
        isAboutVisible = false
    
		}
		return toReturn;
}

var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
		var selectedwidth = selected.offsetWidth;
		selected.style.minWidth = (selectedwidth - 22) + "px";
    x_elem = mouseX - selected.offsetLeft;
    y_elem = mouseY - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = e.clientX ;
    y_pos = e.clientY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
		if (selected.offsetLeft < 0) {
			selected.style.left = "0px";
		}
		if (selected.offsetTop < 0) {
			selected.style.top = "0px";
		}
		if (selected.offsetHeight + selected.offsetTop >= window.innerHeight) {
			selected.style.top = (window.innerHeight - selected.offsetHeight) +"px";
		}
		if ((selected.offsetWidth + selected.offsetLeft) >= window.innerWidth) {
			selected.style.left = (window.innerWidth - selected.offsetWidth) + "px";
		}
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
		document.removeEventListener("mousemove", _move_elem);
		document.removeEventListener("mouseup", _destroy);
}

// Bind the functions...
document.getElementById('DragHandle').onmousedown = function () {
    _drag_init(document.getElementById('Menu'));
		document.addEventListener("mousemove", _move_elem);
		document.addEventListener("mouseup", _destroy);
		handle = 'left';
    return false;
};

document.getElementById('DragHandle2').onmousedown = function () {
    _drag_init(document.getElementById('Menu'));
		document.addEventListener("mousemove", _move_elem);
		document.addEventListener("mouseup", _destroy);
		handle = 'right';
    return false;
};

//document.onmousemove = _move_elem;
//document.onmouseup = _destroy;
