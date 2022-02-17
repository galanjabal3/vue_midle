import { mapActions } from "vuex";

export default {
  name: "dashboard",
  data() {
    return {
      listBarang: [],
      email: "",
      id: "",
      barang: "",
      harga: "",
      isLoading: false,
      isLoadingData: false,
      editData: false,
    };
  },
  methods: {
    ...mapActions([
      "GET_BARANG",
      "POST_BARANG",
      "DELETE_BARANG",
      "EDIT_BARANG",
    ]),
    async getDataBarang() {
      this.isLoadingData = true;
      await this.GET_BARANG({
        success: (res) => {
          this.listBarang = res.data.content;
          setTimeout(() => {
            this.isLoadingData = false;
          }, 2000);
        },
        failed: (err) => {
          console.log(err);
        },
      });
    },
    async postBarang() {
      this.isLoading = true;
      const usr = JSON.parse(localStorage.getItem("user"));
      if (this.editData == true) {
        await this.EDIT_BARANG({
          data: {
            id: this.id,
            body: {
              barang: this.barang,
              harga: this.harga,
              pemilik: usr.email,
            },
          },
          success: () => {
            this.barang = "";
            this.harga = "";
            this.isLoading = false;
            this.editData = false,
            this.getDataBarang();
          },
          failed: () => {
            alert("Gagal untuk update data!..");
          },
        });
      } else {
        await this.POST_BARANG({
          data: {
            barang: this.barang,
            harga: this.harga,
            pemilik: usr.email,
          },
          success: () => {
            (this.barang = ""), (this.harga = ""), (this.isLoading = false);
            this.getDataBarang();
          },
          failed: () => {
            this.isLoading = false;
          },
        });
      }
    },
    async deleteBarang(id) {
      await this.DELETE_BARANG({
        id: id,
        success: () => {
          this.getDataBarang();
        },
        failed: (error) => {
          console.log(error);
        },
      });
    },
    editBarang(data) {
      console.log(data);
      this.id = data.id;
      this.barang = data.barang;
      this.harga = data.harga;
      this.editData = true;
    },
  },
  mounted() {
    this.getDataBarang();
  },
};
