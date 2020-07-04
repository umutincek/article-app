<template>
  <PostDetail :post="fetchedPost" />
</template>

<script>
  import PostDetail from "@/components/post/PostDetail"
  import axios from "axios"

  export default {
    components : {
        PostDetail
    },
   asyncData(context) {
        return axios.get("https://article-nuxt.firebaseio.com/posts/" + context.params.postId + ".json")
          .then(response => {
              return {
                  fetchedPost : response.data
              }
          })
    }
  }
</script>
