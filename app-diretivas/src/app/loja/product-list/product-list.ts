import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Produto } from '../../produto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard,CommonModule],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  produtos: Produto[] = [
    { nome: 'Notebook', preco: 3500, imagem: '', categoria: 'Eletrônicos' },
    { nome: 'Mouse', preco: 150, imagem: '', categoria: 'Acessórios' }
  ];

  produtoSelecionado: Produto | null = null;

  selecionarProduto(p: Produto) {
    this.produtoSelecionado = p;
  }
}

