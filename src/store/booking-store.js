import axios from "axios";
import { defineStore } from "pinia";
import router from "../routers/route";
import { useAuthStore } from "./auth-store";

const BASEURL = "http://127.0.0.1:8000/api";

export const useBookingStore = defineStore({
    id: 'order',
    state: () => ({
        order: []
    }),

    getters: {
        getOrder: (state) => state.order
    },

    actions: {
        async booking(...state){
            try {
                const authStore = useAuthStore()
                const token = authStore.getToken
                
                const a = new Date(state[0].days)
                const convert = a.toLocaleDateString()
            axios.post(`${BASEURL}/checkout`,
                {
                     days: convert,
                     id_outlet: state[1]
                }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                        
                }).then(result => {
                    router.push("/invoice")
                })
            } catch (error) {
                console.log(error)
            }
        },

        async fetchBooking(){
            try {
                const authStore = useAuthStore()
                const token = authStore.getToken
                
                const data = await axios.get(`${BASEURL}/checkout-data`, {
                    headers: { Authorization: `Bearer ${token}`}
                }).then(result => {
                    this.order = result.data.data
                })
            } catch (error) {
                alert(error.response.data.message)
                return error
            }
        },

       

        
    }

});