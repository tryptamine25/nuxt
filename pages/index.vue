<template>
  <div class="root">
    <Header />
    <CTA />
    <Features />
    <Targeting />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import CTA from "../components/CTA";
import Features from "../components/Features";
import Targeting from "../components/Targeting";
import Footer from "../components/Footer";

export default {
  components: {
    Header,
    CTA,
    Features,
    Targeting,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans&display=swap");
</style>
