import { NgModule } from '@angular/core';
import { TextInputComponent } from './table/text-input.component';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    TextInputComponent,
    CardComponent,


  ],
  imports: [
    MatTableModule,
    MatCardModule
    
  ],
  exports: [
  TextInputComponent,
  CardComponent
  ]
})
export class MyLibModule { }
