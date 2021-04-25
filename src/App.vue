<template>
 <main class="">

  <div class="main bg-gray-100 dark:bg-gray-600">
      <Main />

      <div class="inline-block mr-2 mt-2 fixed bottom-5 right-5 ">
          <button type="button" class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg flex items-center checkbox" 
          id="checkbox" @click="toggleTheme">
              <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
                <p>Toggle</p>

          </button>
      </div>
    </div>

 </main>
</template>

<script>
import Main from './components/Main'
import { mapGetters } from "vuex";

export default {
  name: 'App',
  components: {
    Main,
  },

  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme) {
    // theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
}

// window.onload = function() {
// const checkbox = document.getElementById('checkbox');
// const html = document.querySelector('html');
// // const html = document.getElementsByClassName('main');

// const toggleDark = function (){
//     checkbox.clicked
//         ? html.classList.add("dark") : html.classList.remove("dark");
// };

// toggleDark()

// checkbox.addEventListener('click', toggleDark)
// }

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark')
// } else {
//   document.documentElement.classList.remove('dark')
// }

// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  width: 100vw;
  /* height: 100vh; */
}

</style>
