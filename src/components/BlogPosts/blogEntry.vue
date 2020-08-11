<template>
  <div class="col-md-6 col-lg-4">
    <router-link
      to="/blogpost"
      class="a-block d-flex align-items-center height-md"
      :style="{'background-image':`url(${img})`}"
    >
      <div class="text">
        <div class="post-meta">
          <span class="category">{{category}}</span>
          <span class="mr-2">March 15, 2018</span> &bullet;
          <span class="ml-2">
            <span class="fa fa-comments"></span> 3
          </span>
        </div>
        <h3>{{title}}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
import img from "../../assets/images/img_1.jpg";

export default {
  data() {
    return {
      img,
    };
  },
  props: ["category", "title"],
};
</script>