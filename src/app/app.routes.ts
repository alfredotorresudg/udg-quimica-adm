import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'login', component: AppComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
