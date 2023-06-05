window.addEventListener("scroll", function(){
    var header = document.querySelector(".header_content");
    header.classList.toggle("header_content-down", window.scrollY > 0)
})

w2 = window.