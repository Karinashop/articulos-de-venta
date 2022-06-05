//RECARGAR
function recargar (){
    location.reload();
}
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