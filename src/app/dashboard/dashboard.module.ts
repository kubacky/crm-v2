import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {NavbarModule} from './navbar/navbar.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    DashboardRoutingModule,
    NavbarModule
  ]
})
export class DashboardModule { }
