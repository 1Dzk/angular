import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-titulo',
  imports: [RouterOutlet],
  templateUrl: './titulo.html',
  styleUrl: './titulo.scss',
})
export class Titulo implements OnInit {

  public mensagem: string = 'Boas vindas!';

  ngOnInit(): void {
    const hora = new Date().getHours();
    if (hora < 12) {
      this.mensagem = 'Bom dia!';
    } else if (hora < 18) {
      this.mensagem = 'Boa tarde!'; 
    } else {
      this.mensagem = 'Boa noite!';
    };
  }

}
