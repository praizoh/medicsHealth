<template>
<span>
<v-container class="mx-5">

  
  <Navbar />
    <v-simple-table>
    <template v-slot:default>
      <!-- <thead>
        <tr>
         
        </tr>
      </thead> -->
      <tbody v-for="person in patient" :key="person.patient_id">
        <tr>
          <th>Patient Id</th>
          <td>{{ person.patient_id }}</td>
        </tr>
        <tr>
          <th>Full Name:</th>
          <td>{{ person.FullName }}</td>
        </tr>
          <tr>
            <th>Gender:</th>
            <td>{{ person.Gender }}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{{ person.Phone }}</td>
          </tr>
          <tr>
            <th>Email</th>
              <td>{{ person.Email }}</td>
          </tr>
          <tr>
            <th>Marita Status</th>
            <td>{{ person.Marital_Status }}</td>
          </tr>
          <tr>
            <th>Employment Status</th>
            <td>{{ person.Employment_Status }}</td>
          </tr>
          <tr>
            <th>Category</th>
            <td>{{ person.Category }}</td>
          </tr>
          <tr>
            <th>Date Of Birth</th>
            <td>{{ person.DOB }}</td>
          </tr>
        <tr>
          <th>Date of Registeration</th>
          <td> {{person.Date_Registered}} </td>
        </tr>
           <tr>
             <th>Symptoms</th>
             <td> {{person.Symptoms}} </td>
             </tr> 
            <!-- <td> {{person.Category}} </td> -->
            <tr>
              <th>Physical Test</th>
              <td> {{person.Physical_Test}} </td>
            </tr>
            <tr>
              <th>Lab Test</th>
              <td> {{person.Lab_Test}} </td>
            </tr>
            <tr>
              <th>Diseases</th>
              <td>{{person.Diseases}}</td>
            </tr>
            <tr>
              <th>Body Review</th>
              <td>{{person.Body_review}}</td>
            </tr>
            <tr>
              <th>Medications</th>
              <td>{{person.Medication}}</td>
            </tr>
            <tr>
              <th>Next of Kin</th>
            <td>{{person.Next_of_kin}}</td>
            </tr>
        <tr>
          <th>Next of kin's name</th>
        
        
            <td>{{person.Next_of_kin_phone}}</td>
        </tr>
        <!-- <tr> -->
            <!-- <v-spacer> </v-spacer> -->
                     
        <!-- </tr> -->
        
      </tbody>
    
    </template>
  </v-simple-table>

</v-container>
<div class="text-center">
   <v-btn large text class="primary mx-auto"  router-link to="/viewPatient">Close</v-btn>
    </div>
    <div></div><div></div>
</span>
</template>
<script>
import Navbar from '../components/Navbar'
export default {
  components: {Navbar},
    name: 'fullView',
    // data(){
    //     // id:this.$store.state.patientId.patientId
    // },
     methods:{
        fetchPatientById(id){
 
            this.$store.dispatch('fetchPatientById', {id:id})
        }
    },
    computed: {
    patient() {
      console.log("logged");
      console.log(this.$store.state.patientId)
    return this.$store.state.patientId;
        },
    
}
}
</script>
<style>



</style>