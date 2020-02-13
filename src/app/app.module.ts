import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './component/company/company.component';
import { ProductComponent } from './component/product/product.component';
import { OrderComponent } from './component/order/order.component';
import { HeaderComponent } from './component/header/header.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { ModalComponent } from './component/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    ProductComponent,
    OrderComponent,
    HeaderComponent,
    OrderListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
