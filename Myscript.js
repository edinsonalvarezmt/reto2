


function leerclientes(){

    $.ajax({    
        url : 'https://gcfd9f35194e15c-jn68qx7m5o55w9x5.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/client',
        //data : { id : 123 },
        type : 'GET',
        dataType : 'json',
         
        success : function(clientes) {
            let cs=clientes.items; //listaClientes es un div de html un contenedor que esta en html mirar linea 24
            $("#listaClientes"),empty(); //me limpia la funcion cada vez que se llama y no acumula el resultado en pantalla

            for (i=0;i<cs,length;i++){
                $("#listaClientes").append(cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age);
                // INSERTO BOTON DE DELETE
                $("#listaClientes").append("<button onclick= 'borrarcliente("+cs[i].id+")'>Borrar</button><br>");
                //$("#listaClientes").append("<h2>"+cs[i].name+"</h2> "); esta mostrando estas casillas
                //$("#listaClientes").append(cs[i].email+"<br> ");

            }
            
            // cambiamos la palabra function(json) por function(clientes) arrriba y lo convertimos a cs
            //console.log(json);
        //$('<h1/>').text(json.title).appendTo('body');
        //$('<div class="content"/>')
        //.html(json.html).appendTo('body');
        },
        error : function(xhr, status) {
        alert('ha sucedido un problema');
        },
        //complete : function(xhr, status) {
        //alert('Petición realizada');
        //}
        });
      
}

function guardarcliente(){

     let idCliente=$("#idCliente").val();
     let nombreCliente=$("#nombreCliente").val();
     let mailCliente=$("#mailCliente").val();
     let edadCliente=$("#edadCliente").val();
      
     // lod nombres de la tabla de oracle y los html
     let data={
        id:idCliente,
        name:nombreCliente,
        email:mailCliente,
        age:edadCliente
     };

     // aqui estoy formando una cadena string con los datos capturados en data (id,name,email,age)conect oracle.
     // tener cuidado con la longirud de mail o sino no corre el programa. o aumentar la longirud en tabla oracle.
     let dataToSend=JSON.stringify(data); 

     //console.log (data);

     // aqui conectamos con oracle, a traves de ajax.
     $.ajax({    
        url : 'https://gcfd9f35194e15c-jn68qx7m5o55w9x5.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/client',
        //data : { id : 123 },
        //data que vamos a enviar- post=actualizar,
        type : 'POST',
        //dataType : 'json', este no va por que esta enviando data con contentType
        data: dataToSend,
        contentType: 'application/json',
         
        success : function(json) {
            //console.log(json); 
            //cuando trmine la peticion exitosa, limpio los campos, pone los val("enblanco")
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");


        //$('<h1/>').text(json.title).appendTo('body');
        //$('<div class="content"/>')
        //.html(json.html).appendTo('body');
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
        // este complete ayuda a que,  lo pongo cuando guardo, edito o borro
        complete : function() {
            leerclientes();
        }

        //complete : function(xhr, status) {
        //alert('Petición realizada');
        //}
        });

}

function editarcliente(){

    let idCliente=$("#idCliente").val();
     let nombreCliente=$("#nombreCliente").val();
     let mailCliente=$("#mailCliente").val();
     let edadCliente=$("#edadCliente").val();
      
     // lod nombres de la tabla de oracle y los html
     let data={
        id:idCliente,
        name:nombreCliente,
        email:mailCliente,
        age:edadCliente
     };

     // aqui estoy formando una cadena string con los datos capturados en data (id,name,email,age)conect oracle.
     // tener cuidado con la longirud de mail o sino no corre el programa. o aumentar la longirud en tabla oracle.
     let dataToSend=JSON.stringify(data); 

     //console.log (data);

     // aqui conectamos con oracle, a traves de ajax.
     $.ajax({    
        url : 'https://gcfd9f35194e15c-jn68qx7m5o55w9x5.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/client',
        //data : { id : 123 },
        //data que vamos a enviar- post=actualizar,
        type : 'PUT',
        //dataType : 'json', este no va por que esta enviando data con contentType
        data: dataToSend,
        contentType: 'application/json',
         
        success : function(json) {
            //console.log(json); 
            //cuando trmine la peticion exitosa, limpio los campos, pone los val("enblanco")
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");


        //$('<h1/>').text(json.title).appendTo('body');
        //$('<div class="content"/>')
        //.html(json.html).appendTo('body');
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
         // este complete ayuda a que,  lo pongo cuando guardo, edito o borro
         complete : function() {
            leerclientes();
        }
        //complete : function(xhr, status) {
        //alert('Petición realizada');
        //}
        });

}


function borrarcliente(idCliente){
          
        let data={
        id:idCliente,
        
     };

     // aqui estoy formando una cadena string con los datos capturados en data (id,name,email,age)conect oracle.
     // tener cuidado con la longirud de mail o sino no corre el programa. o aumentar la longirud en tabla oracle.
     let dataToSend=JSON.stringify(data); 

     //console.log (data);

     // aqui conectamos con oracle, a traves de ajax.
     $.ajax({    
        url : 'https://gcfd9f35194e15c-jn68qx7m5o55w9x5.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/open-api-catalog/client',
        //data : { id : 123 },
        //data que vamos a enviar- post=actualizar,
        type : 'DELETE',
        //dataType : 'json', este no va por que esta enviando data con contentType
        data: dataToSend,
        contentType: 'application/json',
         
        success : function(json) {
            //console.log(json); 
            //cuando trmine la peticion exitosa, limpio los campos, pone los val("enblanco")
            $("#idCliente").val("");
            $("#nombreCliente").val("");
            $("#mailCliente").val("");
            $("#edadCliente").val("");


        //$('<h1/>').text(json.title).appendTo('body');
        //$('<div class="content"/>')
        //.html(json.html).appendTo('body');
        },
        error : function(xhr, status) {
        //alert('ha sucedido un problema');
        },
         // este complete ayuda a que borre las pantallas con los datos una vez se da click en el boton,  lo pongo cuando guardo, edito o borro
         complete : function() {
            leerclientes();
        }
        //complete : function(xhr, status) {
        //alert('Petición realizada');
        //}
        });

}