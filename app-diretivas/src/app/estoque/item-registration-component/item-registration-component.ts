import { Component } from '@angular/core';
import { ItemService } from '../item-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-registration-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './item-registration-component.html',
  styleUrl: './item-registration-component.scss',
})
export class ItemRegistrationComponent {
nome: string = '';
  quantidade: number = 0;

  constructor(private itemService: ItemService) {}

  salvar(event: Event) {
    event.preventDefault(); 
    if (this.nome.trim() && this.quantidade >= 0) {
      this.itemService.adicionarItem(this.nome, this.quantidade);
    
      this.nome = '';
      this.quantidade = 0;
    }
  }
}

