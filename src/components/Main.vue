<template>
    <div class="main flex flex-wrap overflow-hidden">
        <div class="top w-full overflow-hidden">
            <div class="tophead w-full overflow-hidden">
                <p class="font-sans text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-semibold ">
                    Body Mass Index (BMI)
                </p>
            </div>
            <div class="topbody w-full overflow-hidden">
                <p class="text-center">
                    The BMI is a convenient rule of thumb used to broadly categorize a person as underweight, <br>
                    normal weight, overweight, or obese based on tissue mass (muscle, fat, and bone) and height. <br>
                    Commonly accepted BMI ranges are underweight (under 18.5 kg/m2), normal weight (18.5 to 25), <br>
                    overweight (25 to 30), and obese (over 30).
                </p>
            </div>
           <a href="#" id="scrolldown">
            <div class="topfooter w-full">
                <button
                        class="animate-bounce p-0 w-12 h-12 bg-gradient-to-b from-red-500 to-yellow-300 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow "
                >
                <svg enable-background="new 0 0 20 20" class="w-6 h-6 inline-block">
                    <path fill="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"  d="M19 9l-7 7-7-7">
                    </path>
                </svg>
                </button>
            </div>
           </a>
        </div>
        <div class="bodied w-full overflow-hidden">
            <Calcspace />
        </div>
    </div>
</template>

<script>
import Calcspace from './Calcspace'

export default {
    components: {
        Calcspace,
    },
    mounted() {
        var elmnt = document.getElementById("scrolldown");
        elmnt.scrollIntoView(false);
   }
}

</script>

<style scoped>
    .main {         
        text-align: center;

    }

    .top {
        height: 70vh;
        margin-top: 180px;
        padding: 20px;
        width: 100vw;
       
    }
    .topbody {
        margin-top: 30px;
        width: 100vw;
    }

    .topbody p {
        
         /* These are technically the same, but use both */
        overflow-wrap: break-word;
        word-wrap: break-word;

        /* Instead use this non-standard one: */
        word-break: break-word;

        /* Adds a hyphen where the word breaks, if supported (No Blink) */
        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;

    }

    .topfooter  {
        margin-top: 30px;
        padding: 20px;
    }

    .bodied {
        width: 100vw;
        height: 100vh;
    }
</style>
