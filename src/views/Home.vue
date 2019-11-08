<template>
    <!-- <v-container fill-height > -->
        <v-layout class="home" align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title class="center">Login Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field prepend-icon="mdi-account" name="email" label="Email" type="email"
                                          v-model="email" :rules="emailRules" required>
                            </v-text-field>
                            <v-text-field prepend-icon="mdi-key" name="password" label="Password" id="password"
                                          type="password" required v-model="password" :rules="passwordRules">
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary"  @click="submit">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    <!-- </v-container> -->
</template>
<script>
import router from '@/router'
export default {
    name: 'Home',
    data(){
        return{
            valid: false,
        email: '',
        password: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v =>
                v.length >= 6 ||
                'Password must be greater than 6 characters'
        ]
        }
    },
    methods: {
    submit() {
        if (this.$refs.form.validate()) {
            this.$store.dispatch('userLogin', {
                email: this.email,
                password: this.password
            });
            //  if (this.email=="oremei.akande@gmail.com" && this.password=="12345678"){
            //     router.push('/dashboard')
            // }else{
            //     alert("login details not confirmed")
            // }
        }
    }
}
};
</script>
<style scoped>
.home{
    background: url('https://backgroundcheckall.com/wp-content/uploads/2018/10/hospital-background-images-hd-6.jpg ');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>