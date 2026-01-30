import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !whatsapp.trim()) {
      toast.error("Preencha Nome e WhatsApp para enviar.");
      return;
    }

    const payload = {
      name,
      whatsapp,
      message,
      source: "site-contato",
      timestamp: new Date().toISOString(),
    };

    try {
      setLoading(true);
      const response = await fetch(
        "https://n8n-n8n.pqvcji.easypanel.host/webhook/form-lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Falha ao enviar para o webhook");
      }

      toast.success("Contato enviado com sucesso! Em breve entraremos em contato.");
      setName("");
      setWhatsapp("");
      setMessage("");
    } catch (error) {
      console.error("Erro ao enviar contato:", error);
      toast.error("Não foi possível enviar. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section 
      id="contato" 
      className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-foreground mb-6">
            Vamos modernizar sua clínica?
          </h2>
          <p className="text-muted-foreground font-sans text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Deixe o atendimento repetitivo com nossa IA e foque no que importa: seus pacientes. Preencha abaixo para falar com um especialista.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-[#FBFAF7] rounded-3xl p-6 sm:p-10 lg:p-12 border border-purple-100 shadow-xl shadow-purple-500/5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-sans font-medium text-base">Nome completo</Label>
                <Input 
                  id="name" 
                  placeholder="Ex: Dr. Carlos Silva" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`bg-white text-foreground placeholder:text-gray-400 h-12 rounded-xl transition-all duration-300 ${
                    name.trim() ? 'border-brand-purple ring-2 ring-brand-purple/10' : 'border-gray-200 hover:border-brand-purple/50'
                  }`} 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-foreground font-sans font-medium text-base">WhatsApp</Label>
                <Input 
                  id="whatsapp" 
                  type="tel"
                  inputMode="numeric"
                  placeholder="(00) 00000-0000" 
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value.replace(/\D/g, ""))}
                  className={`bg-white text-foreground placeholder:text-gray-400 h-12 rounded-xl transition-all duration-300 ${
                    whatsapp.trim() ? 'border-brand-purple ring-2 ring-brand-purple/10' : 'border-gray-200 hover:border-brand-purple/50'
                  }`} 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-sans font-medium text-base">Como podemos ajudar?</Label>
              <Textarea 
                id="message" 
                placeholder="Conte sobre o volume de atendimentos ou dificuldades atuais..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`bg-white text-foreground placeholder:text-gray-400 min-h-[120px] rounded-xl resize-none transition-all duration-300 ${
                  message.trim() ? 'border-brand-purple ring-2 ring-brand-purple/10' : 'border-gray-200 hover:border-brand-purple/50'
                }`} 
              />
            </div>
            
            <Button 
              type="submit"
              disabled={loading}
              className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white font-sans font-semibold text-lg py-6 h-auto rounded-xl shadow-lg shadow-brand-purple/20 transition-all duration-300 hover:-translate-y-1 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? "Enviando..." : "Falar com especialista"}
            </Button>
          </form>
          
          <div className="flex flex-col items-center mt-10 pt-8 border-t border-gray-100">
            <p className="text-muted-foreground text-sm mb-4">Ou fale diretamente em nossos canais:</p>
            <div className="flex justify-center space-x-4">
            <a 
              href="https://wa.me/5522981055534" 
              className="w-8 h-8 rounded-full bg-[#25D366] hover:scale-110 transition-all duration-300 flex items-center justify-center icon-hover-bounce" 
              aria-label="WhatsApp"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                className="h-4 w-4"
              />
            </a>
            <a 
              href="https://instagram.com/inovaweb.tech" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:scale-110 transition-all duration-300 flex items-center justify-center icon-hover-bounce" 
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4 text-white" />
            </a>
            <a 
              href="mailto:contato@inovawebtech.com.br" 
              className="w-8 h-8 rounded-full bg-[#4285F4] hover:bg-[#3367D6] hover:scale-110 transition-all duration-300 flex items-center justify-center icon-hover-bounce" 
              aria-label="E-mail"
            >
              <Mail className="h-4 w-4 text-white" />
            </a>
          </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
