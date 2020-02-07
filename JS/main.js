/*########### HERO TEXT ANIMATION ###########*/ 

const hero = document.querySelector('.pizza-pos-main');
const text = hero.querySelector('h1');
const shadowWalk = 30;  // 30px 


function shadow(e){
    //offset höhe und  breite in hero speichern um Position von mouse zu wissen
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e; 


    //kontolle ob sich Maus in schriftzug befindet, da im schriftzug x und y neu genullt wird. 
    //wenn sich maus in schriftzug befindet wird Position von maus zusammen mit x oder y positon neu gesetzt
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    //Der Mittelpunkt der schrift wird mit dieser Formel zu 0 und somit die Linke Obere Ecke zu -50 und die rechte unter Ecke zu +50 
    //somit geht der Shadow Walk in jede Richtunng plus oder minus 50px 
    const xWalk = Math.round((x / width * shadowWalk) - (shadowWalk / 2));       
    const yWalk = Math.round((y / height * shadowWalk) - (shadowWalk / 2));

    //schatten erzeugen 
    text.style.textShadow = `
    ${xWalk * 2}px ${yWalk * 2}px 0 rgba(244, 166, 74, 0.7), 
    ${xWalk}px ${yWalk}px 0 rgb(255, 158, 22)`
}

hero.addEventListener('mousemove', shadow)


/*########## PIZZA CIRCLE ANIMATION ########*/ 


    

    const circle = document.querySelector('.main-circle');
    const pizzaCircle = document.querySelector('.main-pizza')
    const circle2 = document.querySelector('.main-circle2');
    const pizzaCircle2 = document.querySelector('.main-pizza2')

    //Pizza und Pizza ring unendlich lang drehen lassen 
    gsap.to(circle , {duration: 70, rotation: 360, repeat: -1 , ease: "none"});
    gsap.to(pizzaCircle , {duration: 50, rotation: -360, repeat: -1 , ease: "none"});
    gsap.to(circle2 , {duration: 70, rotation: 360, repeat: -1 , ease: "none"});
    gsap.to(pizzaCircle2 , {duration: 50, rotation: -360, repeat: -1 , ease: "none"});





/*######## PIZZZZA SLICE ANIMATION #########*/ 



//Pizza stück selektieren
const pizzaSlice = document.querySelector('.form-pizza');


//animation unendlich abspielen 
const tl = gsap.timeline({repeat: -1});

// pizzastück immer um 15° drehen
tl
  .to(pizzaSlice, 1, {rotate:10, ease:Linear.easeNone})
  .to(pizzaSlice, 1, {rotate:-10, ease:Linear.easeNone, repeat:-1, yoyo:true});








/*####### BAAAAANNNNNERR ############*/ 



  //Variable für Animations counter 
  let played = 0;

  //scroll Event erstellen
  window.addEventListener("scroll", function () {


    //kontroller ob gescrollt wurde und ob die Animation schon einmal gestartet wurde. Wenn 0 dann Animations start dabei wird der counter auf 1 gesetzt,
    // wenn 1 wird animation nicht noch einmal gestartet
    if (document.scrollTop >= 500 || played === 0) {

      played = played +1

      const maintl = gsap.timeline({})

      maintl.add('frame0')

        //liste wird von links in den Banner bewegt
        .fromTo('.banner-list',{ x:-160, opacity:0 }, { duration: 1, x: 160, opacity:1},'frame0') 
        .add('frame1', '+= 1')
        //Pizzamann wird von Rechts in den Banner animiert
        .fromTo('.pizzamann',{x: 1000 , opacity: 0} , { duration: 3 , opacity:1, x: 37}, 'frame1')
        .add('frame2', '+=.1')
        //Pizzamann und Liste wird nach links aus dem Banner bewegt 
        .to('.banner-list', { duration:1, x:-180, opacity:0 }, 'frame2')
        .to('.pizzamann', { duration: 2, x:-1400 ,  opacity:0 }, 'frame2')
        .add('frame3', '+=.2')
        //Order Onlone text wird von der mitte mit einer kleinen Rotation immer größer 
        .fromTo('.banner-text__order',{scale: 0, rotate:-15,  opacity:0}, {duration: .5, rotate:0, opacity:1, scale: 1},'frame3')
        .add('frame4', '+=.5')
        // Pizzabox erscheint mit einer 360 drehung 
        .fromTo('.pizzabox', {scale: 0, rotate:360,  opacity:0}, {duration: 1, rotate:0, opacity:1, scale: 1},'frame4')
        .add('frame5', '+=.5')
        //Pizza Roller erscheint und bewegt sich einmal über die pizzabox 
        .to('.pizzaknife', {duration: .5, opacity:1},'frame5')
        .to('.pizzaknife', {duration: .2, x: -170})
        .add('frame6', '+=.1')
        //Delivery text erschein 
        .fromTo('.banner-text__free', {scale:0 , opacity: 0}, {scale: 1, opacity: 1}, 'frame6')
        .add('frame7', '+=.1')
        //Liefer Moped fähert einmal von rechts nach links durch den banner 
        .fromTo('.pizzamoped', {x: 300, rotate:15 },{duration:1.5, x: -1700, opacity:1, ease: Linear.easeNone},'frame7')
    }

  });
