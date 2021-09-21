<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p class="red white--text">Lorem ipsum dolor sit amet, consectetur adip</p>
    <p class="pink lighten-4 red--text text--darken-4">
      Lorem ipsum dolor sit amet, consectetur adip
    </p>
    <h1 class="display-4">Massive Display</h1>
    <h4 class="display-1">Smaller Display</h4>
    <p class="headline">This is a headline</p>
    <p class="subheading font-weight-bold">This is a subheading</p>
    <p class="caption">This is a caption</p>
    <v-btn class="pink white--text">Click Me</v-btn>
    <v-btn depressed color="pink" dark>Click You</v-btn>
    <v-btn color="pink" plain>Cancel</v-btn>
    <v-btn color="pink" outlined>Cancel</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>mdi-account</v-icon>
      <span>Email Me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left small>mdi-account</v-icon>
      <span>Email Me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>Email Me</span>
      <v-icon right>email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>favorite</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>headset</v-icon>
    </v-btn>

    <div>
      <v-btn class="hidden-md-and-down">MD Down</v-btn>
      <v-btn class="hidden-md-and-up">MD UP</v-btn>
      <v-btn class="hidden-sm-only">Small Only</v-btn>
    </div>
  </div>
</template>
