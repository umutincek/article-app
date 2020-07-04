<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <Post
      :key="post.id"
      :post="post"
      v-for="post in posts"
      :is-admin="isAdmin"
    />
  </div>
</template>
<script>
  import Post from "@/components/post/Post"
  export default {
    components : {
      Post
    },
    props : {
      isAdmin : {
        type : Boolean,
        required : false,
        default : false
      },
      posts: {
        type : Array,
        required : true
      }
    }
  }
</script>
