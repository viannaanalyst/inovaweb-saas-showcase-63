import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return <motion.section 
    id="contato" 
    className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold font-inter text-center mb-6 sm:mb-8 text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contato
        </motion.h2>
        
        <motion.p 
          className="text-center text-card-foreground font-inter text-base sm:text-lg mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          Tem uma ideia, um projeto ou quer saber mais sobre o nosso trabalho? Nossa equipe está pronta para ouvir você e encontrar as melhores soluções para o seu negócio. Entre em contato e vamos conversar sobre como podemos inovar juntos!
        </motion.p>
        
        <motion.div 
          className="bg-card rounded-2xl p-4 sm:p-6 lg:p-8 border border-border"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <form className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-inter text-sm sm:text-base">Nome</Label>
              <Input 
                id="name" 
                placeholder="Seu nome completo" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring h-10 sm:h-11 transition-colors ${
                  name.trim() ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-border'
                }`} 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-inter text-sm sm:text-base">E-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="seu@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring h-10 sm:h-11 transition-colors ${
                  email.trim() ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-border'
                }`} 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-inter text-sm sm:text-base">Mensagem</Label>
              <Textarea 
                id="message" 
                placeholder="Conte-nos sobre seu projeto..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`bg-input text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring min-h-[100px] sm:min-h-[120px] resize-none transition-colors ${
                  message.trim() ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-border'
                }`} 
              />
            </div>
            
            <Button className="w-full bg-gradient-brand hover:opacity-90 hover:scale-[1.02] font-inter font-medium text-base sm:text-lg py-2.5 sm:py-3 h-auto">
              Enviar
            </Button>
          </form>
          
          <div className="flex justify-center space-x-3 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
            <a 
              href="#" 
              className="w-8 h-8 rounded-full bg-[#25D366] hover:scale-110 transition-all duration-300 flex items-center justify-center icon-hover-bounce" 
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4 text-white" />
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
              href="#" 
              className="w-8 h-8 rounded-full bg-[#4285F4] hover:bg-[#3367D6] hover:scale-110 transition-all duration-300 flex items-center justify-center icon-hover-bounce" 
              aria-label="E-mail"
            >
              <Mail className="h-4 w-4 text-white" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>;
}