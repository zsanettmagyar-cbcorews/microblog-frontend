<template>
  <div class="container">
    <hr class="hr is-invisible">
    <div class="box">

      <h1 class="title">Posts</h1>
      <hr class="hr">
      <div class="box">
        <div class="box">
          <b-field label="What's going on today?"
                   class="is-marginless"
          >
            <b-input v-model="message" maxlength="140" type="textarea"></b-input>
          </b-field>
          <b-button type="is-dark" @click="addPost">Submit</b-button>
        </div>
        <hr class="hr">
        <Post v-for="post in posts" :key="post.id" :post="post"/>
      </div>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import uuidv4 from 'uuid/v4'

export default {
  name: 'posts',
  components: {
    Post
  },
  data: function () {
    return {
      message: '',
      current_user: 'ldonley',
      posts: [
        {
          id: 1,
          user: 'ldonley',
          message: 'Hello, this is a test message from KubeCon 2019',
          timestamp: new Date()
        },
        {
          id: 2,
          user: 'morbo',
          message: 'Morbo will now introduce tonight\'s candidates… PUNY HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo\'s good friend, Richard Nixon. I\'ll get my kit! Fry, you can\'t just sit here in the dark listening to classical music.',
          timestamp: new Date()
        },
        {
          id: 3,
          user: 'zapp',
          message: 'Bender! Ship! Stop bickering or I\'m going to come back there and change your opinions manually! Fatal. Fry! Stay back! He\'s too powerful! You can see how I lived before I met you. I am the man with no name, Zapp Brannigan!',
          timestamp: new Date()
        }
      ]
    }
  },
  methods: {
    addPost: function () {
      if (this.message.length > 1 && this.message.length <= 140) {
        this.posts.push({
          id: uuidv4(),
          user: this.current_user,
          message: this.message,
          timestamp: new Date()
        })
      }
    }
  }
}
</script>
