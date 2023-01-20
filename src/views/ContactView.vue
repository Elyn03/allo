<template>

    <div class="contact">

        <div v-for="user in contact" :key="user.name" class="list">
            <div class="user">
                <div class="block">
                    <h2>{{ user.name }}</h2>
                    <span>{{ user.num }}</span>
                </div>
                <img src="@/assets/phone.png" alt="">
            </div>
        </div>

        <form @click.prevent="addContact()">
            <div class="remplir">
                <label for="">NOM</label>
                <input type="text">
            </div>
            
            <div class="remplir">
                <label for="">NUMBER</label>
                <input type="number">
            </div>

            <button type="submit">Add</button>

        </form>
    </div>

</template>

<script>

	export default {
        name: 'ContactView',

        computed: {
            contact () {
                return this.$store.state.contact
            }
        },

        methods: {
            addContact(user) {
                this.$store.commit('addContact', user)
            }
        }
    }
</script>

<style scoped>
    .contact {
        margin-left: 250px;
        justify-content: center;
        align-items: center;
    }

    .user {
        display: flex;
        margin-top: 40px;
    }

    .block {
        display: grid;
        grid-template-columns: repeat(2, 200px) ;
        border-bottom: 2px solid #ffab40;
    }

    h2 {
        padding: 0;
        margin: 0;
        align-self: center;
        justify-self: start;
    }
    span {
        padding: 0;
        margin: 0;
        align-self: center;
        justify-self: start;
        color: rgb(116, 116, 116);
    }
    img {
        padding: 0;
        margin: 0;
        align-self: center;
        justify-self: center;
        color: rgb(116, 116, 116);
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    input {
        border: none;
        border-bottom: 2px solid #ffab40;
    }

</style>