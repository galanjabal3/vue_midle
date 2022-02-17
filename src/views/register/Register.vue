<template>
  <div class="all">
    <div class="card bg-gray-200">
      <p>Register</p>
      <hr />
      <div class="form">
        <b-form>
          <label>Email</label>
          <b-form-input v-model="email"></b-form-input>
          <b-form-invalid-feedback :state="!validation.isEmail">
            {{ message }} </b-form-invalid-feedback
          ><br />
          <label>Password</label>
          <b-form-input v-model="password" type="password"></b-form-input>
          <b-form-invalid-feedback :state="!validation.isPassword">
            Password harus di isi </b-form-invalid-feedback
          ><br />
          <label>Phone</label>
          <b-form-input v-model="noPhone" type="text"></b-form-input>
          <b-form-invalid-feedback :state="!validation.isNoPhone">
            Phone harus di isi
          </b-form-invalid-feedback>
        </b-form>
      </div>
      <div class="button">
        <b-spinner variant="success" v-if="isLoading"></b-spinner>
        <button v-else class="button_register" @click="register">
          Register
        </button>
      </div>
      <div class="log">
        <span><a href="login" class="login">Login</a></span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./register.scss" scoped></style>
<script src="./register.js" />
