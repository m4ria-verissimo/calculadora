function cal(){
    var num1 = Number(document.getElementById("n1").value );
    var num2 =Number( document.getElementById("n2").value );
    var ope = document.getElementById("op").value;
   
    switch(ope){
        case "+":
            resul = num1 + num2
            document.getElementById("resu").innerHTML="Resultado: " + resul;
            break;
            case "-":
            resul = num1 - num2
            alert(resul);
            break;
            case "*":
            resul = num1 * num2
            alert(resul);
            break;
            case "/":
                resul = num1 / num2
                alert(resul);
            
    }


}
      
   