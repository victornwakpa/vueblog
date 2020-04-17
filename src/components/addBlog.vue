<template>
      <div id="add-blog">
          <h2>Add a New Blog Post</h2>
          <form v-if="!submitted">
              <label>Blog Title</label>
              <input type="text" v-model.lazy="blog.title" required />
              <label>Blog Content:</label>
              <textarea id="textarea" v-model.lazy="blog.content" required></textarea>
              <div id="checkboxes">
                  <label>Ninjas</label>
                  <input type="checkbox" value="ninjas" v-model="blog.categories" />
                  <label>Wizards</label>
                  <input type="checkbox" value="wizards" v-model="blog.categories" />
                  <label>Mario</label>
                  <input type="checkbox" value="mario" v-model="blog.categories" />
                  <label>Cheese</label>
                  <input type="checkbox" value="cheese" v-model="blog.categories" />   
              </div>
              <v-btn v-on:click.prevent="post" class="blue pa-1 elevation-4 white--text">Add Blog</v-btn>
          </form>
          
          <div id="preview">
              <h3>Preview Blog</h3>
              <p><b>Blog title:</b><br/>{{ blog.title }}</p>
              <p><b>Blog content:</b><br/>{{ blog.content }}</p>
              <p><b>Blog categories:</b></p>
              <ul>
                  <li v-for="category in blog.categories" :key="category">{{ category }}</li>
              </ul>
          </div> 
          <div v-if="submitted" class="card elevation-4 white--text green">
              <h3>Thanks for adding your post</h3>
          </div>
      </div>
</template>

<script>
export default {
  data(){
      
    return{
        blog: {
            title:"",
            content:"",
            categories:[],
            
        }, 
        submitted: false,
    }
  },
  methods:{
      post: function(){
          this.$http.post('http://jsonplaceholder.typicode.com/posts',{
              title: this.blog.title,
              body: this.blog.content,
              userId: 1
          }).then(function(data){
              console.log(data); 
              this.submitted=true   
          });
      }
    
  }
}

</script>

<style scoped>
#add-blog {
    margin: 20px auto;
    border: 2px solid #000;
    padding: 10px;
    border-radius: 5px;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    border: 1px solid;
    display: block;
    width: 300px;
}
#textarea {
    width: 300px;
    height: 100px;
}
#preview{
    padding: 10px 20px;
    border: 2px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
    text-align: center;
    font-size: 25px;
}

#checkboxes input {
    display:inline-block;
    margin-right: 15px;
    margin-left: 5px;
}
#checkboxes label {
    display: inline-block;
}
#option select{
    border: 1px solid #000;
}
   
</style> 