<template>
  <div class="container">
    <div class="login-container">
      <div v-if="!isSend">
        <h2>Intercept</h2>
        <div class="form-group">
          <b-form-input v-model="nombre" type="text" placeholder="Enter your name"></b-form-input>
        </div>
        <div class="form-group">
          <b-form-input v-model="email" type="email" placeholder="Enter your email"></b-form-input>
        </div>
        <div class="form-group">
          <b-button variant="outline-primary" @click="send(nombre, email)">
            Registrar
          </b-button>
        </div>
      </div>
      <div v-else class="alert alert-sucess">
        <p>
          Registrado
        </p>
        <b-button variant="outline-primary" @click="reset">
          Reset
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from "firebase/app";
import 'firebase/database'
import { log } from 'util';
export const db = firebase.database()

export default {
  data: () => ({
    email: '',
    nombre: '',
    isSend: false,
    array: []
  }),
  mounted() {
    this.init()
  },
  methods: {
    init () {
      let _this = this;
      const firebaseConfig = {
        apiKey: 'AIzaSyDz9IN7hR732pHQ58HkS6t1sup2OYClfUg',
        authDomain: 'gluo-intercept.firebaseapp.com',
        databaseURL: 'https://gluo-intercept.firebaseio.com',
        projectId: 'gluo-intercept',
        storageBucket: 'gluo-intercept.appspot.com',
        messagingSenderId: '288781023345',
        appId: '1:288781023345:web:784375216434890cb483d0'
      }
      !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : "";

      var users = db.ref('users');
      users.on('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log(childData)
            _this.array.push(childData)
          });
      });
    },
    send (nombre, email) {
      firebase.database().ref('users').push({
        username: nombre,
        email: email,
      })
      this.isSend = true

      // users.on('child_added', function(snapshot) {
      //   console.log(snapshot)
      // });
    },
    reset () {
      this.email = '';
      this.nombre = '';
      this.isSend = false;
    }
  }
}
</script>

<style>
  .container {
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login-container {
    border: 1px solid rgb(190, 190, 190);
    border-radius: 5px;
    padding: 20px 20px 10px 20px;
    width: 320px;
  }
</style>