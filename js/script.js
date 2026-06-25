// Scroll Menu
const observer = new IntersectionObserver((entries) =>{
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-slide").forEach(section =>{
  observer.observe(section);
});

let ultimaPosicaoScroll = window.pageYOffset;
const menu = document.getElementById("menu");

window.addEventListener("scroll", () =>{
  let posicaoAtual = window.pageYOffset;

  if (menu){
    if (posicaoAtual > ultimaPosicaoScroll && posicaoAtual > 100){
      menu.style.transform = "translateY(-100%)";
      menu.style.transition = "transform 0.3s ease";
    } 

    else{
      menu.style.transform = "translateY(0)";
    }
  }

  ultimaPosicaoScroll = posicaoAtual;
});

// Contador
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
if (contador){
    const observer = new IntersectionObserver((entries) =>{
        if (entries.some(e => e.isIntersecting)){
            document.querySelectorAll('.contador-numero').forEach(animarContador);
            observer.disconnect();
        }
    }, {threshold: 0.3});

    observer.observe(contador);
}

// Modais
function abrirJanela(src, titulo, descricao, tipo="imagem"){
    const janela = document.getElementById('janela');
    const imagem = document.getElementById('janela-imagem');
    const video = document.getElementById('janela-video');
    const videoSrc = document.getElementById('janela-video-src');
    const tituloEl = document.getElementById('janela-titulo');
    const descricaoEl = document.getElementById('janela-descricao');

    if (!janela) return;

    imagem.style.display = "none";
    video.style.display = "none";

    if (tipo === "imagem"){
        imagem.src = src;
        imagem.style.display = "block";
    } 
    else if (tipo === "video"){
        videoSrc.src = src;
        video.load();
        video.play();
        video.style.display = "block";
    }

    tituloEl.textContent = titulo;
    descricaoEl.textContent = descricao;

    janela.classList.add('ativo');
}

function fecharJanela(){
    const janela = document.getElementById('janela');
    const video = document.getElementById('janela-video');
    if (janela){
        janela.classList.remove('ativo');
        if (video){
            video.pause();
            video.currentTime = 0;
        }
    }
}

// Ver mais fotos
(function (){
    const LIMITE_MOBILE = 4;
    const MAX_WIDTH = 600;
 
    function aplicarLimiteMobile(){
        const itens = document.querySelectorAll('.item-projeto');
        const botao = document.getElementById('btn-ver-mais');
        if (!botao) return;
 
        if (window.innerWidth <= MAX_WIDTH){
            itens.forEach((item, i) =>{
                if (i >= LIMITE_MOBILE){
                    item.classList.add('projeto-oculto');
                }
            });
            botao.style.display = 'inline-block';
        } 
        else{
            itens.forEach(item => item.classList.remove('projeto-oculto'));
            botao.style.display = 'none';
        }
    }
 
    window.verMaisProjetos = function () {
        document.querySelectorAll('.projeto-oculto').forEach(item => {
            item.classList.remove('projeto-oculto');
        });
        document.getElementById('btn-ver-mais').style.display = 'none';
    };
 
    aplicarLimiteMobile();
    window.addEventListener('resize', aplicarLimiteMobile);
})();

// Slide Carrossel
(function(){
    const carrossel = document.getElementById('mCarousel');
    if (!carrossel || typeof jQuery === 'undefined') return;

    let startX = 0;
    let startY = 0;
    let arrastando = false;
    const limiarSwipe = 40;

    carrossel.addEventListener('touchstart', (e) =>{
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        arrastando = true;
        jQuery(carrossel).carousel('pause');
    }, {passive: true});

    carrossel.addEventListener('touchend', (e) =>{
        if (!arrastando) return;
        arrastando = false;

        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const deltaX = endX - startX;
        const deltaY = endY - startY;

        if (Math.abs(deltaX) > limiarSwipe && Math.abs(deltaX) > Math.abs(deltaY)){
            if (deltaX < 0){
                jQuery(carrossel).carousel('next');
            } 
            else{
                jQuery(carrossel).carousel('prev');
            }
        }

        jQuery(carrossel).carousel('cycle');
    }, {passive: true});
})();

// Orçamento
function mostrarMensagem(event){
    event.preventDefault();
    const feedback = document.getElementById('form-feedback');
    if (!feedback) return;

    feedback.style.display = 'block';
    feedback.textContent = 'Enviando sua mensagem...';

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action,{method: form.method, body: formData}).then(() =>{
        feedback.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        form.reset();
    })
    .catch(() =>{
        feedback.textContent = 'Não foi possível enviar agora. Por favor, tente novamente mais tarde.';
    });
}

// FAQ
function toggleFaq(btn){
    const item = btn.parentElement;
    const aberto = item.classList.contains('ativo');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('ativo'));
    if (!aberto) item.classList.add('ativo');
}