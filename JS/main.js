/*########### HERO TEXT ANIMATION ###########*/ 

const hero = document.querySelector('.pizza-pos-main');
const text = hero.querySelector('h1');
const subText = hero.querySelector('.sub-shadow')
const shadowWalk = 50; 


function shadow(e){
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e; 

    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    //Der Mittelpunkt der schrift wird mit dieser Formel zu 0 und somit die Linke Obere Ecke zu -50 und die rechte unter Ecke zu +50 
    //somit geht der Shadow Walk in jede Richtunng plus oder minus 50px 
    const xWalk = Math.round((x / width * shadowWalk) - (shadowWalk / 2));       
    const yWalk = Math.round((y / height * shadowWalk) - (shadowWalk / 2));

    text.style.textShadow = `${xWalk * 2}px ${yWalk * 2}px 0 rgba(244, 166, 74, 0.7`;
    subText.style.textShadow = `${xWalk}px ${yWalk}px 0 rgb(255, 158, 22)`;



}

hero.addEventListener('mousemove', shadow)


/*########## PIZZA CIRCLE ANIMATION ########*/ 


    const circle = document.querySelector('.main-circle');
    const pizzaCircle = document.querySelector('.main-pizza')
    const circle2 = document.querySelector('.main-circle2');
    const pizzaCircle2 = document.querySelector('.main-pizza2')


    gsap.to(circle , {duration: 70, rotation: 360, repeat: -1 , ease: "none"});
    gsap.to(pizzaCircle , {duration: 50, rotation: -360, repeat: -1 , ease: "none"});
    gsap.to(circle2 , {duration: 70, rotation: 360, repeat: -1 , ease: "none"});
    gsap.to(pizzaCircle2 , {duration: 50, rotation: -360, repeat: -1 , ease: "none"});





/*######## PIZZZZA SLICE ANIMATION #########*/ 


const pizzaSlice = document.querySelector('.form-pizza');

const tl = gsap.timeline({repeat: -1});

tl
  .to(pizzaSlice, 1, {rotate:10, ease:Linear.easeNone})
  .to(pizzaSlice, 1, {rotate:-10, ease:Linear.easeNone, repeat:-1, yoyo:true});




  /*####### BAAAAANNNNNERR ############*/ 


  window.onload = function(){


    const maintl = gsap.timeline({})

    maintl.add('frame0')
        .fromTo('.banner-list',{ x:-160, opacity:0 }, { duration: 1, x: 160, opacity:1},'frame0') 
        .add('frame1', '+= 1')
        .fromTo('.pizzamann',{x: 1000 , opacity: 0} , { duration: 3 , opacity:1, x: 37}, 'frame1')
        .add('frame2', '+=.1')
        .to('.banner-list', { duration:1, x:-180, opacity:0 }, 'frame2')
        .to('.pizzamann', { duration: 2, x:-1400 ,  opacity:0 }, 'frame2')
        .add('frame3', '+=.2')
        .fromTo('.banner-text__order',{scale: 0, rotate:-15,  opacity:0}, {duration: .5, rotate:0, opacity:1, scale: 1},'frame3')
        .add('frame4', '+=.5')
        .fromTo('.pizzabox', {scale: 0, rotate:360,  opacity:0}, {duration: 1, rotate:0, opacity:1, scale: 1},'frame4')
        .add('frame5', '+=.5')
        .to('.pizzaknife', {duration: .5, opacity:1},'frame5')
        .to('.pizzaknife', {duration: .2, x: -170})
        .add('frame6', '+=.1')
        .fromTo('.banner-text__free', {scale:0 , opacity: 0}, {scale: 1, opacity: 1}, 'frame6')

}

  /*########### STICKY NAV #######*/ 


  // STICKY NAV

window.onscroll = function() {sticky_nav()};

// Navigation selektieren 
var nav = document.querySelector("nav");

// Das offset top der nav in sticky speichern
var sticky = nav.offsetTop;


function sticky_nav() {
  if (window.pageYOffset >= sticky) {   // wenn die windowposition die offset position erreicht 
    nav.classList.add("sticky");  //soll der nav die sticky klasse hinzugefügt werden 
  } else {
    nav.classList.remove("sticky"); // wenn die windowposition ganz oben ist soll die klasse entfernt werden 
  }


}
