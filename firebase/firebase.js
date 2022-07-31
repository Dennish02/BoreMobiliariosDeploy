import app from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

import firebaseConfig from './config';

import 'firebase/compat/auth';

class Firebase {
    constructor(){
        if(!app.apps.length){
            app.initializeApp(firebaseConfig);
            
        }
       this.auth = app.auth();
       this.db = app.firestore();
       this.storage = app.storage();
    }
      //auntenticar
      async login(email, password){
       return await this.auth.signInWithEmailAndPassword(email, password);
       
    }
    //cerrar sesion

    async cerrarSesion(){
        await this.auth.signOut();
    }
    //enviar datos
    // async enviarForm(data){
    //     await  this.db.database().ref('messages').push(data)
    // }
}
const firebase = new Firebase();
export default firebase;
