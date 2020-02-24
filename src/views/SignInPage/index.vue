<template>
  <Container>
    <SigninForm :users="persistedUsers" />
  </Container>
</template>

<script>
import SigninForm from "../../components/SigninForm";
import { Container } from "./styles";

export default {
  name: "SignInPage",
  created: async function loadPersistedUsers() {
    if (this.persistedUsers.length <= 0) {
      const users = await JSON.parse(localStorage.getItem("users"));
      this.persistedUsers.push(users);
    }
  },
  data() {
    return {
      persistedUsers: []
    };
  },
  components: {
    Container,
    SigninForm
  }
};
</script>
