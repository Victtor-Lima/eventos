const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_copiar')
const todosCursos = [...document.querySelectorAll('.curso')]

const selecionados = []

todosCursos.map((el) => {
    el.addEventListener('click', (e) => {
        const curso = e.target
        curso.classList.add('destaque')
        if (selecionados.length <= todosCursos.length){
            selecionados.push(curso)
        }
    })
})


btn.addEventListener('click', () => {
    const copiar = [...selecionados]
    caixa2.append(...copiar)
})




