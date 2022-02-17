<template>
  <div class="body_dashboard">
    <h1 class="py-4 text-center text-xl">Dashboard</h1>
    <div>
      <b-form class="add">
        <b-form-input
          v-model="barang"
          class="add_input"
          placeholder="Barang"
        ></b-form-input>
        <b-form-input
          v-model="harga"
          class="add_input"
          placeholder="Harga"
        ></b-form-input>
      </b-form>
    </div>
    <div class="flex justify-center mb-10">
      <b-spinner variant="success" v-if="isLoading"></b-spinner>
      <div v-else>
        <button v-if="editData == false" class="button_add" @click="postBarang">Add</button>
        <button v-else class="button_add" @click="postBarang">Edit</button>
      </div>
    </div>
    <table class="table">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nama Barang</th>
        <th scope="col">Tangal Dibuat</th>
        <th scope="col">Harga</th>
        <th scope="col">Pemilik</th>
        <th scope="col">Aksi</th>
      </tr>
      <tr
        v-for="(data, index) in listBarang"
        :key="index"
        v-show="isLoadingData == false"
      >
        <td>{{ data.id }}</td>
        <td>{{ data.barang }}</td>
        <td>{{ data.createAt }}</td>
        <td>
          {{ "Rp. " + data.harga.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") }}
        </td>
        <td>{{ data.pemilik }}</td>
        <td class="action">
          <button class="action_delete" @click="deleteBarang(data.id)">
            Delete</button
          >&nbsp;
          <button class="action_edit" @click="editBarang(data)">Edit</button>
        </td>
      </tr>
    </table>
    <div class="text-center mt-40">
      <b-spinner
        type="grow"
        label="Spinning"
        v-if="isLoadingData == true"
      ></b-spinner>
    </div>
  </div>
</template>
<style lang="scss" src="./dashboard.scss" scoped></style>
<script src="./dashboard.js" />
