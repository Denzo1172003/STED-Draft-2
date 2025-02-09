let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// CONFIG PARAMETER
let countItem = items.length;
let itemActive = 0;

// EVENT NEXT CLICK
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

// EVENT PREV CLICK
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

// AUTO RUN THE SLIDER
let refreshInterval = setInterval(() => {
    next.click();
}, 3000)

function showSlider(){
    // REMOVE OLD ACTIVE ITEM
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // NEW ACTIVE ITEM
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // CLEAR AUTO TIME RUN SLIDER
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 3000)
}

// CLICKING THUMBNAIL
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})