<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awsome! You added a new proect.</span>
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-app-bar app color="white">
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span> Ninja</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn plain v-bind="attrs" v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(link, index) in links" :key="index" router :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn plain color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer color="blue" app v-model="drawer">
      <v-row>
        <v-col class="mt-5" align="center">
          <v-avatar size="100">
            <img src="@/assets/avatar-5.png" alt="abc" />
          </v-avatar>
          <p class="white--text subheading mt-1">The Net Ninjia</p>
        </v-col>
        <v-col align="center">
          <Popup @project-added="snackbar = true" />
        </v-col>
      </v-row>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Popup from "./Popup";

export default {
  name: "Navbar",
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "MyProject", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
      ],
      snackbar: false,
    };
  },
};
</script>

<style>
.v-app-bar-title__content {
  width: 300px;
}
</style>
