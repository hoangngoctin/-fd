

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow:
    '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:
    '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
});

$('.ctmobile').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
});

$('.slick-1').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 100,
    prevArrow:
    '<button type="button" class="slick-prev d-none"></button>',
    nextArrow:
    '<button type="button" class="slick-next d-none"></button>',
});

const change = document.querySelector('.change');
const inputt = document.querySelector('.inputt');

change.addEventListener('click', () => {
    if(!inputt.classList.contains('inputt-open')){
        inputt.classList.add('inputt-open');
        change.innerHTML = "<i class='fa-solid fa-x'></i>"
    }

    else{
        inputt.classList.remove('inputt-open');
        change.innerHTML = "<i class='fa-solid fa-magnifying-glass'></i>";
    }
});


const icon = document.getElementById('click-bar');
const result = document.getElementById('result');

icon.onclick = function() {
    icon.classList.toggle('active');
    result.classList.toggle('active');
};

// document.onclick = function(clickEvent){
//     if(clickEvent.target.id !== "result" && clickEvent.target.id !== "icon") {
//         icon.classList.remove('active');
//         result.classList.remove('active');
//     }
// }