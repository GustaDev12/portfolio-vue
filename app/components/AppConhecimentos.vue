<template>
    <section id="resumo">
        <div class="container">
            <header>
                <h1>TECNOLOGIAS</h1>
                <h2>MEUS CONHECIMENTOS</h2>
            </header>
            <div class="container-tecnologias">

                <!-- Linguagens -->
                <div class="item-tecnologia">
                    <label>Linguagens</label>
                    <div class="badges-container">
                        <div class="badge">
                            <NuxtImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                alt="HTML" width="24" height="24" />
                            <span class="badge-text">HTML</span>
                            <div class="badge-glow"></div>
                        </div>
                        <div class="badge">

                            <NuxtImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                alt="CSS" width="24" height="24" />
                            <span class="badge-text">CSS</span>
                            <div class="badge-glow"></div>
                        </div>
                        <div class="badge">
                            <NuxtImg
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                alt="JavaScript" width="24" height="24" />
                            <span class="badge-text">JavaScript</span>
                            <div class="badge-glow"></div>
                        </div>
                        <div class="badge">
                            <NuxtImg
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                alt="TypeScript" width="24" height="24" />
                            <span class="badge-text">TypeScript</span>
                            <div class="badge-glow"></div>
                        </div>
                        <div class="badge">
                            <NuxtImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                alt="Node JS" width="24" height="24" />
                            <span class="badge-text">Node JS</span>
                            <div class="badge-glow"></div>
                        </div>
                    </div>
                </div>

                <!-- Frameworks  -->
                <div class="item-tecnologia">
                    <label>Frameworks & Bibliotecas</label>
                    <div class="badges-container">
                        <div class="badge">
                            <NuxtImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                alt="React" width="24" height="24" />
                            <span class="badge-text">React</span>
                            <div class="badge-glow"></div>
                        </div>
                        <div class="badge">
                            <NuxtImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                                alt="Next.js" width="24" height="24" />
                            <span class="badge-text">Next JS</span>
                            <div class="badge-glow"></div>
                        </div>
                        <div class="badge">
                            <NuxtImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                                alt="Vue" width="24" height="24" />
                            <span class="badge-text">VUE</span>
                            <div class="badge-glow"></div>
                        </div>
                        <div class="badge">
                            <NuxtImg src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg" alt="NUXT"
                                width="24" height="24" />
                            <span class="badge-text">NUXT</span>
                            <div class="badge-glow"></div>
                        </div>
                        <div class="badge">
                            <NuxtImg src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                                alt="Tailwind" width="24" height="24" />
                            <span class="badge-text">Tailwind CSS</span>
                            <div class="badge-glow"></div>
                        </div>
                        <div class="badge">
                            <NuxtImg src="https://nestjs.com/img/logo-small.svg" alt="NestJS" width="24" height="24" />
                            <span class="badge-text">NestJS</span>
                            <div class="badge-glow"></div>
                        </div>
                        <div class="badge">
                            <NuxtImg
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                                alt="Express" width="24" height="24" />
                            <span class="badge-text">Express</span>
                            <div class="badge-glow"></div>
                        </div>
                        <div class="badge">
                            <NuxtImg src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg" alt="PRISMA ORM"
                                width="24" height="24" />
                            <span class="badge-text">Prisma ORM</span>
                            <div class="badge-glow"></div>
                        </div>

                    </div>
                </div>

                <!-- Banco de Dados  -->
                <div class="item-tecnologia">
                    <label>Banco de Dados</label>
                    <div class="badges-container">
                        <div class="badge">
                            <NuxtImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                                alt="MySQL" width="24" height="24" />
                            <span class="badge-text">MySQL</span>
                            <div class="badge-glow"></div>
                        </div>
                        <div class="badge">
                            <NuxtImg src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
                                alt="SQLite" width="24" height="24" />
                            <span class="badge-text">SQLite</span>
                            <div class="badge-glow"></div>
                        </div>
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
    display: flex;
    flex-direction: column;
    padding: 40px 0;
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
    top: 58%;
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

.container-tecnologias {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.container-tecnologias>*+* {
    margin-top: 10px;
}

.item-tecnologia label {
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 17px;
}

.item-tecnologia>*+* {
    margin-top: 10px;
}

.badges-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 15px;
}

.badge {
    position: relative;
    background: linear-gradient(135deg, #343A40 0%, #495057 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    box-shadow:
        0 4px 15px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    overflow: hidden;
    min-width: 120px;
    justify-content: center;
}

.badge::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
            transparent,
            rgba(var(--cor-principal-rgb), 0.2),
            transparent);
    transition: left 0.5s ease;
}

.badge:hover::before {
    left: 100%;
}

.badge:hover {
    transform: translateY(-2px) scale(1.05);
    border-color: rgba(var(--cor-principal-rgb), 0.5);
    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(var(--cor-principal-rgb), 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
}



.badge-text {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: color 0.3s ease;
    white-space: nowrap;
}

.badge:hover .badge-text {
    color: var(--cor-principal);
    text-shadow: 0 0 10px rgba(var(--cor-principal-rgb), 0.5);
}

.badge-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle,
            rgba(var(--cor-principal-rgb), 0.3) 0%,
            transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    pointer-events: none;
}

.badge:hover .badge-glow {
    width: 100px;
    height: 100px;
}

/* Responsividade */
@media screen and (max-width: 768px) {
    .badges-container {
        gap: 12px;
        justify-content: center;
    }

    .badge {
        padding: 10px 16px;
        min-width: 100px;
    }

    .badge-text {
        font-size: 12px;
    }
}

@media screen and (max-width: 480px) {
    .badges-container {
        gap: 10px;
    }

    .badge {
        padding: 8px 14px;
        min-width: 90px;
    }

    .badge-text {
        font-size: 11px;
        letter-spacing: 0.3px;
    }
}

@media screen and (max-width: 360px) {
    .badge {
        padding: 6px 12px;
        min-width: 80px;
        gap: 8px;
    }


    .badge-text {
        font-size: 10px;
    }
}
</style>