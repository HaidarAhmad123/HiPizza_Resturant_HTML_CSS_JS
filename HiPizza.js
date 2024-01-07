///////body element

let menu = document.querySelector(".menu")
let contact = document.querySelector('.contact')
let head = document.querySelector(".head")
let land = document.querySelector(".land")
let resturantSection = document.querySelector(".resturants-sections")
let ourChefs = document.querySelector('.our-chefs')
///////body element



//notes :
//when you add element to the menu add it with same index of its image
function stop(){ clearInterval(type)}
// typewritter effect
    let textInput = document.querySelector(".land span")
    let myText = 'HiPizza'
    
    // difining a starting text string
    let textString = ''
    // for loop to add characters
        let l =0
        var type = setInterval(function(){
        'use strict';
        textInput.textContent += myText[l];
    l++;
    if(l==7)
        {
            stop()
        }
    },400)
// typewritter effect


//content
let myInputs = document.querySelectorAll("#input")

myInputs.forEach(element => {
   element.onfocus =function(){
    element.style.border = "transparent"
     element.style.boxShadow = "1px 2px 3px 1px #00000052"
}
});
let userName = document.querySelector(".userName")

document.forms[0].onsubmit = function(e)
{
    let userValid = false;
    let passwordValid = false;
    let numberValid = false;
    if(myInputs[0].value.length>4)
    {
        userValid =true
    }
    if(myInputs[2].value.length>5)
    {
        passwordValid = true
    }
    if(myInputs[3].value.length > 9 ) 
    {
        numberValid = true
    }
    
    if(userValid === false ||passwordValid === false||numberValid === false)
    {
        e.preventDefault();
    }      
}
///////////////////////////////////////////
// close content //
let Close = document.querySelectorAll(".closed")




let contactButton = document.getElementById("contact")
contactButton.onclick = function(){
    contact.style.display = "flex"
    head.style.cssText = `
    filter: blur(3px);
    pointer-events: none;
    `    
    land.style.cssText = `
    filter: blur(3px);
    pointer-events: none;
    `    
    resturantSection.style.cssText = `
        filter: blur(3px);
        pointer-events: none;
        `
        ourChefs.style.cssText = `
        filter: blur(3px);
        pointer-events: none;
        `
}

// close content //

// menu //
//convert li text to class name
let myItems = document.querySelectorAll(".menu .sections ul li")

for(i=0 ; i<myItems.length; i++)
{
    let myLi = myItems[i].innerText;
    let myLiArray= myLi.split('')
    for(j=0;j<myLiArray.length;j++){
    if(myLiArray[j] === ' ')
    {
        myLiArray[j] = '-';
    }
    } 
    myItems[i].classList.add(myLiArray.join(''))
}

// show image by hover the Li
let myImages = document.querySelectorAll('.menu .sections .kind-image img')
for(let i =0 ; i<myImages.length;i++)
{
    myImages[i].classList.add(myItems[i].className)
}

myItems.forEach(e =>{
    e.onmouseover = function()
    {
        let image = document.querySelector(`.menu .sections .kind-image .${e.className}`)
        image.style.display = 'none'
        image.style.display = 'block'
        
    }
})
myItems.forEach(e =>{
    e.onmouseleave = function()
    {
        let image = document.querySelector(`.menu .sections .kind-image .${e.className}`)
        image.style.display = 'none'
    }
})
// on off menu

let menuButton = document.getElementById("menu")
menuButton.onclick = function(){
    menu.style.display = "flex"
    head.style.cssText = `
    filter: blur(3px);
    pointer-events: none;
    `    
    land.style.cssText = `
    filter: blur(3px);
    pointer-events: none;
    `    
    resturantSection.style.cssText = `
        filter: blur(3px);
        pointer-events: none;
        `
        ourChefs.style.cssText = `
        filter: blur(3px);
        pointer-events: none;
        `
}


//menu //
// resturant section
// zoom image
let mySection = document.querySelectorAll('.resturants-sections .container .section .image')
let eyeIcon = document.querySelectorAll('.resturants-sections .container .section .image i')
let img = document.querySelectorAll('.resturants-sections .container .section .image img')
let resturantClose = document.querySelectorAll('.resturants-sections .container .section .image .close')

eyeIcon.forEach((icon , index )=>{
    icon.onclick = function(){
        mySection[index].style.cssText = `
        width: 900px;
        z-index: 25;
        height: 720px;
        top: -38px;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        filter:brightness(1);
        `
        icon.style.display = 'none'
        img[index].style.filter = 'brightness(1)'
        resturantClose[index].style.display = 'block'
        document.querySelector('.resturants-sections .background').style.filter = 'blur(3px)'
        head.style.cssText = `
        filter: blur(3px);
        pointer-events: none;
        `
        land.style.cssText = `
        filter: blur(3px);
        pointer-events: none;
        `
        resturantClose.forEach((e,index)=>{
            e.onclick = function(){
                mySection[index].style.cssText = `
                height: 350px;
                width: 370px;
                z-index: 0;
                top: auto;
                position: relative;
                left: auto;
                transform: translateX(0);
                `
                img[index].style.filter = 'brightness(0.8)'
                console.log('hi')
                resturantClose[index].style.display = 'none'
                icon.style.display = 'block'
                head.style.cssText = `
                filter: blur(0);
                pointer-events: auto;
                `    
                land.style.cssText = `
                filter: blur(0);
                pointer-events: auto;
            `   
            }
        })
    }
})
resturantClose.forEach((e,index)=>{
    e.onclick = function(){
        mySection[index].style.cssText = `
        height: 350px;
        width: 370px;
        z-index: 0;
        top: auto;
        position: relative;
        left: auto;
        transform: translateX(0);
        filter:brightness(0.8);
        `
        console.log('hi')
    }
})
// zoom image
// resturant section

// close effect
Close.forEach( e => {
    e.onclick = function()
    {
        contact.style.display = 'none';
        menu.style.display = 'none';
        head.style.cssText = `
        filter: blur(0);
        pointer-events: auto;
        `    
        land.style.cssText = `
        filter: blur(0);
        pointer-events: auto;
        `    
        resturantSection.style.cssText = `
        filter: blur(0);
    pointer-events: auto;
        `
        ourChefs.style.cssText = `
        filter: blur(0);
    pointer-events: auto;
        `
    }
})
// close effect
// image slider
let carrousel = document.querySelector('.carrousel')

carrousel.style.top = '150px'

let h = 0

if (h == 0){
let topIncrease = setInterval(()=> {
    h++
    carrousel.style.top = `calc(${carrousel.style.top} - 600px)`
    if (h==3)
{
    clearInterval(topIncrease)
    
    let reduceTop = setInterval(()=>{
        h--;
        carrousel.style.top = `calc(${carrousel.style.top} + 600px)`
        
        if(h==0)
        {
            clearInterval(reduceTop)
        }
    },2000)
}
},2000)}




// image slider
// carrousel.style.top = `${carrousel.style.top - 500}px` 