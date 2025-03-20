<template>
     <div v-if="job">
    <h2>{{ job.titre }}</h2>
    <p>{{ job.description }}</p>
    <p>Salary: {{ job.salaire }} USD</p>
    <p>Created At: {{ job.dateCreation }}</p>
    
  </div>
  <div v-else>
    <p>Loading job details...</p>
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
        const response = await fetch(`http://localhost:3000/jobs/${this.id}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        this.job = await response.json();
      } catch (error) {
        console.error("Error fetching job:", error);
      }
      }
    }
  };
  </script>
  