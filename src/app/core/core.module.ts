import { AppRoutingModule } from './../app-routing.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigieHeaderComponent } from './sigie-header/sigie-header.component';
import { SigieNavbarComponent } from './sigie-navbar/sigie-navbar.component';

@NgModule({
  declarations: [
    SigieHeaderComponent,
    SigieNavbarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  exports:[
    SigieHeaderComponent,
    SigieNavbarComponent
  ]
})
export class CoreModule {}
