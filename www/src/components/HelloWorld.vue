<template>

  <div>
    <h1 class="animated lightSpeedIn">What's Next?</h1>
    <div class="row background" >

      <div class="col hello"> {{newUser.userName}}{{newUser.id}}
        <!--{{users.name}}-->
        <div v-if="!user._id">
          <!--vif="function to handle userid check"-->
          <form v-on:submit.prevent="getUser">
            <input type="text" name="name" placeholder="please enter name" v-model="checkUser.userName">
            <button class="btn btn-light" type='submit'>Login</button>
          </form>
          <form v-on:submit.prevent="addUser">
            <input type="text" name="name" placeholder="please enter name" v-model="newUser.userName">
            <button class="btn btn-light" type='submit'>Register</button>
          </form>
        </div>
        <div v-else>
          <h1>{{user.userName}}</h1>
          <form>
        <button class="btn btn-light" type="submit">LogOut</button>
      </form>
      <div>
        <form v-on:submit.prevent="addPost;post={}">
          <input type="string" name="title" placeholder="title" v-model="post.title">
          <input type="string" name="body" placeholder="Kick ass story" v-model="post.body">
          <button class="btn btn-light" type='submit'>Add post</button>
        </form>
      </div>
      
      <div>{{msg}}</div>
      
      <div class="post" v-for="post in posts" :key='post._id'>
          <post :postProp="post"></post>
      </div> 
    </div>
  </div>
  </div>
  </div>
</template>

<script>
  import whatsNext from '../assets/whatsNext2.jpg'
import post from './Post'
  export default {
    name: "HelloWorld",
    mounted() {
      this.$store.dispatch("getPosts");
    },
    data() {
      return {
        whatsNext,
        msg: "Tell us your story",
        post: {
          userName: "",
          title: "",
          userId: "",
          body: "",
          votes: 0,
          imgUrl: "https://placehold.it/200x200"
        },
        newUser: {
          userName: ''

        },
        checkUser: {
          userName: ''
        },
        comment: {
          userName: "",
          userId: 0,
          postId: 0,
          body: '',
          votes: 0
        }
      };
    },
    computed: {
      posts() {
        return this.$store.state.posts;
      },
      comments() {
        return this.$store.state.comments;
      },
      user() {
        return this.$store.state.user;
      }
    },
    methods: {
      // checkUser(name){
      //   this.$store.dispatch("checkUser",this.users)

    // },
    addPost() {
      this.post.userName = this.user.userName
      this.post.userId = this.user._id
      this.$store.dispatch("addPost", this.post);
    },

    getUser(){
      this.$store.dispatch("getUser", this.checkUser)
    },
    addUser(){
      this.$store.dispatch("addUser", this.newUser);
    },
  // getComments(postId){
  //   this.$store.dispatch("getComments", postId)
  // }
  },
  components:{
    post
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .background {
    background-repeat: no-repeat;
    background-attachment: fixed;
   background-size: contain;
    /* display: block; */
    margin-left: auto;
    margin-right: auto;
    /* object-fit:cover; */
  }
  body{
    background-image: url("../assets/whatsNext2.jpg");
    background-size: cover;
  }
</style>