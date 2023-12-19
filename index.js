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
var imgs = document.querySelectorAll('.imgPlusButtons');
var flagBtn = true;


flagBtn ? btns.forEach(x=>x.addEventListener('click', clickPlusBtn)) : btns.forEach(x=>x.addEventListener('click', clickMinusBtn))


function clickPlusBtn() {
    debugger;
    switch(this) {
        case firstBtn: 
        firstParag.classList.remove('hidden');
        imgFirstPlus.setAttribute('src', '/assets/images/icon-minus.svg');
        flagBtn = false;
        break;

        case secondBtn: 
        secondParag.classList.remove('hidden');
        imgSecondPlus.setAttribute('src', '/assets/images/icon-minus.svg');
        

        break;

        case thirdBtn: 
        thirdParag.classList.remove('hidden');
        imgThirdPlus.setAttribute('src', '/assets/images/icon-minus.svg');
       

        break;

        case fourBtn: 
        fourParag.classList.remove('hidden');
        imgFourPlus.setAttribute('src', '/assets/images/icon-minus.svg');
       

        break;

        default:
            return;
    }};
    

    function clickMinusBtn() {
        switch(this) {
            case firstBtn: 
            firstParag.classList.add('hidden');
            imgFirstPlus.setAttribute('src', '/assets/images/icon-plus.svg');
            flagBtn=true;
            break;
    
            case secondBtn: 
            secondParag.classList.add('hidden');
            imgSecondPlus.setAttribute('src', '/assets/images/icon-plus.svg');
            flagBtn=true;
            break;
    
            case thirdBtn: 
            thirdParag.classList.add('hidden');
            imgThirdPlus.setAttribute('src', '/assets/images/icon-plus.svg');
            flagBtn=true;
            break;
    
            case fourBtn: 
            fourParag.classList.add('hidden');
            imgFourPlus.setAttribute('src', '/assets/images/icon-plus.svg');
            flagBtn=true;
            break;
    
            default:
                return;
        }};


        
 
//     firstParag.classList.remove('hidden');
//     secondParag.classList.remove('hidden');
//     thirdParag.classList.remove('hidden');
//     fourParag.classList.remove('hidden');
//     imgFirstPlus.setAttribute('src', '/assets/images/icon-minus.svg');
//     imgSecondPlus.setAttribute('src', '/assets/images/icon-minus.svg');
//     imgThirdPlus.setAttribute('src', '/assets/images/icon-minus.svg');
//     imgFourPlus.setAttribute('src', '/assets/images/icon-minus.svg');
// }

// firstBtn.addEventListener('click', () => {;
//          firstParag.classList.remove('hidden');
//          imgFirstPlus.setAttribute('src', '/assets/images/icon-minus.svg');   
//     });



    







// firstBtn.addEventListener('click', () => {
//     plusButtonClicked();
// })

