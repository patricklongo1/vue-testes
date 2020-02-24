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
        placeholder="Crie seu login"
      />

      <label for="password">Senha</label>
      <input
        v-model="password"
        name="password"
        id="password"
        type="password"
        placeholder="Crie sua senha"
      />

      <button type="submit">Cadastrar</button>
    </Form>
  </Container>
</template>

<script>
import logo from "../../assets/logo.png";
import { Container, Logo, Form } from "./styles";

export default {
  name: "SignupForm",
  data() {
    return {
      logo,
      login: "",
      password: "",
      users: []
    };
  },
  created: async function loadUsers() {
    const persistedUsers = await JSON.parse(localStorage.getItem("users"));
    if (persistedUsers) {
      this.users.push(persistedUsers);
    }
  },
  methods: {
    handleSubmit() {
      const userExists = this.users.filter(user => {
        if (user.login === this.login) {
          return user;
        }
        return null;
      });

      if (userExists.length >= 0) {
        this.$vToastify.error(
          "Este usuário já esta cadastrado",
          "Falha no cadastro"
        );
      } else {
        const newUser = { login: this.login, password: this.password };
        this.users.push(newUser);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.$vToastify.success(
          "Usuário registrado com sucesso",
          "Cadastro realizado"
        );
        this.$router.push("/");
      }
    }
  },
  components: {
    Container,
    Logo,
    Form
  }
};
</script>
