<template>
<span>
    <Navbar />
    <v-container fluid>
            <v-row>
                 <v-col cols="12" lg="1">
                 </v-col>
                 <v-col cols="12" lg="10">
            <v-card flat>
            <v-card-title>
                <h2 class="blue--text mx-auto">Add a New Patient</h2>
                <!-- <h3>Bio-Data</h3> -->
            </v-card-title>
            <v-card-text>
                 <v-form class="px-3" ref="form">
                     <v-row>
                         <v-col cols="12" lg="6">
                             <v-text-field label="Full Name" v-model="fname" prepend-icon="mdi-account" required :rules="inputRules" ></v-text-field>
                             <v-text-field label="Gender" v-model="gender" prepend-icon="mdi-human-male-female" required :rules="inputRules" ></v-text-field>
                             <v-text-field label="Phone" v-model="phone" prepend-icon="mdi-phone" required :rules="inputRules" ></v-text-field>
                             <v-text-field label="Email" v-model="email" prepend-icon="mdi-email-box" required :rules="inputRules" ></v-text-field>
                              
                     <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="dob"
                                label="DOB"
                                prepend-icon="mdi-table"
                                readonly
                                v-on="on"
                            :rules="inputRules"></v-text-field>
                        </template>
                        <v-date-picker v-model="dob"></v-date-picker>
                     </v-menu>
                     
                         </v-col>

                         <!-- next col -->
                          <v-col cols="12" lg="6">
                              <v-text-field label="Next Of Kin" v-model="kinName" prepend-icon="mdi-account" required :rules="inputRules" ></v-text-field>
                              <v-text-field label="Next Of Kin Contact" v-model="kinPhone" prepend-icon="mdi-phone" required :rules="inputRules" ></v-text-field>
                             <v-text-field label="Marital status" v-model="marital" prepend-icon="mdi-ring" required :rules="inputRules" ></v-text-field>
                             <v-text-field label="Employment status" v-model="employment" prepend-icon="mdi-account-tie" required :rules="inputRules" ></v-text-field>
                             <v-text-field label="Category e.g child,adult,teen." v-model="category" prepend-icon="mdi-human-female-boy" required :rules="inputRules" ></v-text-field>
                             
                     
                     
                         </v-col>
                     </v-row>
                     
                     <v-row>
                         <v-row>
                         <v-col cols="12" lg="12">
                         </v-col>
                     </v-row>
                          <v-col cols="12" lg="12">
                              <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="reg"
                                label="Date of reg"
                                prepend-icon="mdi-table"
                                readonly
                                v-on="on"
                            :rules="inputRules"></v-text-field>
                        </template>
                        <v-date-picker v-model="reg"></v-date-picker>
                     </v-menu>
                    
                             <v-textarea label="Address" v-model="address" prepend-icon="mdi-book-open-variant" required :rules="inputRules"></v-textarea> 
                              <v-textarea label="Symptoms e.g stooling" v-model="symptoms" prepend-icon="mdi-thermometer" required :rules="inputRules"></v-textarea>
                              <v-textarea label="Physical Test e.g Red eyes" v-model="physical" prepend-icon="mdi-stethoscope" required :rules="inputRules"></v-textarea>
                              <v-textarea label="Lab Test e.g Urine Tests" v-model="lab" prepend-icon="mdi-test-tube" required :rules="inputRules"></v-textarea>
                              <v-textarea label="Diseases e.g Diabetes" v-model="problem" prepend-icon="mdi-sword" required :rules="inputRules"></v-textarea>
                              <v-textarea label="Body Review e.g Diabetes" v-model="bodyReview" prepend-icon="mdi-stethoscope" required :rules="inputRules"></v-textarea>
                              <v-textarea label="Medication e.g Panadol" v-model="drugs" prepend-icon="mdi-sword" required :rules="inputRules"></v-textarea>
                          </v-col>
                     </v-row>
                     
                     <v-spacer> </v-spacer>
                     <div class="text-center">
                         <v-btn large text class="primary mx-auto" @click='add'>Add Patient</v-btn>
                     </div>
                    
                 </v-form>
            </v-card-text>
        </v-card>
                 </v-col>
                 <v-col cols="12" lg="1">
                 </v-col>
            </v-row>
            
    </v-container>
    </span>
</template>
<script>
import Navbar from '../components/Navbar'
export default {
    name: 'addPatient',
    components: {Navbar},
    data(){
        return{
            fname:'',
            gender:'',
            phone:'',
            email:'',
            dob:new Date().toISOString().substr(0, 10),
            address:'',
            marital:'',
            employment:'',
            reg:new Date().toISOString().substr(0, 10),
            category:'',
            symptoms:'',
            physical:'',
            lab:'',
            problem:'',
            bodyReview:'',
            drugs:'',
            kinName:'',
            kinPhone:'',
            inputRules: [
            v => !!v || 'This is required',
            // v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
            }
        
    },
    methods: {
        add(){
            this.$store.dispatch('addPatient', {
                FullName: this.fname, 
                Gender: this.gender, 
                Phone:this.phone,
                Email:this.email, 
                DOB:this.dob, 
                Address:this.address, 
                Marital_Status:this.marital,
                Employment_Status:this.employment,
                 Date_Registered:this.reg, 
                 Symptoms:this.symptoms,
                Category:this.category, 
                Physical_test:this.physical,
                Lab_test:this.lab, 
                Diseases:this.problem, 
                Body_review:this.bodyReview, 
                Medication:this.drugs, 
                Next_of_kin:this.kinName, 
                Next_of_kin_contact:this.kinPhone
            })
            // alert(this.fname);
            alert("added successfully");
        }
    }
}
</script>

<style scoped>

</style>