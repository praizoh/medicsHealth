<template>
<span>
    <Navbar />
    <v-container fluid class="my-5">
      <v-text-field flat solo-inverted hide-details v-model="search" prepend-inner-icon="mdi-magnify" label="Search by name" class="mb-5">
      </v-text-field>
        <v-row>
            <v-col cols="12" lg="4">
                <div class="text-center" >
                    <v-btn color="rgb(179, 212, 252)" @click="showPatients()">View Patients</v-btn>
                </div>

            </v-col>
        </v-row>
        
        <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Patient Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Gender</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Email</th>
          <th class="text-left">Marital Status</th>
          <th class="text-left">Employment Status</th>
          <th class="text-left">Category</th>
          <th class="text-left">Edit </th>
          <th class="text-left">View </th>
          <th class="text-left">Delete </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" :key="patient.patient_id">
          <td>{{ patient.patient_id }}</td>
          <td>{{ patient.FullName }}</td>
          <td>{{ patient.Gender }}</td>
          <td>{{ patient.Phone }}</td>
          <td>{{ patient.Email }}</td>
          <td>{{ patient.Marital_Status }}</td>
          <td>{{ patient.Employment_Status }}</td>
          <td>{{ patient.Category }}</td>
          <td>
            <template>  
                <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          class="v-btn--simple"
                          color="green"
                          icon
                          v-bind="attrs"
                          v-on="on" 
                          @mouseover="fetchPatientById(patient.patient_id)"
                          router-link to="/editPatient"
                          
                        >
                         <!-- router-link to="{name:'addPatient', params: { id: patient.patient_id} }" -->
                        
                          <v-icon color="green">
                            mdi-pencil
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Edit</span>
                </v-tooltip>
             <!-- add dialog box for full view -->
             <div class="text-center">
                <v-dialog v-model="dialog"  width="500">
                  
                  <editView />
                  
                </v-dialog>  
                <!-- </v-dialog>
                <v-dialog v-model="modal">
                  <v-card>
                      <fullView />
                  </v-card>
                    
                </v-dialog> -->
            </div>
           
            </template>
          </td>
          <td>
            <template>
            <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{  on }">
                        <v-btn
                          class="v-btn--simple"
                          color="orange"
                          icon
                          v-bind="attrs"
                          v-on="on"
                           @mouseover="fetchPatientById(patient.patient_id)"
                           router-link to="/patientView"
                        >
                        
                          <v-icon color="orange">
                            mdi-eye-outline
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>View</span>
                    </v-tooltip>
                    <div class="text-center">
                         <v-dialog v-model="dialog2">
                          <v-card>
                              <fullView />
                          </v-card>
                    
                       </v-dialog>
                     </div>
            </template>
         
          </td>
          <td>
            <v-tooltip
                      top
                      content-class="top"
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          class="v-btn--simple"
                          color="danger"
                          icon
                          v-bind="attrs"
                          v-on="on"
                          @click="deletePatient(patient.patient_id)" 
                          >
                          <v-icon color="red">
                            mdi-close
                          </v-icon>
                        </v-btn>
                      </template>
                      <span>Close</span>
            </v-tooltip>
            </td>
            
            


        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <!-- display statistics of patients according to statistics -->
  <v-row>
            <v-col cols="12" lg="4">
                <div><div class="v-card--material-stats v-card v-sheet theme--light" style="margin-bottom:24px;margin-top:48px;"><div class="v-offset" style="top:-24px;margin-bottom:-24px;"><div class="pa-4 v-card v-sheet theme--dark green elevation-10" style="width:30%; height:50%; margin-left:20%; top:-30px"><i aria-hidden="true" class="v-icon mdi mdi-store theme--dark" style="font-size:40px;"></i></div></div> <div class="v-card__text"> <div class="text-xs-right"><p class="category grey--text font-weight-light">Children</p> <h3 class="title display-1 font-weight-light">
      245 <small></small></h3></div> </div> <hr class="mx-3 v-divider theme--light"> <div class="v-card__actions"><i aria-hidden="true" class="v-icon mr-2 mdi mdi-calendar theme--light" style="font-size:20px;"></i> <span class="caption font-weight-light">Last 24 Hours</span></div></div></div>
            </v-col>

             <v-col cols="12" lg="4">
                <div><div class="v-card--material-stats v-card v-sheet theme--light" style="margin-bottom:24px;margin-top:48px;"><div class="v-offset" style="top:-24px;margin-bottom:-24px;"><div class="pa-4 v-card v-sheet theme--dark orange elevation-10" style="width:30%; height:50%; margin-left:20%; top:-30px"><i aria-hidden="true" class="v-icon mdi mdi-store theme--dark" style="font-size:40px;"></i></div></div> <div class="v-card__text"> <div class="text-xs-right"><p class="category grey--text font-weight-light">Teens</p> <h3 class="title display-1 font-weight-light">
      245 <small></small></h3></div> </div> <hr class="mx-3 v-divider theme--light"> <div class="v-card__actions"><i aria-hidden="true" class="v-icon mr-2 mdi mdi-calendar theme--light" style="font-size:20px;"></i> <span class="caption font-weight-light">Last 24 Hours</span></div></div></div>
            </v-col>

             <v-col cols="12" lg="4">
                <div><div class="v-card--material-stats v-card v-sheet theme--light" style="margin-bottom:24px;margin-top:48px;"><div class="v-offset" style="top:-24px;margin-bottom:-24px;"><div class="pa-4 v-card v-sheet theme--dark blue lighten-2 elevation-10" style="width:30%; height:50%; margin-left:20%; top:-30px"><i aria-hidden="true" class="v-icon mdi mdi-store theme--dark" style="font-size:40px;"></i></div></div> <div class="v-card__text"> <div class="text-xs-right"><p class="category grey--text font-weight-light">Adults</p> <h3 class="title display-1 font-weight-light">
      245 <small></small></h3></div> </div> <hr class="mx-3 v-divider theme--light"> <div class="v-card__actions"><i aria-hidden="true" class="v-icon mr-2 mdi mdi-calendar theme--light" style="font-size:20px;"></i> <span class="caption font-weight-light">Last 24 Hours</span></div></div></div>
            </v-col>
         
      </v-row>
        
    </v-container>
    </span>
</template>
<script>
import Navbar from '../components/Navbar';
import fullView from '../views/fullView';
import editView from '../views/editView';
// import addPatient from '../views/addPatient'
// import { mapGetters, mapActions } from 'vuex';
export default {
    
    name: 'Dashboard',
    components: {Navbar,editView, fullView},
    data(){
        return{
            dialog:false,
            dialog2:false,
            search: ''
        }
    },
      methods: {
        showPatients() {
            this.$store.dispatch('fetchPatients')
            // .then ((response)=>{
                
                alert("dispatched");
                // response.send("fetched");
            // })
           
        },
        fetchPatientById(id){
                this.$store.dispatch('fetchPatientById', {id:id});
        },
        //  ...mapActions (['fetchPatientById']),
        deletePatient(id){
      alert (id);
        this.$store.dispatch('deletePatientById', {id:id});
    },
    },
    
        computed: {
            patients() {
            return this.$store.state.patients;
            // return this.patients.filter(patient=>{
            //   patient.FullName.toLowerCase().includes(this.search.toLowerCase())
            // })
        },
        // filteredName(){
        //   // return this.$store.state.patients;
        //    return this.$store.state.patients.filter(patient=>{
        //     return patient.FullName.toLowerCase().includes(this.search.toLowerCase())
        //   });
        // }
        },
        
        // mapGetters(['allPatients']),

        // created(){
        //     this.fetchPatients();
        // }
}
</script>

<style scoped>

</style>