<template>
  <div class="home">
    <Login />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Login from "@/components/Login.vue";
import Navbar from "@/components/Navbar.vue";

@Options({
  components: { Login, Navbar },
})
export default class Home extends Vue {}
</script>
