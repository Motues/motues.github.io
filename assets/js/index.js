//实现粒子连接
// 可调参数
var BACKGROUND_COLOR = "rgba(255,255,255,0.6)";   // 背景颜色
var POINT_NUM = 200;                        // 星星数目
var POINT_COLOR = "rgba(0,0,0,1)";  // 点的颜色
var LINE_LENGTH = 10000;                    // 点之间连线长度(的平方)

// 创建背景画布
var cvs = document.createElement("canvas");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
cvs.style.cssText = "\
    position:fixed;\
    top:0px;\
    left:0px;\
    z-index:-1;\
    opacity:1.0;\
    ";
document.body.appendChild(cvs);

var ctx = cvs.getContext("2d");

var startTime = new Date().getTime();

//随机数函数
function randomInt(min, max) {
    return Math.floor((max - min + 1) * Math.random() + min);
}

function randomFloat(min, max) {
    return (max - min) * Math.random() + min;
}

//构造点类
class Point {
	constructor() {
		this.x = randomFloat(0, cvs.width);
		this.y = randomFloat(0, cvs.height);

		var speed = randomFloat(0.3, 1.4);
		var angle = randomFloat(0, 2 * Math.PI);

		this.dx = Math.sin(angle) * speed;
		this.dy = Math.cos(angle) * speed;

		this.r = 1.5;

		this.color = POINT_COLOR;
	}
	move() {
		this.x += this.dx;
		if (this.x < 0) {
			this.x = 0;
			this.dx = -this.dx;
		} else if (this.x > cvs.width) {
			this.x = cvs.width;
			this.dx = -this.dx;
		}
		this.y += this.dy;
		if (this.y < 0) {
			this.y = 0;
			this.dy = -this.dy;
		} else if (this.y > cvs.height) {
			this.y = cvs.height;
			this.dy = -this.dy;
		}
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fill();
	}
}



var points = [];

function initPoints(num) {
    for (var i = 0; i < num; ++i) {
        points.push(new Point());
    }
}

var p0 = new Point(); //鼠标
p0.dx = p0.dy = 0;
var degree = 2.5;
document.onmousemove = function (ev) {
    p0.x = ev.clientX;
    p0.y = ev.clientY;
}
document.onmousedown = function (ev) {
    degree = 5.0;
    p0.x = ev.clientX;
    p0.y = ev.clientY;
}
document.onmouseup = function (ev) {
    degree = 2.5;
    p0.x = ev.clientX;
    p0.y = ev.clientY;
}
window.onmouseout = function () {
    p0.x = null;
    p0.y = null;
}

function drawLine(p1, p2, deg) {
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;
    var dis2 = dx * dx + dy * dy;
    if (dis2 < 2 * LINE_LENGTH) {
        if (dis2 > LINE_LENGTH) {
            if (p1 === p0) {
                p2.x += dx * 0.03;
                p2.y += dy * 0.03;
            } else return;
        }
        var t = (1.05 - dis2 / LINE_LENGTH) * 0.2 * deg;
        ctx.strokeStyle = "rgba(0,0,0," + t + ")";
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();
        ctx.stroke();
    }
    return;
}

//绘制每一帧
function drawFrame() {
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    var arr = (p0.x == null ? points : [p0].concat(points));
    for (var i = 0; i < arr.length; ++i) {
        for (var j = i + 1; j < arr.length; ++j) {
            drawLine(arr[i], arr[j], 1.0);
        }
        arr[i].draw();
        arr[i].move();
    }

    window.requestAnimationFrame(drawFrame);
}

initPoints(POINT_NUM);
drawFrame();

document.addEventListener("DOMContentLoaded", function() {
	const texts = ['Like River!', '君游东山东复东',' 安得奋飞逐西风', '放轻松！', '千山万水藏于心！',
				   '爱生活，不要爱生活的意义', '代我向可爱的、温暖的太阳问好', '你不可重复',
				   '所有的日子里，我最喜欢今天', '凡是过往，皆为序章！']
	let currentTextIndex = 0;
    const typingSpeed = 100; // 打字速度（毫秒）
    const deletingSpeed = 50; // 删除速度（毫秒）
    let index = 0;
    let isDeleting = false;
	let len = texts.length;
    const typingEffect = () => {
        const currentText = texts[currentTextIndex];
        if (!isDeleting && index < currentText.length) {
            document.getElementById('switch-box').textContent += currentText.charAt(index);
            index++;
            setTimeout(typingEffect, typingSpeed);
        } else if (isDeleting && index > 0) {
            document.getElementById('switch-box').textContent = currentText.substring(0, index - 1);
            index--;
            setTimeout(typingEffect, deletingSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                currentTextIndex = Math.floor(Math.random() * (len));
                index = 0;
                setTimeout(typingEffect, 2000); // 等待2秒后开始下一个文本的打字过程
            } else {
                setTimeout(typingEffect, 1000); // 等待1秒后开始删除过程
            }
        }
    };
    typingEffect();
});