function getStyle(el, property) {
    if (getComputedStyle) {
        return getComputedStyle(el)[property];
    } else {
        return el.currentStyle[property];
    }
}

function animation(el, properties) {
    clearInterval(el.timeId); // 清除前一個的數值
    el.timeId = setInterval(function () {
        //執行20 次
        for (var property in properties) {
            var current;
            var target = properties[property];

            if (property === "opacity") {
                current = Math.round(parseFloat(getStyle(el, "opacity")) * 100);
            } else {
                current = parseInt(getStyle(el, property));
            }
            console.log(speed);

            var speed = (target - current) / 30;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (property === "opacity") {
                el.style.opacity = (current + speed) / 100;
            } else {
                el.style[property] = current + speed + "px";
            }
        }
    }, 20);
}
