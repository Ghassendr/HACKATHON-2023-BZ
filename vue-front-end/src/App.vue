<template>
  <div id="app">
    <v-app>
     <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav mr-auto d-inline">
       <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <v-icon>mdi-home</v-icon>Home
          </router-link>  
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <v-icon>mdi-account-plus</v-icon> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <v-icon left>mdi-login</v-icon> Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <v-icon icon="md:user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <v-icon>mdi-logout</v-icon> LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div> 
  </v-app>
  </div>
</template>

<script>
import AOS from "aos";
import EventBus from "./common/EventBus";
//import hello from "./components/HelloWorld.vue"
export default {
  // components: {
  //   hello
  // },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
  mounted() {
    AOS.init();
    EventBus.on("logout", () => {
      this.logOut();
      
    });
  },
  beforeDestroy() {
    EventBus.remove("logout");
  }
};
</script>
  