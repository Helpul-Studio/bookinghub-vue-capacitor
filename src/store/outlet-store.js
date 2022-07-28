import axios from "axios";
import { defineStore } from "pinia";

const BASEURL = "http://127.0.0.1:8000/api";

export const useOutletStore = defineStore({
    id: 'outlet',
    state: () => ({
        outlet: []
    }),

    getters: {
        getOutlet: (state) => state.outlet
    },

    actions: {
        async fetchOutlet(){
            try {
                const data = await axios.get(`${BASEURL}/outlet-data`)
                .then(result => {
                    this.outlet = result.data.data
                })
            } catch (error) {
                alert(error.response.data.message)
                return error
            }
        },

       

        
    }

});