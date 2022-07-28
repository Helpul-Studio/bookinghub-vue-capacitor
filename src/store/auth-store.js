import axios from "axios";
import { defineStore } from "pinia";
import router from "../routers/route";

const BASEURL = "http://127.0.0.1:8000/api";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        token: localStorage.getItem('token'),
        user: []
    }),

    getters: {
        getToken: (state) => state.token,
        getUser: (state) => state.user
    },

    actions: {
        login(state){
            axios.post(`${BASEURL}/login`, {
             email: state.email, 
             password: state.password   
            })
            .then(res => {
                if(res){
                    console.log(res)
                    localStorage.setItem('token', res.data.token);
                    this.token = localStorage.getItem('token')
                    this.token = res.data.token
                    router.push('/')
                }
            })
            .catch(err => {
                alert(err.response.data.message)
                return err
            })
        },

        register(state){
            axios.post(`${BASEURL}/register-user`, {
                name: state.name,
                email : state.email,
                password : state.password
            }).then(res => {
                console.log(res.data.message)
                alert(res.data.message)
                router.push('/login')
            }).catch(err => {
                // console.log(err.response)
                alert(err.response.data.message)
                return err
            })
        },

        logout(){
            axios({
                method: 'post',
                url : `${BASEURL}/logout`,
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            }).then(res => {
                this.token = null
                localStorage.removeItem('token')
                console.log(res)
                router.push('/login')
            }).catch(err => {
                console.log(err)
            })
        },

        
        async fetchUsers() {
            try {
              const data = await axios.get(`${BASEURL}/profile`, {
                headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                })
                this.user = data.data.data[0]
              }
              catch (error) {
                alert(error)
                console.log(error)
            }
        },

        updateProfile(state){
            console.log(state)
            axios.put(`${BASEURL}/update-profile` , 
            {
                name : state.name,
                email : state.telephone,
                password : state.password,
                gender : state.gender,
            }
            ,
            {
                headers : {
                    Authorization: `Bearer ${this.token}`
                }
            })
            .then(result => {
                this.fetchUsers();
            }).catch(err => {
                alert(err.message)
                console.log(err)
            })
        }

        
    }

});