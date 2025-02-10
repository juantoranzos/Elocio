import { FaWhatsapp } from "react-icons/fa";


export const WhatsappLink = () => {
    const numero = "543888554350"
    const mensaje = "Hola, estoy interesado en sus productos y queria saber mas informacion"
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}`
  return (
    <>
    <a href={url} target="_blank" className='whatsapp-btn' >
    <FaWhatsapp />

    </a>
    </>
  )
}
