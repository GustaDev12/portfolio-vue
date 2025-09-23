<script setup lang="ts">
import SEOIcon from './icons/SEOIcon.vue';
</script>

<template>
    <section id="oque-faco">
        <div class="container">
            <header>
                <h1>SERVIÇO</h1>
                <h2>O que eu faço?</h2>
            </header>
            <div class="grid-servicos">

                <div class="item-servicos">
                    <div class="icon-servicos">
                        <icons-front-end-icon />
                    </div>
                    <div class="item-servicos-text">
                        <h1>Front-End</h1>
                        <p> Desenvolvimento de interfaces de usuário interativas e responsivas, utilizando tecnologias
                            modernas e atuais.
                        </p>
                    </div>
                </div>


                <div class="item-servicos">
                    <div class="icon-servicos">
                        <icons-back-end-icon />
                    </div>
                    <div class="item-servicos-text">
                        <h1>Back-End</h1>
                        <p>Desenvolvimento de APIs, bancos de dados e servidores, garantindo a segurança, a
                            escalabilidade e a
                            performance do sistema.
                        </p>
                    </div>
                </div>

                <div class="item-servicos">
                    <div class="icon-servicos">
                        <icons-aplicativo-icon />
                    </div>
                    <div class="item-servicos-text">
                        <h1>Desenvolvimento de Aplicativos</h1>
                        <p>Desenvolvimento de um aplicativo leve, atraente e fluído.
                        </p>
                    </div>
                </div>

                <div class="item-servicos">
                    <div class="icon-servicos">
                        <SEOIcon />
                    </div>
                    <div class="item-servicos-text">
                        <h1>SEO Google</h1>
                        <p>Para que o sistema fique otimizado,
                            melhorando o ranking da pesquisa do seu site
                            no Google.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: #141414;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
}


section header {
    margin-top: 50px;
    margin-bottom: 50px;
    position: relative;
    width: 100%;
    text-align: center;
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
    top: 56%;
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

.grid-servicos {
    display: grid;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px
}


.item-servicos {
    gap: 20px;
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-self: center;
}

.item-servicos-text>*+* {
    margin-top: 7px;
}

.item-servicos-text h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: white;
}

.item-servicos-text p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.50);
}

.icon-servicos {
    border-radius: 4px;
    width: 70px;
    height: 70px;
    padding: 20px 15px 20px 15px;
    background-color: #0A0A0A;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(var(--cor-principal-rgb), 0.78);
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
    flex-shrink: 0;
}

/* Responsividade */
@media (min-width: 1024px) and (max-width: 1600px)  {
    .container {
        max-width: 1000px;
        padding: 0 30px;
    }

    section header h1 {
        font-size: 100px;
    }

    section header h2 {
        font-size: 26px;
    }

    .grid-servicos {
        gap: 50px;
    }
}

@media screen and (max-width: 1024px) {
    section {
        padding-bottom: 80px;
    }

    .container {
        padding: 0 40px;
    }

    section header {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    section header h1 {
        font-size: 80px;
    }

    section header h2 {
        font-size: 24px;
    }

    .grid-servicos {
        gap: 40px;
    }

    .item-servicos {
        max-width: 450px;
    }

    .item-servicos-text h1 {
        font-size: 18px;
    }

    .item-servicos-text p {
        font-size: 13px;
    }
}

@media screen and (max-width: 768px) {
    section {
        padding-bottom: 60px;
    }

    .container {
        padding: 0 20px;
    }

    section header {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    section header h1 {
        font-size: 60px;
    }

    section header h2 {
        font-size: 20px;
    }

    .grid-servicos {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .item-servicos {
        max-width: 100%;
        gap: 15px;
    }

    .item-servicos-text h1 {
        font-size: 16px;
    }

    .item-servicos-text p {
        font-size: 12px;
    }

    .icon-servicos {
        width: 60px;
        height: 60px;
        padding: 15px 12px;
    }
}

@media screen and (max-width: 480px) {
    .container {
        padding: 0 15px;
    }

    section header {
        margin-top: 20px;
        margin-bottom: 25px;
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

    .grid-servicos {
        gap: 25px;
    }

    .item-servicos {
        gap: 12px;
        flex-direction: column;
        text-align: center;
    }

    .item-servicos-text h1 {
        font-size: 15px;
    }

    .item-servicos-text p {
        font-size: 11px;
        line-height: 1.5;
    }

    .icon-servicos {
        width: 55px;
        height: 55px;
        padding: 12px 10px;
    }
}

@media screen and (max-width: 360px) {
    section header h1 {
        font-size: 35px;
    }

    section header h2 {
        font-size: 16px;
    }

    .item-servicos-text h1 {
        font-size: 14px;
    }

    .item-servicos-text p {
        font-size: 10px;
    }

    .icon-servicos {
        width: 50px;
        height: 50px;
        padding: 10px 8px;
    }
}
</style>
