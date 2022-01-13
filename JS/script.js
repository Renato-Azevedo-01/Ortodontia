$('.tratamentos').click(function(){
    $('.menulateral ul .itensTratamentos').toggleClass('mostra');
    $('.menulateral ul .seta1').toggleClass('gira');
});

$('.ortodontia').click(function(){
    $('.menulateral .itensOrtodontia').toggleClass('mostra');
    $('.menulateral ul .seta2').toggleClass('gira');
});

$('.aparelhos').click(function(){
    $('.menulateral .itensAparelhos').toggleClass('mostra');
    $('.menulateral ul  .seta3').toggleClass('gira');
});


$('.botaoabre').click(function(){
    $('.menulateral').toggleClass('mostra');
    
});


$('.botaofecha').click(function(){
    $('.menulateral').toggleClass('mostra');
});



$('.desce_header').click(function(){
    $('header').toggleClass('mostra');
    $('img.desce_header').toggleClass('gira');
   
});



$('.sobe_header').click(function(){
    $('header').toggleClass('mostra');
   
});

/*
$('.tratamentos').mouseover(function(){
    $('.menulateral ul .seta1').toggleClass('gira');
}); 
*/
/*
$('.tratamentos').mouseout(function(){
    $('.menulateral ul .seta1').toggleClass('gira');
}); */

/*
$('.ortodontia').mouseover(function(){
    $('.menulateral ul ul .seta2').toggleClass('gira');
});
*/
/*
$('.ortodontia').mouseout(function(){
    $('.menulateral ul ul .seta2').toggleClass('gira');
});
*/

/*
$('.aparelhos').mouseover(function(){
    $('.menulateral ul  .seta3').toggleClass('gira');
});
*/
/*
$('.aparelhos').mouseout(function(){
    $('.menulateral ul ul .seta3').toggleClass('gira');
});
*/

/* Parte do Menu */


class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }


    handleClick() {
        /*console.log(this); */
        this.navList.classList.toggle(this.activeClass);
        /*Com o toggle do JS, o "this -> que é o próprio botão que clicamos, quando na verdade, queremos que  o THIS faça referência à classe MobileNavbar. Para isso, basta usarmos o método "BIND" do JS ====> this.handleClick = this.handleClick.bind(this) que inseri  acima no constructor; */
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();

    }

    addClickEvent() {
       /* this.mobileMenu.addEventListener("click", () => console.log("Hey "));    Só para testar o click*/  
       this.mobileMenu.addEventListener("click", this.handleClick);   
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
} 

/* término do class MobileNavBar*/

const mobileNavbar = new MobileNavbar(
    ".material-icons",
    ".menulateral.nav-list",
    ".menulateral.nav-list li",
);

mobileNavbar.init();



/* BANNER COM 4 IMAGENS */

let time = 10000
let image_corr = 0
let images = document.querySelectorAll("#slider img")
let max = images.length;

function nextImage() {
    
    images[image_corr].classList.remove("selected")

    image_corr ++

    if(image_corr >= max) 
        image_corr = 0

    images[image_corr].classList.add("selected")
  
}



function start() {
   
    /*setInterval(() => {nextImage()}, time) OU */
    setInterval(nextImage, time) /*MAIS FÁCIL*/
}

window.addEventListener("load" , start) 
