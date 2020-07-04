<template>
  <PostDetail :post="fetchedPost" />
</template>

<script>
  import PostDetail from "@/components/post/PostDetail"
  export default {
    components : {
      PostDetail
    },
    asyncData(context, callback) {
        setTimeout(() => {
            callback(null, {
              fetchedPost : {
                id : 1,
                title : "Vue.js",
                subTitle: "Vue.js eğitimi başlıyorr!!",
                text : "Router, Vuex, Axios, Resource, Router, Vuex, Axios, Resource, Router, Vuex, Axios, Resource...",
                author: "Umut Incek"
              }
            })
        },1500)
    }
  }
</script>
