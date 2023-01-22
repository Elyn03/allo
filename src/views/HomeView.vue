<template>
    <div class="page tel">

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
</style>
