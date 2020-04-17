<template>
  <v-app>
    <v-content>
      <show-blogs></show-blogs>
    </v-content>
  </v-app>
</template>

<script>
import showBlogs from './components/showBlogs';

export default {
  components: {
    // addBlog,
    showBlogs
  },
  data(){
    return{

    }
  },
  methods:{

  }
}

</script>

<style scoped>
  body{
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
</style>