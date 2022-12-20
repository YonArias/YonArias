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
    // Obtenemos los valores de cada input
    var tiempo_llegada =  parseFloat(document.getElementById("tiempol").value);
    var tiempo_servicio = parseFloat(document.getElementById("tiempos").value);
    var poblacion = parseFloat(document.getElementById("pobla").value);
    var n = parseFloat(document.getElementById("n").value);

    // Desarrollo con las formulas
    var landa = 1 / tiempo_llegada;
    var u = 1 / tiempo_servicio;

    // Probabilidad de que no hay unidades en el sistema (Po)
    var suma_po = 0;
    for(let i=0; i<poblacion; i++){
        suma_po = suma_po + ((factorial(poblacion) / factorial(poblacion - i)) * Math.pow(landa / u ,i))
    }
    var po = (1 / suma_po);
    // Numero promedio de unidades en la linea de espera (Lq)
    var lq = (poblacion - (((landa + u) / landa) * (1 - po)));
    // Numero promedio de unidades en el sistema (Ls)
    var ls = (lq + (1 - po));
    // Tiempo promedio que una unidad pasa en la linea de espera (Wq)
    var wq = (lq / ((poblacion - ls) * landa));
    // Tiempo promedio que la unidad ocupa en el sistema (Ws)
    var ws = wq + (1 / u);
    // Probabilidad de que una unidad que llega tenga que esperar para que la atiendan
    var pw = 1 - po;
    // Probabilidad de n unidades en el sistema
    var pn = (factorial(poblacion) / factorial(poblacion - n)) * Math.pow(landa / u,n) * po;


    // Mostrar los valores en los input de resultado
    document.getElementById("po").value = po.toFixed(3);
    document.getElementById("lq").value = lq.toFixed(3);
    document.getElementById("ls").value = ls.toFixed(3);
    document.getElementById("wq").value = wq.toFixed(3);
    document.getElementById("ws").value = ws.toFixed(3);
    document.getElementById("pw").value = pw.toFixed(3);
    document.getElementById("pn").value = pn.toFixed(3);
}

function calculargrupo3(){
    // Obtenemos los valores de cada input
    var landa =  parseFloat(document.getElementById("landa").value);
    var u = parseFloat(document.getElementById("u").value);
    var n = parseFloat(document.getElementById("n").value);

    // Desarrollo con las formulas
    // Probabilidad de que no hay unidades en el sistema (Po)
    var suma_po = 0;
    for(let i=0; i<=n; i++){
        suma_po = suma_po + (Math.pow(landa / u, i) / factorial(i));
    }
    var po = ((Math.pow(landa / u, n) / factorial(n)) / suma_po);
    
    var l = (landa / u) * (1 - po);

    // Mostrar los valores en los input de resultado
    document.getElementById("Px").value = po.toFixed(3);
    document.getElementById("L").value = l.toFixed(3);
    document.getElementById("n_o").value = n;
}

function calculargrupo4(){
    // Obtenemos los valores de cada input
    var landa =  parseFloat(document.getElementById("landa").value);
    var u = parseFloat(document.getElementById("u").value);
    var desviacion = parseFloat(document.getElementById("desviacion").value);

    // Desarrollo con las formulas
    // Probabilidad de que no hay unidades en el sistema (Po)
    var po = 1 - ( landa / u );

    // Numero promedio de unidades en la linea de espera (Lq)
    var lq = ( (Math.pow(landa, 2) * Math.pow(desviacion, 2)) + (Math.pow(landa / u, 2)) ) / (2 * (1 - (landa / u)));

    // Numero promedio de unidades en el sistema (L)
    var l = lq + (landa / u);

    // Tiempo promedio que una unidad pasa en la linea de espera (Wq)
    var wq = lq / landa;

    // Tiempo promedio que una unidad pasa en el sistema (W)
    var w = wq + (1 / u);

    // Probabilidad de que una unidad que llega tenga que esperar a que la atiendan (Pw)
    var pw = landa / u;


    // Mostrar los valores en los input de resultado
    document.getElementById("po").value = po.toFixed(3);
    document.getElementById("lq").value = lq.toFixed(3);
    document.getElementById("l").value = l.toFixed(3);
    document.getElementById("wq").value = wq.toFixed(3);
    document.getElementById("w").value = w.toFixed(3);
    document.getElementById("pw").value = pw.toFixed(3);
}

function calculargrupo5(){
    // Obtenemos los valores de cada input
    var landa =  parseFloat(document.getElementById("landa").value);
    var u = parseFloat(document.getElementById("u").value);
    var number_servicio = parseFloat(document.getElementById("numberC").value);
    var costo_servicio = parseFloat(document.getElementById("costoS").value);
    var costo_cliente = parseFloat(document.getElementById("costoC").value);

    // Desarrollo con las formulas
    // Numero de promedio de unidades en la linea de espera
    var lq = Math.pow(landa, 2) / (u * (u - landa));

    // Numero promedio de unidades en el sistema (L)
    var l = lq + (landa / u);

    // Costo total
    var ct = (costo_cliente * l) + (costo_servicio * number_servicio);


    // Mostrar los valores en los input de resultado
    document.getElementById("lq").value = lq.toFixed(3);
    document.getElementById("l").value = l.toFixed(3);
    document.getElementById("ct").value = ct.toFixed(2);
}

function calculargrupo6(){
    // Obtenemos los valores de cada input
    var landa =  parseFloat(document.getElementById("landa").value);
    var u = parseFloat(document.getElementById("u").value);
    var clientes = parseFloat(document.getElementById("n").value);

    // Desarrollo con las formulas
    var p = landa / u;
    // La probabilidad de que tengamos n clientes en el sistema
    var po_a = (1 - p);
    var po = (1 - p) * Math.pow(p, clientes); 

    var px = 1 - (po_a + po);
    // Numero de promedio de unidades en la linea de espera
    var lq = Math.pow(landa, 2) / (u * (u - landa));

    // El tiempo medio que un cliente espera en la cola se obtiene
    var wq = lq / landa;


    // Mostrar los valores en los input de resultado
    document.getElementById("po").value = px.toFixed(2);
    document.getElementById("lq").value = lq.toFixed(2);
    document.getElementById("wq").value = wq.toFixed(2);
}

function calculargrupo7(){
    // Obtenemos los valores de cada input
    var landa =  parseFloat(document.getElementById("landa").value);
    var u = parseFloat(document.getElementById("u").value);
    var k = parseFloat(document.getElementById("k").value);

    // Desarrollo con las formulas
    var sumar = 0.0;
    // La probabilidad de que tengamos n clientes en el sistema
    for(let i=0; i<k; i++){
        sumar += (Math.pow(landa/u, i) / factorial(i)) + ((Math.pow(landa/u, k-1) / factorial(k)) * ((k * u) / ((k*u) - landa)));
    }
    var po = 1 / sumar;

    // Numero promedio de unidades en cola
    var lq = ((Math.pow(landa/u, k) * (u * landa)) / (factorial(k - 1) * Math.pow((k*u)-landa, 2))) * po;

    // Numero promedio de unidades en el sistema
    var ls = lq + (landa / u);

    // Tiempo promedio que una unidad para en la cola
    var wq = lq / landa;

    // Tiempo promedio que una unidad pasa en el sistema
    var w = wq + (1/u);

    // Probabilidad de que una unidad que llega tenga que esperar por el servicio
    var pw = (Math.pow(landa/u, k) / factorial(k)) * ((k * u) / ((k *u) - landa)) * po;

    // Mostrar los valores en los input de resultado
    document.getElementById("po").value = po.toFixed(2);
    document.getElementById("lq").value = lq.toFixed(2);
    document.getElementById("ls").value = ls.toFixed(2);
    document.getElementById("wq").value = wq.toFixed(2);
    document.getElementById("w").value = w.toFixed(2);
    document.getElementById("Pw").value = pw.toFixed(2);

    // Probabilidad de que haya n unidades en cola
    for(let i=0; i<=k+2; i++){
        if(i <= k){
            var pn = (Math.pow(landa/u, i) / factorial(i)) * po;
        }else{
            var pn = (Math.pow(landa/u, i) / (factorial(k) * Math.pow(k, i-k))) * po;
        }
        var cadena = "p" + (i+1);
        document.getElementById(cadena).value = pn;
    }
}

function calculargrupo8(){
    
}

function factorial(number) {
    if(number <= 1){
        return 1;
    }
    return factorial(number-1) * number;
}