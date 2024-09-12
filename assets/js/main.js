/////////////////Cerrar y abrir secciones/////////////////////////////////////////////////////////////////////////////
    const navbarHome = document.getElementById("navbarHome")
    const navbarTables = document.getElementById("navbarTables")
    const botonIngresar = document.getElementById("ingresar")
    const botonRegistrar = document.getElementById("registrar")
    const botonPagar = document.getElementById("cobrar")
    const paginaDeInicio = document.getElementById("home")
    const ingresarASitema = document.getElementById("tables")
    const registrarCliente = document.getElementById("register")
    const cobrar = document.getElementById("cobro")
    const navbHome = document.getElementById("navbHome")
    const navbIngresar = document.getElementById("navbIngresar")
    const navbCobro = document.getElementById("navbCobro")
    const navbRegister = document.getElementById("navbRegister")
    const abrirEliminados = document.getElementById("eliminadosButton")
    const eliminados = document.getElementById("eliminados")
    const tablaEliminados = document.getElementById("eliminadosTabla")


    botonIngresar.addEventListener("click", () =>{
        ingresarASitema.classList.remove("hidden")
        paginaDeInicio.classList.add("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })
    botonRegistrar.addEventListener("click", () =>{
        registrarCliente.classList.remove("hidden")
        paginaDeInicio.classList.add("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })    
    botonPagar.addEventListener("click", () =>{
        cobrar.classList.remove("hidden")
        paginaDeInicio.classList.add("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })
    navbHome.addEventListener("click",() =>{
        paginaDeInicio.classList.remove("hidden")
        ingresarASitema.classList.add("hidden")
        registrarCliente.classList.add("hidden")
        navbarHome.classList.remove("hidden")
        navbarTables.classList.add("hidden")
        cobrar.classList.add("hidden")
        eliminados.classList.add("hidden")
        tablaEliminados.classList.add("hidden")
    })
    navbIngresar.addEventListener("click",() =>{
        paginaDeInicio.classList.add("hidden")
        ingresarASitema.classList.remove("hidden")
        registrarCliente.classList.add("hidden")
        cobrar.classList.add("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })
    navbRegister.addEventListener("click",() =>{
        paginaDeInicio.classList.add("hidden")
        ingresarASitema.classList.add("hidden")
        registrarCliente.classList.remove("hidden")
        cobrar.classList.add("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })
    navbIngresar.addEventListener("click",() =>{
        paginaDeInicio.classList.add("hidden")
        ingresarASitema.classList.remove("hidden")
        registrarCliente.classList.add("hidden")
        cobrar.classList.add("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })
    navbCobro.addEventListener("click",() =>{
        paginaDeInicio.classList.add("hidden")
        ingresarASitema.classList.add("hidden")
        registrarCliente.classList.add("hidden")
        cobrar.classList.remove("hidden")
        navbarTables.classList.remove("hidden")
        navbarHome.classList.add("hidden")
    })
    abrirEliminados.addEventListener("click", () =>{
      paginaDeInicio.classList.add("hidden")
      navbarTables.classList.remove("hidden")
      navbarHome.classList.add("hidden")
      eliminados.classList.remove("hidden")
      tablaEliminados.classList.remove("hidden")
    })
////////////////////////////////Formatear la fecha/////////////////////////
  const fechaFormateada = (f) => {
    let fc = new Date(f);
    let ff;
    let dia = fc.getDate();
    let mes = fc.getMonth() + 1;
    let anio = fc.getFullYear();

    // Verificamos si estamos en el último día del mes
    if (dia === new Date(anio, mes, 0).getDate()) {
    // Si es el último día del mes, incrementamos el mes y reiniciamos el día a 1
    mes += 1;
    dia = 1;
    } else {
        // Si no es el último día del mes, simplemente incrementamos el día en 1
        dia += 1;
      }

    // Formateamos la fecha en el formato deseado
    // ff = `${anio}-${mes < 10 ? "0" + mes : mes}-${dia < 10 ? "0" + dia : dia}`;
    ff = `${dia < 10 ? "0" + dia : dia}-${mes < 10 ? "0" + mes : mes}-${anio}`;
    return ff;
  }
///////////////////////////Armar la tabla////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const evaluarLocalStorage = () => {
    // console.log(JSON.parse(localStorage.getItem("tablaData")));
    return JSON.parse(localStorage.getItem("tablaData")) || [];
  };
  
  const guardarTablaEnLocalStorage = (tablaData) => {
    localStorage.setItem("tablaData", JSON.stringify(tablaData));
  };
  const registros = JSON.parse(localStorage.getItem("tablaData")) || [];

  document.getElementById("nuevoCliente").addEventListener("submit", (e) => {
    e.preventDefault();
    const ingresarASitema = document.getElementById("tables")
    const registrarCliente = document.getElementById("register")
    const nombre = document.getElementById("nombreCliente").value;
    const dni = document.getElementById("dniCliente").value;
    const telefono = document.getElementById("telefonoCliente").value;
    const dias = document.getElementById("diasCliente").value;
    const horario = document.getElementById("horarioCliente").value;
    const pago = document.getElementById("pagoCliente").value;
    const fecha = document.getElementById("fechaForm").value;

    if (nombre === '') {
        document.getElementById("error-nombre").classList.remove("hidden");
      }
    if (dni === '') {
        document.getElementById("error-dni").classList.remove("hidden");
    }
    if (telefono === '') {
        document.getElementById("error-telefono").classList.remove("hidden");
    }
    if (dias === '') {
        document.getElementById("error-dias").classList.remove("hidden");
    }
    if (horario === '') {
        document.getElementById("error-horario").classList.remove("hidden");
    }
    if(fecha === ''){
      document.getElementById("error-fecha").classList.remove("hidden");
    }
    if (nombre === '' || dni === '' || telefono === '' 
      || dias === '' || horario === '' || fecha === '') {
        return; // Detener la ejecución de la función
    }
    
      document.getElementById("error-nombre").classList.add("hidden");
      document.getElementById("error-dni").classList.add("hidden");
      document.getElementById("error-telefono").classList.add("hidden");
      document.getElementById("error-dias").classList.add("hidden");
      document.getElementById("error-horario").classList.add("hidden");
      document.getElementById("error-pago").classList.add("hidden");
      document.getElementById("error-fecha").classList.add("hidden");
      const registro ={
        id: uuidv4(),
        nombre: nombre,
        dni: dni,
        telefono: telefono,
        dias: dias,
        horario: horario,
        pago: pago,
        fecha: fecha
      }
      let tablaData = evaluarLocalStorage();
      tablaData.push(registro)

      localStorage.setItem("tablaData", JSON.stringify(tablaData));
      generarTabla();
      ingresarASitema.classList.remove("hidden")
      registrarCliente.classList.add("hidden")
      document.getElementById("nuevoCliente").reset();
  })

  const generarTabla = () =>{
    const tableBody = document.getElementById("tbody-clientes")
    tableBody.innerHTML = ""
    const registros = evaluarLocalStorage();
    if (registros){
    registros.forEach(registro => {
        tableBody.innerHTML += `
          <tr class="border border-slate-400 border-white">
              <td class="text-center text-white">${
                registro.nombre
              }</td>
              <td class="text-center text-white">${
                registro.dni
              }</td>
              <td class="text-center text-white">${(
                registro.telefono
              )}</td>
              <td class="text-center text-white">${registro.dias}</td>
              <td class="text-center text-white">${registro.horario}</td>
    
              <td class="text-center text-white" >${registro.pago}</td>
              <td class="text-center text-white" >${fechaFormateada(registro.fecha)}</td>
              <td class="text-[#64c27b] flex justify-center gap-2 text-xs lg:text-base"> 
                <button class="edit-btn" data-id="${registro.id}"><i class="fi fi-sr-edit-alt"></i>
                </button>
                <button class="eliminar-btn" onclick="mostrarModalEliminar('${registro.id}')"('${registro.id}')"}"><i class="fi fi-sr-trash"></i>
                </button>
              </td>
          </tr>
        `
    });}
  }
  document.addEventListener("DOMContentLoaded", function() {
    generarTabla();
  });

//////////////////////////Eliminar////////////////////////////
const eliminarCliente =(id)=>{
  let tablaData = evaluarLocalStorage()
  tablaData = tablaData.filter(registro => registro.id !== id)
  guardarTablaEnLocalStorage(tablaData)
  generarTabla()
}
document.addEventListener("DOMContentLoaded", function() {
  eliminarCliente();
});

const modalEliminarOperacionTabla = document.getElementById(
  "modal-eliminar-operacion-tabla"
);
const deleteBtnModal = document.getElementById("delete-btn-modal");
const mostrarModalEliminar = (id) => {
  modalEliminarOperacionTabla.classList.remove("hidden");
  paginaDeInicio.classList.add("hidden");

  deleteBtnModal.addEventListener("click", () => {
    eliminarCliente(id);
    modalEliminarOperacionTabla.classList.add("hidden");
    paginaDeInicio.classList.add("hidden");
  });
  modalEliminarOperacionTabla.querySelector(".modal-close-operacion ").addEventListener("click", () => {
      modalEliminarOperacionTabla.classList.add("hidden");
      paginaDeInicio.classList.add("hidden");
    });
  modalEliminarOperacionTabla.querySelector(".modal-close-X").addEventListener("click", () => {
      modalEliminarOperacionTabla.classList.add("hidden");
      paginaDeInicio.classList.add("hidden");
    });
  modalEliminarOperacionTabla.querySelector(".modal-close-X").addEventListener("click", () => {
      modalEliminarOperacionTabla.classList.add("hidden");
      paginaDeInicio.classList.add("hidden");
    });
};
////////////////////////Editar Cliente/////////////////////////////
const obtenerValoresDeTabla = (id) =>{
  let tablaData = evaluarLocalStorage()
  tablaData = tablaData.filter(registro => registro.id == id)
  
}








/////////Cobrar//////////////////////////////////////
  document.getElementById("agregarCobro").addEventListener("click", () => {
    const ingresarASitema = document.getElementById("tables")
    const cobrar = document.getElementById("cobro")
    const dniCobro = document.getElementById("dniCobro").value;
    const fechaCobro = document.getElementById("fechaCobro").value;
    const montoCobro = document.getElementById("montoCobro").value;

    // Validar que se ingresen todos los campos necesarios
    if (dniCobro === '' || fechaCobro === '' || montoCobro === '') {
        alert("Por favor complete todos los campos.");
        return;
    }

    // Buscar el registro correspondiente al DNI ingresado
    const registros = evaluarLocalStorage();
    const registroEncontrado = registros.find(registro => registro.dni === dniCobro);

    if (!registroEncontrado) {
        alert("No se encontró ningún cliente con el DNI ingresado.");
        return;
    }

    // Actualizar la fecha y el monto en el registro encontrado
    registroEncontrado.fecha = fechaCobro;
    registroEncontrado.pago = montoCobro;

    // Guardar los cambios en el almacenamiento local
    guardarTablaEnLocalStorage(registros);

    // Regenerar la tabla con los datos actualizados
    generarTabla();
    //Regenerar las notificaciones
    nuevaNotificacion();

    // Limpiar los campos del formulario de cobro
    document.getElementById("dniCobro").value = '';
    document.getElementById("fechaCobro").value = '';
    document.getElementById("montoCobro").value = '';

    // alert("El pago se registró correctamente.");
    cobrar.classList.add("hidden")
    ingresarASitema.classList.remove("hidden")
  });
////////////////////////Campana de notificaciones/////////////////////////////////////////////////////////////////////
  const toggleButton = document.getElementById("toggleButton");
  const content = document.querySelector(".content");
  
  toggleButton.addEventListener("click", () => {
    content.classList.toggle("active");
  });

//////////////////////Activar la campanita//////////////////////////////////////////////////
let clientesConCuotaVencida = []; // Array para almacenar los IDs de los clientes con cuotas por vencer

const active = () => {
    const notify = document.getElementById("toggleButton");
    const add = Number(notify.getAttribute("data-count") || 0);
    const currentCount = clientesConCuotaVencida.length; // Obtener la cantidad actual de clientes con cuota vencida
    notify.setAttribute('data-count', currentCount); // Actualizar el contador
    if (currentCount === 0) {
        notify.classList.remove('add-num'); // Quitar la clase 'add-num' si no hay clientes con cuota vencida
    } else {
        notify.classList.add('add-num'); // Agregar la clase 'add-num' si hay clientes con cuota vencida
    }
    return false;
};
/////////////////Notificaciones//////////////////////////////////////////////////////
const nuevaNotificacion = () => {
    // Limpiar notificaciones anteriores
    const notificaciones = document.getElementById("clienteNotificado");
    notificaciones.innerHTML = '';
    const eliminadosTabla = document.getElementById("tbody-eliminados")
    eliminadosTabla.innerHTML = '';

    const fechaActual = new Date();
    const fechasClientes = [];
    const registros = evaluarLocalStorage();

    registros.forEach(registro => {
        fechasClientes.push({
            fecha: new Date(registro.fecha),
            nombre: registro.nombre,
            dni: registro.dni,
            id: registro.id // Agregar el ID único del cliente
        });
    });

    clientesConCuotaVencida = []; // Limpiar el array de clientes con cuota vencida antes de llenarlo nuevamente

    fechasClientes.forEach(fechaCliente => {
        const fechaVencimiento = new Date(fechaCliente.fecha);
        fechaVencimiento.setDate(fechaVencimiento.getDate() + 30);

        // Comparar la fecha del vencimiento con la fecha actual
        if (fechaVencimiento.getTime() <= fechaActual.getTime()) {
            notificaciones.innerHTML += `
            <div class="flex flex-col items-center justify-center mt-0">
            <p class="text-[#bcf7a4] text-xl font-bold ">Cuota a vencer para ${fechaCliente.nombre} ${fechaCliente.dni}</p>
            </div>`;
            clientesConCuotaVencida.push(fechaCliente.id); // Agregar el ID del cliente al array
            eliminadosTabla.innerHTML += `
            <tr class="border border-slate-400 border-white">
              <td class="text-center text-white">${fechaCliente.nombre}</td>
              <td class="text-center text-white">${fechaCliente.dni}</td>
              <td class="text-center text-white">${fechaFormateada (fechaCliente.fecha)}</td>
              <td class="text-[#64c27b] flex justify-center gap-2 text-xs lg:text-base"> 
                <button class="" id="${fechaCliente.id}"><i class="fi fi-sr-edit-alt"></i>
                </button>
                <button class="" id="${fechaCliente.id}"><i class="fi fi-sr-trash"></i>
                </button>
              </td>
            </tr> `;
        }
    });

    // Llamar a la función active después de procesar las notificaciones
    active();
};

  document.addEventListener("DOMContentLoaded", () => {
    nuevaNotificacion();
  });