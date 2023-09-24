window.addEventListener('load', function(){
    let formularioCreacion = document.querySelector('#main_form');
    let tituloLibro = document.querySelector('#titulo');
    let spanTitulo = document.querySelector('#spanTitulo');
    let autorLibro = document.querySelector('#autor');
    let spanAutor = document.querySelector('#spanAutor');
    let sinopsisLibro = document.querySelector('#sinopsis');
    let spanSinopsis = document.querySelector('#spanSinopsis');
    let precioLibro = document.querySelector('#precio');
    let spanPrecio = document.querySelector('#spanPrecio');
    let edicionLibro = document.querySelector('#edicion');
    let spanEdicion = document.querySelector('#spanEdicion');
    let paginasLibro = document.querySelector('#paginas');
    let spanPaginas = document.querySelector('#spanPaginas');
    let idiomaLibro = document.querySelector('#idioma');
    let spanIdioma = document.querySelector('#spanIdioma');
    let presentacionLibro = document.querySelector('#presentacion');
    let spanPresentacion = document.querySelector('#spanPresentacion');


    const expresiones = {
    titulo: /^.{2,40}$/, // Letras, numeros, guion y guion_bajo
    sinopsis: /^.{2,240}$/, // Letras, numeros, guion y guion_bajo
	  autor: /^.{2,40}$/, // Letras y espacios, pueden llevar acentos.
	  password: /^.{6,12}$/, // 6 a 12 digitos.
    precio: /^.{2,5}$/, // 2 a 5 digitos.
    edicion: /^.{1,4}$/, // 1 a 4 digitos.
    paginas: /^.{1,5}$/, // 1 a 5 digitos.
    idioma: /^[a-zA-ZÀ-ÿ\s]{3,10}$/, // Letras y espacios, pueden llevar acentos.
    presentacion: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Letras y espacios, pueden llevar acentos.
	  }
    const campos = {
      titulo : false,
      autor: false,
      sinopsis: false,
      precio: false,
      edicion: false,
      paginas: false,
      idioma: false,
      presentacion: false
    }

    tituloLibro.focus()
    tituloLibro.addEventListener('blur', (e)=>{
        if(expresiones.titulo.test(e.target.value)){
          tituloLibro.classList.remove('error');
          spanTitulo.classList.add('invisible');
          spanTitulo.classList.remove('visible');
          campos.titulo = true
          autorLibro.focus();
        }else{
          tituloLibro.classList.add('error');
          spanTitulo.classList.remove('invisible');
          spanTitulo.classList.add('visible');
          campos.titulo = false
        }
      });
      
      autorLibro.addEventListener('blur', (e)=>{
          if(expresiones.autor.test(e.target.value)){
            autorLibro.classList.remove('error')
            spanAutor.classList.add('invisible');
            spanAutor.classList.remove('visible');
            campos.autor = true;
            sinopsisLibro.focus();
          }else{
            autorLibro.classList.add('error')
            spanAutor.classList.remove('invisible');
            spanAutor.classList.add('visible');
            campos.autor = false;
          }
      });
            
    sinopsisLibro.addEventListener('blur', (e)=>{
        if(expresiones.sinopsis.test(e.target.value)){
          sinopsisLibro.classList.remove('error');
          spanSinopsis.classList.add('invisible');
          spanSinopsis.classList.remove('visible');
          campos.sinopsis= true;
          precioLibro.focus();
        }else{
          sinopsisLibro.classList.add('error');
          spanSinopsis.classList.remove('invisible');
          spanSinopsis.classList.add('visible');
          campos.sinopsis= false;
        }
      });
            
            
    precioLibro.addEventListener('blur', (e)=>{
        if(expresiones.precio.test(e.target.value)){
          precioLibro.classList.remove('error');
          spanPrecio.classList.add('invisible');
          spanPrecio.classList.remove('visible');
          campos.precio=true;
          
          
        }else{
          precioLibro.classList.add('error');
          spanPrecio.classList.remove('invisible');
          spanPrecio.classList.add('visible');
          campos.precio=false;
        }
    });
    edicionLibro.addEventListener('blur', (e)=>{
        if(expresiones.edicion.test(e.target.value)){
          edicionLibro.classList.remove('error');
          spanEdicion.classList.add('invisible');
          spanEdicion.classList.remove('visible');
          campos.edicion= true;
          paginasLibro.focus();
          
        }else{
          edicionLibro.classList.add('error');
          spanEdicion.classList.remove('invisible');
          spanEdicion.classList.add('visible');
          campos.edicion= false;
        }
    });
    paginasLibro.addEventListener('blur', (e)=>{
        if(expresiones.paginas.test(e.target.value)){
          paginasLibro.classList.remove('error');
          spanPaginas.classList.add('invisible');
          spanPaginas.classList.remove('visible');
          campos.paginas= true;
          idiomaLibro.focus();
          
        }else{
          paginasLibro.classList.add('error');
          spanPaginas.classList.remove('invisible');
          spanPaginas.classList.add('visible');
          campos.paginas= false;
        }
    });
    idiomaLibro.addEventListener('blur', (e)=>{
        if(expresiones.idioma.test(e.target.value)){
          idiomaLibro.classList.remove('error');
          spanIdioma.classList.add('invisible');
          spanIdioma.classList.remove('visible');
          campos.idioma= true;
          presentacionLibro.focus();
          
        }else{
          idiomaLibro.classList.add('error');
          spanIdioma.classList.remove('invisible');
          spanIdioma.classList.add('visible');
          campos.idioma= false;
        }
    });
    presentacionLibro.addEventListener('blur', (e)=>{
        if(expresiones.presentacion.test(e.target.value)){
          presentacionLibro.classList.remove('error');
          spanPresentacion.classList.add('invisible');
          spanPresentacion.classList.remove('visible');
          campos.presentacion= true;
        }else{
          presentacionLibro.classList.add('error');
          spanPresentacion.classList.remove('invisible');
          spanPresentacion.classList.add('visible');
          campos.presentacion= false;
        }
    });
    formularioCreacion.addEventListener('submit',(e)=>{
      if (campos.titulo && campos.autor && campos.sinopsis && campos.precio && campos.edicion && campos.paginas && campos.idioma && campos.presentacion){
        formulario.submit();
      }else{
        document.getElementById("span--submit").classList.remove('invisible');
        document.getElementById("span--submit").classList.add('visible');
        e.preventDefault();
      }
    })
});