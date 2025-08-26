# 🚀 Guia de Deploy no EasyPanel - InovaWeb SaaS Showcase

## 📋 Pré-requisitos
- ✅ Conta no EasyPanel configurada
- ✅ Domínio configurado no EasyPanel
- ✅ Repositório no GitHub com este projeto
- ✅ Acesso ao painel do EasyPanel

## 🔧 Configuração do Projeto

### 1. Arquivos Criados para Deploy
Os seguintes arquivos foram criados para facilitar o deploy:
- `Dockerfile` - Configuração do container Docker
- `.dockerignore` - Arquivos ignorados no build
- `nginx.conf` - Configuração do servidor web
- `easypanel.yml` - Configuração do EasyPanel

### 2. Configuração do Supabase
O projeto já está configurado com Supabase:
- URL: `https://ujuaufitrfpawszjotwo.supabase.co`
- Chave pública já configurada no código

## 🚀 Passos para Deploy no EasyPanel

### Passo 1: Acessar o EasyPanel
1. Acesse seu painel do EasyPanel
2. Faça login na sua conta

### Passo 2: Criar Novo Projeto
1. Clique em "New Project" ou "Novo Projeto"
2. Escolha "From GitHub" ou "Do GitHub"
3. Selecione seu repositório: `inovaweb-saas-showcase-63`

### Passo 3: Configurar o Serviço
1. **Nome do Serviço**: `inovaweb-saas-showcase`
2. **Tipo**: Selecione "Docker" ou "Container"
3. **Build Context**: Deixe como padrão (raiz do projeto)
4. **Dockerfile**: `Dockerfile` (já está na raiz)

### Passo 4: Configurar Variáveis de Ambiente
Adicione as seguintes variáveis se necessário:
```
NODE_ENV=production
```

### Passo 5: Configurar Domínio
1. Vá para a seção "Domains" ou "Domínios"
2. Adicione seu domínio configurado
3. Configure o SSL (geralmente automático)

### Passo 6: Configurar Portas
- **Porta Interna**: `80`
- **Porta Externa**: `80` (ou deixe automático)

### Passo 7: Deploy
1. Clique em "Deploy" ou "Fazer Deploy"
2. Aguarde o build e deploy (pode levar alguns minutos)
3. Monitore os logs para verificar se tudo está funcionando

## 🔍 Verificações Pós-Deploy

### 1. Verificar se o Site Está Funcionando
- Acesse seu domínio
- Verifique se a página carrega corretamente
- Teste a navegação entre páginas

### 2. Verificar Logs
- No painel do EasyPanel, vá para "Logs"
- Verifique se não há erros
- Monitore o uso de recursos

### 3. Verificar Performance
- Teste a velocidade de carregamento
- Verifique se as imagens carregam corretamente
- Teste em diferentes dispositivos

## 🛠️ Troubleshooting

### Problema: Site não carrega
**Solução**: 
- Verifique os logs no EasyPanel
- Confirme se o domínio está configurado corretamente
- Verifique se o SSL está ativo

### Problema: Erro 502 Bad Gateway
**Solução**:
- Verifique se o container está rodando
- Confirme se a porta 80 está configurada
- Verifique os logs do container

### Problema: Assets não carregam
**Solução**:
- Verifique se o build foi feito corretamente
- Confirme se o nginx.conf está sendo usado
- Verifique as permissões dos arquivos

## 📊 Monitoramento

### Recursos Recomendados
- **CPU**: 0.5 vCPU (mínimo)
- **RAM**: 512MB (mínimo)
- **Storage**: 1GB (mínimo)

### Configurações de Auto-scaling
- Configure auto-scaling se necessário
- Monitore o uso de recursos
- Ajuste conforme a demanda

## 🔄 Atualizações Futuras

### Para atualizar o site:
1. Faça push das alterações para o GitHub
2. No EasyPanel, clique em "Redeploy" ou "Reimplantar"
3. Aguarde o novo build e deploy

### Para configurar CI/CD automático:
1. Configure webhooks no GitHub
2. Configure auto-deploy no EasyPanel
3. Teste o processo de deploy automático

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs no EasyPanel
2. Consulte a documentação do EasyPanel
3. Entre em contato com o suporte se necessário

---

**🎉 Parabéns! Seu projeto InovaWeb SaaS Showcase está pronto para o deploy no EasyPanel!**
