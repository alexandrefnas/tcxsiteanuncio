import { Component, EventEmitter, Output } from '@angular/core';
import { NgForOf } from '../../../../node_modules/@angular/common/common_module.d-NEF7UaHr';
import { NgFor } from '@angular/common';
import { AppComponent } from '../../app.component';
import { throttleTime } from 'rxjs';
import { SocialActionsService } from '../../social-actions.service';

@Component({
  selector: 'tcx-main-screen',
  imports: [NgFor],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css',
})
export class MainScreenComponent {


  produtos = [
    { nome: '', url: 'assets/images/mmjetlocacoes.png' },
    { nome: '', url: 'assets/images/mmjetlocacoes2.png' },
    { nome: '', url: 'assets/images/mmjetlocacoes3.png' },
    { nome: '', url: 'assets/images/mmjetlocacoes4.png' },
    { nome: '', url: 'assets/images/mmjetlocacoes5.png' },
    { nome: '', url: 'assets/images/mmjetlocacoes6.png' },
    { nome: '', url: 'assets/images/mmjetlocacoes7.png' },
    { nome: '', url: 'assets/images/mmjetlocacoes8.png' },
  ];

  vantagens = [
    { descricao: 'vantagen descrita 1' },
    { descricao: 'vantagen descrita 2' },
    { descricao: 'vantagen descrita 3' },
    { descricao: 'vantagen descrita 4' },
    { descricao: 'vantagen descrita 5' },
    { descricao: 'vantagen descrita 6' },
    { descricao: 'vantagen descrita 7' },
  ];

  constructor(private socialActions: SocialActionsService) {}

  abrir(rede: string) {
    this.socialActions.executarAcao(rede);
  }


  @Output() clickBotao = new EventEmitter<string>();

  clicou(rede: string) {
    this.clickBotao.emit(rede);
  }

}
