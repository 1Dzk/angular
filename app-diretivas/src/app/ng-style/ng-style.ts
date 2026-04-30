import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule],
  templateUrl: './ng-style.html',
  styleUrls: ['./ng-style.scss'],
})
export class NgStyle {

  public altura: number = 100;
  public largura: number = 100;
  public larguraStr : string = "100px";

   aumenta(){
    this.largura += 50;
    this.altura += 50;
    this.larguraStr = this.altura + this.largura + "px";
  }

  diminui(){
    this.largura -= 50;
    this.altura -= 50;
    this.larguraStr = this.altura + this.largura + "px";
  }

}
