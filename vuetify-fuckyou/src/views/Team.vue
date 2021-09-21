<template>
  <div class="team">
    <v-subheader class="grey--text">Team</v-subheader>
    <v-container class="my-5">
      <v-row>
        <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-card flat outlined class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn plain color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      team: [
        { name: "The Net Ninja", role: "Web developer", avatar: "/avatar-5.png" },
        { name: "Ryu", role: "Graphic designer", avatar: "/avatar-5.png" },
        { name: "Chun Li", role: "Web developer", avatar: "/avatar-5.png" },
        { name: "Gouken", role: "Social media maverick", avatar: "/avatar-5.png" },
        { name: "Yoshi", role: "Sales guru", avatar: "/avatar-5.png" },
      ],
    };
  },
};
</script>
