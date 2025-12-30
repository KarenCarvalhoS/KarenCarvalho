const translations = {
  pt: {
    about: "QUEM SOU?",
    projects: "PROJETOS",
    contact: "CONTATO",
    role: "FRONT-END | UX UI DESIGNER",

    about_label: "SOBRE MIM",
    about_title: "Olá, eu sou <span class='highlight'>Karen</span><br>Front-end Developer",
    about_text: `
      Atuando em projetos no <span class="highlight">Brasil</span> e na 
  <span class="highlight">Argentina</span> com foco na criação de sites institucionais claros, 
  performáticos e orientados a resultados, utilizando <em><b>HTML, CSS e JavaScript.</b></em> 
  Desenvolvimento recente do site de 
  <em><span class="highlight">Ricardo Zanardo (participante do programa Casamento às Cegas, Netflix)</span></em> 
  e de um projeto internacional para um tradicional <em>bodegón</em> em <b>Buenos Aires</b>, 
  a partir de análise crítica da experiência existente e proposta de simplificação. 
  Atualmente, atuo como <span class="highlight">Tech Lead</span> em um time de desenvolvimento web 
  <em>voluntário</em>, conduzindo entregas técnicas, apoiando o time e garantindo qualidade, 
  organização e alinhamento com os objetivos do projeto.
    `,
    download_cv: "Baixar CV",

    portfolio_title: "Meus Projetos",
    portfolio_sub: "Navegue pelos <span class='highlight'><em>universos digitais</em></span> que ajudei a <em>construir.</em>",
    detalhes_proj: "Ver detalhes do projeto",
    detalhes_projt: "Projeto em Andamento ...",

    contact_title: "CONTATO",
    contact_description: `
      Desenvolvo sites <b>claros, organizados e fáceis de usar</b>.
      Meu foco é criar experiências que geram <span class="highlight">confiança</span>
      e ajudam seu negócio a alcançar resultados.
    `,
    email_label: "E-MAIL",

    footer_copy: "© 2026 Karen Carvalho. Todos os direitos reservados.",
    footer_home: "Início",
    footer_about: "Quem Sou"
  },

  en: {
    about: "ABOUT ME",
    projects: "PROJECTS",
    contact: "CONTACT",
    role: "FRONT-END | UX UI DESIGNER",

    about_label: "ABOUT ME",
    about_title: "Hello, I’m <span class='highlight'>Karen</span><br>Front-end Developer",
    about_text: `
  Working on projects in <span class="highlight">Brazil</span> and
  <span class="highlight">Argentina</span>, with a strong focus on creating clear,
  high-performance, results-oriented institutional websites, using
  <em><b>HTML, CSS and JavaScript.</b></em>
  Recent development includes the website for
  <em><span class="highlight">Ricardo Zanardo (participant of the Netflix show Love Is Blind)</span></em>
  and an international project for a traditional <em>bodegón</em> in <b>Buenos Aires</b>,
  based on a critical analysis of the existing experience and a proposal for simplification.
  Currently, I work as a <span class="highlight">Tech Lead</span> in a <em>voluntary</em>
  web development team, leading technical deliveries, supporting the team and ensuring
  quality, organization and alignment with project goals.
`,
    download_cv: "Download Resume",

    portfolio_title: "My Projects",
    portfolio_sub: "Explore the <span class='highlight'><em>digital universes</em></span> I helped <em>build.</em>",
    detalhes_proj: "View project details",
    detalhes_projt: "Project in Progress ...",

    contact_title: "CONTACT",
    contact_description: `
      I develop <b>clear, organized and easy-to-use websites</b>.
      My focus is creating experiences that build <span class="highlight">trust</span>
      and help businesses achieve results.
    `,
    email_label: "E-MAIL",

    footer_copy: "© 2026 Karen Carvalho. All rights reserved.",
    footer_home: "Home",
    footer_about: "About"
  },

  es: {
    about: "QUIÉN SOY",
    projects: "PROYECTOS",
    contact: "CONTACTO",
    role: "FRONT-END | UX UI DISEÑADORA",

    about_label: "SOBRE MÍ",
    about_title: "Hola, soy <span class='highlight'>Karen</span><br>Front-end Developer",
    about_text: `
  Actuando en proyectos en <span class="highlight">Brasil</span> y
  <span class="highlight">Argentina</span>, con enfoque en la creación de sitios
  institucionales claros, de alto rendimiento y orientados a resultados, utilizando
  <em><b>HTML, CSS y JavaScript.</b></em>
  Desarrollo reciente del sitio de
  <em><span class="highlight">Ricardo Zanardo (participante del programa Casados a Ciegas, Netflix)</span></em>
  y de un proyecto internacional para un tradicional <em>bodegón</em> en <b>Buenos Aires</b>,
  a partir de un análisis crítico de la experiencia existente y una propuesta de simplificación.
  Actualmente, actúo como <span class="highlight">Tech Lead</span> en un equipo de desarrollo web
  <em>voluntario</em>, liderando entregas técnicas, apoyando al equipo y garantizando calidad,
  organización y alineación con los objetivos del proyecto.
`,

    download_cv: "Descargar CV",

    portfolio_title: "Mis Proyectos",
    portfolio_sub: "Explora los <span class='highlight'><em>universos digitales</em></span> que ayudé a <em>construir.</em>",
    detalhes_proj: "Ver detalles del proyecto",
    detalhes_projt: "Proyecto en marcha...",

    contact_title: "CONTACTO",
    contact_description: `
      Desarrollo sitios <b>claros, organizados y fáciles de usar</b>.
      Mi enfoque es crear experiencias que generen <span class="highlight">confianza</span>
      y resultados.
    `,
    email_label: "E-MAIL",

    footer_copy: "© 2026 Karen Carvalho. Todos los derechos reservados.",
    footer_home: "Inicio",
    footer_about: "Sobre mí"
  }
};

function updateText(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

updateText("pt");


// --- 2. CÉU ESTRELADO INTERATIVO (MANTIDO) ---
const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');
let width, height, stars = [];
let mouse = { x: -1000, y: -1000 };

function initCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  stars = [];
  const numStars = Math.floor((width * height) / 10000); 
  for (let i = 0; i < numStars; i++) {
      stars.push({
          x: Math.random() * width, y: Math.random() * height,
          radius: Math.random() * 1.2,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
      });
  }
}

window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
window.addEventListener('touchmove', e => { 
  mouse.x = e.touches[0].clientX; 
  mouse.y = e.touches[0].clientY; 
}, { passive: true });
window.addEventListener('mouseout', () => { mouse.x = -1000; mouse.y = -1000; });

function animateStars() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  stars.forEach(star => {
      const dx = mouse.x - star.x;
      const dy = mouse.y - star.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - dist) / 100;
          star.x -= Math.cos(angle) * force * 1.5;
          star.y -= Math.sin(angle) * force * 1.5;
      }

      star.x += star.vx;
      star.y += star.vy;
      if (star.x < 0) star.x = width;
      if (star.x > width) star.x = 0;
      if (star.y < 0) star.y = height;
      if (star.y > height) star.y = 0;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
  });
  requestAnimationFrame(animateStars);
}

window.addEventListener('resize', initCanvas);
initCanvas();
animateStars();


// --- 3. SCROLL HORIZONTAL COM SETAS (CORRIGIDO) ---
const track = document.getElementById("project-track");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

if (track) {
  const originalCards = document.querySelectorAll('.project-card');
  
  // 1. Duplica os cards: Essencial para o loop infinito
  originalCards.forEach(card => {
      track.appendChild(card.cloneNode(true));
  });

  let currentCardIndex = 0; // Posição atual baseada em cards
  
  // Calcula o deslocamento exato de um card (largura do card + gap)
  function getCardDisplacement() {
      if (!originalCards.length) return 450; 
      const cardWidth = originalCards[0].offsetWidth;
      // O gap é 3vw no CSS. Vamos convertê-lo para pixels.
      const gapPx = 0.03 * window.innerWidth;
      return cardWidth + gapPx; 
  }

  // Função para mover o track usando Transform (melhor performance)
  function scrollProjects(direction) {
      // 2. Atualiza o índice do card
      const totalCards = originalCards.length;
      if (direction === 'right') {
          currentCardIndex = (currentCardIndex + 1) % totalCards;
      } else {
          currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
      }

      // 3. Aplica o movimento
      const displacement = getCardDisplacement();
      const newTransformX = currentCardIndex * displacement;
      
      track.style.transition = 'transform 0.5s ease-out';
      track.style.transform = `translateX(-${newTransformX}px)`;

      // Lógica de LOOP (Voltar instantaneamente após o término da transição)
      // Isso é complexo com CSS Transform e setas. Para simplificar e garantir o loop:
      // Se estiver no último card e for para a direita, podemos reiniciar o índice
      if (direction === 'right' && currentCardIndex === 0) {
          setTimeout(() => {
              track.style.transition = 'none';
              track.style.transform = `translateX(0px)`;
          }, 500); // 500ms é o tempo da transição
      }
  }

  // Event Listeners das setas (apenas desktop)
  if (window.innerWidth > 900) {
      // Envolve o scroll em uma função para evitar cliques repetidos rápidos
      let isAnimating = false;
      
      function handleArrowClick(direction) {
          if (isAnimating) return;
          isAnimating = true;
          scrollProjects(direction);
          
          // Reabilita o clique após a animação
          setTimeout(() => {
              isAnimating = false;
          }, 550);
      }

      leftArrow.addEventListener('click', () => handleArrowClick('left'));
      rightArrow.addEventListener('click', () => handleArrowClick('right'));
  }

  // Lógica para loop manual em Mobile (arrastar) - MANTIDO
  if (window.innerWidth <= 900) {
      track.addEventListener('scroll', () => {
          const scrollLeft = track.scrollLeft;
          const scrollWidth = track.scrollWidth;
          const contentWidth = scrollWidth / 2;

          if (scrollLeft >= contentWidth) {
              track.scrollLeft = scrollLeft - contentWidth;
          }
      });
  }
}



const trackProjects = document.getElementById("projectsTrack");
const nextBtn = document.getElementById("nextProject");
const prevBtn = document.getElementById("prevProject");

let index = 0;

const items = document.querySelectorAll(".project-item");
const itemWidth = items[0].offsetWidth + 64;

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= items.length) {
    index = 0;
  }
  trackProjects.style.transform = `translateX(-${index * itemWidth}px)`;
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = items.length - 1;
  }
  trackProjects.style.transform = `translateX(-${index * itemWidth}px)`;
});





/* --- CORREÇÃO DO SELETOR DE IDIOMAS --- */
const langSelector = document.querySelector('.lang-selector');
const currentBtn = document.querySelector('.lang-current');
const langButtons = document.querySelectorAll('.lang-list button');

// Função para organizar a lista de bandeiras
function filterLangList(selectedLang) {
  langButtons.forEach(btn => {
    // Se o idioma do botão for igual ao selecionado, escondemos ele da lista
    if (btn.dataset.lang === selectedLang) {
      btn.style.display = 'none';
    } else {
      btn.style.display = 'block';
    }
  });
}

// Inicializa a lista (escondendo a bandeira padrão, que é PT)
filterLangList('pt');

/* abrir / fechar */
currentBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langSelector.classList.toggle('open');
});

document.addEventListener('click', () => {
  langSelector.classList.remove('open');
});

/* troca de idioma */
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const newLang = btn.dataset.lang;
    const newImgSrc = btn.querySelector('img').src;
    const newImgAlt = btn.querySelector('img').alt;

    /* 1. Atualiza o botão principal com a nova bandeira */
    currentBtn.dataset.lang = newLang;
    const currentImg = currentBtn.querySelector('img');
    currentImg.src = newImgSrc;
    currentImg.alt = newImgAlt;

    /* 2. Filtra a lista para mostrar apenas as outras duas */
    filterLangList(newLang);

    /* 3. Atualiza os textos do site */
    updateText(newLang);
    
    langSelector.classList.remove('open');
  });
});

const menuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

// Abre/Fecha ao clicar no botão (X ou Hambúrguer)
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que o clique no botão seja contado como "clique fora"
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fecha ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// FECHAR AO CLICAR FORA
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnButton = menuBtn.contains(event.target);

    // Se o menu estiver aberto e o clique NÃO for dentro dele nem no botão:
    if (navMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnButton) {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }
});