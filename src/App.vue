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
// import Home from "./components/Home/index";
// import BlogPosts from "./components/BlogPosts/index";
// import BlogEntry from "./components/BlogPosts/blogEntry";
// import SinglePost from "./components/BlogPosts/singlePost";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    // Home,
    // BlogPosts,
    // BlogEntry,
    // SinglePost,
  },
};
</script>

<style>
@import "./assets/css/style.css";
@import "./assets/fonts/fontawesome/css/font-awesome.min.css";
</style>
