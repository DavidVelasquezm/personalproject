var main = function(){    
var f = new Date();
   
    if(f.getHours() < 10 || f.getMinutes() < 10 || f.getSeconds() < 10){
    var h;
    var m;
    var s;
    if(f.getHours() < 10){<
      h = ("0" + f.getHours());
    }else{

      h = f.getHours();   
    }

    if(f.getMinutes() < 10){
      m = ("0" + f.getMinutes());              
    }else{

      m = f.getMinutes();

    }
    if(f.getSeconds() < 10){
      s = ("0" + f.getSeconds());     
    }else{
      s = f.getSeconds();   
    }
    $("#change").html("<h3>"+h + ":" + m + ":" + s+"<h3>");
    setTimeout(main, 1000);
    }else{

      $("#change").html("<h3>"+f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds()+"<h3>");

      setTimeout(main, 1000);
    } 
};
main();