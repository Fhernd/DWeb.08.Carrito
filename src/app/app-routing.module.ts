import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {PrincipalComponent} from "./principal/principal.component";
import {CatalogoComponent} from "./catalogo/catalogo.component";
import {ProductoDetallesComponent} from "./producto-detalles/producto-detalles.component";
import {PedidosComponent} from "./pedidos/pedidos.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'principal', component: PrincipalComponent,
    children: [
      {
        path: '',
        redirectTo: 'catalogo',
        pathMatch: 'full'
      },
      {
        path: 'catalogo',
        component: CatalogoComponent
      },
      {
        path: 'producto-detalle/:id',
        component: ProductoDetallesComponent
      },
      {
        path: 'pedidos',
        component: PedidosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class CarritoRoutingModule { }
