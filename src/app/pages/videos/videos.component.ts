import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SocialActionsService } from '../../social-actions.service';

@Component({
  selector: 'tcx-videos',
  imports: [RouterLink],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent {
  videoUrl = '';

  constructor(private route: ActivatedRoute, private socialActions: SocialActionsService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.videoUrl = params['url'];
    });
  }

  abrir(rede: string) {
    this.socialActions.executarAcao(rede);
  }
}
