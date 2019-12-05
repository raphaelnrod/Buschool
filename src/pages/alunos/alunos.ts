import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlunosProvider } from './../../providers/alunos/alunos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html',
})
export class AlunosPage {

  title: string;
  form: FormGroup;
  aluno: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: AlunosProvider,
    private toast: ToastController) {

      this.aluno = this.navParams.data.aluno || {};
      this.criarForm();
      this.setupPageTitle();

  }

  private setupPageTitle(){
    this.title = this.navParams.data.aluno ? 'Alterando aluno' : 'Novo Aluno';
  }

  criarForm(){
    this.form = this.formBuilder.group({
      key: [this.aluno.key],
      name: [this.aluno.name, Validators.required],
      endereco: [this.aluno.endereco, Validators.required],
      cpfRG: [this.aluno.cpfRG, Validators.required],
      nascimento: [this.aluno.nascimento, Validators.required],
      nomeResp: [this.aluno.nomeResp, Validators.required],
      //telResp: [this.aluno.telResp, Validators.required],
      escola: [this.aluno.escola, Validators.required],
      observacoes: [this.aluno.observacoes]
    })
  }

  onSubmit(){
    if(this.form.valid){
      this.provider.save(this.form.value)
      .then(() => {
        this.toast.create({ message: 'Aluno salvo com sucesso', duration: 3000}).present();
        this.navCtrl.pop();
      })
      .catch((e) => {
        this.toast.create({ message: 'Erro ao salvar aluno', duration: 3000}).present();
        console.error(e);
      });
    }
  }

}
