/**
 * Central configuration for Live In Foco
 * All company details, contacts, services, prices, and links are defined here.
 */

export const COMPANY = {
  name: 'Live In Foco',
  legalName: 'Live In Foco',
  tradeName: 'Live In Foco',
  cnpj: '37.999.129/0001-65',
  cnpjRaw: '37999129000165',
  segment: 'Serviços profissionais / fotografia',
  activity: 'Fotografia de eventos e estúdio fotográfico',
  foundingYearFamily: 1989,
  currentCompanyStartDate: '06/08/2020',
  yearsExperience: 37,
  daughterYearsInPhoto: 13,
  responsible: 'Lina Mara Costa de Matos',
  role: 'Fotógrafa e administradora da empresa',
  whatsappRaw: '5585985706006',
  phoneDisplay: '(85) 98570-6006',
  email: 'Linamaraadm0511@gmail.com',
  instagram: 'Liveinfoco',
  instagramUrl: 'https://www.instagram.com/liveinfoco',
  googleProfile: 'Liveinfoco',
  googleMapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Mister+Hull,+7431,+Rua+H,+41+-+Parque+das+Na%C3%A7%C3%B5es,+Caucaia+-+CE',
  
  address: {
    street: 'Av. Mister Hull, 7431',
    detail: 'Rua H, 41',
    neighborhood: 'Parque das Nações',
    city: 'Caucaia',
    state: 'Ceará',
    parking: 'Há vagas disponíveis na rua.',
    serviceType: 'Presencial e online.',
    coverageRegion: 'Fortaleza e regiões próximas.'
  },

  hours: {
    weekdays: [
      { start: '08:00', end: '11:30' },
      { start: '14:00', end: '18:00' }
    ],
    weekdaysText: 'Segunda a sexta: 08:00 às 11:30 | 14:00 às 18:00',
    outOfHoursText: 'Atendimento fora do horário: Mediante agendamento.'
  },

  slogans: {
    official: 'Live In Foco — mais de três décadas contando histórias através da fotografia.',
    heroHeadline: 'Histórias passam. Memórias ficam.',
    heroSubheadline: 'Há mais de três décadas, a Live In Foco transforma momentos especiais em lembranças que permanecem.',
    conceptHeadline: 'Mais do que fotografar. Eternizar.',
    experienceHeadline: '37 anos contando histórias através da fotografia.',
    ctaFinalHeadline: 'Vamos transformar seu momento em memória?',
    ctaFinalSubtitle: 'Fale com a Live In Foco e descubra as opções para seu ensaio, evento ou projeto.'
  },

  whatsappMessages: {
    general: 'Olá! Conheci a Live In Foco pelo site e gostaria de saber mais sobre os serviços de fotografia.',
    events: 'Olá! Gostaria de solicitar informações sobre fotografia para meu evento.',
    shoot: 'Olá! Gostaria de saber mais sobre os ensaios fotográficos da Live In Foco.',
    studio: 'Olá! Gostaria de saber mais sobre o atendimento no estúdio próprio da Live In Foco.',
    products: 'Olá! Gostaria de conhecer os modelos de álbuns e produtos disponíveis.',
    quote: 'Olá! Gostaria de solicitar um orçamento para meu projeto fotográfico.',
    prints: 'Olá! Gostaria de saber mais sobre fotos impressas 15x21 e fotos digitais.',
    video: 'Olá! Gostaria de informações sobre pacotes de videomaker e storymakers.'
  }
};

/**
 * Helper to generate pre-filled WhatsApp link
 */
export function getWhatsAppUrl(messageKey: keyof typeof COMPANY.whatsappMessages = 'general', customText?: string): string {
  const text = customText || COMPANY.whatsappMessages[messageKey] || COMPANY.whatsappMessages.general;
  return `https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  features: string[];
  ctaMessageKey: keyof typeof COMPANY.whatsappMessages;
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'eventos',
    title: 'Fotografia de Eventos',
    category: 'Eventos Externos',
    shortDescription: 'Cobertura completa de eventos com olhar atento a cada detalhe e entrega ilimitada de fotos digitais.',
    features: [
      'Atendimento em Caucaia, Fortaleza e regiões próximas',
      'Todas as fotos do evento entregues de forma ilimitada',
      'Valores a partir de R$ 400',
      'Possibilidade de cobertura com fotos impressas e álbuns'
    ],
    ctaMessageKey: 'events',
    image: '/src/assets/images/event_moment_bw_1790631802036.jpg'
  },
  {
    id: 'estudio',
    title: 'Fotografia em Estúdio',
    category: 'Espaço Próprio',
    shortDescription: 'Ambiente próprio, controlado e acolhedor em Caucaia para ensaios com iluminação e direção profissional.',
    features: [
      'Estúdio próprio localizado no Parque das Nações',
      'Atendimento personalizado com hora marcada',
      'Direção postural sensível e tranquila',
      'Opções de fotos digitais e impressas'
    ],
    ctaMessageKey: 'studio',
    image: '/src/assets/images/studio_portrait_bw_1790631792497.jpg'
  },
  {
    id: 'infantil',
    title: 'Fotografia para Público Infantil',
    category: 'Ensaios Especiais',
    shortDescription: 'Registro afetuoso da infância com paciência, respeito ao ritmo das crianças e sensibilidade familiar.',
    features: [
      'Ensaios em estúdio próprio ou locação externa',
      'Espaço acolhedor e seguro para os pequenos',
      'Registros espontâneos e momentos autênticos',
      'Produção de fotos impressas e álbuns de recordação'
    ],
    ctaMessageKey: 'shoot',
    image: '/src/assets/images/hero_camera_bw_1790631781229.jpg'
  },
  {
    id: 'adulto',
    title: 'Fotografia para Público Adulto',
    category: 'Retratos & Ensaios',
    shortDescription: 'Ensaios individuais, familiares e comemorativos que valorizam a sua história com elegância e verdade.',
    features: [
      'Ensaios femininos, masculinos e casais',
      'Retratos profissionais e comemorativos',
      'Opções em estúdio ou locações externas',
      'Entrega em alta resolução digital'
    ],
    ctaMessageKey: 'shoot',
    image: '/src/assets/images/studio_portrait_bw_1790631792497.jpg'
  },
  {
    id: 'audiovisual',
    title: 'Videomaker & Storymakers',
    category: 'Audiovisual & Conteúdo',
    shortDescription: 'Captação dinâmica em vídeo e cobertura em tempo real para eternizar a energia e o movimento do seu dia.',
    features: [
      'Captação com videomaker dedicado',
      'Storymakers para cobertura em tempo real',
      'Ideal para celebrações e registros comemorativos',
      'Prazos e formatos alinhados diretamente com o cliente'
    ],
    ctaMessageKey: 'video',
    image: '/src/assets/images/event_moment_bw_1790631802036.jpg'
  },
  {
    id: 'pacotes-completos',
    title: 'Pacotes de Fotografia + Vídeo',
    category: 'Solução Completa',
    shortDescription: 'A harmonia perfeita entre fotografia e vídeo para que nenhuma memória do seu evento passe em branco.',
    features: [
      'Equipe integrada e experiente',
      'Cobertura visual completa do início ao fim',
      'Entrega digital e opções de mídias físicas',
      'Condições especiais para pacotes conjugados'
    ],
    ctaMessageKey: 'events',
    image: '/src/assets/images/album_prints_bw_1790631813067.jpg'
  }
];

export interface ProductItem {
  id: string;
  name: string;
  priceDisplay: string;
  priceNote?: string;
  description: string;
  details: string[];
  ctaText: string;
  ctaMessageKey: keyof typeof COMPANY.whatsappMessages;
  image: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'fotos-digitais-eventos',
    name: 'Fotos Digitais de Eventos',
    priceDisplay: 'A partir de R$ 400',
    priceNote: 'Valor base para eventos',
    description: 'Fotos digitais dos eventos entregues com qualidade e cuidado editorial.',
    details: [
      'Todas as fotos do evento são entregues de forma ilimitada',
      'Arquivos em alta resolução prontos para compartilhamento e impressão',
      'Conforme serviço informado pela empresa'
    ],
    ctaText: 'Solicitar orçamento pelo WhatsApp',
    ctaMessageKey: 'events',
    image: '/src/assets/images/event_moment_bw_1790631802036.jpg'
  },
  {
    id: 'foto-impressa-15x21',
    name: 'Foto Impressa 15x21',
    priceDisplay: 'R$ 20 por foto',
    priceNote: 'Formato clássico 15x21 cm',
    description: 'Foto revelada para guardar como recordação física tangível e duradoura.',
    details: [
      'Papel fotográfico de alta qualidade e durabilidade',
      'Tamanho padrão 15x21 cm ideal para quadros e porta-retratos',
      'Memória palpável que atravessa gerações'
    ],
    ctaText: 'Encomendar pelo WhatsApp',
    ctaMessageKey: 'prints',
    image: '/src/assets/images/album_prints_bw_1790631813067.jpg'
  },
  {
    id: 'foto-digital-individual',
    name: 'Foto Digital Individual',
    priceDisplay: 'R$ 15 por imagem',
    priceNote: 'Por arquivo digital',
    description: 'Imagem enviada ao cliente em alta resolução com tratamento cuidadoso.',
    details: [
      'Arquivo digital em alta definição',
      'Ideal para acervo pessoal, redes sociais e ampliações',
      'Envio rápido e prático direto para você'
    ],
    ctaText: 'Pedir fotos pelo WhatsApp',
    ctaMessageKey: 'prints',
    image: '/src/assets/images/studio_portrait_bw_1790631792497.jpg'
  },
  {
    id: 'albuns-fotograficos',
    name: 'Álbuns Fotográficos',
    priceDisplay: 'Sob consulta',
    priceNote: 'Diversos modelos disponíveis',
    description: 'A empresa oferece álbuns de diversos modelos para eternizar sua história com acabamento refinado.',
    details: [
      'Modelos variados de encadernação e acabamento',
      'Espaço preparado para novos modelos e diagramações',
      'Consultar modelos e valores diretamente com a equipe'
    ],
    ctaText: 'Consultar modelos e valores pelo WhatsApp',
    ctaMessageKey: 'products',
    image: '/src/assets/images/album_prints_bw_1790631813067.jpg'
  }
];

export interface TimelineItem {
  yearOrStep: string;
  title: string;
  description: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    yearOrStep: '1989',
    title: 'Início da história com a fotografia',
    description: 'Tudo começou em 1989, quando o pai da família, recém-casado e cheio de sonhos, veio do interior para a cidade em busca de uma vida melhor e de mais oportunidades. Com uma simples câmera da época, começou a registrar os mais diversos eventos.'
  },
  {
    yearOrStep: 'Anos 90 - 2000',
    title: 'Construção da experiência e confiança',
    description: 'Com muito trabalho, dedicação e paixão pelo que fazia, foi conquistando seu espaço e a confiança genuína das pessoas, evento após evento.'
  },
  {
    yearOrStep: 'Legado Familiar',
    title: 'A fotografia passa a fazer parte da história da família',
    description: 'Com o passar dos anos, essa história foi crescendo dentro da própria família. A fotografia deixou de ser apenas uma profissão e se tornou um legado. A mãe também passou a fazer parte dessa caminhada, ajudando a fortalecer esse trabalho construído com tanto esforço.'
  },
  {
    yearOrStep: 'Nova Identidade',
    title: 'Criação da identidade Live In Foco',
    description: 'O nome Estúdio Live In Foco surgiu alguns anos atrás, através de um plano de negócio, trazendo uma nova identidade para algo que já tinha uma longa e consolidada história.'
  },
  {
    yearOrStep: 'Há 13 anos',
    title: 'Entrada da nova geração na fotografia',
    description: 'Há 13 anos, a filha também entrou para o ramo da fotografia, trazendo um novo olhar, inovação e continuidade para esse legado familiar conduzido hoje com Lina Mara Costa de Matos.'
  },
  {
    yearOrStep: 'Hoje',
    title: '37 anos de história e memórias eternizadas',
    description: 'Hoje, já são 37 anos de experiência, marcados por milhares de momentos registrados e memórias eternizadas em Caucaia, Fortaleza e além.'
  }
];

export const DIFFERENTIALS = [
  {
    title: '37 anos de história na fotografia',
    description: 'Tradição sólida iniciada em 1989 com registro contínuo de memórias ao longo de quase quatro décadas.'
  },
  {
    title: 'Negócio familiar autêntico',
    description: 'Cuidado afetuoso e compromisso genuíno transmitidos e fortalecidos através de gerações.'
  },
  {
    title: 'Experiência através de gerações',
    description: 'A união entre a sabedoria da experiência tradicional e o olhar contemporâneo da nova geração.'
  },
  {
    title: 'Estúdio próprio em Caucaia',
    description: 'Espaço físico próprio e acolhedor para ensaios controlados, com vagas disponíveis na rua.'
  },
  {
    title: 'Cobertura de eventos externos',
    description: 'Atendimento presencial em Caucaia, Fortaleza e regiões próximas com entrega de fotos ilimitadas.'
  },
  {
    title: 'Fotos digitais e fotos impressas',
    description: 'Da alta resolução digital para telas à emoção da revelação 15x21 palpável e duradoura.'
  },
  {
    title: 'Álbuns fotográficos exclusivos',
    description: 'Diversos modelos de encadernação para guardar sua história em formato de livro de memórias.'
  },
  {
    title: 'Videomaker & Storymakers',
    description: 'Possibilidade de pacotes completos integrando fotografia, vídeo e cobertura de stories.'
  },
  {
    title: 'Atendimento infantil e adulto',
    description: 'Sensibilidade e técnica adaptadas para todas as fases da vida, de crianças a ensaios pessoais.'
  },
  {
    title: 'Atendimento presencial e online',
    description: 'Facilidade para tirar dúvidas e agendar pelo WhatsApp, com suporte dedicado e transparente.'
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Escolha o serviço',
    description: 'Defina se você precisa de cobertura de evento, ensaio em estúdio próprio, ensaio externo, fotos impressas ou pacote com vídeo.'
  },
  {
    step: '02',
    title: 'Entre em contato',
    description: 'Clique no botão do WhatsApp para falar diretamente com a equipe da Live In Foco e tirar suas dúvidas.'
  },
  {
    step: '03',
    title: 'Agende sua data',
    description: 'Consulte a disponibilidade de agenda para o dia e horário que melhor atendem ao seu momento.'
  },
  {
    step: '04',
    title: 'Realize seu ensaio ou evento',
    description: 'Viva o momento com tranquilidade enquanto nossa equipe cuida de cada registro com atenção e sensibilidade.'
  },
  {
    step: '05',
    title: 'Receba suas memórias',
    description: 'Receba suas fotos digitais em alta resolução e, se desejar, suas fotos impressas 15x21 ou álbum selecionado.'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'Onde fica o estúdio?',
    answer: 'O estúdio da Live In Foco está localizado na Av. Mister Hull, 7431, Rua H, 41 — Parque das Nações, Caucaia — Ceará. O local possui vagas de estacionamento disponíveis na rua.'
  },
  {
    question: 'Vocês atendem Fortaleza?',
    answer: 'Sim! Atendemos tanto em Caucaia quanto em Fortaleza e regiões próximas, seja com atendimento presencial em eventos externos ou online para agendamentos e orçamentos.'
  },
  {
    question: 'Vocês fotografam eventos externos?',
    answer: 'Sim. Realizamos a cobertura de eventos externos. Nas fotos digitais de eventos, todas as fotos são entregues de forma ilimitada, com valores a partir de R$ 400.'
  },
  {
    question: 'Vocês possuem estúdio próprio?',
    answer: 'Sim, possuímos espaço próprio de estúdio fotográfico localizado em Caucaia, preparado para receber nossos clientes com conforto e iluminação profissional.'
  },
  {
    question: 'Vocês trabalham com fotos impressas?',
    answer: 'Sim! Trabalhamos com fotos impressas no tamanho 15x21 cm, reveladas para guardar como recordação palpável, no valor de R$ 20 por foto.'
  },
  {
    question: 'Vocês oferecem álbuns?',
    answer: 'Sim, a Live In Foco oferece álbuns de diversos modelos. Você pode consultar os modelos disponíveis e valores diretamente conosco pelo WhatsApp.'
  },
  {
    question: 'Vocês trabalham com vídeo?',
    answer: 'Sim! Trabalhamos com serviços de videomaker e storymakers, além de pacotes integrados de fotografia + vídeo para cobertura completa.'
  },
  {
    question: 'Como faço para agendar?',
    answer: 'O agendamento é feito de forma simples e rápida através do nosso WhatsApp oficial: (85) 98570-6006. Basta nos chamar para verificar a disponibilidade de datas.'
  },
  {
    question: 'Qual o valor da fotografia?',
    answer: 'As fotos digitais de eventos custam a partir de R$ 400 (com fotos ilimitadas entregues). A foto digital individual é R$ 15 e a foto impressa 15x21 é R$ 20. Para outros serviços, pacotes ou álbuns, entre em contato conosco pelo WhatsApp para consultar.'
  },
  {
    question: 'Vocês trabalham com crianças?',
    answer: 'Sim! Atendemos o público infantil com muita paciência, carinho e respeito ao ritmo dos pequenos, seja em estúdio próprio ou em eventos.'
  },
  {
    question: 'Vocês fazem ensaios?',
    answer: 'Sim! Realizamos ensaios fotográficos tanto para o público infantil quanto para o público adulto, em nosso estúdio próprio ou em locações externas.'
  },
  {
    question: 'Como recebo minhas fotos?',
    answer: 'As fotos digitais são enviadas em alta resolução ao cliente. Caso contrate impressões ou álbuns, combinamos a entrega física no estúdio ou conforme alinhado no agendamento.'
  }
];

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Eventos' | 'Estúdio' | 'Infantil' | 'Adulto' | 'Fotos impressas' | 'Álbuns' | 'Vídeo';
  image: string;
  aspect: string;
  caption: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Registro Emotivo em Evento',
    category: 'Eventos',
    image: '/src/assets/images/event_moment_bw_1790631802036.jpg',
    aspect: 'aspect-4/3',
    caption: 'Espontaneidade e emoção registradas durante celebração externa.'
  },
  {
    id: 'p2',
    title: 'Retrato Fine Art em Estúdio',
    category: 'Estúdio',
    image: '/src/assets/images/studio_portrait_bw_1790631792497.jpg',
    aspect: 'aspect-4/3',
    caption: 'Iluminação cuidadosa e direção sensível no estúdio próprio em Caucaia.'
  },
  {
    id: 'p3',
    title: 'A Arte da Memória Impressa',
    category: 'Fotos impressas',
    image: '/src/assets/images/album_prints_bw_1790631813067.jpg',
    aspect: 'aspect-4/3',
    caption: 'Revelação fotográfica 15x21 com acabamento clássico e duradouro.'
  },
  {
    id: 'p4',
    title: 'Ensaio Expressivo em Preto e Branco',
    category: 'Adulto',
    image: '/src/assets/images/hero_camera_bw_1790631781229.jpg',
    aspect: 'aspect-16/9',
    caption: 'A essência da fotografia em contraste, luz e verdade.'
  },
  {
    id: 'p5',
    title: 'Modelos de Álbuns de Recordação',
    category: 'Álbuns',
    image: '/src/assets/images/album_prints_bw_1790631813067.jpg',
    aspect: 'aspect-4/3',
    caption: 'Espaço dedicado a modelos de encadernação para acervo de memórias familiares.'
  },
  {
    id: 'p6',
    title: 'Cobertura em Movimento & Storymakers',
    category: 'Vídeo',
    image: '/src/assets/images/event_moment_bw_1790631802036.jpg',
    aspect: 'aspect-4/3',
    caption: 'Captação audiovisual dinâmica para eternizar a vibração do evento.'
  },
  {
    id: 'p7',
    title: 'Sensibilidade na Fotografia Infantil',
    category: 'Infantil',
    image: '/src/assets/images/studio_portrait_bw_1790631792497.jpg',
    aspect: 'aspect-4/3',
    caption: 'Espaço preparado e acolhedor para registrar os primeiros passos e sorrisos.'
  }
];
