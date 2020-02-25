<template>
  <Container>
    <Title>Imagens from API</Title>
  </Container>
</template>

<script>
import api from "../../services/api";
import { Container, Title } from "./styles";

export default {
  name: "Home",
  components: {
    Container,
    Title
  },
  data() {
    return {
      images: []
    };
  },
  created: async function callApi() {
    try {
      const response = await api.get("/images");
      this.images = response.data;
    } catch (error) {
      this.$vToastify.error(
        "Problemas durante carregamento de imagens",
        "Erro"
      );
    }
  }
};
</script>
