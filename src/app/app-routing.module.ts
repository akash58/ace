import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from '../app/component/order/order.component';
import { OrderListComponent } from '../app/component/order-list/order-list.component';
import { CompanyComponent } from '../app/component/company/company.component';
import { ProductComponent } from '../app/component/product/product.component';

const routes: Routes = [
  { path: 'order-list', component: OrderListComponent },
  { path: 'order', component: OrderComponent },
  { path: 'company', component: CompanyComponent },
  {path: 'product', component: ProductComponent},
  { path: '', redirectTo: '/order-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
