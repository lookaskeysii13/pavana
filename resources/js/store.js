import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        ServiceID: '',
        selectedDateAndTime: {
            Date: '',
            Time: ''
        }
    },
    actions:{},
    mutations:{
        saveServiceID(state,selectedService){
            state.ServiceID = selectedService
        },

        saveDateAndTime(state,DateAndTime){
            state.selectedDateAndTime.Date = DateAndTime.Date
            state.selectedDateAndTime.Time = DateAndTime.Time
        },
    },
    getters:{
        ServiceID: state => state.ServiceID,
        selectedDateAndTime: state => state.selectedDateAndTime,
    },
    plugins: [createPersistedState()]
});