import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { Agua } from './pages/agua/agua';
import { Energia } from './pages/energia/energia';
import { Metas } from './pages/metas/metas';
import { Dicas } from './pages/dicas/dicas';
import { Desafios } from './pages/desafios/desafios';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'agua', component: Agua },
    { path: 'energia', component: Energia },
    { path: 'metas', component: Metas },
    { path: 'dicas', component: Dicas },
    { path: 'desafios', component: Desafios }
];
