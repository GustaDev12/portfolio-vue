interface Projeto {
    id: number
    title: string
    description: string
    image: string
    techs?: string[]
    link?: string
}

const projetos: Projeto[] = [
    {
        id: 1,
        title: "Projeto 1",
        description: "Descrição breve do projeto 1. Um resumo claro e objetivo do que foi feito.",
        image: "https://cdn.buttercms.com/AL2C08keRJe3lKoqnwNm",
        techs: ["Vue", "Nuxt", "TypeScript"],
        link: "https://example.com/projeto-1",
    },
    {
        id: 2,
        title: "Projeto 2",
        description: "Descrição breve do projeto 2. Principais funcionalidades e objetivos.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqLYq2aAXtMC0ve2gvsQaIoyyx-ZZxfQxIg&s",
        techs: ["Tailwind", "Pinia"],
        link: "https://example.com/projeto-2",
    },
   
]

export default projetos