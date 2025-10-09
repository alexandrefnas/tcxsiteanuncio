import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tcx-postagens',
  imports: [CommonModule, RouterModule],
  templateUrl: './postagens.component.html',
  styleUrl: './postagens.component.css',
})
export class PostagensComponent {
  @Input() pousts: {
    title: string;
    descriptions: string;
    urlImagens: string;
    urlVideo: string;
  }[] = [];

  @Output() event_click = new EventEmitter<string>();

  clicou(rede: string) {
    this.event_click.emit(rede);
  }
}
