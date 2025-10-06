import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tcx-menu-baseboard',
  imports: [],
  templateUrl: './menu-baseboard.component.html',
  styleUrl: './menu-baseboard.component.css'
})
export class MenuBaseboardComponent {
  @Output() clickBotao = new EventEmitter<string>();

  clicou(rede: string) {
    this.clickBotao.emit(rede);
  }
}
