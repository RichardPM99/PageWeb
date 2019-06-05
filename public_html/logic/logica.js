function imprimir(){
                
    var cars = ["BMW" , "Volvo" , "Saab" , "Ford" , "Fiat" , "Audi"];
    var text = "";
                
                
    for (var i =0; i < cars.length; i++) {
    text = text + "<h1>"+ cars[i]+"</h1>" + "<hr>";
    }
    document.getElementById("demo").innerHTML =text;
    }
            
            
            
function limpiar(){
    var cars = ["" , "" , "" , "" , "" , ""];
    var text = "";
                
    for (var i =0; i < cars.length; i++) {
    text = text + "<h1>"+ cars[i]+"</h1>" + "<hr>";
    }
    document.getElementById("demo").innerHTML ="";
    }



