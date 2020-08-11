<template>
  <section class="site-section pt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <carousel
            :per-page="1"
            :mouse-drag="true"
            :paginationEnabled="false"
            :navigationEnabled="true"
            :autoplay="true"
            :loop="true"
          >
            <slide v-for="(slide,index) in slides" :key="index">
              <div>
                <a
                  href="/blogpost"
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
                    <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem nobis, ut dicta eaque ipsa laudantium!
                    </p>
                  </div>
                </a>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="row">
        <BlogEntry :category="slides[0].category" />
        <BlogEntry :category="slides[1].category" />
        <BlogEntry :category="slides[2].category" />
      </div>
    </div>
  </section>
</template>

<style>
</style>
<script>
import { Carousel, Slide } from "vue-carousel";

import BlogEntry from "../BlogPosts/blogEntry";

import slideBck from "../../assets/images/img_1.jpg";
import slideBck2 from "../../assets/images/img_2.jpg";
import slideBck3 from "../../assets//images/img_3.jpg";

export default {
  data() {
    return {
      slides: [
        {
          bck: slideBck,
          category: "Lifestyle",
        },
        {
          bck: slideBck2,
          category: "Food",
        },
        {
          bck: slideBck3,
          category: "Travel",
        },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    BlogEntry,
  },
  methods: {
    getPosts() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/posts/?_limit=10")
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
  },
  created() {
    this.getPosts();
  },
};
</script>