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

//CONTROLADOR DE SLIDES DE LAS IMG AMPLIADAS


//FUNCION QUE AMPLIA LA IMAGEN
/**un selector que permite obtener la propiedad imgDeArticulo para luego agregarle la propiedad
 * addEventListener "click" mediante de una estructura repetitiva para luego añadir un div con la img ampliada
 * */

//ARRAY DE COMPROBACION PARA LA CREACION DE SLIDES
const comprobanteImg= ["../Img articulos/ImgRopa/jeans negros.jpeg","../Img articulos/ImgRopa/vestido palo rosa.jpeg","../Img articulos/ImgRopa/vestido jolie negro.jpeg",
"../Img articulos/ImgRopa/Blusa rojo vino nozz.jpeg"];
const imgMaches=["../Img articulos/ImgRopa/jeans negro2.jpeg","../Img articulos/ImgRopa/vestido palo rosa2.jpeg","../Img articulos/ImgRopa/vestido jolie negro2.jpeg",
"../Img articulos/ImgRopa/Blusa rojo vino nozz2.jpeg"];


let slideIndex= 1;
showSlides(slideIndex);
//CONTROL PREV
function plusSliden(n){
   showSlides(slideIndex +=n);
}
//BUCLE QUE CONTROLA LAS IMG DE LOS SLIDES
function showSlides(n){
   let i;
   let slides = document.getElementsByClassName("imgToControl");
   if(n > slides.length){slideIndex=1};
   if (n < 1){slideIndex= slides.length};
   for (i=0; i < slides.length;i++){
      slides[i].style.display="none";
   }
   slides[slideIndex-1].style.display = "block";
}


document.querySelectorAll('.imgDeArticulos').forEach(item=>{
   item.addEventListener('click', function ampliarLaImagen(element){
      let enlaceImagen= this.src;
      let enlaceValue= this.getAttribute("src");
      let encontreLaImg=false;
      const contenedor= document.getElementById("MainContenedor");
      let newDiv = document.createElement("div");
      newDiv.id='newDiv';
      for(let x=0; x<comprobanteImg.length; x++){
         if(enlaceValue==comprobanteImg[x]){
            newDiv.innerHTML='<div id="imgAmpliada">'+
                                 '<img  class="imgToControl" src="'+enlaceImagen+'" >'+
                                 '<img  class="imgToControl" id="escondeImg" src="'+imgMaches[x]+'">'+
                                 '<img id="botonCerrarImg" src="../Img articulos/Bton cerrarIMG.png">'+
                                 '<a id="prev" onclick="plusSliden(-1) ">&#10094;</a>'+
                                 '<a id="next" onclick="plusSliden(1)" >&#10095;</a>'+
                              '</div>'/* +'<script src="../controlador.js"></script>' */;
            contenedor.appendChild(newDiv);
            
            let variable=document.getElementById("variable");
            variable.className="hide";

            
            
            encontreLaImg=true;
            break;
         }
      }
      if(encontreLaImg==false){
         newDiv.innerHTML='<div id="imgAmpliadaSinVector">'+
                     '<img  class="imgToControl" src="'+enlaceImagen+'" >'+
                     '<img id="botonCerrarImg" src="../Img articulos/Bton cerrarIMG.png">'+
                  '</div>';
         contenedor.appendChild(newDiv);
         let espacioCerrar= document.getElementById('imgAmpliadaSinVector');
         espacioCerrar.addEventListener('click', () =>{
            document.getElementById('newDiv').remove();
         })
      }
      

      let btnCerrar = document.getElementById('botonCerrarImg');
      btnCerrar.addEventListener('click', () =>{
         document.getElementById('newDiv').remove();
      })

      //console.log(enlaceImagen);
   });
})


