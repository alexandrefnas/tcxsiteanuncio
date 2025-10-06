import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialActionsService {

  constructor() { }

    executarAcao(rede: string) {
    switch (rede) {
      case 'instagram':
        this.abrirInstagram();
        break;
      case 'facebook':
        this.abrirFacebook();
        break;
      case 'twitter':
        this.abrirTwitter();
        break;
      case 'whatsapp':
        this.enviarWhatsApp();
        break;
      default:
        console.warn('Rede social desconhecida:', rede);
    }
  }

  abrirInstagram() {
    console.log('Abrindo Instagram');
     window.open('https://www.instagram.com/tcxtecnologia', '_blank');
  }

  abrirFacebook() {
    console.log('Abrindo Facebook');
     window.open('https://www.facebook.com/TCXTecnologia', '_blank');
  }

  abrirTwitter() {
    console.log('Abrindo Twitter');
    // window.open('https://twitter.com/seuPerfil', '_blank');
  }

  enviarWhatsApp() {
    const numero = '5534999999999'; // 👈 coloque o número (com DDI + DDD, sem espaços ou símbolos)
    const mensagem = 'Olá! Gostaria de saber mais sobre seus serviços.'; // 👈 mensagem padrão

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
}
