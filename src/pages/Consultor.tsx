import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Consultor = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    segmento: "",
    qtdPessoas: "",
    qtdContatos: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    return (
      formData.nome.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.whatsapp.trim() !== "" &&
      formData.segmento.trim() !== "" &&
      formData.qtdPessoas.trim() !== "" &&
      formData.qtdContatos.trim() !== ""
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true);
    console.log("=== SUBMETENDO CONSULTOR ===");

    const urlParams = new URLSearchParams(window.location.search);
    
    const payload = {
      clinic_id: "6b92af13-91fa-4326-bc84-fa2e8b7979cf",
      name: formData.nome,
      phone: formData.whatsapp,
      email: formData.email,
      segmento: formData.segmento,
      qtdPessoas: formData.qtdPessoas,
      qtdContatos: formData.qtdContatos,
      utm_source: urlParams.get('utm_source') || 'site_direto',
      utm_campaign: urlParams.get('utm_campaign') || 'organico',
      utm_medium: urlParams.get('utm_medium') || 'web',
      utm_content: urlParams.get('utm_content') || 'formulario_consultor'
    };

    try {
      const response = await fetch("https://xqsrnxtmobxsbnvakgfs.supabase.co/functions/v1/site-lead-webhook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Sucesso! Seus dados foram enviados.");
        toast.success("Em breve um consultor da Inovaweb entrará em contato com você!");
        setFormData({
          nome: "",
          email: "",
          whatsapp: "",
          segmento: "",
          qtdPessoas: "",
          qtdContatos: "",
        });
      } else {
        alert("Erro ao enviar: " + response.status);
      }
    } catch (error) {
      console.error("Erro no Consultor:", error);
      alert("Erro de conexão.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFAF7] font-inter flex flex-col">
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <Card className="w-full max-w-2xl shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">Fale com um Consultor</CardTitle>
            <CardDescription className="text-lg mt-2">
              Preencha o formulário abaixo para que possamos entender melhor a sua necessidade.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    name="nome"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="(00) 00000-0000"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="segmento">Segmento da Empresa</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("segmento", value)}
                    value={formData.segmento}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="odontologica">Odontológica</SelectItem>
                      <SelectItem value="estetica">Estética</SelectItem>
                      <SelectItem value="medica">Médica</SelectItem>
                      <SelectItem value="veterinaria">Veterinária</SelectItem>
                      <SelectItem value="psicologia">Psicologia</SelectItem>
                      <SelectItem value="fisioterapia">Fisioterapia</SelectItem>
                      <SelectItem value="nutricao">Nutrição</SelectItem>
                      <SelectItem value="podologia">Podologia</SelectItem>
                      <SelectItem value="agencia-marketing">Agência de Marketing</SelectItem>
                      <SelectItem value="estudio-tatuagem">Estúdio de Tatuagem</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="qtdPessoas">Quantas pessoas trabalham no atendimento da sua clínica?</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("qtdPessoas", value)}
                  value={formData.qtdPessoas}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">1 a 2 pessoas</SelectItem>
                    <SelectItem value="3-5">3 a 5 pessoas</SelectItem>
                    <SelectItem value="6-10">6 a 10 pessoas</SelectItem>
                    <SelectItem value="mais-10">Mais de 10 pessoas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="qtdContatos">Quantos contatos (pacientes e interessados) a sua clínica recebe por mês no WhatsApp?</Label>
                <Select
                  onValueChange={(value) => handleSelectChange("qtdContatos", value)}
                  value={formData.qtdContatos}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="menos-100">Menos de 100</SelectItem>
                    <SelectItem value="100-500">100 a 500</SelectItem>
                    <SelectItem value="500-1000">500 a 1000</SelectItem>
                    <SelectItem value="mais-1000">Mais de 1000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full text-lg py-6" 
                  disabled={!isFormValid() || isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Falar com um consultor"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Consultor;
