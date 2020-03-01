<template>
  <div class="container">
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login" @submit.enter="login">
        <div class="form-group">
          <b-form-input v-model="account.email" class="form-control" type="email" placeholder="Email"></b-form-input>
        </div>

        <div class="form-group">
          <b-form-input v-model="account.password" class="form-control" type="password" placeholder="Password"></b-form-input>
        </div>

        <div class="form-group">
          <b-button @click="login" variant="primary" type="submit">
            Login
          </b-button>
        </div>
        <div v-if="isError" class="alert alert-danger">
          <p class="mb-0">{{ errMsg }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data: () => ({
    account: {
      email: '',
      password: '',
    },
    isError: false,
    errMsg: ''
  }),
  methods: {
    login(e) {
      e.preventDefault();
      // TODO: add parsing of data.
      this.$store
        .dispatch("users/login", this.account)
        .then(() => {
          this.$router.push("/admin");
        })
        .catch(error => {
          this.isError = true;
          this.errMsg = error.code;
          setTimeout(() => {
            this.isError = false;
          }, 5000);
        });
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
