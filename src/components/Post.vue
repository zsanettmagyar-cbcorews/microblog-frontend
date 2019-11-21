<template>
  <div class="box">
    <div class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{post.user}}</strong> <small> {{ post.timestamp.toDateString() }}</small>
            <br>
            {{post.message}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: Object
  }
}
</script>
