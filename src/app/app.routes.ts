import { Routes } from '@angular/router';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';

export const routes: Routes = [
  { path: '', component: MainScreenComponent },
  { path: '**', redirectTo: '' },
];
