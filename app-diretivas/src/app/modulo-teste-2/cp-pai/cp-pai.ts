import { Component } from '@angular/core';
import { CpFilho } from '../cp-filho/cp-filho';


@Component({
  selector: 'app-cp-pai',
  imports: [CpFilho],
  standalone: true,
  templateUrl: './cp-pai.html',
  styleUrl: './cp-pai.scss',
})
export class CpPai {
  public numeroSorteado: number = 0;

  public recebeNumero(nr : number){ 
    this.numeroSorteado = nr;
  }

}
