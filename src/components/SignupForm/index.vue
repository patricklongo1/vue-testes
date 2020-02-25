<template>
  <Container>
    <Logo>
      <img :src="logo" alt="logo" />
    </Logo>
    <Title>Registre-se</Title>
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
      <br />
      <router-link to="/">Já possuo conta</router-link>
    </Form>
  </Container>
</template>

<script>
import logo from "../../assets/logo.png";
import { Container, Logo, Title, Form } from "./styles";

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
    if (this.users.length <= 0) {
      const persistedUsers = await JSON.parse(localStorage.getItem("users"));
      if (persistedUsers.length >= 1) {
        this.users = persistedUsers;
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const userExists = this.users.filter(user => {
          if (user.login === this.login) {
            return user;
          }
        });

        console.log(userExists);
        if (userExists.length >= 1) {
          this.$vToastify.error("Este usuário já existe", "Erro");
        } else {
          const newUser = { login: this.login, password: this.password };
          this.users = [...this.users, newUser];
          await localStorage.setItem("users", JSON.stringify(this.users));
          this.$vToastify.success("Usuário cadastrado no sistema", "Sucesso");
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  components: {
    Container,
    Logo,
    Title,
    Form
  }
};
</script>
