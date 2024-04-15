<template>
  <div class="bg-grey-lighten-3" style="min-height: 100vh">
    <div class="d-flex flex-column justify-center" style="min-height: 100vh">
      <div>
        <VIcon
          icon="fa-exclamation-triangle"
          color="primary"
          size="200"
        ></VIcon>
      </div>
      <div>
        <p class="text-grey text-h3 text-md-h1 text-center my-2">404</p>
        <p class="text-grey text-body-1 text-center">Page Not Found</p>
        <p class="text-grey mx-5 text-body-1 text-center font-weight-light">
          The page you are looking for doesn't exist or an error occured. Go
          back, or head over to
          <router-link to="/" class="text-primary">Home page</router-link> to
          choose a direction
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
