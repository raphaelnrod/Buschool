import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosProvider {
  private PATH = 'alunos/';

  constructor(private db : AngularFireDatabase) {

  }

  getAll(){
    return this.db.list(this.PATH)
    .snapshotChanges()
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
  }

  get(key : string){
    return this.db.object(this.PATH + key)
    .snapshotChanges()
    .map(c => {
      return { key: c.key, ...c.payload.val()}
    });
  }

  save(aluno : any){
    return new Promise((resolve, reject) => {
      if(aluno.key){
        this.db.list(this.PATH)
        .update(aluno.key, {
          name: aluno.name, endereco: aluno.endereco,
          cpfRG: aluno.cpfRG, nascimento: aluno.nascimento,
          nomeResp: aluno.nomeResp, escola: aluno.escola,
          observacoes: aluno.observacoes})
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
        .push({name: aluno.name, endereco: aluno.endereco,
          cpfRG: aluno.cpfRG, nascimento: aluno.nascimento,
          nomeResp: aluno.nomeResp, escola: aluno.escola,
          observacoes: aluno.observacoes})
          .then(() => resolve());
      }
    });
  }

  remove(key : string){
    return this.db.list(this.PATH).remove(key);
  }

}
