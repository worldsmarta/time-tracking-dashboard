let daily = document.getElementById('daily')
let weekly = document.getElementById('weekly')
let monthly = document.getElementById('monthly')
let work = document.getElementById('work')
let lw_work = document.getElementById('lw_work')
let play = document.getElementById('play')
let lw_play = document.getElementById('lw_play')
let study = document.getElementById('study')
let lw_study = document.getElementById('lw_study')
let exc = document.getElementById('exc')
let lw_exc = document.getElementById('lw_exc')
let soc = document.getElementById('soc')
let lw_soc = document.getElementById('lw_soc')
let sc = document.getElementById('sc')
let lw_sc = document.getElementById('lw_sc')

daily.addEventListener('click', function (e) {
    this.style.color = 'white'
    weekly.style.color = ''
    monthly.style.color = ''
    work.innerHTML = '5hrs'
    lw_work.innerHTML = 'Last Daily-7hrs'
    play.innerHTML = '1hr'
    lw_play.innerHTML = 'Last Daily-2hrs'
    study.innerHTML = '0hr'
    lw_study.innerHTML = 'Last Daily-1hr'
    exc.innerHTML = '1hr'
    lw_exc.innerHTML = 'Last Daily-1hr'
    soc.innerHTML = '1hr'
    lw_soc.innerHTML = 'Last Daily-3hrs'
    lw_sc.innerHTML = 'Last Daily-1hr'
})

weekly.addEventListener('click', function () {
    this.style.color = 'white'
    daily.style.color = ''
    monthly.style.color = ''
    work.innerHTML = '32hrs'
    lw_work.innerHTML = 'Last Weekly-36hrs'
    play.innerHTML = '10hrs'
    lw_play.innerHTML = 'Last Weekly-8hrs'
    study.innerHTML = '4hrs'
    lw_study.innerHTML = 'Last Weekly-7hrs'
    exc.innerHTML = '4hrs'
    lw_exc.innerHTML = 'Last Weekly-5hrs'
    soc.innerHTML = '5hrs'
    lw_soc.innerHTML = 'Last Weekly-10hrs'
    sc.innerHTML = '2hrs'
    lw_sc.innerHTML = 'Last Weekly-2hrs'
})

monthly.addEventListener('click', function () {
    this.style.color = 'white'
    daily.style.color = ''
    weekly.style.color = ''
    work.innerHTML = '103hrs'
    lw_work.innerHTML = 'Last Monthly-128hrs'
    play.innerHTML = '23hrs'
    lw_play.innerHTML = 'Last Monthly-29hrs'
    study.innerHTML = '13hrs'
    lw_study.innerHTML = 'Last Monthly-19hrs'
    exc.innerHTML = '1hr'
    lw_exc.innerHTML = 'Last Monthly-1hr'
    exc.innerHTML = '11hrs'
    lw_exc.innerHTML = 'Last Monthly-18hrs'
    soc.innerHTML = '21hrs'
    lw_soc.innerHTML = 'Last Monthly-23hrs'
    sc.innerHTML = '7hrs'
    lw_sc.innerHTML = 'Last Monthly-11hrs'
})