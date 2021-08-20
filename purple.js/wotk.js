let navButton = document.querySelector(".button"),
    myIcons = document.getElementById('icon'),
    mylinks = document.getElementById('link'),
    interval = 4000;
    let banner = document.querySelector('.banner')

    navButton.onclick =  clickButton

function clickButton() {
    myIcons.classList.toggle('clicked');
    mylinks.classList.toggle('clicked');

}