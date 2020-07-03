<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-0">
    <nuxt-link
      to="/"
      tag="a"
      class="navbar-brand">
      Köse Yazısı
    </nuxt-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <nuxt-link
          to="/posts"
          tag="li"
          class="nav-item">
          <a class="nav-link" href="#">Yazılar</a>
        </nuxt-link>
      </ul>
      <ul class="navbar-nav my-2 my-lg-0">
        <nuxt-link
          to="/admin"
          tag="li"
          class="nav-item mr-sm-2">
          <a class="nav-link" href="#">Admin</a>
        </nuxt-link>
      </ul>
    </div>
  </nav>
</template>
