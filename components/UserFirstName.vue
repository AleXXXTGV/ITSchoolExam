<template>
    <div class="result__name text-[36px]">
        <span>{{ this.userName }}</span>
    </div>
</template>

<script>
export default {
  name:'UserFirstName',
    computed: {
  },
  data() {
    return {
      userName: localStorage.getItem('userName')
    };
  },
}
</script>

<style>

</style>