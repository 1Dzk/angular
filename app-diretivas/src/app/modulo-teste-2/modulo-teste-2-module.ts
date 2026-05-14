import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CpPai } from './cp-pai/cp-pai';
import { CpFilho } from './cp-filho/cp-filho';

const routes: Routes = [
  { path: 'com-pai-filho', component: CpPai },
  { path: 'com-filho-pai', component: CpPai }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ModuloTeste2Module { }
