import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    area: "",
    role: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log("=== INICIANDO SUBMISSÃO DO FORMULÁRIO ===");
    
    if (!formData.firstName || !formData.email || !formData.phone) {
      toast.error("Por favor, preencha os campos obrigatórios: Nome, Email e Telefone.");
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    
    const payload = {
      clinic_id: "96eaae2c-89a2-4071-9833-c7fb4138484d",
      name: (formData.firstName + ' ' + (formData.lastName || '')).trim(),
      phone: formData.phone,
      email: formData.email,
      utm_source: urlParams.get('utm_source') || 'site_direto',
      utm_campaign: urlParams.get('utm_campaign') || 'organico',
      utm_medium: urlParams.get('utm_medium') || 'web',
      utm_content: urlParams.get('utm_content') || 'formulario_contato'
    };

    console.log("Payload preparado:", payload);

    try {
      setLoading(true);
      const response = await fetch(
        "https://xqsrnxtmobxsbnvakgfs.supabase.co/functions/v1/site-lead-webhook",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erro do servidor:", errorText);
        throw new Error("Falha no envio");
      }

      console.log("Lead enviado com SUCESSO!");
      toast.success("Solicitação enviada! Entraremos em contato em breve.");
      
      setFormData({
        firstName: "",
        lastName: "",
        area: "",
        role: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Erro no envio:", error);
      toast.error("Erro ao enviar. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8] relative overflow-hidden">
      {/* Background Decor - Subtle Premium feel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-desktop mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          
          {/* Coluna Esquerda: Título Impactante */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[32px] font-bold text-gray-900 leading-[1.1] tracking-tight">
              Solicite uma <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">
                demonstração
              </span>
            </h2>
          </motion.div>

          {/* Coluna Direita: Descrição e Formulário Premium */}
          <motion.div 
            className="w-full lg:w-2/3 space-y-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[14px] text-gray-600 leading-relaxed max-w-2xl">
              Preencha o formulário e nosso time entrará em contato para agendar uma demonstração.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Nome e Sobrenome */}
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Nome</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Digite seu nome" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="h-14 bg-white border-gray-300 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/20 transition-all rounded-xl shadow-sm placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Sobrenome</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Digite seu sobrenome" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="h-14 bg-white border-gray-300 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/20 transition-all rounded-xl shadow-sm placeholder:text-gray-400"
                    required
                  />
                </div>

                {/* Área e Cargo */}
                <div className="space-y-2">
                  <Label htmlFor="area" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Sua área</Label>
                  <Select 
                    onValueChange={(value) => setFormData({...formData, area: value})}
                    value={formData.area}
                  >
                    <SelectTrigger className="h-14 bg-white border-gray-300 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/20 transition-all rounded-xl shadow-sm text-gray-600">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Tech", "Inovação", "Negócios", "Médico", "Produto", "Vendas / Novos negócios", "Finanças", "Assistência", "RH", "DPO", "Compras", "Jurídico", "Marketing", "Outros"].map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Seu cargo</Label>
                  <Select 
                    onValueChange={(value) => setFormData({...formData, role: value})}
                    value={formData.role}
                  >
                    <SelectTrigger className="h-14 bg-white border-gray-300 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/20 transition-all rounded-xl shadow-sm text-gray-600">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Analista", "Coordenador(a)", "Supervisor(a)", "Gerente", "Diretor(a)", "Superintendente", "C-Level", "Outros"].map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Email e Telefone */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Email Profissional</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="Digite seu email profissional" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-14 bg-white border-gray-300 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/20 transition-all rounded-xl shadow-sm placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Telefone</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="Digite seu telefone" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-14 bg-white border-gray-300 focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/20 transition-all rounded-xl shadow-sm placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full md:w-[145px] h-[48px] bg-brand-purple hover:bg-brand-purple/90 text-white font-bold rounded-xl text-[14px] transition-all shadow-lg shadow-brand-purple/20 active:scale-95 p-0"
                >
                  {loading ? "Enviando..." : "Solicitar demo"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
