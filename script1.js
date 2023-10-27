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
    todosCursos.map((el) => {
        el.classList.contains('destaque') == false? caixa1.appendChild(el) : caixa2.appendChild(el)
    })
})



