<template>
    <div class="flex justify-center h-screen items-center bg-red-100">
    <div class='flex max-w-sm w-full h-70 justify-center bg-white shadow-md rounded-lg overflow-hidden mx-auto flex-col p-5'>
        <h3 class="text-2xl font-bold mb-4">BMI</h3>
    <!-- This is the input component -->
    <div class="relative h-10 input-component mb-5">
      <input
        id="indheight"
        type="text"
        name="height"
        v-model="height"
        class="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
      />
    
      <label for="name" class="absolute left-2 transition-all bg-white px-1">
        Height
      </label>
        <div class="absolute z-10 inset-y-0 right-0 flex items-center py-0"> 
            <label for="hmetric" class="sr-only">Height</label>
            <select id="hmetric" v-model="heightoperand" name="metric" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                <option>Metres</option>
                <option>Centimetres</option>
            </select>
        </div>
    </div>

    <!-- Age INput -->
    <div class="relative h-10 input-component mb-5">
      <input
        id="inage"
        type="text"
        name="age"
        v-model="age"
        class="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
      />
    
      <label for="name" class="absolute left-2 transition-all bg-white px-1">
        Age
      </label>
    </div>

    <!-- This is the input component -->
    <div class="relative h-10 input-component mb-5">
      <input
        id="indwidth"
        type="text"
        name="width"
        v-model="width"
        class="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
      />
      <label for="email" class="absolute left-2 transition-all bg-white px-1">
        Width
      </label>
      <div class="absolute z-10 inset-y-0 right-0 flex items-center py-0"> 
            <label for="wmetric" class="sr-only">Width</label>
            <select id="wmetric" v-model="weightoperand" name="metric" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                <option>Kg</option>
                <option>Pounds</option>
            </select>
        </div>
    </div>
    <!-- This is the check -->
    <button type="button" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg flex items-center justify-center"
        @click="checkConvert()">
        <svg class="w-6 h-6 mr-2" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <title>stethoscope</title>
        <!-- <rect width="512" height="512" fill="#d3de7e"/> -->
        <path d="M156,263.89a21.3,21.3,0,0,0,10.86,16.78,68.66,68.66,0,0,0,16.39,6.64A174.73,174.73,0,0,1,164,329.87c-9.81,15.69-9.93,34.63-.33,51.95,14.18,25.51,45.43,42.67,77.78,42.67,22.26,0,42-10.23,55.66-28.83,19.53-26.58,23.86-65.82,11.58-104.94-11.4-36.24,3.83-55.59,13.9-63.9a46.2,46.2,0,1,0-12.8-22.59c-19,13.91-41,45.22-25.62,94.18,9.68,30.89,6.72,62.33-7.78,82-6.13,8.38-17.2,18.36-34.93,18.36-22.94,0-45.69-12.11-55.29-29.45-3.56-6.4-6.49-16.06-.39-25.84a198.92,198.92,0,0,0,23.72-54.7,68.18,68.18,0,0,0,22.13-7.39,21.41,21.41,0,0,0,11.09-16.18c30.18-27.27,44.11-76.44,44.93-79.31a12.81,12.81,0,0,0-6.34-14.75c4.18-36.9-9.49-55.51-17.74-63.07a9.28,9.28,0,0,0-3.89-9.39l-15.16-9.9a7.59,7.59,0,0,0-11.09,2.93l-7.21,14a6.78,6.78,0,0,0,4.28,10l17.13,5.05a11.16,11.16,0,0,0,12-4.58c6.81,7.18,16.65,23.18,13.24,53.71a12.83,12.83,0,0,0-10,9.15c-4.1,14.78-16,45.28-33.64,63.58a21.24,21.24,0,0,0-17.79,1,24,24,0,0,1-11.13,3.08h-.77a24.76,24.76,0,0,1-11.72-3.38,21.27,21.27,0,0,0-17.56-1.44c-17.26-18.36-28.89-48.23-32.93-62.8a12.9,12.9,0,0,0-10-9.15c-3.38-30.53,6.43-46.53,13.28-53.71a11.21,11.21,0,0,0,12,4.61l17.13-5.05A6.83,6.83,0,0,0,174,105.72l-7.2-14a7.57,7.57,0,0,0-11.1-2.9l-15.16,9.9a9.29,9.29,0,0,0-3.92,9.36c-8.22,7.59-21.89,26.17-17.73,63.1a12.84,12.84,0,0,0-6.34,14.71c.8,2.81,14.32,50.42,43.48,78Zm198.25-87.83a17.85,17.85,0,1,1-17.85,17.85,17.84,17.84,0,0,1,17.85-17.85Zm0,0" fill="#fff"/>
        </svg>
        Check
    </button>

    <div id = "result-container" v-if = "checkClicked" class="p-2 m-4 flex justify-center text-left items-center py-3 bg-blue-900">
            <h2 id = "result" v-if = "!loading" >
                <span class="m-1 text-2l text-blue-100 font-semibold " >Your BMI: {{posts.bmi}} </span><br/>
                <span class="m-1 text-2l text-blue-100 font-semibold ">Healthy BMI Range: {{posts.healthy_bmi_range}}</span> <br/>
                <span class="m-1 text-2l text-blue-100 font-semibold ">Diagnosis: {{posts.health}} </span>
            </h2>
            <h2 v-else>Loading...</h2>
    </div>

    <!-- <div class="text-2xl font-bold mb-4">{{posts}}sssssss</div> -->

    </div>

    </div>
<!-- </div> -->
</template>

<style scoped>
label {
  top: 0%;
  transform: translateY(-50%);
  font-size: 11px;
  color: rgba(37, 99, 235, 1);
}
.empty input:not(:focus) + label {
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
}
input:not(:focus) + label {
  color: rgba(70, 70, 70, 1);
}
input {
  border-width: 1px;
}
input:focus {
  outline: none;
  border-color: rgba(37, 99, 235, 1);
}
</style>

<script>
import axios from "axios";

export default {
    name: "Calculator",
   
    data(){
       return {
           apiKey: process.env.VUE_APP_APIKEY,
           height: '',
           heightoperand: '',
           age: '',
           width: '',
           weightoperand: '',
           result: '',
           posts: null,
           checkClicked: '',
           loading: false,
       }

    },

   methods: {
        checkConvert() {
            if(!(this.height == '' || this.width == '' || this.height == this.width)) {
                this.checkClicked = true
                
            }
            this.convert()
        },
        convert() {
            if(this.height == '' || this.width == '' ||  this.height == this.width) {
                alert("Please check your inputs and try again")
            }
            else {
                if (this.heightoperand == "Metres") {
                    console.log('Metres Selected');
                    this.height = this.height * 100
                    this.heightoperand = "Centimetres";
                    console.log(this.height)
                }
                else {
                    console.log("Centimetres");
                    this.height
                    console.log(this.height)
                }

                if (this.weightoperand == "Pounds") {
                    console.log('Pound Selected');
                    this.width = this.width / 2.205;
                    this.weightoperand = "Kg";
                    console.log(this.width)
                }
                else {
                    console.log("Kg");
                    this.width
                    console.log(this.width)
                }

                    this.loading = true
               const options = {
                    method: 'GET',
                    url: 'https://fitness-calculator.p.rapidapi.com/bmi',
                    params: {age: this.age , weight: this.width , height: this.height},
                    headers: {
                        'x-rapidapi-key': 'd6653087d9msh2456f0d2bbc09f9p11a6d4jsn6dd9ea66a670',
                        'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com'
                    }
                    };

                    axios.request(options).then((response) => {
                        console.log(response.data);
                        this.posts = response.data;
                        // alert(this.posts.bmi)
                        this.loading = false;
                    }).catch(function (error) {
                        console.error(error);
                    });
                        } 
        },
        clear() {
            // this.amount = 0
            this.height = ''
            this.width = ''
            this.checkClicked = false
        }
    },
     watch: {
        height: function() {
             this.checkClicked = false
        },
        width: function() {
             this.checkClicked = false
        },
        post: 'posts'

    },
    mounted()   {
        this.posts;
    }
    
}
</script>