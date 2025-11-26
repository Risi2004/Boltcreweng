function dropDown(){
    const dropDown = document.getElementById('dropdown');
    const shopDropDown = document.querySelector('.navbar__shop__dropdown');
    const dropUp = document.getElementById('dropup');
    
    shopDropDown.style.display = 'flex';
    dropDown.style.display = 'none';
    dropUp.style.display = 'inline';

    dropUp.onclick = function(){
        shopDropDown.style.display = 'none';
        dropUp.style.display = 'none';
        dropDown.style.display = 'inline';
    }

}