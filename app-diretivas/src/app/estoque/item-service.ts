import { Injectable, signal } from '@angular/core';
import { Item } from './item-estoque.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private itensSignal = signal<Item[]>([]);

  itens = this.itensSignal.asReadonly();

  adicionarItem(nome: string, quantidade: number) {
    const novoItem: Item = { id: Date.now(), nome, quantidade };
    this.itensSignal.update((lista) => [...lista, novoItem]);
  }

  movimentarEstoque(id: number, valor: number, operacao: 'entrada' | 'saida') {
    this.itensSignal.update((lista) =>
      lista.map((item) => {
        if (item.id === id) {
          const novaQtd =
            operacao === 'entrada' ? item.quantidade + valor : item.quantidade - valor;
          return { ...item, quantidade: Math.max(0, novaQtd) }; // Impede estoque negativo
        }
        return item;
      }),
    );
  }

  excluirItem(id: number) {
    this.itensSignal.update((lista) => lista.filter((item) => item.id !== id));
  }
}
