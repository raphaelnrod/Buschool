import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {

  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
  }

  signOut(){
    return this.angularFireAuth.auth.signOut();
  }

  signIn(user: User){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

}
