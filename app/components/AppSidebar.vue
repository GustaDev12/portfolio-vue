<script setup lang="ts">
import { ref } from 'vue';
import IconFacebook from './icons/FacebookIcon.vue';
import IconGithub from './icons/GithubIcon.vue';
import IconLinkedin from './icons/LinkedinIcon.vue';
import IconTwitter from './icons/TwitterIcon.vue';

const secoes = [
    'inicio',
    'portfolio',
    'conhecimentos'
]

const activeSection = ref(secoes[0]);

onMounted(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;
            }
        })
    }, { threshold: 0.6 })
    sections.forEach((section) => observer.observe(section))
})

const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>

<template>

    <button class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <!-- Overlay para fechar menu em mobile -->
    <div class="menu-overlay" :class="{ 'active': isMenuOpen }" @click="closeMenu"></div>

    <aside :class="{ 'menu-open': isMenuOpen }">
        <header>
            <NuxtImg class="avatar" src="imagens/avatar.png" width="150" height="150" alt="Imagem Avatar" />
            <h1 class="aside-nome">Gustavo Vinicíus</h1>
        </header>
        <nav>
            <ul>
                <li><a href="#inicio" @click="closeMenu"
                        :class="['asidebar-lista-item', { active: activeSection === 'inicio' }]">Início</a></li>
                <li><a href="#sobre-mim" @click="closeMenu"
                        :class="['asidebar-lista-item', { active: activeSection === 'sobre-mim' }]">Sobre mim</a></li>
                <li><a href="#oque-faco" @click="closeMenu"
                        :class="['asidebar-lista-item', { active: activeSection === 'oque-faco' }]">O que eu faço</a>
                </li>
                <li><a href="#conhecimentos" @click="closeMenu"
                        :class="['asidebar-lista-item', { active: activeSection === 'conhecimentos' }]">Conhecimentos</a>
                </li>
                <li><a href="#portfolio" @click="closeMenu"
                        :class="['asidebar-lista-item', { active: activeSection === 'portfolio' }]">Portfolio</a></li>
                <li><a href="#depoimentos" @click="closeMenu"
                        :class="['asidebar-lista-item', { active: activeSection === 'depoimentos' }]">Depoimentos</a>
                </li>

                <li><a href="#contato" @click="closeMenu" :class="{ active: activeSection === 'contato' }"
                        class="asidebar-lista-item">Contato</a></li>
                <li class="asidebar-botao-whatsapp" @click="closeMenu">
                    Enviar via WhatsApp
                </li>
            </ul>
        </nav>
        <footer>
            <NuxtLink class="asidebar-footer-icone" to="/facebook">
                <IconFacebook />
            </NuxtLink>
            <NuxtLink class="asidebar-footer-icone" to="/facebook">
                <IconTwitter />
            </NuxtLink>
            <NuxtLink class="asidebar-footer-icone" to="/facebook">
                <IconLinkedin />
            </NuxtLink>
            <NuxtLink class="asidebar-footer-icone" to="/facebook">
                <IconGithub />
            </NuxtLink>
        </footer>
    </aside>
</template>

<style scoped>
/* Menu hambúrguer */
.menu-toggle {
    display: none;
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1001;
    background: #111418;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    transition: all 0.3s ease;
}

.menu-toggle span {
    width: 25px;
    height: 3px;
    background: white;
    transition: all 0.3s ease;
    border-radius: 2px;
}

.menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* Overlay para mobile */
.menu-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.menu-overlay.active {
    opacity: 1;
    visibility: visible;
}

/* Sidebar principal */
aside {
    background-color: #0F1011;
    overflow-y: auto;
    width: 260px;
    position: fixed;
    z-index: 1000;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-between;
    transition: transform 0.3s ease;
}

aside header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
}

aside nav {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
}

aside footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

aside ul {
    width: 100%;
}

aside ul>*+* {
    margin-top: 2px;
}

.avatar {
    border-radius: 100%;
    border: 5px solid #141414;
    width: 120px;
    height: 120px;
}

.aside-nome {
    width: 100%;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
}

.asidebar-lista-item {
    color: #FAFAFA;
    opacity: 0.9;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 44px;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    transition: all 0.2s ease;
}

.asidebar-lista-item:hover {
    color: rgba(var(--cor-principal-rgb), 0.78)
}

.asidebar-lista-item.active {
    color: rgba(var(--cor-principal-rgb), 1)
}

.asidebar-botao-whatsapp {
    width: 215px;
    height: 40px;
    background-color: rgba(var(--cor-principal-rgb), 0.90);
    border: 3px solid var(--cor-principal);
    border-radius: 800px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    transition: all 0.2s ease-in-out;
    margin: 20px auto;
}

.asidebar-botao-whatsapp:hover {
    transform: scale(1.05);
}

.asidebar-footer-icone {
    color: #AAB1B8;
    width: 24px;
    height: 24px;
    transition: all 0.2s ease-in-out;
}

.asidebar-footer-icone:hover {
    color: var(--cor-principal);
}

/* Responsividade */
@media screen and (max-width: 1280px) {
    aside {
        width: 220px;
    }

    .avatar {
        width: 100px;
        height: 100px;
    }

    .aside-nome {
        font-size: 16px;
    }

    .asidebar-botao-whatsapp {
        width: 180px;
        height: 36px;
        font-size: 12px;
    }
}

@media screen and (max-width: 1024px) {
    aside {
        width: 200px;
    }

    .asidebar-lista-item {
        font-size: 14px;
        height: 40px;
    }
}

@media screen and (max-width: 768px) {
    .menu-toggle {
        display: flex;
    }

    .menu-overlay {
        display: block;
    }

    aside {
        transform: translateX(-100%);
        width: 280px;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
    }

    aside.menu-open {
        transform: translateX(0);
    }

    .avatar {
        width: 80px;
        height: 80px;
    }

    .aside-nome {
        font-size: 16px;
    }

    .asidebar-lista-item {
        height: 48px;
        font-size: 16px;
    }

    .asidebar-botao-whatsapp {
        width: 200px;
        height: 44px;
        font-size: 14px;
    }
}

@media screen and (max-width: 480px) {
    aside {
        width: 260px;
    }

    .menu-toggle {
        width: 45px;
        height: 45px;
    }

    .menu-toggle span {
        width: 20px;
        height: 2px;
    }
}
</style>
