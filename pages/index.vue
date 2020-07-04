<template>
  <div>
    <PostList :posts="fetchedPosts"/>
    <About />
  </div>
</template>
<script>
  import PostList from "@/components/post/PostList"
  import About from "@/components/home/About"
  export default {
    components : {
      PostList,
      About
    },
    computed : {
        fetchedPosts() {
            return this.$store.getters.getPosts
        }
    },
  }
</script>
<style scoped></style>
