import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CpFilho } from '../cp-filho/cp-filho';

@Component({
  selector: 'app-cp-pai',
  imports: [FormsModule, CpFilho],
  templateUrl: './cp-pai.html',
  styleUrl: './cp-pai.scss',
})
export class CpPai {

  public carro = {
    marca: '',
    ano: 0,
    cor: ''
  }
}
