import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../tarefa.model';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss',
})
export class TaskItem {
  @Input({ required: true }) tarefa!: Tarefa;
  @Output() tarefaConcluida = new EventEmitter<number>();

  concluir() {
    this.tarefaConcluida.emit(this.tarefa.id);
  }
}
