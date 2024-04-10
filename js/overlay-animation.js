'use strict'

const containerMain = document.getElementById('container-main')
const moveOverlay = () => containerMain.classList.toggle('move')
// const addMoveOverlay = () => containerMain.classList.add('move')
// const removeMoveOverlay = () => containerMain.classList.remove('move')

document.getElementById('open-overlay-register').addEventListener('click', moveOverlay)
document.getElementById('open-overlay-login').addEventListener('click', moveOverlay)

// document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
// document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)