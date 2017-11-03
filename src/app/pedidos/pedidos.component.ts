import { Component, OnInit } from '@angular/core';
import {CarritoComprasService} from "../services/carrito-compras.service";
import {Router} from "@angular/router";

@Component({
  selector: 'c-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  _carritoService: CarritoComprasService;

  constructor(carritoService: CarritoComprasService, private router: Router) {
    this._carritoService = carritoService;
  }

  ngOnInit() {
  }


  calcularTotal() : number{
    var total: number = 0.0;
    this._carritoService.pedidos.forEach((pedido)=>{
      total += pedido.cantidad * pedido.producto.precio;
    });

    return total;
  }

  pagar(){
    this._carritoService.pagarPedido();
    this.router.navigate(['principal']);
  }
}
