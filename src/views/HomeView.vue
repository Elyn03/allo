<template>
    <div class="tel">

        <h2>kk</h2>

        <ClavierCard />

    </div>

</template>

<script>
import ClavierCard from '@/components/ClavierCard.vue';

    export default {
    name: "HomeView",
    components: {
        ClavierCard
    },
    computed: {
        compteur() {
            return this.$store.state.compteur;
        }
    },
    methods: {
        increment() {
            this.$store.commit("increment");
        }
    },
}

</script>

<style scoped>
    .tel{
        margin-left: 300px;
    }

</style>
