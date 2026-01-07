import { useEffect } from "react";

const WhatsAppRedirect = () => {
  useEffect(() => {
    window.location.replace("https://api.whatsapp.com/send/?phone=5522981055534&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20InovaWeb");
  }, []);

  return null;
};

export default WhatsAppRedirect;
