<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Base API url: {{env}}</p>
    <p>Rollout API Key: {{api_key}}</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      env: process.env.VUE_APP_BASE_API_URL,
      api_key: process.env.VUE_APP_ROLLOUT_KEY
    }
  }
}
</script>
