import {Producto} from "../models/Producto";

export class Pedido{
  constructor(private _producto: Producto, private _cantidad: number){}

  get producto(): Producto {
    return this._producto;
  }

  set producto(value: Producto) {
    this._producto = value;
  }

  get cantidad(): number {
    return this._cantidad;
  }

  set cantidad(value: number) {
    this._cantidad = value;
  }
}
