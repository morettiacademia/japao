// Todo o conteúdo e a configuração da landing page Imersão Japão.
// A copy foi aprovada pelo cliente: não reescrever, não resumir, não omitir módulos.
// Regra: nenhuma informação não confirmada é exibida (campos vazios = ocultos / "A definir").

export type Confirmation = 'sim' | 'não' | 'a confirmar';

export const config = {
  eventDate: '', // ex. '12 de março de 2027' — vazio = oculto no hero, "A definir" na inscrição
  eventTime: '', // ex. '19h às 22h (Brasília)'
  eventDuration: '', // ex. '3 horas' — se preenchido, cria FAQ "Qual é a duração?"
  eventPrice: '', // ex. 'R$ 197'
  eventStartISO: '', // ex. '2027-03-12T19:00:00-03:00' — habilita JSON-LD Event
  eventEndISO: '',
  accessRecording: 'a confirmar' as Confirmation, // FAQ só aparece se confirmado
  certificateAvailable: 'a confirmar' as Confirmation,
  registrationMode: 'form' as 'form' | 'checkout',
  checkoutUrl: '',
  registrationEndpoint: process.env.NEXT_PUBLIC_REGISTRATION_ENDPOINT ?? '',
  thankYouUrl: '/imersao-japao/obrigado/',
  marketingConsent: false, // true = exibe checkbox opcional de comunicações
  privacyPolicyUrl: '',
  termsUrl: '',
  contactEmail: '',
  instagramUrl: '',
  youtubeUrl: '',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? '',
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/imersao-japao/` : '',
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? '',
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? '',
};

const ASSETS = '/imersao-japao/assets';

export const assets = {
  logoImersao: { src: `${ASSETS}/logo-imersao-japao.png`, width: 1497, height: 484 },
  logoAcademia: { src: `${ASSETS}/logo-academia-da-magia.png`, width: 497, height: 356 },
  og: `${ASSETS}/og-imersao-japao.jpg`,
  photo: (name: string) => `${ASSETS}/${name}.jpg`,
};

export const seo = {
  title: 'Imersão Japão para Agentes de Viagens | Academia da Magia',
  description:
    'Aprenda a vender Japão com mais segurança. Participe da Imersão Japão online e ao vivo da Academia da Magia. Conheça destinos, roteiros e logística.',
  ogDescription:
    'Uma imersão online e ao vivo para agentes de viagens que querem conhecer o Japão e transformar o interesse pelo destino em novas oportunidades de vendas.',
  twitterDescription: 'Aprenda a vender Japão com mais segurança. Imersão online e ao vivo da Academia da Magia.',
  ogImageAlt: 'Logotipo da Imersão Japão e o Monte Fuji',
};

export const nav = [
  { href: '#oportunidade', label: 'Por que Japão' },
  { href: '#programa', label: 'Programa' },
  { href: '#destinos', label: 'Destinos' },
  { href: '#faq', label: 'Dúvidas' },
];

export type Eyebrow = { label: string; ja: string; romaji: string };

export const hero = {
  kicker: 'Academia da Magia apresenta',
  logoAlt: 'Imersão Japão — logotipo oficial',
  titleLead: 'O Japão está conquistando os viajantes.',
  titleHighlight: 'Sua agência está preparada para vender esse destino?',
  subheadline:
    'Uma imersão online e ao vivo para agentes de viagens que querem conhecer o Japão, dominar seus principais diferenciais e transformar o interesse crescente pelo destino em novas oportunidades de vendas.',
  format: ['100% online', 'Ao vivo', 'Para agentes de viagens'],
  cta: 'Quero garantir minha vaga',
  microcopy: 'Amplie seus conhecimentos. Descubra novas oportunidades para sua agência.',
  image: {
    src: assets.photo('yamanashi-fuji'),
    alt: 'Monte Fuji visto do mirante do Pagode Chureito, em Yamanashi, Japão',
  },
  tag: { ja: '富士山', label: 'Monte Fuji · Yamanashi' },
};

export const opportunity = {
  eyebrow: { label: 'Por que vender Japão', ja: '機会', romaji: 'kikai · oportunidade' } satisfies Eyebrow,
  title: 'O Japão está no radar dos viajantes. E pode entrar no portfólio da sua agência.',
  paragraphs: [
    { text: 'O Japão deixou de ser um sonho distante para conquistar cada vez mais espaço nos planos de viagem dos brasileiros.' },
    { text: 'Cultura milenar, tecnologia, gastronomia, paisagens impressionantes, parques temáticos e experiências únicas fazem do país um destino cheio de possibilidades.' },
    { text: 'Mas existe uma diferença entre receber um pedido de orçamento para o Japão e saber transformar esse interesse em uma venda.', strong: true },
    { text: 'Para isso, é preciso entender o destino, conhecer suas particularidades e saber construir roteiros que façam sentido para cada perfil de viajante.' },
    { text: 'E é exatamente isso que você vai começar a desenvolver na Imersão Japão da Academia da Magia.' },
  ],
  highlight: 'Um novo destino para conhecer. Novas possibilidades para vender.',
  image: {
    src: assets.photo('tokyo-asakusa'),
    alt: 'Portão Kaminarimon do templo Senso-ji, em Asakusa, Tokyo',
    caption: 'Kaminarimon, templo Senso-ji · Asakusa, Tokyo',
  },
};

export const audience = {
  eyebrow: { label: 'Para quem é', ja: '対象', romaji: 'taishō · público' } satisfies Eyebrow,
  title: 'Você não precisa ser especialista em Japão para começar. Mas precisa dar o primeiro passo.',
  intro:
    'A Imersão Japão foi desenvolvida para agentes de viagens que desejam ampliar seu conhecimento, explorar novos destinos e identificar oportunidades de crescimento profissional.',
  cards: [
    { icon: 'compass', title: 'Para quem ainda não vende Japão', text: 'E quer conhecer o destino para começar a oferecê-lo com mais confiança.' },
    { icon: 'message', title: 'Para quem já recebe pedidos de orçamento', text: 'Mas ainda tem dúvidas sobre logística, transporte, hospedagem e elaboração de roteiros.' },
    { icon: 'layers', title: 'Para quem quer diversificar seu portfólio', text: 'E explorar um destino com diferentes perfis de clientes e possibilidades de experiências.' },
    { icon: 'award', title: 'Para quem quer se diferenciar no mercado', text: 'Com conhecimento que ajude a orientar melhor seus passageiros e construir propostas de maior valor.' },
  ] as const,
};

export const curriculum = {
  eyebrow: { label: 'Conteúdo', ja: '学び', romaji: 'manabi · aprendizado' } satisfies Eyebrow,
  title: 'Do primeiro contato com o destino à construção do roteiro ideal.',
  subtitle:
    'Uma jornada de conhecimento para você entender o Japão além dos pontos turísticos e descobrir como transformar tudo isso em experiências para seus passageiros.',
  meta: ['6 módulos', 'Online e ao vivo'],
  cta: 'Quero aprender a vender Japão',
  modules: [
    {
      title: 'O Japão como oportunidade de negócios',
      description:
        'Entenda o potencial comercial do Japão, quais perfis de clientes podem se interessar pelo destino e como a hospitalidade japonesa faz parte da experiência.',
      topics: ['Por que vender Japão', 'Para quem vender Japão', 'Perfil dos viajantes', 'Omotenashi e hospitalidade japonesa', 'Oportunidades comerciais para agentes de viagens'],
    },
    {
      title: 'Planejamento e logística',
      description: 'Conheça os principais aspectos práticos para orientar seus clientes e planejar viagens mais eficientes.',
      topics: [
        'Mapas e regiões', 'Como chegar ao Japão', 'Companhias aéreas', 'Hubs internacionais', 'Conexões', 'Stopovers', 'Aeroportos',
        'Clima e melhores épocas para viajar', 'Trens e Shinkansen', 'Metrô e ônibus', 'Táxis', 'Aplicativos de transporte',
        'Transfers privativos', 'Moeda e meios de pagamento', 'Visto e documentação',
      ],
    },
    {
      title: 'Destinos e experiências imperdíveis',
      description:
        'Explore destinos essenciais do Japão e entenda como combiná-los de acordo com o tempo disponível, os interesses e o perfil de cada viajante.',
      topics: ['Tokyo', 'Yamanashi', 'Kyoto', 'Nara', 'Osaka', 'Atrativos turísticos', 'Diferenças entre regiões', 'Combinações de destinos'],
    },
    {
      title: 'Parques temáticos no Japão',
      description: 'Descubra as particularidades dos parques temáticos japoneses e como incluir essas experiências em propostas de viagem.',
      topics: ['Tokyo Disneyland', 'Universal Studios Japan', 'Experiências especiais', 'Particularidades de visitação', 'Como integrar parques temáticos ao roteiro'],
    },
    {
      title: 'Hospitalidade, cultura e gastronomia',
      description:
        'Compreenda a cultura japonesa, conheça diferentes tipos de hospedagem e descubra experiências gastronômicas que podem enriquecer os roteiros dos seus passageiros.',
      topics: ['Hotéis', 'Ryokans tradicionais', 'Restaurantes', 'Culinária japonesa', 'Religião', 'Cultura', 'Etiqueta e costumes', 'Hospitalidade'],
    },
    {
      title: 'Elaborando o roteiro ideal',
      description:
        'Aprenda a organizar informações e experiências para construir roteiros coerentes, considerando preferências, tempo disponível e logística.',
      topics: ['Planejamento do itinerário', 'Escolha dos destinos', 'Organização dos deslocamentos', 'Adequação ao perfil do viajante', 'Distribuição dos dias', 'Combinação de experiências'],
    },
  ],
};

export type Destination = {
  name: string;
  ja?: string;
  text: string;
  /** Sem foto ainda → placeholder neutro #1C1C1C (ver PENDENCIAS.md). */
  image?: { src: string; alt: string; position: string };
  layout?: 'tall' | 'wide';
};

export const destinations = {
  eyebrow: { label: 'Destinos', ja: '旅', romaji: 'tabi · viagem' } satisfies Eyebrow,
  title: 'Um país. Diferentes experiências. Inúmeras possibilidades de viagem.',
  intro: 'Descubra alguns dos destinos e experiências que farão parte da Imersão Japão.',
  items: [
    { name: 'Tokyo', ja: '東京', text: 'Modernidade, tradição, tecnologia e experiências surpreendentes.' },
    {
      name: 'Yamanashi', ja: '山梨', text: 'Paisagens naturais e vistas inesquecíveis do Monte Fuji.', layout: 'tall',
      image: { src: assets.photo('yamanashi-chureito'), alt: 'Pagode Chureito em Fujiyoshida, na província de Yamanashi', position: '50% 20%' },
    },
    { name: 'Kyoto', ja: '京都', text: 'Templos, santuários e a essência do Japão tradicional.' },
    { name: 'Nara', ja: '奈良', text: 'História, espiritualidade e encontros com os famosos cervos.' },
    { name: 'Osaka', ja: '大阪', text: 'Gastronomia, entretenimento e energia urbana.' },
    {
      name: 'Parques temáticos', text: 'Magia Disney e experiências do Universal Studios Japan.', layout: 'wide',
      image: { src: assets.photo('tokyo-disneysea'), alt: 'Globo AquaSphere na entrada do Tokyo DisneySea, no Tokyo Disney Resort', position: '50% 22%' },
    },
  ] satisfies Destination[],
};

export const differential = {
  eyebrow: { label: 'Diferencial', ja: '道', romaji: 'michi · o caminho' } satisfies Eyebrow,
  watermark: '道',
  titleLead: 'Seu cliente não precisa apenas de alguém que faça reservas.',
  titleHighlight: 'Ele precisa de alguém que conheça o caminho.',
  columns: [
    [
      { text: 'Vender Japão vai muito além de escolher hotéis e emitir passagens.' },
      { text: 'É saber orientar sobre a melhor época para viajar, explicar como funcionam os transportes, escolher as regiões certas e criar uma experiência que respeite o perfil e as expectativas de cada passageiro.' },
    ],
    [
      { text: 'Quanto mais você conhece o destino, mais preparado está para demonstrar o valor do seu trabalho.', strong: true },
      { text: 'Na Imersão Japão, o conhecimento do destino é conectado à realidade de quem trabalha com turismo e precisa transformar informação em orientação, planejamento e oportunidades comerciais.' },
    ],
  ],
  closingLead: 'Não se trata apenas de conhecer o Japão.',
  closingHighlight: 'Trata-se de se preparar para vendê-lo.',
};

export const academy = {
  eyebrow: 'Quem é a Academia da Magia',
  title: 'Muito mais do que conhecer destinos. Aprender a trabalhar melhor com turismo.',
  paragraphs: [
    { text: 'A Academia da Magia é uma escola de formação e desenvolvimento para profissionais do turismo.' },
    { text: 'Por meio de cursos, mentorias e experiências de imersão, ajudamos agentes de viagens a ampliar seus conhecimentos, desenvolver novas habilidades e construir negócios mais preparados para o mercado.' },
    { text: 'Acreditamos que conhecimento só faz sentido quando pode ser aplicado na prática.', strong: true },
    { text: 'E é com essa proposta que apresentamos a Imersão Japão: aproximar você de um destino cheio de possibilidades e ajudar sua agência a se preparar para vendê-lo.' },
  ],
  image: {
    src: assets.photo('tokyo-disney-resort-line'),
    alt: 'Experiência da Academia da Magia a bordo do Disney Resort Line, no Tokyo Disney Resort',
  },
};

export const registration = {
  eyebrow: { label: 'Inscrição', ja: '参加', romaji: 'sanka · participação' } satisfies Eyebrow,
  title: 'O Japão pode ser o próximo destino a impulsionar suas vendas.',
  paragraphs: [
    'O interesse dos viajantes é uma oportunidade. Estar preparado para atendê-los é o que pode fazer a diferença para sua agência.',
    'Participe da Imersão Japão e amplie seus conhecimentos para começar a explorar esse mercado com mais confiança.',
  ],
  fixedInfo: [
    { label: 'Formato', value: 'Online e ao vivo' },
    { label: 'Conteúdo', value: 'Voltado para agentes de viagens' },
    { label: 'Realização', value: 'Academia da Magia' },
  ],
  tbd: 'A definir',
  form: {
    title: 'Garantir minha inscrição',
    hint: 'Todos os campos são obrigatórios.',
    labels: { name: 'Nome completo', email: 'E-mail', phone: 'WhatsApp com DDD' },
    phonePlaceholder: '(11) 91234-5678',
    privacy: ['Li e concordo com a ', 'Política de Privacidade', ' e autorizo o tratamento dos meus dados para processar minha inscrição.'],
    marketing: 'Opcional: aceito receber comunicações da Academia da Magia sobre cursos e novidades. Posso cancelar quando quiser.',
    submit: 'Quero participar da Imersão Japão',
    submitting: 'Enviando inscrição…',
    footnote: 'Seus dados são usados apenas para processar sua inscrição.',
    errors: {
      name: 'Informe seu nome completo (nome e sobrenome).',
      email: 'Informe um e-mail válido, por exemplo nome@agencia.com.br.',
      phone: 'Informe o WhatsApp com DDD, por exemplo (11) 91234-5678.',
      privacy: 'Para continuar, é preciso concordar com a Política de Privacidade.',
      network: 'Não foi possível enviar sua inscrição agora. Seus dados foram mantidos — verifique sua conexão e tente novamente.',
      closed: 'As inscrições ainda não estão abertas por este formulário. Seus dados foram mantidos; tente novamente mais tarde',
    },
  },
};

export type FaqItem = { q: string; a: string };

export const faq = {
  eyebrow: { label: 'Dúvidas', ja: '質問', romaji: 'shitsumon · perguntas' } satisfies Eyebrow,
  title: 'Perguntas frequentes',
  items: [
    {
      q: 'Preciso já vender Japão para participar?',
      a: 'Não. A imersão foi pensada tanto para agentes que querem começar a trabalhar com o destino quanto para aqueles que já atendem solicitações e desejam aprofundar seus conhecimentos.',
    },
    { q: 'A imersão será presencial?', a: 'Não. O encontro será realizado 100% online e ao vivo.' },
    {
      q: 'Vou aprender sobre os parques temáticos do Japão?',
      a: 'Sim! A programação contempla Tokyo Disneyland e Universal Studios Japan, além de destinos, logística, cultura, hospedagem e planejamento de roteiros.',
    },
    {
      q: 'O conteúdo é voltado para turistas ou profissionais?',
      a: 'A imersão foi desenvolvida especialmente para agentes de viagens e profissionais do turismo que desejam conhecer o Japão sob a perspectiva de quem planeja e vende viagens.',
    },
  ] satisfies FaqItem[],
};

/** Perguntas condicionais: só entram quando a informação foi confirmada em `config`. */
export function getFaqItems(c = config): FaqItem[] {
  const items: FaqItem[] = [...faq.items];
  if (c.accessRecording === 'sim') items.push({ q: 'A aula ficará gravada?', a: 'Sim. A aula ficará gravada para os inscritos.' });
  if (c.accessRecording === 'não') items.push({ q: 'A aula ficará gravada?', a: 'Não. A imersão acontece exclusivamente ao vivo.' });
  if (c.certificateAvailable === 'sim') items.push({ q: 'Haverá certificado?', a: 'Sim. Os participantes receberão certificado.' });
  if (c.certificateAvailable === 'não') items.push({ q: 'Haverá certificado?', a: 'Não. Esta imersão não emite certificado.' });
  if (c.eventDuration) items.push({ q: 'Qual é a duração da imersão?', a: `A imersão terá duração de ${c.eventDuration}.` });
  return items;
}

/** Data/horário/duração/valor — apenas os preenchidos (hero). */
export function getEventInfo(c = config) {
  return [
    { label: 'Data', value: c.eventDate },
    { label: 'Horário', value: c.eventTime },
    { label: 'Duração', value: c.eventDuration },
    { label: 'Investimento', value: c.eventPrice },
  ];
}

export const closing = {
  title: 'O próximo destino a entrar no seu portfólio pode ser o Japão.',
  text: 'Amplie seus horizontes, conheça novas possibilidades e prepare-se para apresentar aos seus passageiros um dos destinos mais fascinantes do mundo.',
  strong: 'O primeiro passo começa com conhecimento.',
  cta: 'Garanta sua vaga na Imersão Japão',
};

export const footer = {
  name: 'Academia da Magia',
  description: 'Formação e desenvolvimento para profissionais do turismo.',
  rights: 'Academia da Magia. Todos os direitos reservados.',
};

export const stickyCta = 'Garantir minha vaga';

export const thankYou = {
  title: 'Inscrição recebida | Imersão Japão — Academia da Magia',
  ja: 'ありがとう',
  romaji: 'arigatō · obrigado',
  heading: 'Sua inscrição na Imersão Japão foi recebida.',
  text: 'Em breve você receberá as próximas informações pelos contatos informados. Enquanto isso, verifique também a caixa de spam e as promoções do seu e-mail.',
  back: 'Voltar para a página',
};
