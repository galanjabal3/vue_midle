import { mapActions } from "vuex"

export default{
    name: 'register',
    data() {
        return {
            email: "",
            password: "",
            noPhone: "",
            isLoading: false,
            message: "Email harus di isi",
            validation: {
                isEmail: false,
                isPassword: false,
                isNoPhone: false
            }
        }
    },
    methods: {
        ...mapActions(["REGISTER"]),
        async register() {
            this.email === "" ? this.validation.isEmail = true : this.validation.isEmail = false
            this.password === "" ? this.validation.isPassword = true : this.validation.isPassword = false
            this.noPhone === "" ? this.validation.isNoPhone = true : this.validation.isNoPhone = false
            const validEmail = this.isValidEmail(this.email)
            if(this.validation.isEmail || this.validation.isPassword || this.validation.isNoPhone) {
                if(this.email === "") {
                    this.message = "Email harus di isi"
                }
                return
            }        
            if(!validEmail) {
                return
            }    
            this.isLoading = true
            const response = await this.REGISTER({
                data : {
                    email: this.email,
                    password: this.password,
                    phoneNumber: this.noPhone
                }
            })
            this.isLoading = false
            if(!response) {
                alert("Email sudah tersedia")
                return
            }
            this.$router.push("/dashboard")
        },
        isValidEmail(email) {
            if(email === "") {
                return false
            }
            var re = /(.+)@(.+){2,}\.(.+){2,}/
            if(re.test(email)) {
                return true
            } else {
                this.validation.isEmail = true
                this.message = "Harus mengisi dengan format @gmail.com"
                return false
            }            
        }
    }
}