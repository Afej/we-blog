<template>
  <section class="site-section">
    <div class="container">
      <div class="row mb-4">
        <div class="col-md-6">
          <h2 class="mb-4">Trending</h2>
        </div>
      </div>
      <div class="row blog-entries">
        <div class="col-md-12 col-lg-12 main-content">
          <div class="row mb-5 mt-5">
            <paginate name="blogposts" :list="blogposts" :per="10">
              <div class="col-md-12" v-for="(post,index) in paginated('blogposts')" :key="index">
                <div class="post-entry-horzontal">
                  <router-link :to="{name: 'blogpost', params: {id: post.id}}">
                    <div
                      class="image"
                      :style="{'background-image': `url(${require('../../assets/images/img_10.jpg')})`}"
                    ></div>
                    <span class="text">
                      <div class="post-meta">
                        <span class="category">Travel</span>
                        <span class="mr-2">March 15, 2018</span> &bullet;
                        <span class="ml-2">
                          <span class="fa fa-comments"></span>
                        </span>
                      </div>
                      <h2>{{post.title}}</h2>
                    </span>
                  </router-link>
                </div>
                <!-- END post -->
              </div>
            </paginate>
          </div>

          <div class="row">
            <div class="col-md-12 text-center">
              <nav aria-label="Page navigation" class="text-center">
                <ul class="pagination">
                  <!-- <li class="page-item active">
                    <a class="page-link" href="#">Prev</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>-->
                  <li class="page-item">
                    <paginate-links
                      for="blogposts"
                      :async="true"
                      :show-step-links="true"
                      class="page-links"
                    ></paginate-links>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <!-- END main-content -->
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      blogposts: [],
      paginate: ["blogposts"],
    };
  },
  methods: {
    getPosts() {
      this.$http
        .get("https://jsonplaceholder.typicode.com/posts/?_limit=60")
        .then((response) => response.json())
        .then((data) => (this.blogposts = data));
    },
  },
  created() {
    this.getPosts();
  },
};
</script>