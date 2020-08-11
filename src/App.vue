<template>
  <div id="app">
    <Header />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header-footer/Header";
import Footer from "./components/Header-footer/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import "./assets/css/style.css";
@import "./assets/fonts/fontawesome/css/font-awesome.min.css";
</style>
