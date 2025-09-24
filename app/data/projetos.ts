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
        title: "Lura Bet",
        description: "Lura Bet é uma plataforma de apostas completa, desenvolvida como projeto freelancer, que combina tecnologia robusta com recursos de gamificação para proporcionar uma experiência interativa, dinâmica e envolvente aos usuários.",
        image: "/projetos/lura-bet.png",
        techs: ["HTML", "CSS", "Tailwind CSS", "Next JS", "React", "TypeScript", "Nest JS", "Prisma ORM", "BullMQ", "Redis"],
        link: "https://lurabet.com/",
    },

    {
        id: 2,
        title: "Barber Shop",
        description: "Barber Shop é uma plataforma de agendamento de cortes de cabelo, desenvolvida como projeto freelancer. A plataforma permite que os usuários marquem horários, visualizem os horários disponíveis e sejam notificados quando um horário é confirmado.",
        image: "/projetos/agendamento-barbearia.png",
        techs: ["HTML", "CSS", "Tailwind CSS", "Next JS", "React", "TypeScript", "Supabase"],
        link: "https://barber-repo-roan.vercel.app/",
    },

    {
        id: 3,
        title: "Blog",
        description: "Blog desenvolvido inicialmente para estudos e portfólio. Trata-se de um site simples e funcional, onde é possível visualizar postagens com textos, imagens e outros conteúdos.",
        image: "/projetos/blog.png",
        techs: ["HTML", "CSS", "Tailwind CSS", "Next JS", "React"],
        link: "https://blog-chi-self-60.vercel.app/",
    },

    {
        id: 4,
        title: "Checkout de Pagamentos",
        description: "Checkout de pagamentos desenvolvido para uma criadora de conteúdo +18. O projeto surgiu da necessidade de suprir a ausência de um checkout próprio na plataforma utilizada. A solução conta com recursos como upsells integrados e entrega automatizada do conteúdo por e-mail, garantindo praticidade e aumento no potencial de conversão.",
        image: "/projetos/checkout.png",
        techs: ["HTML", "CSS", "Tailwind CSS", "Next JS", "React", "SQLite"],
        link: "https://www.clubintimo.shop/",
    },
    {
        id: 5,
        title: "Portfólio Pessoal",
        description: "Portfólio pessoal desenvolvido como projeto freelancer. O portfólio é uma representação visual do trabalho e habilidades do desenvolvedor, apresentando projetos anteriores, experiências profissionais e informações de contato.",
        image: "/projetos/portfolio.png",
        techs: ["HTML", "CSS", "Vue", "Nuxt"],
        link: "/",
    },

]

export default projetos