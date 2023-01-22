<template>

    <div class="page contact">

        <div class="cartes">
            <div v-for="user in contacts" :key="user.name">
                <ContactCard :user="user" />
            </div>
        </div>

        <div class="form">
            <FormContact />
        </div>

    </div>

</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
import FormContact from "@/components/FormContact.vue";

	export default {
        name: 'ContactView',

        components: {
            ContactCard,
            FormContact
        },

        computed: {
            contacts() {
                return this.$store.state.contacts
            },
            journal() {
                return this.$store.state.journal
            }
        },
    }
</script>

<style scoped>
    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }

</style>