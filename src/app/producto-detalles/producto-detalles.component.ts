import { Component, OnInit } from '@angular/core';
import {Producto} from "../models/Producto";
import {ProductosService} from "../services/productos.service";
import {ActivatedRoute} from "@angular/router";
import {Response} from "@angular/http";

@Component({
  selector: 'c-producto-detalles',
  templateUrl: './producto-detalles.component.html',
  styleUrls: ['./producto-detalles.component.css']
})
export class ProductoDetallesComponent implements OnInit {

  producto: Producto;

  constructor(private productosService: ProductosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params =>{
        var idProducto = params['id'];

        this.productosService.obtenerProductoPorId(parseInt(idProducto)).subscribe(
          (data: Response) =>{
            this.producto = JSON.parse(JSON.stringify(data));
          }
        )
      }
    )
  }

}
