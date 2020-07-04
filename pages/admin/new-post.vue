<template>
  <PostForm @submit="savePost($event)"/>
</template>
<script>
  import PostForm from "@/components/admin/PostForm"
  import axios from "axios"

  export default {
    components: {
      PostForm
    },
    methods : {
      savePost(post){
        this.$store.dispatch("addPost", post)
          .then(response => {
            this.$router.push("/admin")
          })
      }
    }
  }
</script>
