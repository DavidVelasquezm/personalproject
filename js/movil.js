 var pag= {
      'poblado' :'rutasp.html',
      'vegas':'rutasv.html',
      "sabaneta-poblado" :'http://www.alcazares.edu.co/divertec/andromeda/rutasp.html',
      "oriental-sabaneta":'http://www.alcazares.edu.co/divertec/andromeda/rutasv.html ',
      "sabaneta-vegas":'http://www.alcazares.edu.co/divertec/andromeda/rutasv.html'
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
