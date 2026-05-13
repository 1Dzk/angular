import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { CpFilho } from "./modulo-teste/cp-filho/cp-filho";
import { CpPai } from "./modulo-teste/cp-pai/cp-pai";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu, CpFilho, CpPai],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-diretivas');
}
