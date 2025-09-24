<script setup lang="ts">
import redirecionarWhatsApp from '~/utils/redirecionar_whatsapp';

</script>

<template>
    <section id="sobre-mim">
        <div class="container">
            <header>
                <h1>SOBRE MIM</h1>
                <h2>Um pouco sobre mim</h2>
            </header>
            <div class="container-grid">
                <div class="grid-1">
                    <h1>Eu sou <span>Gustavo Vinicíus</span>, um desenvolvedor full stack</h1>
                    <p>
                        Atuo na área de desenvolvimento de sites e aplicações há 4 anos, mas programo desde os 14 anos.
                        Meu início foi criando scripts para o MTA (Multi Theft Auto) e, desde então, nunca mais parei.
                        Ao longo da minha jornada, aprofundei meus conhecimentos em diversas tecnologias e frameworks, o
                        que me tornou um profissional preparado para desenvolver soluções modernas, eficientes e de
                        qualidade no universo web e de aplicações.
                    </p>
                    <p>
                        Hoje eu sou desenvolvedor fullstack sênior na Plusoft InPaaS, uma empresa voltada
                        para consultoria de software e com o seu produto Hike, um sistema de automatização
                        de processos - BPM (Business Process Management).
                    </p>
                    <div class="informacoes-adicionais">
                        <div class="informacoes-adicionais-item">
                            <h1>5+</h1>
                            <span>Anos de experiência</span>
                        </div>
                        <div class="informacoes-adicionais-item">
                            <h1>20+</h1>
                            <span>Clientes Satisfeitos</span>
                        </div>
                        <div class="informacoes-adicionais-item">
                            <h1>10+</h1>
                            <span>Projetos realizados</span>
                        </div>
                    </div>
                </div>
                <div class="grid-2">
                    <h1>Nome: <span>Gustavo Vinicíus</span></h1>
                    <h1>Email: <span>gustavozinho7@gmail.com</span></h1>
                    <h1>Idade: <span>18 anos</span></h1>
                    <div @click="redirecionarWhatsApp" class="asidebar-botao-whatsapp">
                        Enviar via WhatsApp
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: #0A0A0A;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 40px 0;
}

section header {
    margin-top: 25px;
    position: relative;
    width: 100%;
    text-align: center;
    padding: 20px 0 40px 0;
}

section header h1 {
    margin: 0;
    font-size: 120px;
    font-weight: 600;
    color: rgba(108, 117, 125, 0.1);
    font-family: 'Poppins', sans-serif;
    line-height: 1;
}

section header h2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    font-size: 30px;
    color: white;
    font-family: 'Poppins', sans-serif;
    z-index: 10;
    font-weight: 700;
    pointer-events: none;
}

section header h2::after {
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    background: var(--cor-principal);
    margin: 10px auto 0;
    border-radius: 2px;
}

.container {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
}

.container-grid {
    display: grid;
    padding-top: 20px;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
}

.grid-1 {
    display: flex;
    width: 100%;
    max-width: 800px;
    flex-direction: column;
    gap: 20px;
}

.grid-1 h1 {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 1.4;
    margin: 0;
}

.grid-1 h1 span {
    color: var(--cor-principal);
}

.grid-1 p {
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
}

.grid-2 {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.grid-2 h1 {
    color: #DEE3E4;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(250, 250, 250, 0.12);
    margin: 0;
}

.grid-2 h1 span {
    font-weight: 500;
}

.grid-2 h1:nth-child(2) span {
    color: var(--cor-principal);
    font-weight: 500;
}

.asidebar-botao-whatsapp {
    width: 240px;
    height: 50px;
    background-color: rgba(var(--cor-principal-rgb), 0.80);
    border: 3px solid var(--cor-principal);
    border-radius: 800px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    margin-top: 10px;
    align-self: flex-start;
}

.asidebar-botao-whatsapp:hover {
    background-color: var(--cor-principal);
}

.informacoes-adicionais {
    margin-top: 45px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.informacoes-adicionais-item {
    width: 100%;
    min-height: 159px;
    text-align: center;
    justify-content: center;
    padding: 17px 10px;
    border-right: 1px solid rgba(250, 250, 250, 0.15);
    border-style: dashed;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.informacoes-adicionais-item:nth-child(3n) {
    border-right: none;
}

.informacoes-adicionais-item h1 {
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 500;
}

.informacoes-adicionais-item span {
    color: #DEE3E4;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
}


/* Responsividade */
@media (min-width: 1280px) and (max-width: 1360px) {

    section header h1 {
        font-size: 100px;
    }

    section header h2 {
        font-size: 26px;
    }

    .container-grid {
        gap: 50px;
        padding: 0 30px;
    }

    .grid-1 h1 {
        font-size: 22px;
    }
}

@media (min-width: 1024px) and (max-width: 1600px) {
    section {
        padding: 30px 0;
    }

    .container {
        padding: 0 40px;
    }

    section header {
        padding: 15px 0 30px 0;
    }

    section header h1 {
        font-size: 80px;
    }

    section header h2 {
        font-size: 24px;
    }

    .container-grid {
        gap: 40px;
    }

    .grid-1 h1 {
        font-size: 20px;
    }

    .grid-1 p {
        font-size: 15px;
    }

    .grid-2 h1 {
        font-size: 15px;
    }

    .asidebar-botao-whatsapp {
        width: 220px;
        height: 46px;
        font-size: 15px;
    }
}

@media screen and (max-width: 768px) {
    section {
        padding: 20px 0;
    }

    .container {
        padding: 0 20px;
    }

    section header {
        margin-top: 10px;
        padding: 10px 0 20px 0;
    }

    section header h1 {
        font-size: 60px;
    }

    section header h2 {
        font-size: 20px;
    }

    .container-grid {
        grid-template-columns: 1fr;
        gap: 30px;
        padding-top: 10px;
    }

    .grid-1 h1 {
        font-size: 18px;
    }

    .grid-1 p {
        font-size: 14px;
    }

    .grid-2 {
        order: -1;
    }

    .grid-2 h1 {
        font-size: 14px;
        padding-bottom: 10px;
    }

    .asidebar-botao-whatsapp {
        width: 200px;
        height: 44px;
        font-size: 14px;
        align-self: center;
    }

    .informacoes-adicionais {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin-top: 30px;
    }

    .informacoes-adicionais-item {
        min-height: 120px;
        padding: 15px 10px;
    }

    .informacoes-adicionais-item h1 {
        font-size: 36px;
    }

    .informacoes-adicionais-item span {
        font-size: 14px;
    }
}

@media screen and (max-width: 480px) {
    .container {
        padding: 0 15px;
    }

    section header h1 {
        font-size: 45px;
    }

    section header h2 {
        font-size: 18px;
    }

    section header h2::after {
        width: 60px;
        height: 2px;
    }

    .container-grid {
        gap: 25px;
    }

    .grid-1 {
        gap: 15px;
    }

    .grid-1 h1 {
        font-size: 16px;
    }

    .grid-1 p {
        font-size: 13px;
        line-height: 1.5;
    }

    .grid-2 {
        gap: 12px;
    }

    .grid-2 h1 {
        font-size: 13px;
        padding-bottom: 8px;
    }

    .asidebar-botao-whatsapp {
        width: 180px;
        height: 40px;
        font-size: 13px;
    }

    .informacoes-adicionais {
        grid-template-columns: 1fr;
        gap: 10px;
        margin-top: 25px;
    }

    .informacoes-adicionais-item {
        min-height: 100px;
        padding: 12px 10px;
        border-right: none;
        border-bottom: 1px solid rgba(250, 250, 250, 0.15);
    }

    .informacoes-adicionais-item:last-child {
        border-bottom: none;
    }

    .informacoes-adicionais-item h1 {
        font-size: 32px;
    }

    .informacoes-adicionais-item span {
        font-size: 13px;
    }
}

@media screen and (max-width: 360px) {
    section header h1 {
        font-size: 35px;
    }

    section header h2 {
        font-size: 16px;
    }

    .grid-1 h1 {
        font-size: 15px;
    }

    .grid-1 p {
        font-size: 12px;
    }

    .grid-2 h1 {
        font-size: 12px;
    }

    .asidebar-botao-whatsapp {
        width: 160px;
        height: 38px;
        font-size: 12px;
    }
}
</style>