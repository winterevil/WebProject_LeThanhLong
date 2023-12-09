let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

function toggleReadMore() {
    var moreText = document.querySelector('.more-text');
    var buttonText = document.querySelector('#about-btn');

    if (moreText.classList.contains('hide')) {
        moreText.classList.remove('hide');
        buttonText.innerText = 'Read Less';
    } else {
        moreText.classList.add('hide');
        buttonText.innerText = 'Read More';
    }

}

$(document).ready(function () {
    $('.row-p').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768, // Kích thước màn hình nhỏ hơn
                settings: {
                    slidesToShow: 2, // Số lượng phần tử hiển thị khi màn hình nhỏ hơn 768px
                    slidesToScroll: 2 // Số lượng phần tử cuộn khi màn hình nhỏ hơn 768px
                }
            },
            {
                breakpoint: 480, // Kích thước màn hình nhỏ hơn
                settings: {
                    slidesToShow: 1, // Số lượng phần tử hiển thị khi màn hình nhỏ hơn 480px
                    slidesToScroll: 1 // Số lượng phần tử cuộn khi màn hình nhỏ hơn 480px
                }
            }
        ]
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 200) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

$(document).ready(function () {
    $('.row-m').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768, // Kích thước màn hình nhỏ hơn
                settings: {
                    slidesToShow: 2, // Số lượng phần tử hiển thị khi màn hình nhỏ hơn 768px
                    slidesToScroll: 2 // Số lượng phần tử cuộn khi màn hình nhỏ hơn 768px
                }
            },
            {
                breakpoint: 480, // Kích thước màn hình nhỏ hơn
                settings: {
                    slidesToShow: 1, // Số lượng phần tử hiển thị khi màn hình nhỏ hơn 480px
                    slidesToScroll: 1 // Số lượng phần tử cuộn khi màn hình nhỏ hơn 480px
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.row-n').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768, // Kích thước màn hình nhỏ hơn
                settings: {
                    slidesToShow: 2, // Số lượng phần tử hiển thị khi màn hình nhỏ hơn 768px
                    slidesToScroll: 2 // Số lượng phần tử cuộn khi màn hình nhỏ hơn 768px
                }
            },
            {
                breakpoint: 480, // Kích thước màn hình nhỏ hơn
                settings: {
                    slidesToShow: 1, // Số lượng phần tử hiển thị khi màn hình nhỏ hơn 480px
                    slidesToScroll: 1 // Số lượng phần tử cuộn khi màn hình nhỏ hơn 480px
                }
            }
        ]
    });
});