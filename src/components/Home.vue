
<template>
    <div>
        <h1> Job Listings </h1>
        <router-link to="/add"><button>Add Job</button></router-link>
        <ul> 
            <li v-for="job in jobs" :key="job.id">
                <router-link :to="'/jobs' + job.id">
                    {{job.titre }} - {{ job.salaire }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name : 'Home',
        data() {
            return {
                jobs : []
                }
            },
            async mounted() {
            await this.fetchJobs();  // Call async function
        },
        methods: {
            async fetchJobs() {
            try {
                const response = await fetch('http://localhost:3000/jobs'); // Fetch all jobs
                if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                }
                this.jobs = await response.json();
                console.log("Jobs fetched:", this.jobs);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
            }
        }
        }
</script>

<style scoped>

</style>