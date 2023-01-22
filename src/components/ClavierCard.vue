<template>

    <div class="clavier">

        <div class="affiche">
            <h1 class="theNumber">{{ number }}</h1>
            <div @click="clear" class="img">
                <img src="@/assets/delete.png" alt="" />
            </div>
        </div>

        <div class="bas">
            <h2 class="contact"> {{ name }} </h2>

            <div class="keyboard">
                <button v-for="i in num" :key="i" @click="press(i)">
                    {{ i }}
                </button>

                <div @click="call(number)" class="img phone">
                    <img src="@/assets/phone.png" alt="" />
                </div>
            </div>

        </div>
        

    </div>
        
</template>


<script>
export default {
    name: 'ClavierCard',

    computed: {
        numero() {
            return this.$store.state.numero
        },
        contacts() {
            return this.$store.state.contacts
        },
    },

    data() {
        return {
            number: '',
            num: [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'],
            name: ''
        }
    },

    methods: {
        press(key) {
            this.number = `${this.number}${key}`;
            this.$store.state.contacts.forEach((nom) => {
                if (nom.num == this.number) {
                    this.name = nom.name
                }
            })
        },
        call(user) {
            if (this.name == '') {
                this.$store.commit('call', user)
            } else {
                this.$store.commit('call', this.name)
            }
            this.number = '';
            this.name = '';
            
        },
        clear() {
            this.number = this.number.slice(0, -1);
        }
    },
}
</script>


<style scoped>
    .bas {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .affiche {
        margin: 0;
        padding: 0;
        display: flex;
        border: 2px solid #ffab40;
    }
    .butt, .keyboard {
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(3, 50px) ;
        grid-template-rows: repeat(5, 50px);  
        gap: 5px; 
    }

    button {
        padding: 0;
        padding-top: 10px;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        background-color: #808080;
        box-shadow: inset 0 0 20px #383838;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .phone {
        padding-top: 20px;
        grid-column: 2;
        grid-row: 5;
        height: 50px;
    }

    .theNumber {
        height: 50px;
        width: 300px;
        text-align: center;
        vertical-align: middle;
    }
    .img {
        justify-self: center;
        align-self: center;
        cursor: pointer;
    }

    .contact {
        height: 30px;
        border-bottom: 2px solid #ffab40;
    }


</style>