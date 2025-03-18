<template>
    <div>
      <h2>Edit Job</h2>
      <form @submit.prevent="editJob">
        <input v-model="job.title" required />
        <input v-model="job.description" required />
        <input v-model="job.salary" required />
        <button type="submit">Update Job</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return { job: {} };
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
      async editJob() {
        try {
          const response = await fetch(`http://localhost:3000/jobs/${this.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.job)
          });
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
          this.$router.push('/');
        } catch (error) {
          console.error("Error updating job:", error);
        }
      }
    }
  };
  </script>
  