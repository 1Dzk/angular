import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cp-filho',
  imports: [],
  templateUrl: './cp-filho.html',
  styleUrl: './cp-filho.scss',
})
export class CpFilho {
  @Output() public numeroSorteado = new EventEmitter<number>();

  public sorteiaNumero(){
    let numero = Math.floor(Math.random() * 100 + 1);
    this.numeroSorteado.emit(numero);
  }

}
