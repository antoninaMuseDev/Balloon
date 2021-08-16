function openPrice(evt, priceName) {
    const i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("price-tabs__tabcontent");
    for (i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("price-tabs__tablinks");
    for (i=0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
document.getElementsById(priceName).style.display = "block";
evt.currentTarget.className += "active";
    }
}

new Swiper('.comment-slide', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    scrollbar: {
        ei: '.swiper-scrollbar'
    },

});








