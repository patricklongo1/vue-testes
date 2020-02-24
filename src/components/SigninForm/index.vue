<template>
  <Container>
    <Logo>
      <img :src="logo" alt="logo" />
    </Logo>

    <Form>
      <label for="login">Login</label>
      <input name="login" id="login" type="text" placeholder="Seu login aqui" />
      <label for="password">Senha</label>
      <input
        name="password"
        id="password"
        type="password"
        placeholder="Sua senha aqui"
      />

      <button type="submit">Enviar</button>
    </Form>
  </Container>
</template>

<script>
import logo from "../../assets/logo.png";
import { Container, Logo, Form } from "./styles";

export default {
  name: "SigninForm",
  data() {
    return {
      logo
    };
  },
  components: {
    Container,
    Logo,
    Form
  }
};
</script>
