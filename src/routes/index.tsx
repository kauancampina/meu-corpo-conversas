import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Download,
  Heart,
  MessageCircleHeart,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";

import kitImageAsset from "@/assets/foto-do-produto.png.asset.json";
import carta1 from "@/assets/carta-1.png.asset.json";
import carta2 from "@/assets/carta-2.png.asset.json";
import carta3 from "@/assets/carta-3.png.asset.json";
import carta4 from "@/assets/carta-4.png.asset.json";
import carta5 from "@/assets/carta-5.png.asset.json";
import paulaAsset from "@/assets/paula-rocha.png.asset.json";

const kitImage = kitImageAsset.url;
const cardSamples = [carta1, carta2, carta3, carta4, carta5].map((a) => a.url);
const paulaImage = paulaAsset.url;
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meu Corpo é Meu | Roda de Conversa" },
      {
        name: "description",
        content:
          "Material educativo para conduzir conversas seguras e acolhedoras sobre corpo, limites e proteção infantil.",
      },
      { property: "og:title", content: "Meu Corpo é Meu | Roda de Conversa" },
      {
        property: "og:description",
        content: "Converse sobre corpo, limites e segurança com leveza e confiança.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Links de checkout dos planos
const CHECKOUT_KIT_BASICO = "https://pay.cakto.com.br/8hy65w5_1079712";
const CHECKOUT_KIT_COMPLETO = "https://pay.cakto.com.br/3277d5h_1080414";

const pains = [
  "Você sabe que essa conversa é importante, mas não encontra as palavras certas.",
  "Tem receio de assustar, confundir ou falar além do necessário para a idade.",
  "A criança muda de assunto — e você não sabe como tornar o momento natural.",
];

const testimonials: Array<[string, string, string]> = [
  ["Mariana S.", "Mãe de duas crianças", "Finalmente consegui conversar sem transformar o assunto em uma palestra. As cartas deixaram tudo leve e espontâneo."],
  ["Camila R.", "Professora da Educação Infantil", "Usei em roda com a turma e me surpreendi com a qualidade das conversas. O material dá segurança para mediar."],
  ["Renata M.", "Psicóloga infantil", "Cuidadoso, direto e respeitoso com cada fase. É o tipo de recurso que aproxima os adultos das crianças."],
  ["Juliana A.", "Mãe e educadora", "Minha filha começou a nomear limites com muito mais clareza. Foi uma conversa tranquila e muito necessária."],
  ["Patrícia L.", "Coordenadora pedagógica", "O guia é prático, bonito e sensível. Nossa equipe ganhou um caminho claro para abordar proteção sem medo."],
];

const faqs = [
  ["Para qual idade o material é indicado?", "As atividades foram pensadas para crianças de 4 a 10 anos, com orientações para adaptar a linguagem a cada fase."],
  ["Preciso ser profissional da educação?", "Não. O passo a passo foi criado para mães, pais, responsáveis e educadores conduzirem as conversas com segurança."],
  ["Como recebo o material?", "O acesso é digital e liberado após a confirmação da compra. Você pode baixar, imprimir e usar quantas vezes quiser em seu contexto familiar ou turma."],
  ["Preciso imprimir tudo?", "Não. Você escolhe o que faz sentido para cada encontro. O guia também pode ser consultado pelo celular, tablet ou computador."],
  ["E se eu não gostar?", "Você tem 7 dias para conhecer o material. Se ele não fizer sentido para você, basta solicitar o reembolso dentro desse prazo."],
];

function Countdown() {
  const [seconds, setSeconds] = useState(14 * 60 + 59);
  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((value) => (value > 0 ? value - 1 : 14 * 60 + 59)), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return (
    <div className="countdown" aria-label={`Oferta termina em ${min} minutos e ${sec} segundos`}>
      <div className="countdown-inner">
      <Clock3 aria-hidden="true" />
      <span>Condição especial termina em</span>
      <strong>{min}:{sec}</strong>
      </div>
    </div>
  );
}

const purchaseActivity = [
  ["Mariana S.", "São Paulo"],
  ["Camila R.", "Belo Horizonte"],
  ["Juliana M.", "Curitiba"],
  ["Patrícia A.", "Salvador"],
  ["Renata C.", "Recife"],
  ["Fernanda L.", "Goiânia"],
];

function PurchaseActivity() {
  const [visible, setVisible] = useState(false);
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    const showFirst = window.setTimeout(() => setVisible(true), 3000);
    const rotate = window.setInterval(() => {
      setActivityIndex((current) => (current + 1) % purchaseActivity.length);
      setVisible(true);
    }, 10000);
    return () => {
      window.clearTimeout(showFirst);
      window.clearInterval(rotate);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const hide = window.setTimeout(() => setVisible(false), 6000);
    return () => window.clearTimeout(hide);
  }, [visible, activityIndex]);

  const activity = purchaseActivity[activityIndex];
  if (!visible || !activity) return null;

  return (
    <aside className="purchase-toast" aria-live="polite">
      <span className="purchase-toast-icon"><CircleCheck aria-hidden="true" /></span>
      <p><strong>{activity[0]}</strong>, de {activity[1]}, acabou de adquirir o <b>Kit Completo</b>.</p>
      <Button variant="ghost" size="icon" onClick={() => setVisible(false)} aria-label="Fechar notificação">
        <X aria-hidden="true" />
      </Button>
    </aside>
  );
}

function OfferButton({
  children,
  onClick,
  href,
  secondary = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  secondary?: boolean;
}) {
  const className = secondary ? "cta-button cta-secondary" : "cta-button";

  // Botão de checkout: abre o link de pagamento em nova aba
  if (href) {
    return (
      <Button asChild className={className}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
          <ArrowRight />
        </a>
      </Button>
    );
  }

  return (
    <Button asChild={!onClick} onClick={onClick} className={className}>
      {onClick ? <span>{children}<ArrowRight /></span> : <a href="#oferta">{children}<ArrowRight /></a>}
    </Button>
  );
}

const CONFETTI_COLORS = ["#7c5cbf", "#f2718a", "#f7c948", "#3fbdb5", "#a78bfa", "#ff9d76"];

function ConfettiBurst({ active }: { active: boolean }) {
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = document.createElement("canvas");
    canvas.className = "confetti-canvas";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      canvas.remove();
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Piece {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; rotation: number; vr: number;
      shape: number; opacity: number;
    }
    const pieces: Piece[] = [];
    const cx = w / 2;
    const cy = h * 0.28;
    for (let i = 0; i < 140; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 6 + Math.random() * 9;
      pieces.push({
        x: cx, y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: 5 + Math.random() * 7,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length]!,
        rotation: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.3,
        shape: Math.floor(Math.random() * 3),
        opacity: 1,
      });
    }

    let raf = 0;
    let frame = 0;
    const tick = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);
      let alive = false;
      for (const p of pieces) {
        p.vy += 0.22;
        p.vx *= 0.992;
        p.vy *= 0.992;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vr;
        if (frame > 70) p.opacity = Math.max(0, p.opacity - 0.03);
        if (p.opacity > 0 && p.y < h + 30) alive = true;
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        if (p.shape === 0) {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else if (p.shape === 1) {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2.4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -p.size / 2);
          ctx.lineTo(p.size / 2, p.size / 2);
          ctx.lineTo(-p.size / 2, p.size / 2);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }
      if (alive) {
        raf = requestAnimationFrame(tick);
      } else {
        canvas.remove();
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      canvas.remove();
    };
  }, [active]);

  return null;
}

function UpsellModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const goTo = (url: string) => {
    onOpenChange(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <ConfettiBurst active={open} />
      <DialogContent className="upsell-dialog" aria-describedby={undefined}>
        <button
          type="button"
          className="upsell-close"
          aria-label="Fechar e continuar com o Kit Básico"
          onClick={() => goTo(CHECKOUT_KIT_BASICO)}
        >
          <X aria-hidden="true" />
        </button>
        <DialogTitle className="upsell-title">Espera! Antes de escolher o Kit Básico...</DialogTitle>
        <p className="upsell-promo"><Sparkles aria-hidden="true" /> Oferta relâmpago: fechando sua compra agora, você garante todos os materiais do site pela <strong>metade do preço</strong>.</p>
        <p className="upsell-lead">Por apenas <strong>R$10 a mais</strong>, você pode levar o Kit Completo e ter acesso a muito mais materiais para trabalhar com seu filho.</p>


        <div className="upsell-compare">
          <div className="upsell-plan upsell-basic">
            <h3>Kit Básico</h3>
            <span className="upsell-price"><sup>R$</sup>9<sup>,99</sup></span>
            <ul>
              <li><Check /> Roda de Conversa “Meu Corpo é Meu”</li>
              <li><Check /> Material principal</li>
              <li><Check /> Cartas e perguntas</li>
            </ul>
          </div>
          <div className="upsell-plan upsell-complete">
            <span className="upsell-badge">Mais escolhido</span>
            <h3>Kit Completo</h3>
            <span className="upsell-price"><sup>R$</sup>19<sup>,99</sup></span>
            <ul>
              <li><Check /> Tudo do Kit Básico</li>
              <li><Check /> 500 Atividades Pedagógicas</li>
              <li><Check /> Cartilha Educativa</li>
              <li><Check /> Moldes de Brincadeiras Sensoriais</li>
              <li><Check /> Materiais organizados para facilitar a utilização</li>
              <li><Check /> Bônus exclusivos</li>
            </ul>
          </div>
        </div>

        <div className="upsell-bonus">
          <h3>Você também recebe 3 bônus exclusivos:</h3>
          <div className="upsell-bonus-list">
            {[
              [carta1.url, "Cartaz da Rede de Confiança"],
              [carta2.url, "Semáforo do Toque"],
              [carta3.url, "Mini Guia: “E agora, o que eu digo?”"],
            ].map(([src, title]) => (
              <div key={String(title)}>
                <img src={String(src)} alt={`Bônus: ${String(title)}`} loading="lazy" />
                <span>{String(title)}</span>
              </div>
            ))}
          </div>
          <strong className="upsell-free">GRÁTIS no Kit Completo</strong>
        </div>

        <p className="upsell-closing">Por apenas R$10 a mais, você leva muito mais conteúdo para colocar esse aprendizado em prática.</p>
        <p className="upsell-urgency"><Zap aria-hidden="true" /> Condição especial por tempo limitado</p>

        <Button className="cta-button upsell-cta" onClick={() => goTo(CHECKOUT_KIT_COMPLETO)}>
          Quero o Kit Completo por R$19,99 <ArrowRight />
        </Button>
        <button type="button" className="upsell-decline" onClick={() => goTo(CHECKOUT_KIT_BASICO)}>
          Não, prefiro continuar com o Kit Básico por R$9,99
        </button>
      </DialogContent>
    </Dialog>
  );
}

function Index() {
  const [exitOpen, setExitOpen] = useState(false);
  const [upsellOpen, setUpsellOpen] = useState(false);

  // Garante que a página sempre inicie no topo (sem restauração de scroll do navegador)
  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  useEffect(() => {
    let armed = false;
    const arm = window.setTimeout(() => { armed = true; }, 7000);
    const onLeave = (event: MouseEvent) => {
      if (armed && event.clientY <= 0 && !sessionStorage.getItem("exit-seen")) {
        sessionStorage.setItem("exit-seen", "1");
        setExitOpen(true);
      }
    };
    document.addEventListener("mouseleave", onLeave);
    return () => { window.clearTimeout(arm); document.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <main>
      <Countdown />

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles /> Educação que protege, conversa que aproxima</div>
          <h1>Ensine sobre corpo e limites <em>sem medo e sem constrangimento.</em></h1>
          <p className="hero-lead">Um material acolhedor e pronto para usar, que ajuda você a conduzir conversas essenciais sobre respeito, consentimento e proteção com a leveza que a infância merece.</p>
          <div className="hero-actions">
            <OfferButton>Quero conversar com segurança</OfferButton>
            <span><Download /> Acesso imediato e 100% digital</span>
          </div>
          <div className="trust-row">
            <span><CircleCheck /> Linguagem apropriada</span>
            <span><CircleCheck /> Criado para adultos e crianças</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-backdrop" />
          <img src={kitImage} alt="Embalagem do kit Roda de Conversa — Meu Corpo é Meu" width={1536} height={1024} />
        </div>
      </section>

      <section className="card-marquee" aria-label="Amostras das cartas do material">
        <div className="marquee-track">
          {[...cardSamples, ...cardSamples].map((src, i) => (
            <img key={i} src={src} alt="Exemplo de carta do material Roda de Conversa" loading="lazy" />
          ))}
        </div>
      </section>

      <section className="pain-section section-pad">
        <div className="section-heading narrow"><span className="kicker">Se isso parece familiar...</span><h2>Uma conversa importante não precisa ser uma conversa difícil.</h2></div>
        <div className="pain-grid">
          {pains.map((pain, index) => <article key={pain}><span>0{index + 1}</span><p>{pain}</p></article>)}
        </div>
        <p className="bridge-copy">Você não precisa improvisar. Precisa apenas do caminho certo — e de um recurso que transforme o cuidado em diálogo.</p>
      </section>

      <section className="intro-section section-pad">
        <div className="intro-art"><div className="quote-bubble"><MessageCircleHeart /><p>“Meu corpo merece respeito. Eu posso dizer não.”</p></div><div className="mini-card"><ShieldCheck /><strong>Proteção começa com informação.</strong></div></div>
        <div className="intro-copy"><span className="kicker">Apresentamos</span><h2>Roda de Conversa:<br /><em>Meu Corpo é Meu</em></h2><p>Um recurso educativo criado para abrir espaço para perguntas, escuta e confiança. Em vez de discursos prontos, você recebe perguntas guiadas, atividades e orientações que ajudam a criança a compreender o próprio corpo e reconhecer seus limites.</p><p>Tudo com sensibilidade, linguagem simples e sem antecipar conteúdos inadequados.</p><OfferButton>Conhecer o kit completo</OfferButton></div>
      </section>

      <section className="contents section-pad" id="conteudo">
        <div className="section-heading"><span className="kicker">Tudo em um só material</span><h2>Você recebe um caminho completo para conduzir a conversa.</h2><p>Abra, escolha uma proposta e comece. Nós organizamos cada etapa para você.</p></div>
        <div className="contents-grid">
          {[
            [BookOpen, "Guia do adulto", "Orientações claras, preparação e frases de apoio para mediar cada conversa."],
            [MessageCircleHeart, "36 cartas de conversa", "Perguntas acolhedoras para ouvir, refletir e fortalecer a autonomia da criança."],
            [ShieldCheck, "Atividades práticas", "Exercícios sobre partes íntimas, rede de confiança, segredos e consentimento."],
            [Download, "Arquivo digital em PDF", "Material em alta qualidade, pronto para imprimir em casa ou na escola."],
          ].map(([Icon, title, copy], index) => { const C = Icon as typeof BookOpen; return <article key={String(title)}><span className="item-number">0{index + 1}</span><div className="icon-box"><C /></div><h3>{String(title)}</h3><p>{String(copy)}</p></article>; })}
        </div>
      </section>

      <section className="audience section-pad">
        <div><span className="kicker">Feito para quem cuida</span><h2>Para criar uma rede de proteção em qualquer ambiente.</h2></div>
        <div className="audience-list">
          {["Mães, pais e responsáveis", "Professoras e educadores", "Psicólogas e terapeutas", "Escolas e projetos sociais"].map((item) => <div key={item}><Check /><span>{item}</span></div>)}
        </div>
      </section>

      <section className="testimonials section-pad" id="depoimentos">
        <div className="section-heading"><span className="kicker">Histórias reais</span><h2>Conversas que já começaram a transformar relações.</h2></div>
        <div className="testimonial-grid">
          {testimonials.map(([name, role, text], i) => <article key={name} className={i === 0 ? "featured-testimonial" : ""}><Quote /><div className="stars" aria-label="5 estrelas">{[1,2,3,4,5].map(n => <Star key={n} />)}</div><blockquote>“{text}”</blockquote><footer><span>{name.charAt(0)}</span><div><strong>{name}</strong><small>{role}</small></div></footer></article>)}
        </div>
      </section>

      <section className="bonus section-pad">
        <div className="section-heading"><span className="kicker">Seu kit fica ainda mais completo</span><h2>3 bônus para levar o aprendizado além.</h2></div>
        <div className="bonus-grid">
          {[
            ["Bônus 01", "Cartaz da Rede de Confiança", "Uma atividade visual para a criança reconhecer os adultos seguros a quem pode pedir ajuda.", "R$ 27"],
            ["Bônus 02", "Semáforo do Toque", "Recurso lúdico para diferenciar situações confortáveis, de atenção e de pedido de ajuda.", "R$ 37"],
            ["Bônus 03", "Mini guia: E agora, o que eu digo?", "Respostas acolhedoras para perguntas e situações que podem surgir durante as conversas.", "R$ 29"],
          ].map(([badge, title, copy, value]) => <article key={title}><span className="bonus-label">{badge}</span><Sparkles /><h3>{title}</h3><p>{copy}</p><small>Valor: <s>{value}</s></small><strong>GRÁTIS no Kit Completo</strong></article>)}
        </div>
      </section>

      <section className="pricing section-pad" id="oferta">
        <div className="section-heading"><span className="kicker">Escolha como começar</span><h2>Invista hoje em conversas que protegem para sempre.</h2><p>Mais materiais. Mais possibilidades. Um único investimento.</p></div>
        <div className="pricing-grid">
          <article className="plan basic"><div><span className="plan-type">Material essencial</span><h3>Kit Básico</h3><p>Para dar o primeiro passo com clareza.</p></div><ul><li><Check /> Roda de Conversa “Meu Corpo é Meu”</li><li><Check /> Material pronto para imprimir</li><li><Check /> Cartas e perguntas</li></ul><div className="not-included" aria-label="Não incluído no Kit Básico"><span><X /> 500 Atividades Pedagógicas</span><span><X /> Cartilha Educativa</span><span><X /> Moldes de Brincadeiras Sensoriais</span><span><X /> Bônus exclusivos</span></div><div className="price"><small>Pagamento único</small><span><sup>R$</sup>9<sup>,99</sup></span></div><OfferButton onClick={() => setUpsellOpen(true)} secondary>Quero o Kit Básico</OfferButton><div className="secure"><span><ShieldCheck /> Compra segura</span><span><Zap /> Acesso imediato</span></div></article>
          <article className="plan complete"><div className="popular">Mais escolhido</div><div><span className="plan-type">Experiência completa</span><h3>Kit Completo</h3><p>Por apenas R$10 a mais, você leva todo o Kit Completo.</p></div><ul><li><Check /> Roda de Conversa “Meu Corpo é Meu”</li><li><Check /> 500 Atividades Pedagógicas</li><li><Check /> Cartilha Educativa</li><li><Check /> Moldes de Brincadeiras Sensoriais</li><li><Check /> Materiais organizados para facilitar a utilização</li><li><Check /> Bônus exclusivos do Kit Completo</li></ul><div className="price"><small>Tudo por</small><span className="price-pulse"><sup>R$</sup>19<sup>,99</sup></span><em>TUDO POR R$19,99 — pagamento único</em></div><OfferButton href={CHECKOUT_KIT_COMPLETO}>Quero o Kit Completo</OfferButton><div className="secure"><span><ShieldCheck /> Compra segura</span><span><Zap /> Acesso imediato</span></div></article>
        </div>
      </section>

      <section className="expert section-pad" id="quem-criou">
        <div className="expert-inner">
          <div className="expert-photo">
            <img src={paulaImage} alt="Paula Rocha, criadora do material Roda de Conversa: Meu Corpo é Meu" width={440} height={440} />
          </div>
          <div className="expert-copy">
            <span className="kicker">Quem criou este material</span>
            <h2>Paula Rocha</h2>
            <p>Oi, eu sou a Paula Rocha, professora pedagógica com mais de 10 anos de experiência trabalhando com crianças. Ao longo dessa trajetória, percebi que alguns assuntos importantes, como corpo, limites, respeito e segurança, nem sempre são fáceis de conversar com uma criança. Por isso criei a Roda de Conversa: Meu Corpo é Meu, um material visual e interativo que ajuda mães, pais e educadores a conduzirem essas conversas de forma leve, lúdica e adequada à infância. Meu objetivo é tornar mais simples começar essa conversa e ajudar a criança a compreender seus próprios limites de uma maneira natural e acolhedora.</p>
          </div>
        </div>
      </section>

      <section className="guarantee section-pad"><div className="guarantee-seal"><ShieldCheck /><strong>7</strong><span>dias de<br />garantia</span></div><div><span className="kicker">Seu risco é zero</span><h2>Conheça o material por 7 dias.</h2><p>Explore as cartas, leia o guia e experimente as atividades. Se por qualquer motivo você sentir que o material não é para você, é só solicitar o reembolso dentro de 7 dias. Simples assim.</p></div></section>

      <section className="faq section-pad" id="faq"><div className="section-heading narrow"><span className="kicker">Perguntas frequentes</span><h2>Ainda ficou alguma dúvida?</h2></div><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta section-pad"><Heart /><span className="kicker">Uma conversa pode mudar tudo</span><h2>Dê à criança palavras para reconhecer seus limites — e confiança para pedir ajuda.</h2><p>Comece hoje, no ritmo de vocês, com um material feito para acolher e proteger.</p><OfferButton>Quero começar essa conversa</OfferButton><small><ShieldCheck /> 7 dias de garantia • acesso imediato</small></section>

      <footer className="footer"><div className="brand"><span className="brand-mark"><Heart /></span><span>MEU CORPO<br /><b>É MEU</b></span></div><p>© 2026 Meu Corpo é Meu. Todos os direitos reservados.</p><div><a href="#faq">Dúvidas</a><a href="#oferta">Comprar</a></div></footer>

      <PurchaseActivity />
      <UpsellModal open={upsellOpen} onOpenChange={setUpsellOpen} />

      <Dialog open={exitOpen} onOpenChange={setExitOpen}><DialogContent className="promo-dialog"><span className="dialog-icon"><Heart /></span><DialogTitle>Antes de ir…</DialogTitle><DialogDescription>Leve agora o Kit Completo com os 3 bônus e comece essa conversa com mais segurança.</DialogDescription><div className="dialog-offer"><span>Condição desta página</span><strong>Kit Completo por R$ 19,99</strong></div><DialogClose asChild><Button asChild className="cta-button"><a href="#oferta">Ver a oferta completa <ArrowRight /></a></Button></DialogClose><DialogClose asChild><Button variant="ghost">Agora não</Button></DialogClose></DialogContent></Dialog>
    </main>
  );
}
