import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, ModalController} from 'ionic-angular';
import { AlunosProvider } from '../../providers/alunos/alunos';
import { Observable } from 'rxjs';
import { ModalAlunoPage } from '../modal-aluno/modal-aluno';

@IonicPage()
@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html',
})
export class CadastrarPage {

  alunos: Observable<any>;
  aluno: Observable<any>;
  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public navCtrl: NavController, private provider: AlunosProvider,
    private toast: ToastController, public modalControl : ModalController) {

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

  openModal(key : string){
    let modal = this.modalControl.create(ModalAlunoPage, {"aluno" : key});
    modal.present();
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
