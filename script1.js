const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((el) => {
    el.addEventListener('click', (e) => {
        const curso = e.target
        curso.classList.toggle('destaque')
    })
})

btn.addEventListener('click', () => {
    const selecionados = [...document.querySelectorAll('.destaque')]
    selecionados.map((el) => {
        caixa2.appendChild(el)
    })
})




