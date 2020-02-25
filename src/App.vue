<template>
  <v-app>
    <GlobalStyle />
    <router-view></router-view>
  </v-app>
</template>

<script>
import GlobalStyle from "./styles/global";

export default {
  name: "App",
  components: {
    GlobalStyle
  }
};
</script>
