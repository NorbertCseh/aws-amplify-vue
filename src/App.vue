<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Navbar from "@/components/Navbar.vue";
import { mapActions } from "vuex";

@Options({
  components: {
    Navbar,
  },
  methods: {
    ...mapActions("auth", ["authAction"]),
  },
  mounted() {
    this.authAction();
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
