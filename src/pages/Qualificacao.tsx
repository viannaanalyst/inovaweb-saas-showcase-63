import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";

const formSchema = z.object({
  // BLOCO 1
  nome: z.string().min(1, { message: "Nome é obrigatório." }).min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  empresa: z.string().min(1, { message: "Nome da clínica/empresa é obrigatório." }).min(2, { message: "Nome da clínica/empresa deve ter pelo menos 2 caracteres." }),
  cargo: z.enum(["Dono(a)", "Sócio(a)", "Gestor(a)", "Outro"], {
    required_error: "Selecione seu cargo.",
  }),
  whatsapp: z.string().min(1, { message: "WhatsApp é obrigatório." }).min(10, { message: "WhatsApp inválido." }),
  cidadeEstado: z.string().min(1, { message: "Cidade/Estado é obrigatório." }).min(2, { message: "Cidade/Estado deve ter pelo menos 2 caracteres." }),

  // BLOCO 2
  tipoClinica: z.enum(["Médica", "Odontológica", "Estética", "Multiespecialidades", "Outra"], {
    required_error: "Selecione o tipo de clínica.",
  }),
  atendimentosMensais: z.enum(["Até 300", "300 a 800", "800 a 1.500", "Acima de 1.500", "Não sei informar"], {
    required_error: "Selecione a média de atendimentos.",
  }),
  equipeAtendimento: z.enum(["1", "2", "3 ou mais"], {
    required_error: "Selecione o tamanho da equipe.",
  }),

  // BLOCO 3
  canalPrincipal: z.enum(["WhatsApp", "Instagram", "Telefone", "Todos os canais", "Outro"], {
    required_error: "Selecione o canal principal.",
  }),
  atendimentoForaHorario: z.enum(["Sim", "Não", "Apenas respostas esporádicas"], {
    required_error: "Informe sobre o atendimento fora de horário.",
  }),
  perdaPacientes: z.enum(["Sim, com certeza", "Provavelmente sim", "Não sei dizer", "Não"], {
    required_error: "Selecione uma opção.",
  }),

  // BLOCO 4
  metodoAgendamento: z.enum(["Manual pelo WhatsApp", "Sistema da clínica", "Planilha", "Mistura de tudo"], {
    required_error: "Selecione o método de agendamento.",
  }),
  faltasCancelamentos: z.enum(["Sim, bastante", "Um pouco", "Quase nunca"], {
    required_error: "Informe sobre faltas e cancelamentos.",
  }),
  confirmacaoAutomatica: z.enum(["Sim", "Não", "Parcial"], {
    required_error: "Informe sobre confirmação automática.",
  }),

  // BLOCO 5
  objetivosAutomacao: z.array(z.string()).min(1, { message: "Selecione pelo menos um objetivo." }).max(3, { message: "Selecione até 3 objetivos." }),
  usoAtualAutomacao: z.enum(["Não", "Sim, mas é muito básico", "Sim, mas não funciona bem"], {
    required_error: "Informe se já usa automação.",
  }),

  // BLOCO 6
  entendimentoInvestimento: z.enum(["Sim", "Não", "Quero entender melhor"], {
    required_error: "Selecione uma opção.",
  }),
  previsaoInicio: z.enum(["Imediatamente", "Em até 30 dias", "Em até 90 dias", "Só pesquisando por enquanto"], {
    required_error: "Selecione uma previsão.",
  }),

  // BLOCO FINAL
  problemaPrincipal: z.string().min(1, { message: "Este campo é obrigatório." }).min(5, { message: "Descreva o principal problema com mais detalhes." }),
});

const Qualificacao = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      empresa: "",
      whatsapp: "",
      cidadeEstado: "",
      objetivosAutomacao: [],
      problemaPrincipal: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("https://n8n-n8n.pqvcji.easypanel.host/webhook/form-qualificacao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast.error("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    }
  }

  const objetivosOptions = [
    "Responder mais rápido",
    "Organizar agendamentos",
    "Reduzir faltas",
    "Atender fora do horário",
    "Reduzir carga da recepção",
    "Escalar atendimento",
    "Outro"
  ];

  return (
    <div className="min-h-screen bg-background">
      
      <main className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Formulário de Qualificação
            </h1>
            <p className="text-lg text-muted-foreground">
              Responda as perguntas abaixo para entendermos melhor a realidade da sua clínica e como podemos ajudar.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-card p-6 md:p-8 rounded-xl shadow-lg border">
              
              {/* BLOCO 1 */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold border-b pb-2">Identificação</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome completo <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da clínica / empresa <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Nome da sua clínica" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="cargo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo na empresa <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["Dono(a)", "Sócio(a)", "Gestor(a)", "Outro"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp de contato <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="cidadeEstado"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cidade / Estado <span className="text-red-500">*</span></FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: São Paulo / SP" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* BLOCO 2 */}
              <div className="space-y-6 pt-6">
                <h2 className="text-xl font-semibold border-b pb-2">Contexto da Clínica</h2>
                
                <FormField
                  control={form.control}
                  name="tipoClinica"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de clínica <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["Médica", "Odontológica", "Estética", "Multiespecialidades", "Outra"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="atendimentosMensais"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantos atendimentos, em média, a clínica realiza por mês? <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["Até 300", "300 a 800", "800 a 1.500", "Acima de 1.500", "Não sei informar"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="equipeAtendimento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantas pessoas atuam hoje no atendimento / recepção? <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["1", "2", "3 ou mais"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* BLOCO 3 */}
              <div className="space-y-6 pt-6">
                <h2 className="text-xl font-semibold border-b pb-2">Atendimento Atual</h2>
                
                <FormField
                  control={form.control}
                  name="canalPrincipal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Onde a maior parte dos pacientes entra em contato hoje? <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["WhatsApp", "Instagram", "Telefone", "Todos os canais", "Outro"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="atendimentoForaHorario"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hoje, o atendimento funciona fora do horário comercial? <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["Sim", "Não", "Apenas respostas esporádicas"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="perdaPacientes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Você sente que já perdeu pacientes por demora no atendimento? <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["Sim, com certeza", "Provavelmente sim", "Não sei dizer", "Não"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* BLOCO 4 */}
              <div className="space-y-6 pt-6">
                <h2 className="text-xl font-semibold border-b pb-2">Agenda e Faltas</h2>
                
                <FormField
                  control={form.control}
                  name="metodoAgendamento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Como é feito o agendamento hoje? <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["Manual pelo WhatsApp", "Sistema da clínica", "Planilha", "Mistura de tudo"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="faltasCancelamentos"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>A clínica sofre com faltas ou cancelamentos em cima da hora? <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["Sim, bastante", "Um pouco", "Quase nunca"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmacaoAutomatica"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Hoje existe confirmação automática de consultas? <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["Sim", "Não", "Parcial"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* BLOCO 5 */}
              <div className="space-y-6 pt-6">
                <h2 className="text-xl font-semibold border-b pb-2">Automação e Expectativa</h2>
                
                <FormField
                  control={form.control}
                  name="objetivosAutomacao"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">O que você busca melhorar com automação de atendimento? (Selecione até 3) <span className="text-red-500">*</span></FormLabel>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {objetivosOptions.map((item) => (
                          <FormField
                            key={item}
                            control={form.control}
                            name="objetivosAutomacao"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, item])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {item}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="usoAtualAutomacao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Você já utiliza alguma automação ou chatbot hoje? <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["Não", "Sim, mas é muito básico", "Sim, mas não funciona bem"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* BLOCO 6 */}
              <div className="space-y-6 pt-6">
                <h2 className="text-xl font-semibold border-b pb-2">Maturidade Comercial</h2>
                
                <FormField
                  control={form.control}
                  name="entendimentoInvestimento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Você entende que automação é um investimento recorrente para melhorar operação e faturamento? <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["Sim", "Não", "Quero entender melhor"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="previsaoInicio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quando pretende iniciar uma solução de automação, se fizer sentido? <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {["Imediatamente", "Em até 30 dias", "Em até 90 dias", "Só pesquisando por enquanto"].map((option) => (
                            <FormItem key={option} className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value={option} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {option}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* BLOCO FINAL */}
              <div className="space-y-6 pt-6">
                <h2 className="text-xl font-semibold border-b pb-2">Abertura pra Call</h2>
                
                <FormField
                  control={form.control}
                  name="problemaPrincipal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Qual o principal problema que você espera resolver com essa conversa? <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva aqui..." 
                          className="resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="pt-6">
                <Button type="submit" className="w-full text-lg py-6">
                  Enviar Formulário
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Obrigado por responder. Essas informações nos ajudam a tornar a reunião objetiva, prática e focada na realidade da sua clínica.
                </p>
              </div>

            </form>
          </Form>
        </motion.div>
      </main>
    </div>
  );
};

export default Qualificacao;
