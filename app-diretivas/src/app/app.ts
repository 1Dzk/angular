import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { TaskList } from './tarefas/task-list/task-list';
import { CpAgrupador } from './md-service/cp-agrupador/cp-agrupador';
import { ProductList } from './loja/product-list/product-list';
import { CpFilho } from './modulo-teste/cp-filho/cp-filho';
import { CpPai } from './modulo-teste/cp-pai/cp-pai';
import { UserProfile } from './comunicacao-componentes/user-profile/user-profile';
import { Navbar } from './comunicacao-componentes/navbar/navbar';
import { LoginForm } from './comunicacao-componentes/login-form/login-form';
import { Estoque } from './estoque/estoque';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu,CpAgrupador,TaskList,ProductList,CpFilho,CpPai,UserProfile,LoginForm,Navbar,Estoque],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-diretivas');
}
