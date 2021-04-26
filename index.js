document.getElementById("btnGuardar").addEventListener("click",function(){

    /*Validación de campos vacios*/

    /*Valida Username*/
    if(document.getElementById("txtUsername").value == "")
    {
        swal({
            title: "Error",
            text: "Ingrese el Usuario",
            icon: "error",
            button: "Aceptar",
        }); 
        return false;       
    }

    /*Valida Nombre*/
    if(document.getElementById("txtNombre").value == ""){

        swal({
            title:"Error",
            text:"Ingrese el Nombre",
            icon:"error",
            button: "Aceptar",
        });
        return false;

    }

    /*Valida Apellido*/
    if(document.getElementById("txtApellido").value == ""){

        swal({
            title:"Error",
            text:"Ingrese el Apellido",
            icon:"error",
            button: "Aceptar",
        });
        return false;

    }

    /*Valida Genero*/
    var radios = document.getElementsByName("genero");
    var genero = false;
    for(var i = 0;i < radios.length;i++)
    {
        if(radios[i].checked)
        {
            genero = true;
            break;
        }
    }

    if(!genero)
    {
        swal({
            title:"Error",
            text:"Seleccione un genero",
            icon:"error",
            button: "Aceptar",
        });
        return false;      
    }

    /*Valida Email*/

    if(document.getElementById("txtEmail").value == ""){

        swal({
            title:"Error",
            text:"Ingrese el Email",
            icon:"error",
            button: "Aceptar",
        });
        return false;

    }

    if(document.getElementById("txtRepetirEmail").value == ""){

        swal({
            title:"Error",
            text:"Repita el Email",
            icon:"error",
            button: "Aceptar",
        });
        return false;

    }

    if(document.getElementById("txtEmail").value != document.getElementById("txtRepetirEmail").value)
    {
        swal({
            title:"Error",
            text:"Los Email no son iguales",
            icon:"error",
            button: "Aceptar",
        });
        return false;     
    }

    /* Valida Teléfono */
    if(document.getElementById("txtTelefono").value == "")
    {
        swal({
            title:"Error",
            text:"Ingrese el teléfono",
            icon:"error",
            button: "Aceptar",
        });
        return false; 
    }

    /* Valida Provincia */
    if(document.getElementById("ddlProvincia").value == "0")
    {
        swal({
            title:"Error",
            text:"Seleccione una provincia",
            icon:"error",
            button: "Aceptar",
        });
        return false;        
    }

    /* Valida Contraseña */
    if(document.getElementById("txtPassword").value == "")
    {
        swal({
            title:"Error",
            text:"Ingrese la contraseña",
            icon:"error",
            button: "Aceptar",
        });
        return false;  
    }

    if(document.getElementById("txtRepetirPassword").value == "")
    {
        swal({
            title:"Error",
            text:"Repita la contraseña",
            icon:"error",
            button: "Aceptar",
        });
        return false;  
    }

    if(document.getElementById("txtPassword").value != document.getElementById("txtRepetirPassword").value)
    {
        swal({
            title:"Error",
            text:"Las contraseñas no son iguales",
            icon:"error",
            button: "Aceptar",
        });
        return false;        
    }

    swal({
        title: "Éxito",
        text: "Usuario Guardado Correctamente",
        icon: "success",
        button: "Aceptar",
    });

});



