
import { Routes } from '@angular/router';
import { NgFor } from './ng-for/ng-for';
import { NgModel } from './ng-model/ng-model';
import { PPipes } from './p-pipes/p-pipes';
import { NgClass } from './ng-class/ng-class';
import { NgIf } from './ng-if/ng-if';
import { NgSwitch } from './ng-switch/ng-switch';
import { NgStyle } from './ng-style/ng-style';

export const routes: Routes = [
    {path: "ng-class",component: NgClass},
    {path: "ng-for",component: NgFor},
    {path: "ng-if",component: NgIf},
    {path: "ng-switch",component: NgSwitch},
    {path: "ng-style",component: NgStyle},
    {path: "ng-model",component: NgModel},
    {path: "p-pipes", component: PPipes},
    
];
