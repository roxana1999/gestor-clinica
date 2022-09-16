export class PresentacionProducto {
    "idPresentacionProducto": number;
    "nombre": string;
    "descripcion": string;
    "idProducto": {
        "idProducto": number;
        "idTipoProducto": {"idTipoProducto": number};
    };
}