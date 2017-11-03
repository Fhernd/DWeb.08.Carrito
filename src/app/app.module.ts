import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import {CarritoRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import {LoginService} from "./services/login.service";
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { PrincipalComponent } from './principal/principal.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoComponent } from './producto/producto.component';
import {ProductosService} from "./services/productos.service";
import { ProductoDetallesComponent } from './producto-detalles/producto-detalles.component';
import { PipeProductosPipe } from './pipes/pipe-productos.pipe';
import {CarritoComprasService} from "./services/carrito-compras.service";
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarraNavegacionComponent,
    PrincipalComponent,
    CatalogoComponent,
    ProductoComponent,
    ProductoDetallesComponent,
    PipeProductosPipe,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    CarritoRoutingModule,
    HttpModule
  ],
  providers: [LoginService, ProductosService, CarritoComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
