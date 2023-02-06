export const state = () => ({
    user: {
        answers: []
    }
})

export const mutations = {
    addName(state, text) {
        state.user.userName = text
        localStorage.setItem('userName', text);
    },
    addCourse(state, value) {
        state.user.course = value
        localStorage.setItem('course', value);
    },
    addModule(state, value) {
        state.user.module = value
        localStorage.setItem('module', value);
    },
}