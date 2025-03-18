<template>
    <div>
        <h2>Add a New Job</h2>
        <form @submit.prevent="addJob">
      <input v-model="job.title" placeholder="Job Title" required />
      <input v-model="job.description" placeholder="Description" required />
      <input v-model="job.salary" placeholder="Salary" required />
      <button type="submit">Add Job</button>
    </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      job: { title: '', description: '', salary: '' }
    };
  },
  methods: {
    async addJob() {
      try {
        const response = await fetch('http://localhost:3000/jobs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.job)
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        this.$router.push('/');
      } catch (error) {
        console.error("Error adding job:", error);
      }
    }
  }
};
</script>