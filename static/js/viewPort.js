var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth / 1080;

var ua = navigator.userAgent;
if(/Android (\d+\.\d+)/.test(ua)) {
	var version = parseFloat(RegExp.$1);
	if(version > 2.3) {
		// andriod 2.3以上
		document.write('<meta name="viewport" content="width=1080, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
	} else {
		// andriod 2.3
		document.write('<meta name="viewport" content="width=1080, target-densitydpi=device-dpi">');
	}
	// IOS及其他系统
} else {
	document.write('<meta name="viewport" content="width=1080, user-scalable=no">');
}