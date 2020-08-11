<template>
  <section class="site-section py-lg">
    <div class="container">
      <div class="row blog-entries">
        <div class="col-md-12 col-lg-10 offset-lg-1 main-content">
          <h1 class="mb-4">{{post.title}}</h1>
          <div class="post-meta">
            <span class="category">Food</span>
            <span class="mr-2">March 15, 2018</span> &bullet;
            <span class="ml-2">
              <span class="fa fa-comments"></span>
              {{comments.length}}
            </span>
          </div>
          <div class="post-content-body">
            <div class="row mb-5">
              <div class="col-md-12 mb-4">
                <img src="../../assets/images/img_7.jpg" alt="Image placeholder" class="img-fluid" />
              </div>
            </div>
            <p>{{post.body}}</p>
            <p>{{post.body}}</p>
            <p>{{post.body}}</p>
            <p>{{post.body}}</p>
          </div>

          <div class="pt-5">
            <p>
              Categories:
              <a href="#">Food</a>,
              <a href="#">Travel</a>
            </p>
          </div>

          <div class="pt-5">
            <h3 class="mb-5">{{comments.length}} Comments</h3>
            <ul class="comment-list" v-for="(comment,index) in comments" :key="index">
              <li class="comment">
                <div class="vcard">
                  <img src="../../assets/images/person_1.jpg" alt="Image placeholder" />
                </div>
                <div class="comment-body">
                  <h3 class="text-capitalize">{{comment.name}}</h3>
                  <div class="text-lowercase">{{comment.email}}</div>
                  <p>{{comment.body}}</p>
                  <!-- <p>
                    <a href="#" class="reply">Reply</a>
                  </p>-->
                </div>
              </li>
            </ul>
            <!-- END comment-list -->

            <div class="comment-form-wrap pt-5">
              <h3 class="mb-5">Leave a comment</h3>
              <form @submit.prevent="postComment" class="p-5 bg-light">
                <div class="form-group">
                  <label for="name">Name *</label>
                  <input type="text" class="form-control" id="name" v-model="comment.name" />
                </div>
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input type="email" class="form-control" id="email" v-model="comment.email" />
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    name
                    id="message"
                    cols="30"
                    rows="10"
                    class="form-control"
                    v-model="comment.body"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input type="submit" value="Post Comment" class="btn btn-primary" />
                </div>
              </form>
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
      id: this.$route.params.id,
      post: {},
      comments: [],
      comment: {
        name: "",
        email: "",
        body: "",
      },
    };
  },
  methods: {
    getPost(id) {
      this.$http
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data));
    },
    getComments(id) {
      this.$http
        .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((response) => response.json())
        .then((data) => (this.comments = data));
    },
    postComment() {
      if (this.comment.name && this.comment.email && this.comment.body) {
        this.comments.push(this.comment);
        this.comment = {
          name: "",
          email: "",
          body: "",
        };
      }
    },
  },
  created() {
    this.getPost(this.id);
    this.getComments(this.id);
  },
};
</script>