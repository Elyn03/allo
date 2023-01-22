<template>

    <form @submit.prevent="addContact">

        <div>
            <label for="">Name</label>
            <input type="text" v-model="formContact.name" />
        </div>
        
        <div>
            <label for="">Number</label>
            <input type="number" v-model="formContact.num" />
        </div>

        <span v-if="formContact.name.length < 4 && error" class="error">Votre ajout n'est pas complet</span>

        <button type="submit">Add</button>

    </form>
        
    <ContactCard :user="formContact" />

</template>


<script>
import ContactCard from './ContactCard.vue'
    export default {
        name: 'FormContact',

        components: {
            ContactCard,
        },
        computed: {
            contacts() {
                return this.$store.state.contacts
            }
        },

        data() {
            return {
                error: false,

                formContact: {
                    name: '',
                    num: null,
                }
            }
        },
        
        methods: {
            addContact() {
                if(this.formContact.name < 4) {
                    this.error = true
                    return
                }
                if(this.formContact.name == null && this.formContact.num == null) return
                
                this.$store.commit('addContact', this.formContact)
                
                this.error = false
                
                this.formContact = {
                    name: '',
                    num: null
                }
            }
        }
    }
</script>


<style scoped>
    .error {
        color: rgb(144, 43, 43);
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 40px;
    }

    input {
        border: none;
        border-bottom: 2px solid #ffab40;
    }

    button {
        padding: 10px 50px;
        background-color: #ffab40;
        border: 3px solid #bc7d2c;
        cursor: pointer;
        border-radius: 3px;
    }

</style>