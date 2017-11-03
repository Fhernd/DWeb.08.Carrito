import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Producto} from "../models/Producto";
import {Pedido} from "./Pedido";

@Component({
  selector: 'c-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto: Producto;
  @Output() agregarProductoCanasta: EventEmitter<Pedido> = new EventEmitter<Pedido>();

  constructor() { }

  ngOnInit() {
  }

  agregarProducto(cantidad: number){
    if(cantidad <= this.producto.unidadesDisponibles){
      this.producto.unidadesDisponibles = this.producto.unidadesDisponibles - cantidad;
      this.agregarProductoCanasta.emit(new Pedido(this.producto, cantidad));
    } else {
      alert("No se cuenta con el stock suficiente.");
    }
  }

}
