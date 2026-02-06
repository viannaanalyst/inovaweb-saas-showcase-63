import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Instagram } from "lucide-react";
import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("=== SUBMETENDO PÁGINA DE CONTATO ===");
    
    if (!formData.nome || !formData.email) {
      alert("Erro: Nome e Email são obrigatórios.");
      return;
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    
    const payload = {
      clinic_id: "6b92af13-91fa-4326-bc84-fa2e8b7979cf",
      name: formData.nome,
      phone: "Não informado",
      email: formData.email,
      mensagem: formData.mensagem,
      utm_source: urlParams.get('utm_source') || 'site_direto',
      utm_campaign: urlParams.get('utm_campaign') || 'organico',
      utm_medium: urlParams.get('utm_medium') || 'web',
      utm_content: urlParams.get('utm_content') || 'formulario_contato_pagina'
    };

    console.log("Payload Contato:", payload);

    try {
      const response = await fetch("https://xqsrnxtmobxsbnvakgfs.supabase.co/functions/v1/site-lead-webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Status resposta Contato:", response.status);

      if (response.ok) {
        alert("Sucesso! Mensagem enviada para o CRM.");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        const txt = await response.text();
        console.error("Erro na resposta:", txt);
        alert("Erro no servidor: " + response.status);
      }
    } catch (error) {
      console.error("Erro de rede no Contato:", error);
      alert("Erro de conexão. Verifique o console.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7] font-inter">
      <Header />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12 fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Fale com a gente
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Tem uma ideia, um projeto ou quer saber mais sobre o nosso trabalho?
              Nossa equipe está pronta para ouvir você e encontrar as melhores soluções para o seu negócio.
              Entre em contato e vamos conversar sobre como podemos inovar juntos!
            </p>
          </div>

          <div className="max-w-2xl mx-auto fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="nome" className="text-foreground">Nome</Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="mt-2 border-2 border-[#6A11CB] focus:border-[#2575FC] transition-colors duration-300"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 border-2 border-[#6A11CB] focus:border-[#2575FC] transition-colors duration-300"
                />
              </div>

              <div>
                <Label htmlFor="mensagem" className="text-foreground">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-2 border-2 border-[#6A11CB] focus:border-[#2575FC] transition-colors duration-300"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-brand hover:bg-gradient-brand/90 text-white font-semibold py-3"
              >
                Enviar
              </Button>
            </form>
            
            {/* Ícones de contato */}
            <div className="flex justify-center items-center space-x-3 mt-8 pt-6 border-t border-border">
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-7 h-7 rounded-full bg-[#25D366] hover:scale-110 transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
              
              <a 
                href="https://instagram.com/inovaweb.tech"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:scale-110 transition-all duration-300 hover:shadow-lg"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              
              <a 
                href="mailto:contato@inovaweb.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-7 h-7 rounded-full bg-[#4285F4] hover:bg-[#3367D6] hover:scale-110 transition-all duration-300 hover:shadow-lg"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
