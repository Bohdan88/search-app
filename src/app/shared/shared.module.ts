import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatCardModule,
  MatProgressSpinnerModule
} from '@angular/material';


@NgModule({
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {
}
