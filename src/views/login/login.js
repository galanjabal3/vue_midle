import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      api: "https://test-dandan.herokuapp.com/",
      isLoading: false,
      validation: {
        isPassword: false,
        isEmail: false,
      },
    };
  },
  methods: {
    ...mapActions(["LOGIN"]),
    async login() {
      this.email === ""
        ? (this.validation.isEmail = true)
        : (this.validation.isEmail = false);
      this.password === ""
        ? (this.validation.isPassword = true)
        : (this.validation.isPassword = false);
      if (this.validation.isEmail || this.validation.isPassword) {
        return;
      }
      this.isLoading = true;
      const response = await this.LOGIN({
        data: {
          email: this.email,
          password: this.password,
        },
      });
      localStorage.setItem("user", JSON.stringify(response.data.content));
      this.isLoading = false;
      if (!response) {
        alert("email atau password salah");
        return;
      }
      this.$router.push("/dashboard");
    },
  },
};
