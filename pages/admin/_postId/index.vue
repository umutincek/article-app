<template>
  <PostForm :is-update="true"/>
</template>
<script>
  import PostForm from "@/components/admin/PostForm"
  export default {
    components: {
      PostForm
    }
  }
</script>
