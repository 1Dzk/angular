import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Usuario } from '../usuario.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
usuario: any;
  constructor(private userService: UserService) {
    this.userService.user$.subscribe(u => this.usuario = u);
  }
  ngOnInit(): void {
    this.userService.user$.subscribe(u => {
      this.usuario = u;
    });
  }
}
