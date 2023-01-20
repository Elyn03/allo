<template>

<div class="butt">
            <button>
                <span>1</span>
                <span></span>
            </button>
            <button>
                <span>2</span>
                <span>abc</span>
            </button>
            <button>
                <span>3</span>
                <span>def</span>
            </button>
            <button>
                <span>4</span>
                <span>ghi</span>
            </button>
            <button>
                <span>5</span>
                <span>jkl</span>
            </button>
            <button>
                <span>6</span>
                <span>mno</span>
            </button>
            <button>
                <span>7</span>
                <span>pqrs</span>
            </button>
            <button>
                <span>8</span>
                <span>tuv</span>
            </button>
            <button>
                <span>9</span>
                <span>xyz</span>
            </button>
            <button>
                <span>*</span>
            </button>
            <button>
                <span>0</span>
                <span>abc</span>
            </button>
            <button>
                <span>#</span>
            </button>

            <div class="phone">
                <img src="@/assets/phone.png" alt="">
            </div>
        </div>
        
</template>


<script>
export default {
  name: 'ClavierCard',
}
</script>


<style scoped>
    .butt {
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
    }

</style>