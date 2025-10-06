import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tcx-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  @Output() clickBotao = new EventEmitter<string>();

  public setTheme(theme: 'azul' | 'dark' | 'rosa' | 'amarelo') {
    document.documentElement.setAttribute('data-theme', theme);
  }



  clicou(rede: string) {
    this.clickBotao.emit(rede);
  }
}
