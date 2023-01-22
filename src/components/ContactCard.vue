<template>

    <div class="clavier">
        <div class="user">
            <div class="block">
                <h2>{{ user.name }}</h2>
                <span>{{ user.num }}</span>
            </div>
            <button class="call" @click="call(user)">
                <img src="@/assets/phone.png" alt="" />
            </button>
            
        </div>
    </div>
        
</template>


<script>
    export default {
        name: 'ContactCard',

        props: [
            'user'
        ],

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

    img {
        padding: 0;
        margin: 0;
        align-self: center;
        justify-self: center;
        color: rgb(116, 116, 116);
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
    .call {
        background: none;
        border: none;
        cursor: pointer;
    }

</style>