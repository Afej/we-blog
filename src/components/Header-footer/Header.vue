<template>
  <header role="banner">
    <div class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-9 social">
            <img src="../../assets/images/logo.png" alt="logo" class="logo" />
          </div>
          <div class="col-3 search-top">
            <form action="#" class="search-top-form">
              <span class="icon fa fa-search"></span>
              <input type="text" id="s" placeholder="Type keyword to search..." />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container logo-wrap">
      <div class="row pt-5">
        <div class="col-12 text-center">
          <a
            class="absolute-toggle d-block d-md-none"
            data-toggle="collapse"
            href="#navbarMenu"
            role="button"
            aria-expanded="false"
            aria-controls="navbarMenu"
          >
            <span class="burger-lines"></span>
          </a>
          <h1 class="site-logo">We Blog</h1>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/" active-class="active" exact>Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown05"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Trending</a>
              <div class="dropdown-menu" aria-labelledby="dropdown05">
                <router-link class="dropdown-item" to="/category">Lifestyle</router-link>
                <router-link class="dropdown-item" to="/category">Food</router-link>
                <router-link class="dropdown-item" to="/category">Adventure</router-link>
                <router-link class="dropdown-item" to="/category">Travel</router-link>
                <router-link class="dropdown-item" to="/category">Business</router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" active-class="active" exact>About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.logo {
  width: 50px;
  height: 50px;
}
</style>


