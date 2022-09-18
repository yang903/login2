import './style.scss'

const password = document.getElementById("password")
// const passwordToggle = document.getElementsByClassName("password_icon")
const passwordToggle = document.querySelector(".password_icon")

console.log(password);
console.log(passwordToggle);

passwordToggle.addEventListener('click', () => {
    if(password.type==='password'){
      password.setAttribute('type','text')
      passwordToggle.classList.remove('show')
      passwordToggle.classList.add('show')
    }else{
        password.setAttribute('type','password')
        passwordToggle.classList.remove('show')
    }
})

password.addEventListener('keyup', ()=> {
    console.log(password.value);
    checkPassword(password.value)
})

function checkPassword(info){
    const passwordMsg = document.getElementById("password_msg")
    passwordMsg.textContent = '需要'
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    const special = new RegExp('(?=.*[!@#\$%\^&\*])')
    const length = new RegExp('(?=.{8,})')

    let flag = false

    if(!lower.test(info)){
        passwordMsg.textContent += " 小写"
        flag = true 
    }
    if(!upper.test(info)){
        passwordMsg.textContent += " 大写"
        flag = true 
    }
    if(!number.test(info)){
        passwordMsg.textContent += " 数字"
        flag = true 
    }
    if(!special.test(info)){
        passwordMsg.textContent += " 特殊符号"
        flag = true 
    }
    if(!length.test(info)){
        passwordMsg.textContent += " 长度大于等于八位"
        flag = true 
    }

    const passwordGroup = document.getElementById("password_group")
    if(flag) {
        passwordGroup.classList.remove('success')
        passwordGroup.classList.add('error')
    } else {
        passwordMsg.textContent = '满足所有需求'
        passwordGroup.classList.add('success')
        passwordGroup.classList.remove('error')
    }
    
    
    



    
}



