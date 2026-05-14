import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ItemListComponent } from './item-list-component/item-list-component';
import { ItemRegistrationComponent } from './item-registration-component/item-registration-component';

@Component({
  selector: 'app-estoque',
  imports: [CommonModule,ItemListComponent,ItemRegistrationComponent],
  templateUrl: './estoque.html',
  styleUrl: './estoque.scss',
})
export class Estoque {

}
