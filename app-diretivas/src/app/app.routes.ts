
import { Routes } from '@angular/router';
import { NgFor } from './ng-for/ng-for';
import { NgModel } from './ng-model/ng-model';
import { PPipes } from './p-pipes/p-pipes';
import { NgClass } from './ng-class/ng-class';
import { NgIf } from './ng-if/ng-if';
import { NgSwitch } from './ng-switch/ng-switch';
import { NgStyle } from './ng-style/ng-style';
import { CpPai } from './modulo-teste/cp-pai/cp-pai';
import { ProductList } from './loja/product-list/product-list';
import { CpFilho } from './modulo-teste-2/cp-filho/cp-filho';
import { CpAgrupador } from './md-service/cp-agrupador/cp-agrupador';
import { Estoque } from './estoque/estoque';

export const routes: Routes = [
    {path: "ng-class",component: NgClass},
    {path: "ng-for",component: NgFor},
    {path: "ng-if",component: NgIf},
    {path: "ng-switch",component: NgSwitch},
    {path: "ng-style",component: NgStyle},
    {path: "ng-model",component: NgModel},
    {path: "p-pipes", component: PPipes},
    {path: "modulo-teste", component: CpPai },
    {path: "modulo-teste-2", component: CpFilho },
    {path: "loja", component:ProductList},
    {path: "md-service", component:CpAgrupador},
    {path: "estoque", component:Estoque}
    
];
