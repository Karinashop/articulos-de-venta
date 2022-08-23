/* function limpiar(){
   
} */
document.addEventListener("keyup",e=>{
   if(e.key==='Escape')e.target.value="";
   if(e.target.matches('#Buscando')){
      document.querySelectorAll(".articulo").forEach(cadaArticulo=>{
         cadaArticulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
         ?cadaArticulo.classList.remove("filtro")
         :cadaArticulo.classList.add("filtro")
      })
   }
})

document.addEventListener("keyup",e=>{
   if(e.target.matches('#Buscando2')){
      document.querySelectorAll(".articulo").forEach(cadaArticulo=>{
         cadaArticulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
         ?cadaArticulo.classList.remove("filtro")
         :cadaArticulo.classList.add("filtro")
      })
   }
   
})
document.getElementById('MenuComeBackButton').addEventListener('click',x=>{
   document.getElementById('Buscando2').value="";
   document.querySelectorAll(".articulo").forEach(Articulo=>{
      Articulo.classList.remove("filtro")})
})