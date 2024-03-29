 let main = document.querySelector('main');
 let previous = document.querySelector('.previous');
 let next = document.querySelector('.next');
 let image = document.querySelector('.img');
 let title = document.querySelector('.title');
 let counter = document.querySelector('.counter');
 let mode = document.querySelector('.mode');
 let cursor = document.querySelector('.cursor');
 let splash = document.querySelector('.splash');

 let darkMode = false;

 mode.addEventListener('click',()=>{
    darkMode = !darkMode;
    if(darkMode){
        document.documentElement.style.setProperty('--main-color','#161616')
        document.documentElement.style.setProperty('--secondary-color','#ded9d9')
        document.documentElement.style.setProperty('--third-color','#9c9c9c')
        document.documentElement.style.setProperty('--title-color','#ffffff')
    }else{
        document.documentElement.style.setProperty('--main-color','#ffffff')
        document.documentElement.style.setProperty('--secondary-color','#ded9d9')
        document.documentElement.style.setProperty('--third-color','#9c9c9c')
        document.documentElement.style.setProperty('--title-color','#161616')
    }

 })
 window.addEventListener('mousemove',(e)=>{
    cursor.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`
 })

 next.addEventListener('mouseenter',()=>{
    cursor.classList.remove('left')
    cursor.classList.add('right')
 }
 )
 next.addEventListener('mouseleave',()=>{
    removeCursor(cursor)
 })


previous.addEventListener('mouseleave',()=>{
    removeCursor(cursor)
 })

 previous.addEventListener('mouseenter',()=>{
    cursor.classList.remove('right')
    cursor.classList.add('left')
 }
 )

function removeCursor(element) {
    element.classList.remove('left')
    element.classList.remove('right')
    
 }

let locations = ['London','Paris','New York','Berlin','Warsaw']
let upperCities = locations.map(loc=> loc.toUpperCase())

   
    
image.style.backgroundImage = 'url(./img/1.jpeg';
counter.querySelector('p').innerText = '1/5'
title.querySelector('p').innerText = upperCities[0]

previous.addEventListener('click',()=>{
    let num = Number(image.style.backgroundImage.split('/')[2][0]) // get the number from the img url;
   
    num = +image.style.backgroundImage.split('/')[2][0];
    num == 1 ? num = 5 : num--;
    image.style.backgroundImage = `url(./img/${num}.jpeg)`;
    counter.querySelector('p').innerText=`${num}/5`
    title.querySelector('p').innerText=`${upperCities[num-1]}`

})

next.addEventListener('click',()=>{
    let num = Number(image.style.backgroundImage.split('/')[2][0]) // get the number from the img url;
   
    num = +image.style.backgroundImage.split('/')[2][0];
    num == 5 ? num = 1 : num++;
    image.style.backgroundImage = `url(./img/${num}.jpeg)`;
    counter.querySelector('p').innerText=`${num}/5`
    title.querySelector('p').innerText=`${upperCities[num-1]}`

})

function loadPage(){
    let html = '';
    let splashTitle = document.querySelector('.splash-title');
    let splashTitleArray = splashTitle.innerText.split('');
    splashTitleArray.forEach(letter => {
        html += `<span>${ letter }</span>`
    })
    splashTitle.innerHTML = html;

    [...splashTitle.querySelectorAll('span')].forEach((span, idx) => {
        setTimeout(() => {
            span.style.transform = 'translateY(0px)'
        }, (idx + 1) * 50);
    })

    setTimeout(() => {
        splash.classList.add('active');

        setTimeout(() => {
            main.style.transform = `translateY(0px)`;
            main.style.opacity = 1;
            splash.style.display = 'none';
            image.style.transform = 'scale(1)';
        }, 50)
    }, 2000)
}

loadPage()
