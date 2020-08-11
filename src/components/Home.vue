<template>
  <section class="site-section pt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <carousel
            :per-page="1"
            :mouse-drag="true"
            :paginationEnabled="true"
            :navigationEnabled="false"
            :autoplay="true"
            :loop="true"
          >
            <slide v-for="(slide,index) in slides" :key="index">
              <div>
                <router-link
                  :to="{name: 'blogpost', params: {id: slide.id}}"
                  class="a-block d-flex align-items-center height-lg"
                  :style="{'background-image':`url(${slide.bck})`}"
                >
                  <div class="text half-to-full">
                    <div class="post-meta">
                      <span class="category">{{slide.category}}</span>
                      <span class="mr-2">March 15, 2018</span> &bullet;
                      <span class="ml-2">
                        <span class="fa fa-comments"></span> 3
                      </span>
                    </div>
                    <h3>{{featured[0].title}}</h3>
                    <p>{{featured[0].body}}</p>
                  </div>
                </router-link>
              </div>
            </slide>
          </carousel>
        </div>
      </div>

      <Category />
    </div>
  </section>
</template>

<style>
</style>
<script>
import { Carousel, Slide } from "vue-carousel";

import Category from "./BlogPosts/category";

import slideBck from "../assets/images/img_1.jpg";
import slideBck2 from "../assets/images/img_2.jpg";
import slideBck3 from "../assets/images/img_3.jpg";

export default {
  data() {
    return {
      featured: [],
      slides: [
        {
          id: 1,
          bck: slideBck,
          category: "Lifestyle",
        },
        {
          id: 2,
          bck: slideBck2,
          category: "Food",
        },
        {
          id: 3,
          bck: slideBck3,
          category: "Travel",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Category,
  },
  methods: {
    getPosts() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/posts/?_limit=5")
        .then((response) => response.json())
        .then((data) => (this.featured = data));
    },
  },
  created() {
    this.getPosts();
  },
};
</script>