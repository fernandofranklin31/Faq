var firstBtn = document.getElementById('firstBtn');
var secondBtn = document.getElementById('secondBtn');
var thirdBtn = document.getElementById('thirdBtn');
var fourBtn = document.getElementById('fourBtn');
var firstParag = document.getElementById('firstParag');
var secondParag = document.getElementById('firstParag');
var thirdParag = document.getElementById('firstParag');
var fourParag = document.getElementById('firstParag');
var imgFirstPlus = document.getElementById('imgFirstPlus');
var imgSecondPlus = document.getElementById('imgSecondPlus');
var imgThirdPlus = document.getElementById('imgThirdPlus');
var imgFourPlus = document.getElementById('imgFourPlus');

var btns = document.querySelectorAll('button');
var parags = document.querySelectorAll('p');
var imgs = document.querySelectorAll('.imgPlusButtons');


function plusButtonClicked() {
   parags.forEach((x) => x.classList.remove('hidden'));
   imgFirstPlus.setAttribute('src', '/assets/images/icon-minus.svg');

}

function minusButtonClicked() {
    parags.forEach((x) => x.classList.add('hidden'));

}


// firstBtn.addEventListener('click', () => {
//     plusButtonClicked();
// })

