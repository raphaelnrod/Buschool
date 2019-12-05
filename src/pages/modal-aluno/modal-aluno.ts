import { Component } from '@angular/core';
import { IonicPage, NavParams, Platform, ViewController } from 'ionic-angular';
import { Aluno } from '../../models/aluno';
import { AlunosProvider } from '../../providers/alunos/alunos';

@IonicPage()
@Component({
  selector: 'page-modal-aluno',
  templateUrl: 'modal-aluno.html',
})
export class ModalAlunoPage {

  public id;
  public obg: any;
  public aluno: Aluno;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public provider: AlunosProvider
  ) {

    this.id = params.get("aluno");
    this.aluno = new Aluno();

    this.provider.get(this.id).subscribe(data =>{
      this.obg = data;
      this.aluno.name = this.obg.name;
      this.aluno.cpf = this.obg.cpfRG;
      this.aluno.endereco = this.obg.endereco;
      this.aluno.escola = this.obg.escola;
      this.aluno.nascimento = this.obg.nascimento;
      this.aluno.nomeResp = this.obg.nomeResp;
      this.aluno.observacao = this.obg.observacao;
    });

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
