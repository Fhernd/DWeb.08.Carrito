import { Injectable } from '@angular/core';
import {Pedido} from "../producto/Pedido";

@Injectable()
export class CarritoComprasService {

  pedidos: Array<Pedido>;

  constructor() {
    this.pedidos = [];
  }

  agregarPedido(pedido:Pedido){
    this.pedidos.push(pedido);
  }

  pagarPedido(){
    this.pedidos = [];
  }
}
