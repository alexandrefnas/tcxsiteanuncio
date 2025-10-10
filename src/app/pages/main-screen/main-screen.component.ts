import { Component, EventEmitter, Output } from '@angular/core';
import { NgForOf } from '../../../../node_modules/@angular/common/common_module.d-NEF7UaHr';
import { NgFor } from '@angular/common';
import { AppComponent } from '../../app.component';
import { throttleTime } from 'rxjs';
import { SocialActionsService } from '../../social-actions.service';
import { PostagensComponent } from '../../components/postagens/postagens.component';

@Component({
  selector: 'tcx-main-screen',
  imports: [NgFor, PostagensComponent],
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
    { descricao: 'Instalações longas e contínuas.' },
    { descricao: 'Menor risco de danos à fibra óptica.' },
    { descricao: 'Sem escavações ou intervenções manuais.' },
    { descricao: 'Alta precisão e controle total do processo.' },
  ];

  pousts = [
    {
      title: 'Serviço A',
      descriptions:
        'Serviço prestado a empresa A, passando metros de fibras, mais informações relevantes',
      urlImagens: 'assets/videos/mmjetimagevideo1.png',
      urlVideo: 'assets/videos/mmjetvideo1.mp4',
    },
    {
      title: 'Serviço B',
      descriptions:
        'Serviço prestado a empresa A, passando metros de fibras, mais informações relevantes',
      urlImagens: 'assets/videos/mmjetimagevideo2.jpg',
      urlVideo: 'assets/videos/mmjetvideo2.mp4',
    },
  ];

  constructor(private socialActions: SocialActionsService) {}

  abrir(rede: string) {
    this.socialActions.executarAcao(rede);
  }

  @Output() clickBotao = new EventEmitter<string>();

  clicou(rede: string) {
    this.clickBotao.emit(rede);
  }

  abrirModal(url: string) {
    console.log('Passando o url: ', url);
  }
}
