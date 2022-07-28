import axios from "axios";
import { defineStore } from "pinia";

const BASEURL = "https://8310-110-139-151-78.ap.ngrok.io/api";

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