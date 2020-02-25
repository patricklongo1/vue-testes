<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="url">
      <v-card-actions id="toRight">
        <v-btn color="red" text @click="handleDelete(name)">
          X
        </v-btn>
      </v-card-actions>
    </v-img>
    <v-card-title class="black--text">{{ name }}</v-card-title>
    <v-card-text class="text--primary">
      <p>{{ date }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "VtfCard",
  props: ["date", "url", "name", "handleDelete"]
};
</script>

<style scoped>
#toRight {
  margin-bottom: 38%;
  margin-left: 81%;
}
</style>
