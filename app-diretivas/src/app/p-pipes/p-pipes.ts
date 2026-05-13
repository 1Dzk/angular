import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvertePipe } from '../inverte-pipe';

@Component({
  selector: 'app-p-pipes',
  imports: [CommonModule, FormsModule, InvertePipe],
  templateUrl: './p-pipes.html',
  styleUrl: './p-pipes.scss',
})
export class PPipes {
  public data: Date = new Date();
  public nome: string = 'Fulano de Tal';
  public valor: number = 12345.67;
  public palavra: string = '';
}
