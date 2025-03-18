<template>
    <div v-if="job">
      <h2>{{ job.title }}</h2>
      <p>{{ job.description }}</p>
      <p>Salary: {{ job.salary }} USD</p>
      <router-link :to="'/edit/' + job.id"><button>Edit</button></router-link>
      <button @click="deleteJob">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return { job: null };
    },
    async created() {
      await this.fetchJob();
    },
    methods: {
      async fetchJob() {
        try {
          const response = await fetch(`http://localhost:3000/jobs/${this.id}`);
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
          this.job = await response.json();
        } catch (error) {
          console.error("Error fetching job:", error);
        }
      },
      async deleteJob() {
        try {
          const response = await fetch(`http://localhost:3000/jobs/${this.id}`, {
            method: 'DELETE'
          });
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
          this.$router.push('/');
        } catch (error) {
          console.error("Error deleting job:", error);
        }
      }
    }
  };
  </script>
  