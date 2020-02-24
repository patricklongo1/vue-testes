<template>
  <Container>
    <Logo>
      <img :src="logo" alt="logo" />
    </Logo>

    <Form @submit.prevent="handleSubmit()">
      <label for="login">Login</label>
      <input
        v-model="login"
        name="login"
        id="login"
        type="text"
        placeholder="Seu login aqui"
      />

      <label for="password">Senha</label>
      <input
        v-model="password"
        name="password"
        id="password"
        type="password"
        placeholder="Sua senha aqui"
      />

      <button type="submit">Entrar</button>
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
      logo,
      login: "",
      password: ""
    };
  },
  methods: {
    handleSubmit() {
      try {
        const userExists = this.users.filter(user => {
          if (user.login === this.login) {
            if (user.password === this.password) {
              return user;
            }
          }
          return null;
        });

        if (userExists.length <= 0) {
          this.$vToastify.error(
            "Usuário e/ou Senha incorreto(s)",
            "Falha na autenticação"
          );
        } else {
          this.$vToastify.success("", "Bem vindo");
          this.$router.push("/home");
        }
      } catch (error) {
        this.$vToastify.erro(
          "Ocorreu um erro durante o processo, tente novamente",
          "Falha na autenticação"
        );
      }
    }
  },
  components: {
    Container,
    Logo,
    Form
  },
  props: ["users"]
};
</script>
