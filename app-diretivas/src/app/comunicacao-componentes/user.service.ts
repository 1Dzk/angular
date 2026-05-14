import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSource = new Subject<any>();
  user$ = this.userSource.asObservable();

  setUsuario(dados: any) {
    this.userSource.next(dados);
  }
}