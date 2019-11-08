<template>
    <nav>
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! You added a new project</span>
            <v-btn color="white" class=  "green--text" @click="snackbar=false">Close</v-btn>
        </v-snackbar>
        <v-toolbar>
            <v-app-bar-nav-icon class="grey--text hidden-md-and-up" @click.stop="drawer =!drawer"> </v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey-text">
                <span class="font-weight-light"></span>
                <span>Oremei</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
    <!-- dropdown menu -->
    <!-- <v-menu offset-y>
        <template v-slot:activator="{ on }">
            <v-btn color="grey" dark v-on="on"> 
                <v-icon left>mdi-menu-down</v-icon>
                <span>Menu</span>
            </v-btn>
        </template>
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">      
                <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item>

        </v-list>
        
    </v-menu> -->
    <!-- sign out -->
            <v-btn color="rgb(179, 212, 252)" text router-link to='/'>
                <span>Sign Out</span>
                <v-icon right>mdi-heart</v-icon>
            </v-btn>
            
        </v-toolbar>

        <!-- show navigation draw -->
        <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    :src="image"
    app
    color="grey darken-2"
    dark
    floating
    mobile-break-point="991"
    persistent
    width="260"
  >
    <template v-slot:img="attrs">
      <v-img
        v-bind="attrs"
        gradient="to top, rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)"
      />
    </template>

    <v-layout column align-center>
        <v-flex class="mt-5" title="">
            <v-avatar size="100">
              <br>
                <img src="../assets/praise.jpg" class="mb-5">
            </v-avatar>
            <p class="white--text subheading mt-1">
                ADMIN
            </p>
        </v-flex>
                
      </v-layout>

    <v-divider class="mx-3 mb-3 my-5" />
    <div class="mx-3 mb-3 my-5"></div>
    <br><br>

    <v-list nav>
      <!-- Bug in Vuetify for first child of v-list not receiving proper border-radius -->
      <div />

      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        active-class="primary white--text"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-title v-text="link.text" />
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-list nav>
        <v-list-item
          to="/upgrade"
        >
          <v-list-item-action>
            <!-- <v-icon>mdi-package-up</v-icon> -->
          </v-list-item-action>

          <v-list-item-title class="font-weight-light">
            <!-- Upgrade To PRO -->
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
    </nav>
</template>

<script>
// import Popup from './Popup'
export default {
    components: {},
    data(){
        return {
            drawer:true,
            links: [
        {
          to: '/dashboard',
          icon: 'mdi-view-dashboard',
          text: 'Dashboard'
        },
        {
          to: '/addPatient',
          icon: 'mdi-account',
          text: 'Add Patient'
        },
        {
          to: '/viewPatient',
          icon: 'mdi-clipboard-outline',
          text: 'View Patient'
        },
        {
          to: '/viewPatient/viewPatient/id',
          // icon: 'mdi-format-font',
          // text: 'View Patient By Id'
        },
        
        // {
        //   to: '/icons',
        //   icon: 'mdi-chart-bubble',
        //   text: 'Icons'
        // },
        // {
        //   to: '/maps',
        //   icon: 'mdi-map-marker',
        //   text: 'Maps'
        // },
        // {
        //   to: '/notifications',
        //   icon: 'mdi-bell',
        //   text: 'Notifications'
        // }
      ],
      inputRules: [
            v => !!v || 'This is required',
            // v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        // inputValue:'',
            snackbar: false,
            // drawer: null,
            color: 'success',
            image: 'https://thumbs.dreamstime.com/b/hands-medical-doctor-healthcare-blue-background-35579987.jpg'
        }
    },
    
    // https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg
    
}
</script>