<template>
    <div class="container flex justify-between pt-[26px]">
        <div class="logo h-[88px] w-[252px]">
            <img src="@/static/img/Logo.png" alt="">
        </div>
        <div class="question max-w-[60%] h-[90vh] flex flex-col justify-between items-center">
            <div class="question__title text-[36px]">
                <span>Вопрос {{ counter + 1 }}</span>
            </div>
            <div class="question__text text-[36px]">
                <span>{{ getCurrentQuestion.text }}</span>
            </div>
            <div class="question__answers flex flex-col justify-between items-center w-full gap-[20px]">
                <div v-for="answer in answers" :key="answer.text"
                    class="question__answer text-[36px] border-solid border-black border-[1px] min-h-[100px] text-center w-full "
                    :class="{ selected: answer.selected }">
                    <input type="radio" :id="answer.id" :name="getCurrentQuestion.id"
                        @click="toggle([getCurrentQuestion, answer])" :checked="answer.selected" hidden>
                    <label :for="answer.id" class="w-full h-full flex cursor-pointer items-center justify-center">{{ answer.text }}</label>
                </div>
            </div>
            <div class="question__buttons flex justify-between items-center w-full gap-[200px]">
                <a @click="checkQuestionsStatus()  | previousQuestion()" class="question__previous text-[36px] cursor-pointer">Предыдущий</a>
                <a @click="checkQuestionsStatus()  | nextQuestion()" class="question__next text-[36px] cursor-pointer" v-show="!finish">Следующий</a>
                <nuxt-link to="/result" v-show="finish" class="text-[36px]"><button class="block w-full"
                        @click="checkAnswers">Завершить</button></nuxt-link>
            </div>
        </div>
        <div class="navigation">
            <div class="navigation__time text-[36px] text-center">
                <span id="navigation__time">{{ timerMinutes }}:{{ timerSeconds }}</span>
            </div>
            <div class="navigation__questions border-solid border-black border-[1px] p-[22px] flex w-[300px] flex-wrap gap-[16px]">
                <div v-for="question in currentCourseAndModuleQuestions" :key="question.index" class="navigation__quetsion-answerGiven text-[36px]">
                    <span  class="flex flex-col cursor-pointer" :id="question.id" @click=" checkQuestionsStatus() | selectAnswer([question.id, question.questionIndex])">{{ question.questionIndex }}</span>
                </div>
            </div>
            <div class="navigation__info">
                <div class="navigation__answerGiven text-[36px]">
                    <span>✓ - Ответ получен</span>
                </div>
                <div class="navigation__noAnswerGiven text-[36px]">
                    <span>X - Вопрос пропущен</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            isActive: true,
            totalSeconds: 60 * 60,
            pomodoroInstance: null,
        };
    },
    mounted() {
        this.start();
    },
    computed: {
        counter() {
            return this.$store.state.questions.counter
        },
        user() {
            return this.$store.state.user.user
        },
        currentCourseAndModule() {
            let currentCourse = this.$store.state.questions.questions.filter(item => item.course == localStorage.getItem('course') && item.module == localStorage.getItem('module'))
            return currentCourse
        },
        currentCourseAndModuleQuestions() {
            let questionsIndex = []
            let questionIndex = 1
            for(let item of this.currentCourseAndModule) {
                questionsIndex.push({
                    questionIndex: questionIndex,
                    id: item.id
                });
                questionIndex += 1
            }
            return questionsIndex
        },
        getCurrentQuestion() {
            let currentQuestion = this.currentCourseAndModule[this.counter]
            return currentQuestion
        },
        answers() {
            return this.getCurrentQuestion.answers
        },
        finish() {
            if (this.isActive == false) {
                return true
            }
            else if ((this.counter + 1) == this.currentCourseAndModule.length) {
                return true
            } else {
                return false
            }
        },
        // show minutes
        timerMinutes() {
            const minutes = Math.floor(this.totalSeconds / 60);
            return this.formatTime(minutes);
        },
        // show seconds
        timerSeconds() {
            let sec = this.totalSeconds % 60;

            return this.formatTime(sec);
        },

    },
    methods: {
        ...mapMutations({
            toggle: 'questions/toggle',
            nextQuestion: 'questions/nextQuestion',
            previousQuestion: 'questions/previousQuestion',
            checkAnswers: 'questions/checkAnswers',
            selectAnswer: 'questions/selectAnswer'
        }),
        // formats time function
        formatTime(time) {
            if (time < 10) {
                return "0" + time;
            }
            return time.toString();
        },
        // start the timeer count
        start() {
            this.pomodoroInstance = setInterval(() => {
                this.totalSeconds -= 1;
                if (
                    Math.floor(this.totalSeconds / 60) === 0 &&
                    this.totalSeconds % 60 === 0
                ) {
                    clearInterval(this.pomodoroInstance);
                    (this.totalSeconds = 0), (this.isActive = false);
                }
            }, 1000);
            this.isActive = true;
        },
        checkQuestionsStatus() {
            if (typeof(this.getCurrentQuestion.selectedAnswer.text) == typeof('')) {
                let questionStatus = document.getElementById(this.getCurrentQuestion.id)
                questionStatus.classList.remove('answerNotGiven')
                questionStatus.classList.add('answerGiven')
            } else {
                let questionStatus = document.getElementById(this.getCurrentQuestion.id)
                questionStatus.classList.remove('answerGiven')
                questionStatus.classList.add('answerNotGiven')
            }
        }
    },
    watch: {
    },
}
</script>

<style>
.selected {
    background-color: green;
}
.answerGiven::after {
    content: '✓';
}
.answerNotGiven::after {
    content: 'X';
}
</style>