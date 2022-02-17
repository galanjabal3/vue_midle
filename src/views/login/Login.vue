<template>
  <div class="all_login ">
    <div class="card bg-gray-300">
      <p class="text">Login</p>
      <hr />
      <div class="form">
        <b-form>
          <label>Email</label>
          <b-form-input v-model="email"></b-form-input>
          <b-form-invalid-feedback :state="!validation.isEmail">
            Email harus di isi
          </b-form-invalid-feedback><br>
          <label>Password</label>
          <b-form-input v-model="password" type="password"></b-form-input>
          <b-form-invalid-feedback :state="!validation.isPassword">
            Password harus di isi
          </b-form-invalid-feedback>
        </b-form>
      </div>

      <div class="button">
        <b-spinner variant="success" v-if="isLoading"></b-spinner>
        <button v-else class="button_login" @click="login">
            Login
        </button>
      </div>
      <div class="reg">
        <a href="register" class="register">Register</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./login.scss" scoped></style>
<script src="./login.js" />
