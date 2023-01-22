<template>

    <div class="clavier">

        <div class="input">
            <h1 class="list" type="number"> {{ value }}</h1>
        </div>

        <div class="keyboard">
            <button v-for="i in num" :key="i" @click="press(i)">
                {{ i }}
            </button>

            <div class="phone" @click="call(value)">
                <img src="@/assets/phone.png" alt="" />
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
    },

    data() {
        return {
            value: '',
            num: [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'],
        }
    },
    
    methods: {
        press(key) {
            this.value = `${this.value}${key}`;
        },
        call(user) {
            this.$store.commit('call', user)
        }
    },
}
</script>


<style scoped>
    .clavier {
        display: flex;
        flex-direction: column;
        gap: 20px;
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
        justify-self: center;
        align-self: center;
        cursor: pointer;
    }

</style>