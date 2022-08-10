// const px600 =matchMedia ('(max-width: 600px)');
// const change600 = mql => {
//     mql.matches
//     ? document.body.style.background= 'red'
//     // ? document.getElementById('Buscando').style.display='none'
//     // ? document.getElementById('buscar').style.right='0%'
//     // ? document.getElementById('buscar').style.right='35%'
//     : document.body.style.background='aliceblue'
// }

// px600.addEventListener(change600);
// change600(px600);

//RECARGAR
function recargar (){
    location.reload();
}
// setInterval("location.reload()",60000);

//FUNCTION SEARCH AND SECOND MENU
function ButtonMenuPho(){
    document.getElementById('TercerMenu').style.display='block';
}
function ButtonMenuPhoDown(){
    document.getElementById('TercerMenu').style.display='none';
}
var MPhoneB = document.getElementById('ButtonMenuPhone'),
    Tochange= document.getElementById('TercerMenu'),
    ContadorMPB = 0;
    function cambioButtonMenu(){
    
        if(ContadorMPB==0){
            ButtonMenuPho();
            ContadorMPB=1;
        }
        else{
            ButtonMenuPhoDown()
            ContadorMPB=0;
        }
    }
 MPhoneB.addEventListener('click',cambioButtonMenu ,true);

//
function DropDownBar(){
    document.getElementById('PrimerMenu').style.display='none'
    document.getElementById('SegundoMenu').style.display='block'
    let LupaSearch;
    LupaSearch=document.getElementById('Lupa');
    LupaSearch.onclick=Search;
    
}
function NoneDropDownBar(){
    document.getElementById('PrimerMenu').style.display='block'
    document.getElementById('SegundoMenu').style.display='none'
}
function Search(evento){
    alert("Se esta buscando");
}
// let ComeBackButtonMenu = document.getElementById('MenuComeBackButton');
// ComeBackButtonMenu.onclick = NoneDropDownBar;

const Ev_OnClick =()=>{
    let ButtonSearch;
    ButtonSearch = document.getElementById('buscar');
    let NewBuscarForP;
    NewBuscarForP= document.getElementById('NewBuscarForPhone');
    let ComeBackButtonMenu;
    ComeBackButtonMenu= document.getElementById('MenuComeBackButton');

    
    if(innerWidth < 600){
        ButtonSearch.onclick= DropDownBar;
        NewBuscarForP.onclick= DropDownBar;
        ComeBackButtonMenu.onclick = NoneDropDownBar;
        //BUSCAR SI LAS FUNCIONES SON VALIDAS Y APRENDER A AGREGAR "ON CLICK(fUNCTION)" EN BOTON A 600PX
    } else {
        NewBuscarForP.onclick= Search;
        ButtonSearch.onclick= Search;  
    }
}
addEventListener('resize', Ev_OnClick)
addEventListener('DOMContentLoaded',Ev_OnClick)
//SLIDES
let slideIndex= 1;
showSlides(slideIndex);
//previous controls
function plusSliden(n){
    showSlides(slideIndex +=n);
}

//image control
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("slide");
    if(n > slides.length){slideIndex=1};
    if (n < 1){slideIndex= slides.length};
    for (i=0; i < slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display = "block";
     
}
setTimeout(showSlides,100);
 //Funcion for links
function Ropalink(){
    window.location="https://karinashop.github.io/articulos-de-venta/Ropa/ropa.html";
    window.location.href="https://karinashop.github.io/articulos-de-venta/Ropa/ropa.html";
}
function Perfumelink(){
    window.location="https://karinashop.github.io/articulos-de-venta/Perfumes/perfume.html";
    window.location.href="https://karinashop.github.io/articulos-de-venta/Perfumes/perfume.html";
}
function Artciuloslink(){
    window.location="https://karinashop.github.io/articulos-de-venta/Articulos/articulos.html";
}
function Joyerialink(){
    window.location="https://karinashop.github.io/articulos-de-venta/Joyeria/joyeria.html";
}




//REAL CODE
// const resize =()=>{
//     if(innerWidth > 600){
//         // document.body.style.background= 'red'
//         document.getElementById('Buscando').style.display='block'
//         document.getElementById('buscar').style.right='30%'
//     } else {
//         document.getElementById('Buscando').style.display='none'
//         document.getElementById('buscar').style.right='0%'
//         document.getElementById('buscar').style.right='35%'
//     }
// }
// addEventListener('resize', resize)
// addEventListener('DOMContentLoaded',resize)



