function abrirJanela(src, titulo, descricao){
    const janela = document.getElementById('janela');
    const imagem = document.getElementById('janela-imagem');
    const tituloEl = document.getElementById('janela-titulo');
    const descricaoEl = document.getElementById('janela-descricao');

    if (!janela || !imagem || !tituloEl || !descricaoEl) return;

    imagem.src = src;
    tituloEl.textContent = titulo;
    descricaoEl.textContent = descricao;
    janela.style.display = 'flex';
}

function fecharJanela(){
    const janela = document.getElementById('janela');
    if (janela) janela.style.display = 'none';
}

function mostrarMensagem(event){
    event.preventDefault();
    const feedback = document.getElementById('form-feedback');
    if (!feedback) return;

    feedback.style.display = 'block';
    feedback.textContent = 'Enviando sua mensagem...';

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData
    })
    .then(() => {
        feedback.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        form.reset();
    })
    .catch(() => {
        feedback.textContent = 'Não foi possível enviar agora. Por favor, tente novamente mais tarde.';
    });
}

function animarContador(cont){
    let alvo = cont.dataset.alvo;
    let sufixo = cont.dataset.sufixo || '';
    let atual = 0;

    let intervalo = setInterval(() =>{
        cont.textContent = atual + sufixo;
        if (atual >= alvo){
            clearInterval(intervalo);
        }
        atual++;
    }, 3);
}

const contador = document.getElementById('contador');
if (contador) {
    let observer = new IntersectionObserver((entries) => {
        if (entries.some(e => e.isIntersecting)) {
            document.querySelectorAll('.contador-numero').forEach(animarContador);
            observer.disconnect();
        }
    }, { threshold: 0.3 });

    observer.observe(contador);
}