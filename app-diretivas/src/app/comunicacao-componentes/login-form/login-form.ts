import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  constructor(private userService: UserService) {}

  entrar() {
    this.userService.setUsuario({ nome: 'Henrique', email: 'henrique@email.com', curso: 'ADS' });
  }
}
