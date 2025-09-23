<template>
    <section id="depoimentos">
        <div class="container">
            <header id="depoimentos-header">
                <h1>DEPOIMENTOS</h1>
                <h2>Falas de Clientes</h2>
            </header>
            <div class="container-depoimentos">
                <div v-for="(depoimento, index) in depoimentosVisiveis" :key="index" class="card-depoimento">
                    <header>
                        <NuxtImg :src="depoimento.foto" width="50" height="50" :alt="`Foto de ${depoimento.nome}`" />
                        <div class="infos-cliente">
                            <h1>{{ depoimento.nome }}</h1>
                            <h2>{{ depoimento.empresa }}</h2>
                        </div>
                    </header>
                    <p>{{ depoimento.texto }}</p>
                    <div class="estrelas">
                        <svg v-for="estrela in depoimento.avaliacao" :key="estrela" width="16" height="15"
                            viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.08203 1.24219C7.41016 0.585938 8.33984 0.613281 8.64062 1.24219L10.4453 4.87891L14.4375 5.45312C15.1484 5.5625 15.4219 6.4375 14.9023 6.95703L12.0312 9.77344L12.7148 13.7383C12.8242 14.4492 12.0586 14.9961 11.4297 14.668L7.875 12.7812L4.29297 14.668C3.66406 14.9961 2.89844 14.4492 3.00781 13.7383L3.69141 9.77344L0.820312 6.95703C0.300781 6.4375 0.574219 5.5625 1.28516 5.45312L5.30469 4.87891L7.08203 1.24219Z"
                                fill="#FFC107" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Paginação -->
            <div class="paginacao">
                <button v-for="(pagina, index) in totalPaginas" :key="index"
                    :class="['paginacao-dot', { 'ativo': index === paginaAtual }]" @click="mudarPagina(index)"
                    :aria-label="`Ir para página ${index + 1}`"></button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import depoimentos_data from '~/data/depoimentos'

const paginaAtual = ref(0)
const depoimentosPorPagina = ref(2)

const depoimentos = ref(depoimentos_data)

const totalPaginas = computed(() => {
    return Math.ceil(depoimentos.value.length / depoimentosPorPagina.value)
})

const depoimentosVisiveis = computed(() => {
    const inicio = paginaAtual.value * depoimentosPorPagina.value
    const fim = inicio + depoimentosPorPagina.value
    return depoimentos.value.slice(inicio, fim)
})

const mudarPagina = (novaPagina) => {
    paginaAtual.value = novaPagina
}

const ajustarDepoimentosPorPagina = () => {
    if (window.innerWidth <= 768) {
        depoimentosPorPagina.value = 1
    } else {
        depoimentosPorPagina.value = 2
    }
    paginaAtual.value = 0
}

onMounted(() => {
    ajustarDepoimentosPorPagina()
    window.addEventListener('resize', ajustarDepoimentosPorPagina)
})

onUnmounted(() => {
    window.removeEventListener('resize', ajustarDepoimentosPorPagina)
})
</script>

<style scoped>
section {
    background-color: #0A0A0A;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 0;
}



#depoimentos-header {
    margin: 50px 0;
    position: relative;
    width: 100%;
    text-align: center;
}

#depoimentos-header h1 {
    margin: 0;
    font-size: 120px;
    font-weight: 600;
    color: rgba(108, 117, 125, 0.1);
    font-family: "Poppins", sans-serif;
    line-height: 1;
}

#depoimentos-header h2 {
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

#depoimentos-header h2::after {
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

.container-depoimentos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    margin-bottom: 40px;
}

.card-depoimento {
    background-color: #0F1011;
    border-radius: 4px;
    padding: 48px 71px 53px 48px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-depoimento:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.card-depoimento header {
    display: flex;
    align-items: center;
}

.infos-cliente {
    margin-left: 16px;
}

.infos-cliente>*+* {
    margin-top: 4px;
}

.infos-cliente h1 {
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
}

.infos-cliente h2 {
    font-family: 'Poppins', sans-serif;
    color: rgba(255, 255, 255, 0.50);
    font-size: 15px;
    font-weight: 400;
    margin: 0;
}

.card-depoimento header img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
}

.card-depoimento p {
    color: #DEE3E4;
    font-size: 15px;
    margin-top: 20px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
}

.estrelas {
    display: flex;
    gap: 4px;
    margin-top: 33px;
}

/* Paginação */
.paginacao {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
}

.paginacao-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
}

.paginacao-dot:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
}

.paginacao-dot.ativo {
    background-color: var(--cor-principal);
    border: 1px solid var(--cor-principal);
    transform: scale(1.2);
}

/* Responsividade */
@media (min-width: 1280px) and (max-width: 1600px) {
    .container-depoimentos {
        padding: 30px;
    }

    #depoimentos-header {
        margin: 40px 0;
    }

    #depoimentos-header h1 {
        font-size: 80px;
    }

    #depoimentos-header h2 {
        font-size: 24px;
    }

    .container {
        padding: 0 15px;
    }

    .card-depoimento {
        padding: 40px 60px 45px 40px;
    }
}

@media (max-width: 1024px) {
    #depoimentos-header h1 {
        font-size: 80px;
    }

    #depoimentos-header h2 {
        font-size: 24px;
    }

    .card-depoimento {
        padding: 35px 50px 40px 35px;
    }

    .card-depoimento p {
        font-size: 14px;
    }

    .infos-cliente h1 {
        font-size: 16px;
    }

    .infos-cliente h2 {
        font-size: 14px;
    }
}

@media (max-width: 768px) {
    section {
        padding: 20px 0;
    }

    #depoimentos-header {
        margin: 30px 0;
    }

    #depoimentos-header h1 {
        font-size: 60px;
    }

    #depoimentos-header h2 {
        font-size: 20px;
    }

    .container-depoimentos {
        grid-template-columns: 1fr;
        gap: 15px;
        margin-bottom: 30px;
    }

    .card-depoimento {
        padding: 30px 25px 35px 30px;
    }

    .card-depoimento p {
        font-size: 14px;
        margin-top: 15px;
    }

    .estrelas {
        margin-top: 25px;
    }

    .paginacao-dot {
        width: 14px;
        height: 14px;
    }
}

@media (max-width: 480px) {
    section {
        padding: 15px 0;
    }

    #depoimentos-header {
        margin: 25px 0;
    }

    #depoimentos-header h1 {
        font-size: 45px;
    }

    #depoimentos-header h2 {
        font-size: 18px;
    }

    .container {
        padding: 0 10px;
    }

    .card-depoimento {
        padding: 25px 20px 30px 25px;
    }

    .card-depoimento header img {
        width: 45px;
        height: 45px;
    }

    .infos-cliente {
        margin-left: 12px;
    }

    .infos-cliente h1 {
        font-size: 15px;
    }

    .infos-cliente h2 {
        font-size: 13px;
    }

    .card-depoimento p {
        font-size: 13px;
        margin-top: 12px;
    }

    .estrelas {
        margin-top: 20px;
        gap: 3px;
    }

    .estrelas svg {
        width: 14px;
        height: 13px;
    }
}

@media (max-width: 360px) {
    #depoimentos-header h1 {
        font-size: 35px;
    }

    #depoimentos-header h2 {
        font-size: 16px;
    }

    .card-depoimento {
        padding: 20px 15px 25px 20px;
    }

    .card-depoimento header img {
        width: 40px;
        height: 40px;
    }

    .infos-cliente h1 {
        font-size: 14px;
    }

    .infos-cliente h2 {
        font-size: 12px;
    }

    .card-depoimento p {
        font-size: 12px;
    }

    .paginacao-dot {
        width: 10px;
        height: 10px;
    }

    .paginacao {
        gap: 8px;
    }
}
</style>