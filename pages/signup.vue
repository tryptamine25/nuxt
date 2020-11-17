<template>
  <div class="root">
    <Header />
    <SignUpForm />
  </div>
</template>

<script>
import Header from "@/components/Header";
import SignUpForm from "@/components/SignUpForm";

export default {
  components: {
    Header,
    SignUpForm,
  },
};
</script>