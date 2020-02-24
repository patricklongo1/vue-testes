<template>
  <Container>
    <SignupForm />
  </Container>
</template>

<script>
import SignupForm from "../../components/SignupForm";
import { Container } from "./styles";

export default {
  name: "SignUpPage",
  data() {
    return {
      persistedUsers: []
    };
  },
  components: {
    Container,
    SignupForm
  }
};
</script>
