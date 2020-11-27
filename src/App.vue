<template>
  <ul class="nav nav-pills justify-content-center my-3">
    <li class="nav-item">
      <router-link to="/" class="nav-link">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/about" class="nav-link disabled">About</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/form" class="nav-link">Form</router-link>
    </li>
  </ul>

  <router-view/>
</template>

<style src="./styles.scss" lang="scss"></style>
