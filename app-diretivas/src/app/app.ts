import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { CpPai } from './modulo-teste-2/cp-pai/cp-pai';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, CpPai],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-diretivas');
}
