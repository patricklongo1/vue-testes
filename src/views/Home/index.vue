<template>
  <Container>
    <Title>Images from API</Title>
    <CardsContainer>
      <VtfCard
        v-for="image in images"
        :key="image.nome"
        :date="image.data"
        :url="image.url"
        :name="image.nome"
        :handleDelete="handleDelete"
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
      const persistedImages = await JSON.parse(localStorage.getItem("images"));
      if (persistedImages && persistedImages.length >= 1) {
        this.images = persistedImages;
      } else {
        const response = await api.get("/images");
        this.images = response.data;
        localStorage.setItem("images", JSON.stringify(this.images));
      }
    } catch (error) {
      this.$vToastify.error(
        "Problemas durante carregamento de imagens",
        "Erro"
      );
    }
  },
  methods: {
    handleDelete(name) {
      const noRmImgs = this.images.filter(img => {
        if (img.nome !== name) {
          var notRmImgs = img;
        }
        return notRmImgs;
      });
      this.$vToastify.success("Imagem deletada", "Feito");
      this.images = noRmImgs;
      localStorage.setItem("images", JSON.stringify(this.images));
    }
  }
};
</script>
