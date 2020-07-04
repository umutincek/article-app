<template>
  <PostForm
    :post="fetchedPost"
    :is-update="true"
    @submit="updatePost($event)"
  />
</template>
<script>
  import PostForm from "@/components/admin/PostForm"
  import axios from "axios"

  export default {
    components: {
      PostForm
    },
    asyncData(context) {
        return axios.get("https://article-nuxt.firebaseio.com/posts/"+ context.params.postId +".json")
            .then(response => {
                return {
                    fetchedPost : response.data
                }
            })
            .catch(e => console.log(e))
    },
    methods : {
        updatePost(editedPost) {
            this.$store.dispatch("updatePost", {...editedPost, id : this.$route.params.postId})
                .then(response => {
                    this.$router.push("/admin")
                })
        }
    }
  }
</script>
