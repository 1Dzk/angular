import { Component } from '@angular/core';
import { CpA } from '../cp-a/cp-a';
import { CpB } from '../cp-b/cp-b';

@Component({
  selector: 'app-cp-agrupador',
  imports: [CpA,CpB],
  templateUrl: './cp-agrupador.html',
  styleUrl: './cp-agrupador.scss',
})
export class CpAgrupador {

}
