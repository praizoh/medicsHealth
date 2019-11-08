import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:'',
    // isAuthenticated:false,
    patients:[],
    patientId:[],
    patientAdd:null,
    patientUpdate:null,
    deletepatientId:null
  },
  getters: {
    allPatients: (state) => {
      
    console.log(state.patients);
    return state.patients
    },
    patient: (state)=>{
      console.log(state.patientId);
      return state.patientId;
    }
},

  mutations: {
    logUser(state,user){
      state.user=user;
      if (user=="logeedin"){
        router.push('/dashboard')
    }else{
        alert("login details not confirmed")
    }
      // router.push('/dashboard');
    },
    setIsAuthenticated(state, isAuthenticated){
      state.isAuthenticated=isAuthenticated;
    },
    setPatient(state, patients){
      state.patients= patients;
      console.log(state.patients);
    },
    setPatientById(state, patientId){
      state.patientId = patientId;
      // console.log(state.patientId);
    },
    setDelete(state, deletepatientId){
      state.deletepatientId = deletepatientId;
      console.log(state.deletepatientId);
    },
    
    setAddPatient(state, patientAdd ){
      state.patientAdd= patientAdd;
    },
    setAddUpdate(state,patientUpdate){
      state.patientUpdate= patientUpdate
      console.log('mutate');
      console.log(state.patientUpdate);
    }
    
  },
  actions: {
    async userLogin( { commit }, { email, password }){
      const response = await axios.post('http://localhost:3000/login', {email,password});
      // alert (email);
      // alert (password);
      commit('logUser', response.data);
      // commit('setIsAuthenticated', true);


      // router.push('/dashboard');
    },
    async fetchPatients ( { commit }){
      const response = await axios.get('http://localhost:3000/viewPatients');
      commit ('setPatient', response.data);
      console.log(response.data)
      // console.log(response.data)
    },

    async fetchPatientById ( { commit }, {id} ){
      // alert(id);
      const response = await axios.get('http://localhost:3000/viewPatient/' +id);
      commit ('setPatientById', response.data)
      // console.log(response.id);
      console.log(response.data);
    },

    async addPatient ({ commit }, { FullName, Gender, Phone, Email, DOB, Address, Marital_Status,Employment_Status, Date_Registered, Symptoms, Physical_test,
      Lab_test, Diseases, Body_review, Drugs, Next_of_kin, Next_of_kin_contact, Category, Medication }){
        alert(FullName);
      const response = await axios.post('http://localhost:3000/addPatientt',{FullName, Gender, Phone, Email, DOB, Address, Marital_Status,Employment_Status, Date_Registered, Symptoms, Physical_test,
        Lab_test, Diseases, Body_review, Drugs, Next_of_kin, Next_of_kin_contact, Category, Medication});
        commit ('setAddPatient', response.data)
        console.log(response.data);
        
    },

    async updatePatient ({ commit }, { id, FullName, Gender, Phone, Email, DOB, Address, Marital_Status,Employment_Status, Date_Registered, Symptoms, Physical_test,
      Lab_test, Diseases, Body_review, Drugs, Next_of_kin, Next_of_kin_contact, Category, Medication }){
        alert(id);
      const response = await axios.put('http://localhost:3000/updatePatient', { id, FullName, Gender, Phone, Email, DOB, Address, Marital_Status,Employment_Status, Date_Registered, Symptoms, Physical_test,
        Lab_test, Diseases, Body_review, Drugs, Next_of_kin, Next_of_kin_contact, Category, Medication});
        commit ('setAddUpdate', response.data)
        console.log(response.data);
        
    },

    async deletePatientById ( { commit }, {id} ){
      alert(id);
      const response = await axios.delete('http://localhost:3000/deletePatient/' +id);
      commit ('setDelete', response.data)
      // console.log(response.id);
      console.log(response.data);
    },

  }
})
