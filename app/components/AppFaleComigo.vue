<script setup lang="ts">
import configuracoes from '~/data/configuracoes';
import EmailContato from './icons/EmailContato.vue';
import TelefoneContato from './icons/TelefoneContato.vue';
import redirecionarWhatsApp from '~/utils/redirecionar_whatsapp';

const abrirLink = (url: string) => {
    window.open(url, '_blank');
};
</script>

<template>
    <section id="contato">
        <header>
            <h1>CONTATO</h1>
            <h2>Fale comigo</h2>
        </header>
        <div class="container">
            <div class="container-contato">
                <div class="grid-1">
                    <ul>
                        <li @click="abrirLink(configuracoes.contato.whatsapp_link)">
                            <TelefoneContato />
                            <span>{{ configuracoes.contato.whatsapp }} (WhatsApp)</span>
                        </li>
                        <li>
                            <EmailContato />
                            <span>{{ configuracoes.contato.email }}</span>
                        </li>
                        <li @click="abrirLink(configuracoes.contato.linkedin)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                                    fill="var(--cor-principal)" />
                            </svg>
                            <span>LinkedIn</span>
                        </li>
                        <li @click="abrirLink(configuracoes.contato.github)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                                    fill="var(--cor-principal)" />
                            </svg>
                            <span>GitHub</span>
                        </li>
                        <li @click="abrirLink(configuracoes.contato.instagram)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"
                                    fill="var(--cor-principal)" />
                            </svg>
                            <span>Instagram</span>
                        </li>
                    </ul>
                </div>
                <div class="grid-2">
                    <h1>ENTRE EM CONTATO COMIGO</h1>
                    <div @click="redirecionarWhatsApp" class="botao-whatsapp">
                        Enviar via WhatsApp
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
    padding: 40px 0;
}

header {
    margin: 50px 0;
    position: relative;
    width: 100%;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 120px;
    font-weight: 600;
    color: rgba(108, 117, 125, 0.1);
    font-family: "Poppins", sans-serif;
    line-height: 1;
}

header h2 {
    position: absolute;
    left: 50%;
    top: 58%;
    transform: translate(-50%, -50%);
    margin: 0;
    font-size: 30px;
    color: white;
    font-family: "Poppins", sans-serif;
    z-index: 10;
    font-weight: 700;
    pointer-events: none;
}

header h2::after {
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
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
}


.container-contato {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;
    width: 100%;
    margin-bottom: 40px;
}

.grid-1 {
    display: flex;
    flex-direction: column;
}

.grid-1 ul>*+* {
    margin-top: 10px;
}

.grid-1 ul li {
    display: flex;
    color: var(--cor-principal);
    gap: 7px;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    padding: 5px;
    border-radius: 5px;
}

.grid-1 ul li:hover {
    background-color: rgba(var(--cor-principal-rgb), 0.1);
    transform: translateX(5px);
}

.grid-1 ul li span {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    transition: color 0.2s ease-in-out;
}

.grid-1 ul li:hover span {
    color: var(--cor-principal);
}

.grid-2 h1 {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
}

.botao-whatsapp {
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

/* Responsividade */
@media (max-width: 1280px) {
    section {
        padding: 30px 0;
    }

    header {
        margin: 40px 0;
    }

    header h1 {
        font-size: 100px;
    }

    header h2 {
        font-size: 26px;
    }

    .container {
        padding: 0 15px;
    }

    .container-contato {
        gap: 80px;
    }

    .grid-1 ul li span {
        font-size: 14px;
    }

    .grid-2 h1 {
        font-size: 17px;
    }

    .botao-whatsapp {
        width: 220px;
        height: 48px;
        font-size: 15px;
    }
}

@media (max-width: 1024px) {
    header h1 {
        font-size: 80px;
    }

    header h2 {
        font-size: 24px;
    }

    .container-contato {
        gap: 60px;
    }

    .grid-1 ul li span {
        font-size: 14px;
    }

    .grid-2 h1 {
        font-size: 16px;
    }

    .botao-whatsapp {
        width: 200px;
        height: 46px;
        font-size: 14px;
    }
}

@media (max-width: 768px) {
    section {
        padding: 20px 0;
    }

    header {
        margin: 30px 0;
    }

    header h1 {
        font-size: 60px;
    }

    header h2 {
        font-size: 20px;
    }

    .container-contato {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }

    .grid-1 ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .grid-1 ul>*+* {
        margin-top: 15px;
    }

    .grid-1 ul li {
        justify-content: center;
    }

    .grid-1 ul li span {
        font-size: 14px;
    }

    .grid-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .grid-2 h1 {
        font-size: 16px;
        text-align: center;
        margin-bottom: 15px;
    }

    .botao-whatsapp {
        width: 200px;
        height: 45px;
        font-size: 14px;
        margin-top: 0;
    }
}

@media (max-width: 480px) {
    section {
        padding: 15px 0;
    }

    header {
        margin: 25px 0;
    }

    header h1 {
        font-size: 45px;
    }

    header h2 {
        font-size: 18px;
    }

    .container {
        padding: 0 10px;
    }

    .container-contato {
        gap: 30px;
    }

    .grid-1 ul>*+* {
        margin-top: 12px;
    }

    .grid-1 ul li {
        gap: 5px;
    }

    .grid-1 ul li span {
        font-size: 13px;
    }

    .grid-2 h1 {
        font-size: 15px;
        margin-bottom: 12px;
    }

    .botao-whatsapp {
        width: 180px;
        height: 42px;
        font-size: 13px;
    }

    /* Ajustar ícones para telas menores */
    .grid-1 ul li svg {
        width: 18px;
        height: 18px;
    }
}

@media (max-width: 360px) {
    header h1 {
        font-size: 35px;
    }

    header h2 {
        font-size: 16px;
    }

    .container-contato {
        gap: 25px;
    }

    .grid-1 ul li span {
        font-size: 12px;
    }

    .grid-2 h1 {
        font-size: 14px;
    }

    .botao-whatsapp {
        width: 160px;
        height: 40px;
        font-size: 12px;
    }

    .grid-1 ul li svg {
        width: 16px;
        height: 16px;
    }
}
</style>