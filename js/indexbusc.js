 var pag= {
      "movilidad.html" : 'rutasp.html' , 
      "vegas":'rutasv.html' , 
      "sabaneta-poblado" :'rutasp.html' , 
      "oriental-sabaneta":'rutasv.html ', 
      "sabaneta-vegas":'rutasv.html'
    };
 $('#button').click(function(e){
    e.preventDefault();
    var bus = $('#bus').val();
    var pagina = pag[bus.toLowerCase()];
    if (typeof pagina != 'undefined') {
        window.location.href = pagina;
    }else{
      alert('error');
    }   
    console.log('pagina');
 });
