<template>
  <div id="app">
    <GlobalStyle />
    <router-view></router-view>
  </div>
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
