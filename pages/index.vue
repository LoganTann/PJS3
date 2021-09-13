<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <NuxtLogo />
      <v-card>
        <v-card-title class="headline">
          Nuxt + Vuetify
        </v-card-title>
        <v-card-text>
          Hello World
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
