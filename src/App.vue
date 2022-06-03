<template>
  <Header/>
  <main class="flex-shrink-0">
    <router-view/>
  </main>
  <Footer/>

<!--  <EditTask/>-->
<!--  <RemoveTask/>-->
</template>

<script>
// import { mapActions } from 'vuex';
import Header from 'Components/Header/Header.vue';
import Footer from 'Components/Footer/Footer.vue';
// import EditTask from 'Components/Modal/EditTask.vue';
// import RemoveTask from 'Components/Modal/RemoveTask.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // EditTask,
    // RemoveTask,
  },
  methods: {
    // ...mapActions('tasks', {
    //   fetchCurrentTasks: 'fetchCurrent',
    //   fetchCompletedTasks: 'fetchCompleted',
    // }),
  },
  beforeMount() {
    // this.fetchCurrentTasks();
    // this.fetchCompletedTasks();
  },
};
</script>

<style lang="scss">
@import '~@/styles/main';
</style>
