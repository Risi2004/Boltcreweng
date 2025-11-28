// Shop Drop Down

function toggleDropDown() {
    const dropDownIcon = document.getElementById('dropdown');
    const dropUpIcon = document.getElementById('dropup');
    const shopDropDown = document.querySelector('.navbar__shop__dropdown');

    if (shopDropDown.style.display === 'flex') {
        shopDropDown.style.display = 'none';
        dropUpIcon.style.display = 'none';
        dropDownIcon.style.display = 'inline';
    } else {
        shopDropDown.style.display = 'flex';
        dropUpIcon.style.display = 'inline';
        dropDownIcon.style.display = 'none';
    }
}

// Go To Top Button Appear on Scroll

const goToTopButton = document.querySelector('.go__to__top__button');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        goToTopButton.classList.add('active');
    }
    else {
        goToTopButton.classList.remove('active');
    }
})

// Smooth Scroll to Top on Button Click

goToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Responsive Side Bar

const sideBar = document.querySelector('.responsive__side__navbar');
const menuBar = document.querySelector('.responsive__navbar__s1 img');
const closeBar = document.querySelector('.responsive__side__navbar__close');
const allLinks = document.querySelectorAll('.responsive__side__navbar a');

menuBar.addEventListener('click', () => {
    sideBar.style.left = '0';
    document.body.style.overflow = 'hidden';
});

closeBar.addEventListener('click', () => {
    sideBar.style.left = '-80%';
    document.body.style.overflow = 'auto';
});

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideBar.style.left = '-80%';
        document.body.style.overflow = 'auto';
    });
});

// Responsive Shop Drop Down

function toggleDropDownTwo() {
    const responsiveShop = document.querySelector('.side__navbar__sub__s2');
    const responsiveDropDownIcon = document.getElementById('sidebardropdown');
    const responsiveDropUpIcon = document.getElementById('sidebardropup');

    if (responsiveShop.style.display === 'flex') {
        responsiveShop.style.display = 'none';
        responsiveDropUpIcon.style.display = 'none';
        responsiveDropDownIcon.style.display = 'inline';
    } else {
        responsiveShop.style.display = 'flex';
        responsiveDropUpIcon.style.display = 'inline';
        responsiveDropDownIcon.style.display = 'none';
    } 
}
