import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController} from 'ionic-angular';
import { Observable } from 'rxjs';
import { AlunosProvider } from '../../providers/alunos/alunos';

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {

  alunos: Observable<any>;

  constructor(public navCtrl: NavController, private provider: AlunosProvider,
    private toast: ToastController) {

      this.alunos = this.provider.getAll();
  }

  newAluno(){
    this.navCtrl.push('AlunosPage');
  }

  editAluno(aluno: any){
    this.navCtrl.push('AlunosPage', { aluno: aluno});
  }

  removeAluno(key : string){
    this.provider.remove(key)
    .then(() => {
      this.toast.create({ message: 'Aluno removido com sucesso', duration: 3000}).present();
    })
    .catch((e) =>{
      this.toast.create({ message: 'Erro ao remover aluno', duration: 3000}).present();
    });
  }

}
