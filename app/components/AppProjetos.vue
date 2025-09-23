<template>
  <section id="portfolio">
    <div class="container">
      <header>
        <h1>PROJETOS</h1>
        <h2>CONHEÇA MEUS PROJETOS</h2>
      </header>

      <div class="container-projetos">
        <div class="card-projeto" v-for="projeto in projetos" :key="projeto.id" @click="openModal(projeto)">
          <NuxtImg :src="projeto.image" width="400" height="200" />
          <div class="dados-projeto">
            <h1>{{ projeto.title }}</h1>
            <footer>
              <h2>Clique para ver mais</h2>
              <IconsClickIcon />
            </footer>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <transition name="fade">
        <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
          <div class="modal-content" role="dialog" aria-modal="true"
            :aria-label="selectedProject?.title || 'Detalhes do projeto'">
            <button class="modal-close" @click="closeModal" aria-label="Fechar modal">✕</button>

            <div class="modal-image">
              <NuxtImg :src="selectedProject?.image" width="800" height="400" />
            </div>

            <div class="modal-body">
              <h3>{{ selectedProject?.title }}</h3>
              <p>{{ selectedProject?.description }}</p>

              <ul v-if="selectedProject?.techs?.length" class="modal-techs">
                <li v-for="tech in selectedProject.techs" :key="tech">{{ tech }}</li>
              </ul>

              <div class="modal-actions" v-if="selectedProject?.link">
                <a :href="selectedProject.link" target="_blank" rel="noopener" class="btn-primary">
                  Visitar projeto
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import projetos_data from '~/data/projetos'

interface Projeto {
  id: number
  title: string
  description: string
  image: string
  techs?: string[]
  link?: string
}

const projetos = ref<Projeto[]>(projetos_data)

const isModalOpen = ref(false)
const selectedProject = ref<Projeto | null>(null)

function openModal(projeto: Projeto) {
  selectedProject.value = projeto
  isModalOpen.value = true
  document.body.style.overflow = "hidden"
}

function closeModal() {
  isModalOpen.value = false
  selectedProject.value = null
  document.body.style.overflow = ""
}
</script>

<style lang="css" scoped>
section {
  background-color: #141414;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
}

section header {
  margin: 50px 0;
  position: relative;
  width: 100%;
  text-align: center;
}

section header h1 {
  margin: 0;
  font-size: 120px;
  font-weight: 600;
  color: rgba(108, 117, 125, 0.1);
  font-family: "Poppins", sans-serif;
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
  font-family: "Poppins", sans-serif;
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
  width: 80%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
}

.container-projetos {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.card-projeto {
  cursor: pointer;
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-projeto img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  transition: all 0.4s ease;
}

.card-projeto:hover img {
  transform: scale(1.1);
  filter: brightness(0.3) blur(1px);
}

.dados-projeto {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 15px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
  color: #fff;
  border-radius: 15px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
}

.card-projeto:hover .dados-projeto {
  opacity: 1;
  visibility: visible;
}

.dados-projeto h1 {
  font-size: 17px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.dados-projeto footer {
  font-size: 14px;
  opacity: 0.9;
  transform: translateY(20px);
  font-family: 'Poppins', sans-serif;
  transition: transform 0.4s ease 0.1s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.card-projeto:hover .dados-projeto footer {
  transform: translateY(0);
}

.dados-projeto footer h2 {
  margin: 0;
  font-size: 14px;
}

:deep(.dados-projeto footer svg) {
  width: 24px;
  height: 24px;
  opacity: 0.9;
}

/* ---------------------- */
/* MODAL                  */
/* ---------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, filter 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(2px);
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  position: relative;
  background: #0C0C0C;
  color: #fff;
  border-radius: 20px;
  max-width: 1000px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.modal-image {
  width: 100%;
  max-height: 420px;
  overflow: hidden;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.modal-body h3 {
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  margin: 0;
}

.modal-body p {
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.modal-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
  padding: 0;
}

.modal-techs li {
  list-style: none;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 8px 12px;
  border-radius: 999px;
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
}

.modal-actions {
  margin-top: 8px;
}

.btn-primary {
  display: inline-block;
  background: var(--cor-principal);
  color: #ffffff;
  padding: 10px 16px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}


.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(var(--cor-principal-rgb), 0.70);
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(var(--cor-principal-rgb), 0.95);
  transform: scale(1.02);
}


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

  .container-projetos {
    gap: 18px;
  }

  .modal-content {
    max-width: 680px;
  }

}

@media screen and (max-width: 1024px) {
  section {
    padding: 30px 0;
  }

  .container {
    padding: 0 40px;
  }

  section header {
    margin: 40px 0;
  }

  section header h1 {
    font-size: 80px;
  }

  section header h2 {
    font-size: 24px;
  }

  .container-projetos {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    height: auto;
  }

  .card-projeto {
    max-width: 100%;
    max-height: 180px;
  }

  .dados-projeto h1 {
    font-size: 16px;
  }

  .dados-projeto footer h2 {
    font-size: 13px;
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
    margin: 30px 0;
  }

  section header h1 {
    font-size: 60px;
  }

  section header h2 {
    font-size: 20px;
  }

  .container-projetos {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .card-projeto {
    max-height: 160px;
  }

  .dados-projeto h1 {
    font-size: 15px;
  }

  .dados-projeto footer h2 {
    font-size: 12px;
  }

  .modal-overlay {
    padding: 15px;
  }

  .modal-content {
    border-radius: 15px;
  }

  .modal-body {
    padding: 18px;
  }

  .modal-body h3 {
    font-size: 20px;
  }

  .modal-body p {
    font-size: 13px;
  }

  .modal-image {
    max-height: 300px;
  }

  .modal-techs li {
    font-size: 12px;
    padding: 6px 10px;
  }

  .btn-primary {
    font-size: 13px;
    padding: 9px 14px;
  }
}

@media screen and (max-width: 480px) {
  .container {
    padding: 0 15px;
  }

  section header {
    margin: 20px 0;
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

  .container-projetos {
    gap: 12px;
  }

  .card-projeto {
    max-height: 140px;
  }

  .dados-projeto h1 {
    font-size: 14px;
  }

  .dados-projeto footer {
    gap: 6px;
  }

  .dados-projeto footer h2 {
    font-size: 11px;
  }

  :deep(.dados-projeto footer svg) {
    width: 20px;
    height: 20px;
  }

  .modal-overlay {
    padding: 10px;
  }

  .modal-content {
    border-radius: 12px;
  }

  .modal-body {
    padding: 15px;
    gap: 12px;
  }

  .modal-body h3 {
    font-size: 18px;
  }

  .modal-body p {
    font-size: 12px;
    line-height: 1.5;
  }

  .modal-image {
    max-height: 250px;
  }

  .modal-techs {
    gap: 8px;
  }

  .modal-techs li {
    font-size: 11px;
    padding: 5px 8px;
  }

  .btn-primary {
    font-size: 12px;
    padding: 8px 12px;
  }

  .modal-close {
    width: 32px;
    height: 32px;
    top: 10px;
    right: 10px;
    font-size: 14px;
  }
}

@media screen and (max-width: 360px) {
  section header h1 {
    font-size: 35px;
  }

  section header h2 {
    font-size: 16px;
  }

  .card-projeto {
    max-height: 120px;
  }

  .dados-projeto h1 {
    font-size: 13px;
  }

  .dados-projeto footer h2 {
    font-size: 10px;
  }

  .modal-body h3 {
    font-size: 16px;
  }

  .modal-body p {
    font-size: 11px;
  }

  .modal-image {
    max-height: 200px;
  }

  .modal-techs li {
    font-size: 10px;
    padding: 4px 6px;
  }

  .btn-primary {
    font-size: 11px;
    padding: 7px 10px;
  }

  .modal-close {
    width: 28px;
    height: 28px;
    font-size: 12px;
  }
}
</style>
