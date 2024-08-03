const day = document.getElementById('day')
const mon = document.getElementById('month')
const year = document.getElementById('year')
const resDay = document.getElementById('res-day')
const resMon = document.getElementById('res-month')
const resYea = document.getElementById('res-year')

function send(){
    calc()
}
function calc(){
    const now = new Date()
    let s = now.getFullYear() - year.value
    resYea.innerHTML =  `${s} Years`
}