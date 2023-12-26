var firstBtn = document.getElementById('firstBtn');
var secondBtn = document.getElementById('secondBtn');
var thirdBtn = document.getElementById('thirdBtn');
var fourBtn = document.getElementById('fourBtn');
var firstParag = document.getElementById('firstParag');
var secondParag = document.getElementById('secondParag');
var thirdParag = document.getElementById('thirdParag');
var fourParag = document.getElementById('fourParag');
var imgFirstPlus = document.getElementById('imgFirstPlus');
var imgSecondPlus = document.getElementById('imgSecondPlus');
var imgThirdPlus = document.getElementById('imgThirdPlus');
var imgFourPlus = document.getElementById('imgFourPlus');
var btns = document.querySelectorAll('button');
var parags = document.querySelectorAll('p');
var plusImgs = document.querySelectorAll('.imgPlusButtons');
var question = document.querySelectorAll('.question');



btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        var isHidden = parags[index].classList.contains('hidden');

        if (isHidden) {
            parags[index].classList.remove('hidden');
            plusImgs[index].setAttribute('src', '/assets/images/icon-minus.svg');
        }
        else {
            parags[index].classList.add('hidden');
            plusImgs[index].setAttribute('src', '/assets/images/icon-plus.svg');
        }
    });
});



function clickPlusButton() {
    var hidden = parags.classList.contains('hidden');

    if (hidden) {
        firstParag.classList.remove('hidden');
        plusImgs.setAttribute('src', '/assets/images/icon-minus.svg');
    
}
}