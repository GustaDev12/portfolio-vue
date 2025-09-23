<template>
    <section id="inicio" class="hero-section">
        <div class="container">
            <h1>Bem-vindo</h1>
            <h2>Desenvolvimento de Sites Profissionais e Aplicações Web</h2>
            <button>Contate-me</button>
            <IconsSetaIcon class="icone-seta" />
        </div>
    </section>
</template>

<style scoped>
section {
    position: relative;
    background:
        linear-gradient(rgba(17, 20, 24, 0.80), rgba(17, 20, 24, 0.80)),
        url('imagens/background-hero.png') no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    min-height: 600px;
}

.container {
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    font-family: 'Poppins', sans-serif;
    padding: 0 20px;
    text-align: center;
}

.container h1 {
    font-size: 32px;
    font-weight: 400;
    margin: 0;
    opacity: 0.9;
}

.container h2 {
    max-width: 800px;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    line-height: 1.2;
    margin: 0;
}

.container button {
    background-color: transparent;
    border: 2px solid var(--cor-principal);
    width: 200px;
    height: 56px;
    color: var(--cor-principal);
    border-radius: 800px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
}

.container button:hover {
    background-color: rgba(var(--cor-principal-rgb), 0.5);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(var(--cor-principal-rgb), 0.3);
}

.icone-seta {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    animation: subirDescer 1.5s infinite ease-in-out;
    opacity: 0.8;
}

@keyframes subirDescer {

    0%,
    100% {
        transform: translateX(-50%) translateY(0);
    }

    50% {
        transform: translateX(-50%) translateY(-15px);
    }
}

/* Responsividade */
@media screen and (max-width: 1280px) {
    .container h1 {
        font-size: 28px;
    }

    .container h2 {
        font-size: 42px;
        max-width: 700px;
    }

    .container button {
        width: 180px;
        height: 52px;
        font-size: 15px;
    }
}

@media screen and (max-width: 1024px) {
    section {
        background-attachment: scroll;
    }

    .container {
        gap: 25px;
        padding: 0 30px;
    }

    .container h1 {
        font-size: 26px;
    }

    .container h2 {
        font-size: 36px;
        max-width: 600px;
    }

    .container button {
        width: 170px;
        height: 50px;
        font-size: 14px;
    }
}

@media screen and (max-width: 768px) {
    section {
        height: 100vh;
        min-height: 500px;
    }

    .container {
        gap: 20px;
        padding: 0 20px;
    }

    .container h1 {
        font-size: 22px;
    }

    .container h2 {
        font-size: 28px;
        max-width: 100%;
        line-height: 1.3;
    }

    .container button {
        width: 160px;
        height: 48px;
        font-size: 14px;
    }

    .icone-seta {
        bottom: 20px;
    }
}

@media screen and (max-width: 480px) {
    .container {
        gap: 15px;
        padding: 0 15px;
    }

    .container h1 {
        font-size: 18px;
    }

    .container h2 {
        font-size: 24px;
        line-height: 1.4;
    }

    .container button {
        width: 150px;
        height: 44px;
        font-size: 13px;
    }
}

@media screen and (max-width: 360px) {
    .container h1 {
        font-size: 16px;
    }

    .container h2 {
        font-size: 20px;
    }

    .container button {
        width: 140px;
        height: 42px;
        font-size: 12px;
    }
}
</style>