<script setup lang="ts">
import EmailContato from './icons/EmailContato.vue';
import TelefoneContato from './icons/TelefoneContato.vue';

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
                        <li>
                            <TelefoneContato />
                            <span>(83) 9108-1860 (WhatsApp)</span>
                        </li>
                        <li>
                            <EmailContato />
                            <span>gustavozinho7@gmail.com</span>
                        </li>
                    </ul>
                </div>
                <div class="grid-2">
                    <h1>ENTRE EM CONTATO COMIGO</h1>
                    <div class="botao-whatsapp">
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
    margin-top: 20px;
}

.grid-1 ul li {
    display: flex;
    color: var(--cor-principal);
    gap: 7px;
    align-items: center;
}

.grid-1 ul li span {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
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

    .grid-1 ul > * + * {
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

    .grid-1 ul > * + * {
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