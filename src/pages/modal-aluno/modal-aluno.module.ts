import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAlunoPage } from './modal-aluno';

@NgModule({
  declarations: [
    ModalAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAlunoPage),
  ],
})
export class ModalAlunoPageModule {}
