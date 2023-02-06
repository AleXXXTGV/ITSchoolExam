<template>
  <div class="flex justify-between items-center container pt-[34px] flex-col gap-0">
    <div class="logo w-[252px] h-[88px]">
      <img src="@/static/img/Logo.png" alt="logo">
    </div>
    <div class="logIn self-center">
      <div class="flex flex-col justify-between items-center gap-[30px]">
        <h1 class="text-[36px]">Войдите в систему</h1>
        <input type="text" placeholder="Ф.И.О" class="text-center border-solid border-black border-[1px] w-full text-[36px]" v-model="userName" id="userName">
        <select name="courses" id="courses"  class="text-center text-[36px] border-solid border-black border-[1px] w-full">
          <option value="" selected hidden>Курс</option>
          <option value="1">FrontEnd</option>
          <option value="2">BackEnd</option>
          <option value="3">Компьютерная Грамотность</option>
        </select> 
        <select name="modules" id="modules"  class="text-center text-[36px] border-solid border-black border-[1px] w-full">
          <option value="1">Модуль №1</option>
          <option value="2">Модуль №2</option>
          <option value="3">Модуль №3</option>
        </select>
        <nuxt-link  to="/question"   class="startButton text-center text-[36px] border-solid border-black border-[1px] bg-[#62FF01] w-full" >
          <button class="block w-full" @click="addName() | addCourse() | addModule()" >СТАРТ</button>
        </nuxt-link>
      </div>
    </div> 
  </div>
</template>

<script>
localStorage.clear()
export default {
  name: 'IndexPage',
  data() {
    return {
      userName: ''
    };
  },
  computed: {
    user () {
      return this.$store.state.user.user
    }
  },
  methods: {
    addName () {
      let userInput = document.querySelector("#userName")
      this.$store.commit('user/addName', userInput.value)
      userInput.value = ''
    },
    addCourse () {
      let userCourse = document.querySelector("#courses");
      let value = userCourse.value;
      this.$store.commit('user/addCourse', value)
    },
    addModule () {
      let userModule = document.querySelector("#modules");
      let value = userModule.value;
      this.$store.commit('user/addModule', value)
    },
  }
}
</script>