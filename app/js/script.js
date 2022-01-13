
 const btnHamburger = document.querySelector('#btnHamburger')
 const header = document.querySelector('.header')
 const overlay = document.querySelector('.overlay')
 const backTop = document.querySelector('.backTop')
 const meow = document.querySelector('.meow')

 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      backTop.style.display = "block";
    } else {
      backTop.style.display = "none";
    }
  }

backTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

meow.addEventListener('click', () =>{
    alert("MEOW")
})

btnHamburger.addEventListener('click', () =>{
    const header = document.querySelector('.header')
    const overlay = document.querySelector('.overlay')


    if(header.classList.contains('open')) { //Close Menu
        header.classList.remove('open')
        overlay.classList.remove('fade-in')
    } else //Open Menu
    header.classList.add('open')
    overlay.classList.add('fade-in')

})

overlay.addEventListener('click', () => {
    if(header.classList.contains('open')) { //Close Menu
        header.classList.remove('open')
        overlay.classList.remove('fade-in')
    } else //Open Menu
    header.classList.add('open')
    overlay.classList.add('fade-in')
})

