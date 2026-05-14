import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { CpAgrupador } from './md-service/cp-agrupador/cp-agrupador';
import { ProductList } from './loja/product-list/product-list';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu,ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-diretivas');
}
