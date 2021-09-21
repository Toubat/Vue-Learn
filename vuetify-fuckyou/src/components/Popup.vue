<template>
  <v-dialog width="600" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" class="success">
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <div class="datefield">
                <v-text-field
                  v-model="due"
                  label="Picker without buttons"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :rules="inputRules"
                ></v-text-field>
              </div>
            </template>
            <v-date-picker v-model="due" @input="menu = false"></v-date-picker>
          </v-menu>
          <v-btn plain class="success mx-0 mt-3" @click="submit" :loading="loading"
            >Add Project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      due: "2021-09-18",
      menu: false,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialog: false,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content);
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.dialog = false;
          this.$emit("project-added");
        }, 1500);
      }
    },
  },
};
</script>

<style>
.datefield {
  max-width: 250px;
}
</style>
