const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-ligth')
const hamburguer1 = document.querySelector('.hamburger');


imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
       aparecerImg(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1';
    }
})


const aparecerImg = (imagen) =>{
    imagenLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0';
    
    
}