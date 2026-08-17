# ☀️ BLP Solar — Landing Page

Site institucional da **BLP Solar**, empresa de energia solar sediada em Indaiatuba/SP, com atendimento em todo o Estado de São Paulo.

🌐 **No ar em:** [www.blpsolar.com.br](https://www.blpsolar.com.br)
🚀 **Hospedagem:** GitHub Pages, com domínio próprio configurado via DNS

---

## 📖 Sobre o projeto

Esse projeto começou no fim de fevereiro de 2026, quando comecei a aprender HTML e CSS do zero. Nunca tinha criado um site antes. Ele nasceu como trabalho final de semestre da faculdade, publicado de forma bem simples: uma única página estática, sem formulário, sem FAQ, sem galeria de projetos. Esse projeto inicial está preservado no repositório [`Projeto-Web---1-Semestre`](https://github.com/pdlucena/Projeto-Web---1-Semestre).

A partir daí, fui evoluindo o projeto sozinho, seção por seção, com o objetivo de transformá-lo em um site comercial de verdade, a ponto de usá-lo como proposta para a empresa em que trabalho. O resultado é este repositório: a mesma ideia original, só que reconstruída com formulário funcional, SEO, performance e rastreamento de leads.

| | Projeto original (faculdade) | Versão atual |
|---|---|---|
| Seções | Hero, benefícios, contador, rodapé | + Como funciona, galeria de projetos, depoimentos, FAQ, formulário de orçamento |
| Formulário de contato | Não tinha | Sim, com validação, honeypot anti-spam e feedback real de envio |
| Vídeos dos projetos | Não tinha | 12 vídeos, hospedados no YouTube (não listados) |
| SEO | Nenhum | Open Graph, Twitter Card, sitemap.xml, robots.txt, favicon próprio |
| Identificação de leads | Não tinha | Botões de WhatsApp com mensagem pré-preenchida |
| Histórico do repositório | 5 commits | Historico limpo e otimizado (`.git` reduzido de 735 MB para 11 MB) |

---

## ✨ Funcionalidades

- **Hero** com chamada principal e botão de contato direto
- **Seção de benefícios** da energia solar
- **Como funciona**, explicando o processo em 3 etapas (contato → projeto → instalação)
- **Contador animado** com os números da empresa (projetos realizados, anos de experiência) e destaque para a área de atendimento
- **Galeria de projetos realizados**, com vídeos em modal (hospedados no YouTube)
- **Carrossel de depoimentos** de clientes, que pausa automaticamente quando sai da tela do visitante
- **FAQ em formato acordeão**, respondendo as dúvidas mais comuns sobre energia solar
- **Formulário de orçamento**, integrado ao [FormSubmit](https://formsubmit.co/), com proteção anti-spam via honeypot e mensagens reais de sucesso/erro
- **Botões de WhatsApp com mensagem pré-preenchida**, para diferenciar clientes que chegam pelo site dos demais canais
- **Design responsivo**, adaptado para desktop, tablet e celular

---

## 🛠️ Tecnologias utilizadas

- **HTML5** e **CSS3** (mais de 1.300 linhas de estilos próprios)
- **JavaScript puro (vanilla)** para animações, carrossel, modais e validações
- **Bootstrap 3** e **jQuery**, usados pontualmente no carrossel de depoimentos
- **GitHub Pages** para hospedagem
- **FormSubmit.co** como backend do formulário de contato
- **YouTube** para hospedagem dos vídeos de projetos

---

## 🚀 Performance e SEO

- Substituição dos vídeos dos projetos, antes hospedados localmente (mais de 670 MB no repositório), por embeds do YouTube — reduzindo drasticamente o tempo de carregamento, principalmente no celular
- Limpeza do histórico do Git, removendo arquivos binários grandes esquecidos em commits antigos
- Tags **Open Graph** e **Twitter Card**, para que o link do site mostre uma prévia adequada ao ser compartilhado (WhatsApp, redes sociais)
- `sitemap.xml` e `robots.txt` para facilitar a indexação no Google
- Favicon próprio, no formato quadrado exigido pelo Google para aparecer nos resultados de busca
- Meta description otimizada para SEO local (Indaiatuba e região)

---

## 🔒 Privacidade e segurança

- Proteção contra spam por **honeypot** (campo invisível que bloqueia envios automatizados sem atrapalhar visitantes reais)

---

## 📂 Estrutura do projeto

```
├── index.html            # Página principal
├── privacidade.html      # Política de Privacidade (LGPD)
├── CSS/
│   └── style.css
├── js/
│   └── script.js
├── IMG/                  # Imagens e ícones do site
├── robots.txt
├── sitemap.xml
├── favicon.ico
└── CNAME                 # Domínio customizado (GitHub Pages)
```

---

## 🌐 Deploy

O site é publicado automaticamente pelo **GitHub Pages** a cada `push` na branch principal. O domínio `www.blpsolar.com.br` é próprio, configurado via registros DNS apontando para o GitHub Pages.

---

## 👤 Autor

**Pedro Lucena**
Projeto desenvolvido, mantido e evoluído por mim, do primeiro HTML aprendido em fevereiro de 2026 até uma landing page comercial completa.

- Repositório base (projeto de faculdade): [Projeto-Web---1-Semestre](https://github.com/pdlucena/Projeto-Web---1-Semestre)
- Site no ar: [www.blpsolar.com.br](https://www.blpsolar.com.br)