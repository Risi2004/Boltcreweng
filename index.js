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