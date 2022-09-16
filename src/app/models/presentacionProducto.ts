export class PresentacionProducto {
    "idPresentacionProducto": number;
    "nombre": string;
    "descripcion": string;
    "codigo": string;
    "idProducto": {
        "idProducto": number;
        "idTipoProducto": {"idTipoProducto": number};
    };
}