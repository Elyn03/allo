<template>

    <div class="page journal">
        <div v-for="user in journal" :key="user.name" class="appel">
            <div class="block">
                <h2>{{ user.name }}</h2>
                <span>le {{ user.date }} à {{ user.time }}</span>
            </div>
            <button class="call" @click="call(user)">
                <img src="@/assets/phone.png" alt="" />
            </button>
        </div>

    </div>
</template>

<script>
	export default {
        name: 'JournalView',

        computed: {
            contacts() {
                return this.$store.state.contacts
            },
            journal() {
                return this.$store.state.journal
            }
        },

        methods: {
			call(user) {
				this.$store.commit('call', user)
			}
		}
    }
</script>

<style scoped>
    .journal {
        justify-content: center;
        align-items: center;
    }

    .appel {
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

    .call {
        background: none;
        border: none;
        cursor: pointer;
    }

</style>