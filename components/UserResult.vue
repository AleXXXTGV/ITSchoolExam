<template>
    <div class="result__number text-[36px]">
        <p>{{ this.correctAnswers }}</p>
    </div>
</template>

<script>
export default {
  name:'UserResult',
    computed: {
  },
  data() {
    return {
        correctAnswers: localStorage.getItem('correctAnswers')
    };
  },
}
</script>

<style>

</style>