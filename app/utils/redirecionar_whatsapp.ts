import configuracoes from "~/data/configuracoes";
const redirecionarWhatsApp = () => {
    window.open(configuracoes.contato.whatsapp_link, "_blank");
}

export default redirecionarWhatsApp