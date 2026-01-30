import { motion } from "framer-motion";
import crmImage from "@/assets/saas-agendamentos.jpg";

export function VisualProofSection() {
  return (
    <section id="crm" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FBFAF7]">
      <div className="max-w-desktop mx-auto text-center">
        
        <motion.div
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Tudo organizado em um <span className="text-brand-purple">único lugar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Chega de planilhas bagunçadas e agendas de papel. Tenha o controle total da sua clínica em um painel simples e visual.
          </p>
        </motion.div>

        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Browser Mockup Header */}
          <div className="bg-gray-100 h-10 w-full flex items-center px-4 space-x-2 border-b border-gray-200">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="ml-4 bg-white px-3 py-1 rounded-md text-xs text-gray-400 flex-1 text-left">
              crm.inovaweb.com.br
            </div>
          </div>
          
          {/* CRM Image */}
          <img 
            src={crmImage} 
            alt="Painel do CRM InovaWeb" 
            className="w-full h-auto object-cover"
          />

          {/* Floating Highlight Badge */}
          <div className="absolute bottom-10 right-10 bg-white p-4 rounded-lg shadow-xl border border-gray-100 max-w-xs text-left hidden md:block">
            <p className="font-bold text-brand-purple text-lg">Visão Clara</p>
            <p className="text-sm text-gray-500">
              Veja em segundos quem confirmou, quem precisa de retorno e os novos agendamentos.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
