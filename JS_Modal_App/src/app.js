import {Question} from './question'
import {createModal, isValid} from "./utils";
import {authWithEmailAndPassword, getAuthForm} from "./auth";
import './styles.css'


const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')
const modalBtn = document.getElementById('modal-btn')

window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandler)
modalBtn.addEventListener('click', openModal)

input.addEventListener('input', () => {
    submitBtn.disabled = !isValid(input.value)
})

function submitFormHandler(event) {
    event.preventDefault()

    if (isValid(input.value)) {

        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }

        submitBtn.disabled = true
        // Async request to server to save question
        Question.create(question).then(() => {
            input.value = ''
            input.className = ''
            submitBtn.disabled = false
        })
        console.log('Question', question)
    }
}


function openModal() {
    createModal('Autorisation', getAuthForm())
    document
        .getElementById('auth-form')
        .addEventListener('submit', authFormHandler, {once:true})
}

function authFormHandler(event) {
    event.preventDefault()
    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value
    authWithEmailAndPassword(email, password)
}
