
<template>
    <div>
        <h1> Job Offers List </h1>
        
        
            <div v-for="job in jobs" :key="job.id" class="job-offer">
                <router-link :to="`/jobs/${job.id}`">
                    <button>{{job.titre }} - {{ job.salaire }}   MAD/an  
                    <router-link :to="'/jobs/edit' + job.id">
                    To modify this job
                    </router-link>
                </button>
                     </router-link>
                    
                    </div>
        
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

.job-offer{
    font-weight: bold;
    margin: 10px;

}
.job-offer button{
    padding: 20px;
    width: 80%;
    margin-left: 120px;
}
h1{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;


}
</style>