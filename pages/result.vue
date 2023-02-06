<template>
    <div class="container pt-[26px]">
        <div class="logo h-[88px] w-[252px]">
            <img src="@/static/img/Logo.png" alt="">
        </div>
        <div class="result mt-[72px] flex flex-col h-[50vh] items-center justify-between">
            <div class="result__title text-[36px]">
                <span>Ваш результат </span>
            </div>
            <user-first-name />
            <div class="result__givenAnswers flex text-[36px]">
                <user-result />
                <p>/</p>
                <p>{{ currentCourseAndModule.length }}</p>
            </div>
            <div class="result__scores text-[64px]">
                <span>{{ maxBalls }}</span>
                <span>Балов</span>
            </div>
            <div class="result__congratulations text-[64px]">
                <span>ОТЛИЧНО ! ТАК ДЕРЖАТЬ !</span>
            </div>
        </div>
    </div>
</template>

<script>

import UserFirstName from '~/components/UserFirstName.vue'
import UserResult from '~/components/UserResult.vue'
export default {
    components: { UserFirstName, UserResult },
    computed: {
        currentCourseAndModule() {
            let currentCourse = this.$store.state.questions.questions.filter(item => item.course == localStorage.getItem('course') && item.module == localStorage.getItem('module'))
            return currentCourse
        },
        maxBalls() {
            let ball = 100 / this.currentCourseAndModule.length
            let maxBall = ball * Number(localStorage.getItem('correctAnswers'))
            return maxBall
        }
    },
}
</script>

<style>

</style>
UserFirstName