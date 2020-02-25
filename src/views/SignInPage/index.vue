<template>
  <Container>
    <SigninForm :users="users" />
  </Container>
</template>

<script>
import SigninForm from "../../components/SigninForm";
import { Container } from "./styles";

export default {
  name: "SignInPage",
  created: async function loadPersistedUsers() {
    const persistedUsers = await JSON.parse(localStorage.getItem("users"));
    if (this.users.length <= 0) {
      this.users = persistedUsers;
    }
  },
  data() {
    return {
      users: []
    };
  },
  components: {
    Container,
    SigninForm
  }
};
</script>
