"navbar__burger-menu-open"

// $(".navbar__burger-menu").addClass("burger__open__block-button")

$(document).ready(function(){
    $('#burger-menu').click(function (){
        $(this).toggleClass('burger__open__block-button')
        $('.navbar').toggleClass('burger__open__block')
        $('.navbar__list').toggleClass('burger__open__block-list')
        $('#apple-icon').toggleClass('burger__open__block-icon')
        $('.navbar__item').toggleClass('burger__open__block-item')
        $('.ac-gn-menuicon-bread-crust').toggleClass('navbar__burger-menu-open')
    })
})