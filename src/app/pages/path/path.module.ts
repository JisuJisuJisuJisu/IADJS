import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathComponent } from './path.component';
import { PathRoutingModule } from './path-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PathRoutingModule
  ],
  declarations: [PathComponent]
})
export class PathModule { }

