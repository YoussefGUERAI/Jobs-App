<template>
  <div>
    <!-- Navigation Bar -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add Job</router-link>
    </nav>

    <!-- Route Display -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
};
</script>

<style>
/* Simple styling for navigation */
nav {
  background-color: #f8f9fa;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  
  color: #007bff;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
