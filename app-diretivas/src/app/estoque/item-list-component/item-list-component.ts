import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ItemService } from '../item-service';

@Component({
  selector: 'app-item-list-component',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './item-list-component.html',
  styleUrl: './item-list-component.scss',
})
export class ItemListComponent {
  public itemService = inject(ItemService);

  public itens = this.itemService.itens;

  movimentar(id: number, valor: any, tipo: 'entrada' | 'saida') {
    const numValor = Number(valor); // Garante que é um número
    if (numValor > 0) {
      this.itemService.movimentarEstoque(id, numValor, tipo);
    }
  }

  excluir(id: number) {
    if (confirm('Deseja realmente excluir este item?')) {
      this.itemService.excluirItem(id);
    }
  }
}
