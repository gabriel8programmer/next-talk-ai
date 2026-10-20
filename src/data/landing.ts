export interface NavItem {
  label: string;
  href: string;
}

export interface FictionalCompany {
  name: string;
  tagline: string;
}

export interface ProblemSolutionItem {
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  metric: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  featured?: boolean;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
  trend: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  scenario: {
    customerMessage: string;
    aiAction: string;
    humanOutcome: string;
  };
  benefits: string[];
}

export interface PricingPlan {
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Produto", href: "#produto" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Integrações", href: "#integracoes" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

export const TRUST_COMPANIES: FictionalCompany[] = [
  { name: "Atlas", tagline: "Logística Integrada" },
  { name: "Lumina", tagline: "Empreendimentos" },
  { name: "NovaHaus", tagline: "Arquitetura & Design" },
  { name: "Vita", tagline: "Saúde & Diagnósticos" },
  { name: "Orbit", tagline: "Serviços Digitais" },
];

export const PROBLEMS_SOLUTIONS: ProblemSolutionItem[] = [
  {
    problemTitle: "Conversas demais",
    problemDescription:
      "Mensagens chegando simultaneamente em diferentes horários dificultam a organização, geram filas de espera e deixam clientes sem resposta no momento de decisão.",
    solutionTitle: "Triagem instantânea 24/7",
    solutionDescription:
      "A NexTalk AI recebe, classifica e inicia o atendimento imediatamente, respondendo dúvidas frequentes ou direcionando para a fila de atendimento correta.",
    metric: "Zero clientes sem resposta inicial",
  },
  {
    problemTitle: "Trabalho repetitivo",
    problemDescription:
      "A equipe gasta horas preciosas do dia digitando repetidamente as mesmas explicações sobre preços, horários, localização e instruções básicas.",
    solutionTitle: "Agentes treinados no seu negócio",
    solutionDescription:
      "Configure regras claras e catálogo de respostas para que a IA resolva com precisão as dúvidas comuns, liberando os profissionais para casos complexos.",
    metric: "Até 67% das dúvidas resolvidas de imediato",
  },
  {
    problemTitle: "Atendimento descentralizado",
    problemDescription:
      "Informações ficam dispersas em celulares individuais de colaboradores, sem histórico unificado, sem métricas e com risco de perda de contatos estratégicos.",
    solutionTitle: "Caixa de entrada única e transparente",
    solutionDescription:
      "Centralize todos os canais e atendentes em um só painel corporativo, mantendo histórico completo de cada cliente e permitindo transições fluidas.",
    metric: "Histórico 100% auditável e seguro",
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: "ai-agents",
    title: "Agentes de IA",
    description:
      "Automatizam respostas e tarefas operacionais com base nas regras de negócio, tom de voz e limites configurados pela sua empresa.",
    tag: "Automação Cognitiva",
    featured: true,
  },
  {
    id: "human-handoff",
    title: "Atendimento Humano",
    description:
      "Permite transferir facilmente qualquer conversa da IA para um atendente humano com um único clique, preservando todo o contexto prévio.",
    tag: "Transição Fluida",
    featured: true,
  },
  {
    id: "integrated-whatsapp",
    title: "WhatsApp Integrado",
    description:
      "Centralização de múltiplos atendentes em números corporativos oficiais, sem necessidade de revezar aparelhos físicos.",
    tag: "Canal Oficial",
    featured: false,
  },
  {
    id: "workflow-automation",
    title: "Automação de Processos",
    description:
      "Criação de fluxos para envio de mensagens programadas, roteamento por departamento, atribuição de tags e follow-ups.",
    tag: "Fluxos Visuais",
    featured: false,
  },
  {
    id: "centralized-history",
    title: "Histórico Centralizado",
    description:
      "Registro de todas as interações, anotações internas da equipe e status de negociação vinculados ao perfil de cada contato.",
    tag: "Visão 360°",
    featured: false,
  },
  {
    id: "flexible-integrations",
    title: "Integrações Flexíveis",
    description:
      "Conexão com CRMs, ERPs e bancos de dados externos através de APIs REST bem documentadas e webhooks em tempo real.",
    tag: "APIs & Webhooks",
    featured: false,
  },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: "01",
    title: "Conecte seu canal",
    description:
      "Configure o WhatsApp corporativo da sua empresa de maneira simplificada, pronta para atender com estabilidade.",
    details: [
      "Conexão segura sem instalações pesadas",
      "Compatível com números existentes",
      "Suporte a múltiplos operadores simultâneos",
    ],
  },
  {
    step: "02",
    title: "Configure seu agente",
    description:
      "Defina o tom de voz, horários de funcionamento, regras de direcionamento e base de conhecimento da sua empresa.",
    details: [
      "Regras em linguagem natural",
      "Definição de limites estritos de atuação",
      "Personalização por departamento ou serviço",
    ],
  },
  {
    step: "03",
    title: "Automatize processos",
    description:
      "Estruture fluxos de triagem, respostas para perguntas frequentes e gatilhos para encaminhamento de leads.",
    details: [
      "Qualificação automática de interesse",
      "Encaminhamento inteligente por assunto",
      "Notificações instantâneas para a equipe",
    ],
  },
  {
    step: "04",
    title: "Acompanhe sua operação",
    description:
      "Analise conversas em andamento, verifique métricas de eficiência e assuma o controle manual sempre que preferir.",
    details: [
      "Painel unificado em tempo real",
      "Transição para humano com 1 clique",
      "Relatórios de volume e resolução",
    ],
  },
];

export const INTEGRATION_CATEGORIES = [
  {
    category: "WhatsApp Corporativo",
    desc: "Centralize canais oficiais em uma única caixa de entrada colaborativa.",
    badge: "Canal Nativo",
  },
  {
    category: "Webhooks em Tempo Real",
    desc: "Dispare eventos imediatos quando uma conversa iniciar, qualificar ou for transferida.",
    badge: "Event-Driven",
  },
  {
    category: "APIs REST Abertas",
    desc: "Envie e consulte dados de clientes, atualize status e dispare mensagens transacionais.",
    badge: "RESTful",
  },
  {
    category: "Sistemas de CRM",
    desc: "Alimente oportunidades comerciais e registre históricos de negociação sem digitação manual.",
    badge: "Vendas",
  },
  {
    category: "ERPs & Gestão",
    desc: "Consulte pedidos, agendamentos e status cadastrais diretamente na conversa com o cliente.",
    badge: "Operação",
  },
  {
    category: "Bancos de Dados Internos",
    desc: "Conecte sua base proprietária para que os agentes consultem disponibilidades em tempo real.",
    badge: "Custom",
  },
];

// Valores explicitamente demonstrativos para fins de portfólio
export const ANALYTICS_METRICS: MetricItem[] = [
  {
    value: "1.284",
    label: "Conversas recebidas",
    description: "Volume total processado no período demonstrativo",
    trend: "+18% vs mês anterior",
  },
  {
    value: "67%",
    label: "Conversas automatizadas",
    description: "Resolvidas pelo agente de IA sem intervenção humana",
    trend: "Economia de ~140 horas de equipe",
  },
  {
    value: "3 min",
    label: "Tempo médio de resposta",
    description: "Tempo médio de primeira interação humana qualificada",
    trend: "IA responde em menos de 15 segundos",
  },
  {
    value: "92%",
    label: "Taxa de resolução",
    description: "Demandas concluídas com satisfação do cliente",
    trend: "Medido ao final do atendimento",
  },
];

export const USE_CASES: UseCaseItem[] = [
  {
    id: "atendimento",
    title: "Atendimento Geral",
    badge: "Recepção & FAQ",
    description:
      "Ideal para empresas que recebem centenas de perguntas sobre localização, horário de funcionamento, catálogo de serviços e status de solicitações.",
    scenario: {
      customerMessage: "Olá, vocês atendem aos sábados e onde fica a unidade principal?",
      aiAction:
        "O agente informa o endereço completo com mapa de referência e esclarece os horários de sábado sem envolver a equipe.",
      humanOutcome:
        "Caso o cliente peça um agendamento específico, a conversa é imediatamente direcionada ao setor correto com o histórico registrado.",
    },
    benefits: [
      "Fim das respostas manuais repetitivas",
      "Atendimento imediato aos fins de semana e noites",
      "Padronização na qualidade das orientações",
    ],
  },
  {
    id: "comercial",
    title: "Comercial & Vendas",
    badge: "Qualificação de Leads",
    description:
      "Qualifique prospects no primeiro contato, identifique o perfil da empresa, volume desejado e entregue o lead aquecido ao vendedor.",
    scenario: {
      customerMessage: "Gostaria de saber os valores para um time com 15 consultores.",
      aiAction:
        "A IA entende o segmento, valida o número de usuários e apresenta a faixa de investimento correspondente.",
      humanOutcome:
        "O executivo de contas recebe a notificação no painel com o resumo do perfil e assume a conversa para o fechamento.",
    },
    benefits: [
      "Vendedores falam apenas com leads qualificados",
      "Tempo de resposta reduzido de horas para segundos",
      "Aumento comprovado na conversão de novos contatos",
    ],
  },
  {
    id: "suporte",
    title: "Suporte ao Cliente",
    badge: "Triagem & Diagnóstico",
    description:
      "Faça a coleta inicial de dados do cliente, número do pedido ou descrição do problema antes de acionar a equipe de suporte técnico.",
    scenario: {
      customerMessage: "Estou com dificuldade para acessar meu painel desde hoje cedo.",
      aiAction:
        "A IA solicita o e-mail cadastrado, verifica o status do serviço e sugere o procedimento de recuperação de senha.",
      humanOutcome:
        "Se o problema persistir, transfere o chamado para o analista N2 com todos os dados técnicos já coletados.",
    },
    benefits: [
      "Redução drástica no tempo de triagem do suporte",
      "Eliminação do vai-e-vem de mensagens para colher dados",
      "Histórico completo documentado no ticket",
    ],
  },
  {
    id: "cobranca",
    title: "Cobrança & Avisos",
    badge: "Lembretes Amigáveis",
    description:
      "Envio automatizado e humanizado de lembretes de vencimento, segunda via de boletos e confirmações de renovação com discrição.",
    scenario: {
      customerMessage: "Poderiam me reenviar o boleto que vence amanhã?",
      aiAction:
        "A IA valida o CPF/CNPJ de forma segura e gera a linha digitável ou link de pagamento oficial instantaneamente.",
      humanOutcome:
        "Evita a sobrecarga do setor financeiro e reduz inadimplência sem desgaste no relacionamento com o cliente.",
    },
    benefits: [
      "Autoatendimento ágil para 2ª via",
      "Comunicação cordial e sem atrito",
      "Integração com sistemas de gestão financeira",
    ],
  },
];

// Preços fictícios para projeto de portfólio.
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "R$ 290",
    period: "/mês",
    description:
      "Para pequenas empresas e escritórios que desejam organizar o atendimento e eliminar respostas manuais repetitivas.",
    features: [
      "1 número de WhatsApp conectado",
      "Até 3 atendentes humanos simultâneos",
      "1 Agente de IA com regras personalizáveis",
      "Histórico de conversas por 60 dias",
      "Triagem e respostas automáticas 24/7",
      "Painel web responsivo",
      "Suporte por e-mail e comunidade",
    ],
    ctaLabel: "Começar agora",
    isPopular: false,
  },
  {
    name: "Growth",
    price: "R$ 690",
    period: "/mês",
    badge: "Mais popular",
    isPopular: true,
    description:
      "Para empresas em crescimento que precisam de agentes especializados, múltiplos departamentos e integrações.",
    features: [
      "Até 2 números de WhatsApp conectados",
      "Até 10 atendentes humanos simultâneos",
      "Até 3 Agentes de IA (Vendas, Suporte, FAQ)",
      "Histórico de conversas ilimitado",
      "Transição inteligente para atendente humano",
      "Acesso completo a Webhooks e API REST",
      "Painel de métricas e relatórios de resolução",
      "Suporte prioritário via WhatsApp",
    ],
    ctaLabel: "Começar agora",
  },
  {
    name: "Scale",
    price: "R$ 1.490",
    period: "/mês",
    description:
      "Para operações comerciais de alto volume que exigem roteamento avançado, segurança e integrações personalizadas.",
    features: [
      "Números de WhatsApp múltiplos",
      "Atendentes humanos ilimitados",
      "Agentes de IA ilimitados por departamento",
      "Roteamento avançado por tags e filas de espera",
      "Webhooks bidirecionais de alta capacidade",
      "SLA de suporte dedicado e onboarding assistido",
      "Logs detalhados de auditoria e conformidade",
      "Treinamento personalizado da equipe",
    ],
    ctaLabel: "Começar agora",
    isPopular: false,
  },
];

// Depoimentos fictícios para fins de portfólio.
export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Conseguimos organizar melhor as conversas e diminuir bastante o trabalho repetitivo da equipe. Antes da NexTalk, perdíamos mensagens importantes nos horários de pico.",
    author: "Rafael",
    role: "Operações",
    company: "Lumina Empreendimentos",
    initials: "RO",
  },
  {
    quote:
      "A qualificação prévia pelo agente no WhatsApp aumentou a velocidade com que nossos consultores fecham novos negócios. O lead já chega ao vendedor com necessidade e orçamento claros.",
    author: "Mariana",
    role: "Coordenação Comercial",
    company: "Atlas Logística",
    initials: "MC",
  },
  {
    quote:
      "O cliente não fica mais esperando horas fora do expediente. Nossos atendentes chegam de manhã com o histórico todo categorizado e o problema já encaminhado.",
    author: "Lucas",
    role: "Suporte ao Cliente",
    company: "Vita Saúde",
    initials: "LS",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Preciso entender de inteligência artificial?",
    answer:
      "Não. A NexTalk foi desenvolvida para gestores e equipes operacionais. Você configura as instruções da IA em linguagem natural simples, determinando o que ela pode responder e quando deve chamar uma pessoa.",
  },
  {
    question: "Posso transferir um atendimento para uma pessoa?",
    answer:
      "Sim, a qualquer momento. A transição pode ser solicitada pelo próprio cliente, decidida pela IA com base em palavras-chave ou acionada com um clique pelo atendente humano através do painel.",
  },
  {
    question: "A plataforma funciona com WhatsApp?",
    answer:
      "Sim. A plataforma centraliza as conversas do WhatsApp da sua empresa em uma interface única para toda a equipe, permitindo múltiplos operadores simultâneos no mesmo número.",
  },
  {
    question: "Posso integrar meu sistema?",
    answer:
      "Sim. A NexTalk disponibiliza APIs REST e Webhooks para você conectar CRMs, sistemas de gestão (ERPs), ferramentas de agendamento ou bancos de dados internos.",
  },
  {
    question: "É possível criar diferentes agentes?",
    answer:
      "Sim. Dependendo do seu plano, você pode ter agentes especializados com diretrizes próprias: por exemplo, um agente focado em qualificação comercial e outro em suporte técnico.",
  },
  {
    question: "Preciso instalar algum programa?",
    answer:
      "Não. O sistema opera 100% em nuvem diretamente pelo navegador (desktop, tablet ou celular), sem necessidade de servidores locais ou instalações complexas.",
  },
  {
    question: "Como funciona a configuração inicial?",
    answer:
      "O processo é dividido em 4 passos simples: conexão do canal, definição das regras básicas do agente, configuração das automações de rotina e treinamento rápido da equipe. Em poucos minutos sua operação já está ativa.",
  },
];
