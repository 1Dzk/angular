import { Component } from '@angular/core';
import { Tarefa } from '../tarefa.model';
import { CommonModule } from '@angular/common';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskItem],
  templateUrl: './task-list.html',
  standalone: true,
  styleUrl: './task-list.scss',
})
export class TaskList {
  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Estudar Angular', concluido: false },
    { id: 2, titulo: 'Fazer exercício de @Output', concluido: false }
  ];

  marcarComoConcluida(id: number) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluido = true;
    }
  }
}
