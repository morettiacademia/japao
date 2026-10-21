# Pendências antes de publicar — Imersão Japão

Preencha em `content/imersao-japao.ts` (config) ou `.env`. Nada abaixo deve ser inventado.

## Informações do evento
- [ ] Data (`eventDate`) e data/hora ISO (`eventStartISO`, `eventEndISO`) — habilita o JSON-LD Event
- [ ] Horário com fuso (`eventTime`)
- [ ] Duração (`eventDuration`)
- [ ] Valor do ingresso (`eventPrice`) — se pago, também `checkoutUrl` e `registrationMode: 'checkout'`
- [ ] Aula ficará gravada? (`accessRecording`)
- [ ] Haverá certificado? (`certificateAvailable`)
- [ ] Como o inscrito recebe o acesso? (nova pergunta no FAQ)
- [ ] Condições de cancelamento e reembolso (nova pergunta no FAQ)

## Integrações (dependem de credenciais)
- [ ] Endpoint de inscrição / CRM ou automação (`NEXT_PUBLIC_REGISTRATION_ENDPOINT` ou Route Handler com chave server-side)
- [ ] Checkout oficial (se evento pago) + webhook de confirmação para o evento `purchase`
- [ ] Google Tag Manager ID (`NEXT_PUBLIC_GTM_ID`) e/ou GA4 ID (`NEXT_PUBLIC_GA4_ID`)
- [ ] Ferramenta de consentimento de cookies (LGPD) antes de carregar GTM/GA4
- [ ] Decidir se haverá comunicações promocionais → `marketingConsent: true`

## Institucional / jurídico
- [ ] URL da Política de Privacidade (`privacyPolicyUrl`) — obrigatória para o checkbox do formulário
- [ ] URL dos Termos (`termsUrl`)
- [ ] E-mail oficial de contato (`contactEmail`)
- [ ] Redes sociais oficiais (`instagramUrl`, `youtubeUrl`, outras)
- [ ] Dados oficiais para o JSON-LD Organization (URL do site, logo, redes)

## Domínio e SEO
- [ ] Domínio oficial (`NEXT_PUBLIC_SITE_URL`) → canonical, og:image absoluta, `robots.txt` e `sitemap.xml` (substituir `SEU-DOMINIO`)

## Imagens
- [ ] Tokyo — Shibuya à noite ou Tokyo Tower (card de destino)
- [ ] Kyoto — Fushimi Inari ou ruas históricas
- [ ] Nara — Parque de Nara e os cervos
- [ ] Osaka — Dotonbori à noite
- [ ] (Opcional) fotos reais de aulas/eventos da Academia da Magia
- [ ] Autorização de uso de imagem da pessoa que aparece nas fotos fornecidas
- Usar apenas imagens próprias ou licenciadas.

## Checklist final
- [ ] Testar envio real (sucesso, erro, sem conexão) e o redirecionamento para `/imersao-japao/obrigado/`
- [ ] Lighthouse/PageSpeed mobile (LCP ≤ 2,5s, CLS ≤ 0,1)
- [ ] Testar 360, 390, 768, 1024 e 1440px; navegação só por teclado
- [ ] Console sem erros; nenhum link `#` vazio
