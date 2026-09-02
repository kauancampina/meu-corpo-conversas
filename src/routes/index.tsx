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
  Users,
} from "lucide-react";

import kitImageAsset from "@/assets/foto-do-produto.png.asset.json";

const kitImage = kitImageAsset.url;
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
      <Clock3 aria-hidden="true" />
      <span>Condição especial por</span>
      <strong>{min}:{sec}</strong>
    </div>
  );
}

function OfferButton({ children, onClick, secondary = false }: { children: React.ReactNode; onClick?: () => void; secondary?: boolean }) {
  return (
    <Button asChild={!onClick} onClick={onClick} className={secondary ? "cta-button cta-secondary" : "cta-button"}>
      {onClick ? <span>{children}<ArrowRight /></span> : <a href="#oferta">{children}<ArrowRight /></a>}
    </Button>
  );
}

function Index() {
  const [exitOpen, setExitOpen] = useState(false);
  const [upsellOpen, setUpsellOpen] = useState(false);

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

  const buy = () => setUpsellOpen(true);

  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Meu Corpo é Meu — início">
          <span className="brand-mark"><Heart /></span>
          <span>MEU CORPO<br /><b>É MEU</b></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#conteudo">O que você recebe</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <Button asChild className="header-cta"><a href="#oferta">Quero o material</a></Button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles /> Educação que protege, conversa que aproxima</div>
          <Countdown />
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
          <div className="floating-note"><span>PDF + cartas</span><strong>Pronto para imprimir</strong></div>
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
        <div className="section-heading"><span className="kicker">Escolha como começar</span><h2>Invista hoje em conversas que protegem para sempre.</h2></div>
        <div className="pricing-grid">
          <article className="plan basic"><div><span className="plan-type">Material essencial</span><h3>Kit Básico</h3><p>Para dar o primeiro passo com clareza.</p></div><ul><li><Check /> Guia do adulto</li><li><Check /> 36 cartas de conversa</li><li><Check /> Atividades práticas</li><li className="disabled"><Check /> 3 materiais bônus</li></ul><div className="price"><small>Pagamento único</small><span><sup>R$</sup>37<sup>,00</sup></span></div><OfferButton onClick={buy} secondary>Quero o Kit Básico</OfferButton></article>
          <article className="plan complete"><div className="popular">Mais escolhido</div><div><span className="plan-type">Experiência completa</span><h3>Kit Completo</h3><p>Todos os recursos para aprofundar a proteção.</p></div><ul><li><Check /> Guia do adulto</li><li><Check /> 36 cartas de conversa</li><li><Check /> Atividades práticas</li><li><Check /> Cartaz Rede de Confiança</li><li><Check /> Semáforo do Toque</li><li><Check /> Mini guia de respostas</li></ul><div className="price"><small>De R$ 130 por apenas</small><span><sup>R$</sup>57<sup>,00</sup></span><em>ou 6x de R$ 10,35</em></div><OfferButton onClick={buy}>Quero o Kit Completo</OfferButton><small className="secure"><ShieldCheck /> Compra segura • acesso imediato</small></article>
        </div>
      </section>

      <section className="guarantee section-pad"><div className="guarantee-seal"><ShieldCheck /><strong>7</strong><span>dias de<br />garantia</span></div><div><span className="kicker">Seu risco é zero</span><h2>Conheça o material por 7 dias.</h2><p>Explore as cartas, leia o guia e experimente as atividades. Se por qualquer motivo você sentir que o material não é para você, é só solicitar o reembolso dentro de 7 dias. Simples assim.</p></div></section>

      <section className="faq section-pad" id="faq"><div className="section-heading narrow"><span className="kicker">Perguntas frequentes</span><h2>Ainda ficou alguma dúvida?</h2></div><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div></section>

      <section className="final-cta section-pad"><Heart /><span className="kicker">Uma conversa pode mudar tudo</span><h2>Dê à criança palavras para reconhecer seus limites — e confiança para pedir ajuda.</h2><p>Comece hoje, no ritmo de vocês, com um material feito para acolher e proteger.</p><OfferButton>Quero começar essa conversa</OfferButton><small><ShieldCheck /> 7 dias de garantia • acesso imediato</small></section>

      <footer className="footer"><div className="brand"><span className="brand-mark"><Heart /></span><span>MEU CORPO<br /><b>É MEU</b></span></div><p>© 2026 Meu Corpo é Meu. Todos os direitos reservados.</p><div><a href="#faq">Dúvidas</a><a href="#oferta">Comprar</a></div></footer>

      <Dialog open={exitOpen} onOpenChange={setExitOpen}><DialogContent className="promo-dialog"><span className="dialog-icon"><Heart /></span><DialogTitle>Antes de ir…</DialogTitle><DialogDescription>Leve agora o Kit Completo com os 3 bônus e comece essa conversa com mais segurança.</DialogDescription><div className="dialog-offer"><span>Condição desta página</span><strong>Kit Completo por R$ 57</strong></div><DialogClose asChild><Button asChild className="cta-button"><a href="#oferta">Ver a oferta completa <ArrowRight /></a></Button></DialogClose><DialogClose asChild><Button variant="ghost">Agora não</Button></DialogClose></DialogContent></Dialog>

      <Dialog open={upsellOpen} onOpenChange={setUpsellOpen}><DialogContent className="promo-dialog upsell-dialog"><span className="dialog-icon"><Sparkles /></span><DialogTitle>Complete sua jornada</DialogTitle><DialogDescription>Adicione o <strong>Kit de Histórias Protetoras</strong>, com 10 histórias ilustradas e perguntas de reflexão para continuar as conversas no dia a dia.</DialogDescription><div className="dialog-offer"><span>Oferta única pós-compra</span><strong>Por apenas R$ 17,00</strong></div><Button className="cta-button" onClick={() => setUpsellOpen(false)}>Sim, quero adicionar <ArrowRight /></Button><Button variant="ghost" onClick={() => setUpsellOpen(false)}>Não, quero seguir apenas com meu kit</Button></DialogContent></Dialog>
    </main>
  );
}