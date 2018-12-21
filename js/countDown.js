/**
 * @file 倒计时
 * @author zhuyeqing
*/

// 倒计时显示
let leftTime = document.getElementById('leftTime');
// 倒计时总时间
let time = 10; // 120s
// 声明一个定时器
let inter;


// 按T键: 开始倒计时
Reveal.addKeyBinding(84, function () {
    startTimer(time);
});


// 进入首页倒计时清空
Reveal.addEventListener('slidechanged', function (event) {
    // console.log(event.currentSlide);
    if (event.currentSlide.innerHTML == '你划我猜') {
        clearInterval(inter);
        leftTime.innerHTML = '';
    }
});


// 计算显示时间
function calculate(time) {
    let minute = Math.floor(time / 60);
    let second = Math.floor(time % 60);

    leftTime.innerHTML = (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
    leftTime.className = '';
}


function startTimer(time) {
    // 当前为最后一页，不进入倒计时
    if (Reveal.getProgress() === 1) {
        clearInterval(inter);
        leftTime.innerHTML = '没有更多啦~';
        return;
    }

    // 下一页
    Reveal.next();

    // 清空定时器重新倒计时
    if (inter) {
        clearInterval(inter);
    }

    // 初始化时间显示
    calculate(time);


    // 定义定时器 && 每秒刷新时间显示
    inter = setInterval(function () {
        if (time > 1) {
            time--;
            calculate(time);
        }
        else {
            leftTime.innerHTML = '时间到';
            leftTime.className = 'timeout';

            // 清空定时器
            clearInterval(inter);

            // 当前词语不展现
            Reveal.getCurrentSlide().style.display = 'none';

            // 剩余词语存到本地
            let mid = localStorage.getItem('localArr').split(',');
            mid.splice(0, Reveal.getState().indexh);
            localStorage.setItem('localArr', mid);
        }
    }, 1000);
}






