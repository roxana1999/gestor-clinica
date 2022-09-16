export class Agenda {
    idPersonaHorarioAgenda!: number;
    dia?:                    number;
    horaApertura?:           string;
    horaCierre?:             string;
    intervaloMinutos?:       number;
    idLocal?:                IDLocal;
    idEmpleado:             IDEmpleado;
    horaAperturaCadena?:     string;
    horaCierreCadena?:       string;
    diaCadena?:              string;

    constructor(){
        this.idEmpleado = new IDEmpleado()
    }
}

export class IDEmpleado {
    idPersona?:                 number;
    nombre?:                    string;
    apellido?:                  string;
    email?:                     null;
    telefono?:                  null;
    seguroMedico?:              null;
    seguroMedicoNumero?:        null;
    ruc?:                       null;
    cedula?:                    null;
    tipoPersona?:               string;
    usuarioLogin?:              null;
    idLocalDefecto?:            null;
    flagVendedor?:              string;
    flagTaxfree?:               null;
    flagExcepcionChequeoVenta?: null;
    observacion?:               null;
    direccion?:                 null;
    idCiudad?:                  null;
    tipoCliente?:               string;
    fechaHoraAprobContrato?:    null;
    soloUsuariosDelSistema?:    null;
    soloPersonasTaxfree?:       null;
    nombreCompleto?:            string;
    limiteCredito?:             number;
    fechaNacimiento?:           null;
    soloProximosCumpleanhos?:   null;
    todosLosCampos?:            null;
    incluirLimiteDeCredito?:    null;
    deuda?:                     null;
    saldo?:                     null;
    creditos?:                  null;
}

export interface IDLocal {
    idLocal:                       number;
    nombre:                        string;
    flagCasaCentral:               string;
    cantidadIngreso:               number;
    anhoMesActual:                 string;
    fechaHoraUltimoIngreso:        Date;
    minutosSesion:                 number;
    nombreEmpresa:                 null;
    urlImagen:                     null;
    secuencia:                     null;
    pin:                           null;
    appMovil:                      null;
    qr:                            null;
    qrSoloEvaluacion:              null;
    moneda:                        null;
    evaluacionItem:                null;
    evaluacionLocal:               null;
    habilitarFacebook:             null;
    habilitarDatosManualmente:     null;
    habilitarAnonimo:              null;
    mostrarPreciosEnAccesoPublico: null;
    habilitarReserva:              null;
    habilitarPedidosEnLocal:       null;
    habilitarPedidosParaLlevar:    null;
    habilitarPedidosDelivery:      null;
    habilitarLlamarAlMozo:         null;
    textoLamarAlMozo:              null;
    textoRealizarPedido:           null;
    recurso:                       null;
    flagRequiereAutorizacion:      null;
    solicitarRucEnPedidos:         null;
    costoDelivery:                 null;
    radioCoberturaDelivery:        null;
    tiempoEntregaDelivery:         null;
    posicionMapa:                  null;
    horaApertura:                  null;
    horaCierre:                    null;
    horariosEntregas:              null;
    ultimaPublicacionShowMoreWeb:  null;
}
