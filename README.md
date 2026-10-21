# Imersão Japão — Landing Page (Academia da Magia)

Next.js (App Router) + TypeScript + Tailwind CSS 4 + Lucide, com geração estática.

```bash
npm install
cp .env.example .env.local   # preencha o que já estiver confirmado
npm run dev                  # http://localhost:3000/imersao-japao/
npm run build && npm start
```

## Rotas
| Rota | Arquivo |
| --- | --- |
| `/imersao-japao/` | `app/imersao-japao/page.tsx` |
| `/imersao-japao/obrigado/` (noindex, nofollow) | `app/imersao-japao/obrigado/page.tsx` |
| `POST /api/inscricao/` | `app/api/inscricao/route.ts` |
| `/robots.txt`, `/sitemap.xml` | `app/robots.ts`, `app/sitemap.ts` |

`/` redireciona temporariamente para `/imersao-japao/` (`next.config.ts`) — remova se o domínio já tiver outra home.

## Onde editar
Toda a copy e a configuração estão em **`content/imersao-japao.ts`**. Campos vazios em `config` ficam ocultos
(hero) ou aparecem como "A definir" (inscrição). FAQ de gravação, certificado e duração só entra quando confirmado.

## Inscrições
1. Defina `NEXT_PUBLIC_REGISTRATION_ENDPOINT=/api/inscricao/`.
2. Defina `REGISTRATION_WEBHOOK_URL` (CRM/automação) e, se necessário, `REGISTRATION_WEBHOOK_TOKEN` (enviado como `Authorization: Bearer`).

O Route Handler valida os dados de novo e só responde 2xx se o CRM responder 2xx. Sem endpoint, o formulário mostra
o aviso de inscrições fechadas — nunca simula sucesso.

## Analytics e consentimento (LGPD)
Os eventos vão sempre para `window.dataLayer`. GTM/GA4 (`NEXT_PUBLIC_GTM_ID` / `NEXT_PUBLIC_GA4_ID`) só são
carregados depois do consentimento. A ferramenta de cookies deve executar:

```js
window.__analyticsConsent = true;
window.dispatchEvent(new Event('imersao:analytics-consent'));
```

## Estrutura
`components/`: Header, Hero, OpportunitySection, AudienceSection, CurriculumSection, DestinationsSection,
BenefitsSection, AcademySection, RegistrationSection + RegistrationForm, FAQSection, ClosingSection, Footer,
StickyMobileCTA, Accordion (módulos e FAQ), Analytics, CtaLink, Eyebrow.
`lib/`: `analytics.ts` (track/trackOnce) e `registration.ts` (validação e máscara usadas no cliente e no servidor).
`docs/referencia/`: protótipo HTML original do handoff.

Pendências antes de publicar: ver **PENDENCIAS.md**.
