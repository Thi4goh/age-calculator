const day = document.getElementById('day')
const mon = document.getElementById('month')
const year = document.getElementById('year')
const resDay = document.getElementById('res-day')
const resMon = document.getElementById('res-month')
const resYea = document.getElementById('res-year')

function send() {
    const now = new Date();
    
    let anos = now.getFullYear() - year.value;
    let meses = now.getMonth() - mon.value;
    let dias = now.getDate() - day.value;

    // Ajustar anos se necessário
    if (meses <= 0 || (meses === 0 && dias < 0)) {
        anos--;
        meses += 12;
    }

    // Ajustar meses se necessário
    if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
        meses--;
    }

    return { anos, meses, dias };
}

console.log(send());
