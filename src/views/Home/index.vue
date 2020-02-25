<template>
  <Container>
    <Title>Imagens from API</Title>
    <CardsContainer>
      <VtfCard
        v-for="image in images"
        :key="image.nome"
        :date="image.data"
        :url="image.url"
        :name="image.nome"
      />
    </CardsContainer>
  </Container>
</template>

<script>
import api from "../../services/api";
import { Container, Title, CardsContainer } from "./styles";
import VtfCard from "../../components/VtfCard";

export default {
  name: "Home",
  components: {
    Container,
    Title,
    CardsContainer,
    VtfCard
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
      console.log(response.data);
    } catch (error) {
      this.$vToastify.error(
        "Problemas durante carregamento de imagens",
        "Erro"
      );
    }
  }
};
</script>
