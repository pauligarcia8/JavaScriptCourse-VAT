var pedido;
function numero () {
    pedido = prompt("Ingrese un numero");

    //if (typeof(pedido) == "number") {
    //   return numero();
    //} ESTA FUNCION FUE PARA RECHAZAR CUALQUIER ELEMENTO QUE NO SEA UN NUMERO, PERO ME LO TOMA COMO STRING (por lo tanto me acepta letras), pero esta opcion tiene en cuenta el posible "cancelar". Intente con parseInt, pero me lo toma como STRING.
    //if (typeof(parseIntpedido) == "number") {
    //    return numero();
    //}

    if (isNaN (pedido)) {
        return numero();
    } 

    console.log(pedido);
    document.getElementById("numI").innerHTML = pedido;
}

document.getElementById("pedido").onclick = numero;

function iva () {
    var res = pedido * 0.21;  

    console.log(res);
    document.getElementById("resultado").innerHTML = res;
    
}

document.getElementById("calcular").onclick = iva;