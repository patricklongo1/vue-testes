<template>
  <Container>
    <SigninForm />
  </Container>
</template>

<script>
import SigninForm from "../../components/SigninForm";
import { Container } from "./styles";

export default {
  name: "SignInPage",
  components: {
    Container,
    SigninForm
  }
};
</script>
