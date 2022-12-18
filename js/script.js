function calculargrupo1(){
    // Obtenemos los valores de cada input
    var tiempo_llegada =  parseFloat(document.getElementById("tiempol").value);
    var tiempo_servicio = parseFloat(document.getElementById("tiempos").value);
    var poblacion = parseFloat(document.getElementById("pobla").value);
    var number_servicio = parseFloat(document.getElementById("numbers").value);
    var costo_servicio = parseFloat(document.getElementById("cservi").value);
    var costo_inacti = parseFloat(document.getElementById("cinacti").value);

    // Desarrollo con las formulas
    var landa = 1 / tiempo_llegada;
    var u = 1 / tiempo_servicio;

    // Probabilidad de que no hay unidades en el sistema (Po)
    var suma_po = 0;
    for(let i=0; i<poblacion; i++){
        suma_po = suma_po + ((factorial(poblacion) / factorial(poblacion - i)) * Math.pow(landa / (u * number_servicio) ,i))
    }
    var po = (1 / suma_po);
    // Numero promedio de unidades en la linea de espera (Lq)
    var lq = (poblacion - (((landa + u) / landa) * (1 - po)));
    // Numero promedio de unidades en el sistema (L)
    var l = (lq + (1 - po));
    // Tiempo promedio que una unidad pasa en la linea de espera (Wq)
    var wq = (lq / ((poblacion - l) * landa));
    // Costo total por hora de la operacion de servicio
    var costo_total = (costo_inacti * l) + (costo_servicio * number_servicio);



    // Mostrar los valores en los input de resultado
    var po_out = document.getElementById("po");
    var lq_out = document.getElementById("lq");
    var l_out = document.getElementById("l");
    var wq_out = document.getElementById("wq");
    var costo_total_out = document.getElementById("ct");
    
    po_out.value = po.toFixed(3);
    lq_out.value = lq.toFixed(3);
    l_out.value = l.toFixed(3);
    wq_out.value = wq.toFixed(3);
    costo_total_out.value = costo_total.toFixed(1); 

}

function calculargrupo2(){

    
}








function factorial(number) {
    if(number <= 1){
        return 1;
    }
    return factorial(number-1) * number;
}