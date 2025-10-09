import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MenuBaseboardComponent } from './components/menu-baseboard/menu-baseboard.component';
import { SocialActionsService } from './social-actions.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, MenuBaseboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mmjetlocacoes'; // 'tcxsiteanuncio';// mmjetlocacoes

  constructor(
    private socialActions: SocialActionsService,
    private titleService: Title
  ) {}

  public setTheme(theme: 'azul' | 'dark' | 'rosa' | 'amarelo') {
    document.documentElement.setAttribute('data-theme', theme);
  }

  executarAcao(rede: string) {
    this.socialActions.executarAcao(rede);
  }

  ngOnInit() {
    this.setTheme('dark');
    // this.titleService.setTitle(this.title);
    this.mudarTitulo(this.title);
  }

  mudarTitulo(novoTitulo: string) {
    this.titleService.setTitle(novoTitulo);
  }
}
