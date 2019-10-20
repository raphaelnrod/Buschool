import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  alunos: Observable<any>;

  constructor(public navCtrl: NavController, private menu: MenuController, private auth: AuthProvider) {

  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  } 

  signOut(){
    this.auth.signOut().
    then(() => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

  cadastrar(){
    this.navCtrl.push('CadastrarPage');
  }
}
