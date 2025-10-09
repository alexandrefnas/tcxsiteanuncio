import { Routes } from '@angular/router';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';
import { VideosComponent } from './pages/videos/videos.component';

export const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: 'videos', component: VideosComponent },
  { path: '**', redirectTo: '' },
];
