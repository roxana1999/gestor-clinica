import { ExistenciaProducto } from "./existenciaProducto";
import { Producto } from "./producto";
import { Subcategoria } from "./subcategoria";

export class PresentacionProducto {

    idPresentacionProducto!: number;
    codigo!: string;
    flagServicio!: string;
    idProducto!: Producto;
    idTipoProducto!: Subcategoria;
    nombre!:string;
    descripcion!: string;
    existenciaProducto!: ExistenciaProducto;
   
}