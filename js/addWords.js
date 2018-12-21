/**
 * @file 添加词语
 * @author zhuyeqing
 */
// let originArr = ['鹤唳风声', '扭秧歌', '吹泡泡', '吵架'];
let originArr = words;

let outOfOrderArr = _.shuffle(localStorage.getItem('localArr')
                    ? localStorage.getItem('localArr').split(',') : originArr);

let wordsWrapper = document.getElementById('words-wrapper');

outOfOrderArr.forEach(val => {
    let child = document.createElement('section');
    child.innerHTML = val;
    wordsWrapper.appendChild(child);
});

localStorage.setItem('localArr', outOfOrderArr);
