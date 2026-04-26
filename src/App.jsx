import { motion } from "motion/react";
import { Instagram, Mail, Mountain, Bike, Dumbbell, ArrowRight, Trophy, Globe, Calendar, Flag, ExternalLink } from "lucide-react";

const ATLETA = {
  nome: "RAFAEL MOREIRA",
  subtitulo: "Trail Runner & Skyrunner Brasileiro",
  bio1: `Atleta de elite nas modalidades de Trail Running e Skyrunning, com resultados expressivos em competições nacionais e internacionais. Campeão internacional, representante da Seleção Brasileira e múltiplo pódio no Campeonato Brasileiro de Skyrunning.`,
  bio2: `Minha corrida é movida pela busca constante por evolução, nas montanhas, na mente e na técnica. Cada trilha é um novo desafio para descobrir até onde posso chegar.`,
  instagram: "https://www.instagram.com/rafaelmoreira.a/",
  instagramHandle: "@rafaelmoreira.a",
  strava: "https://www.strava.com/athletes/65485288",
  itra: "https://itra.run/RunnerSpace/moreira.rafael.5275971",
  email: "rafaelmoreira.trail@gmail.com",
};

const STATS = [
  { valor: "1x", label: "Campeão Internacional" },
  { valor: "+10x", label: "Pódio Nacional" },
  { valor: "1x", label: "Seleção Brasileira" },
  { valor: "15km 900m+", label: "vitória na Suíça e recorde do percuso" },
];

const RESULTADOS = [
  { ano: "2024", posicao: "1º", evento: "Greina — Suíça", detalhe: "15km · 900D+ · Campeão Internacional", destaque: true },
  { ano: "2023", posicao: "3º", evento: "VK Open", detalhe: "Ranking Mundial", destaque: true },
  { ano: "2025", posicao: "Top 3", evento: "Jaraguá Sky", detalhe: "Santa Catarina", destaque: false },
  { ano: "2025", posicao: "4º", evento: "La Misión", detalhe: "35km · Passa Quatro, MG", destaque: false },
  { ano: "2025", posicao: "6º", evento: "Paraty Brazil UTMB", detalhe: "27km · Paraty, RJ", destaque: false },
  { ano: "–", posicao: "🥈", evento: "Campeonato Brasileiro de Skyrunning", detalhe: "Medalha de Prata", destaque: false },
  { ano: "–", posicao: "🥉", evento: "Campeonato Brasileiro de Skyrunning", detalhe: "Medalha de Bronze", destaque: false },
  { ano: "2024", posicao: "", evento: "Seleção Brasileira", detalhe: "Representante Nacional 2024", destaque: true },
];

const PROXIMAS_PROVAS = [
  {
    evento: "Adventure Race — The New Journey",
    detalhe: "21km · Pirenópolis, GO · 01 Mai 2026",
    url: "https://adventurerace.com.br/",
  },
  {
    evento: "Cambotas Trail Fest",
    detalhe: "27km · Barão de Cocais, MG · 22-23 Mai 2026",
    url: "https://www.cambotastrailfest.com.br/",
  },
  {
    evento: "La Misión Brasil",
    detalhe: "35km · Passa Quatro, MG · 12-16 Ago 2026",
    url: "https://www.lamisionbrasil.com.br/",
  },
  {
    evento: "Insanity Mountain — Chapada dos Veadeiros",
    detalhe: "Chapada dos Veadeiros, GO · 28-30 Ago 2026",
    url: "https://insanitymountain.com.br/",
  },
  {
    evento: "Paraty Brazil by UTMB",
    detalhe: "27km · Paraty, RJ · 17-20 Set 2026",
    url: "https://paraty.utmb.world/",
  },
  {
    evento: "Xterra Trail Brasília",
    detalhe: "Brasília, DF · 2026",
    url: "https://www.xterrabrasil.com.br/",
  },
  {
    evento: "Meia Maratona de Rua",
    detalhe: "Goiânia, GO · Em breve",
    url: null,
  },
];

const EQUIPE = [
  {
    nome: "Alex Tomé",
    papel: "Treinador",
    instagram: "https://www.instagram.com/tome.alex/",
    logo: "/fotos/logo-at-running.png",
  },
  {
    nome: "Lari Alonso",
    papel: "Nutricionista",
    instagram: "https://www.instagram.com/nutri.larialonso",
    logo: null,
  },
  {
    nome: "Daiane Zanqueta",
    papel: "Psicóloga Esportiva",
    instagram: "https://www.instagram.com/daianezanqueta/",
    logo: null,
  },
];

const APOIADORES = [
  {
    nome: "Mundo Terra Goiânia",
    papel: "Equipamentos Outdoor & Trail",
    instagram: "https://www.instagram.com/mundoterragoiania/",
    logo: "/fotos/logo-mundo-terra.png",
  },
  {
    nome: "",
    papel: "Alimentação Saudável",
    instagram: "https://www.instagram.com/quitandadobem/",
    logo: "/fotos/logo-quitanda.png",
  },
];

const TREINOS = [
  {
    Icon: Mountain,
    titulo: "Trail Running",
    texto: "Especialista em provas de alta montanha e terrenos técnicos. Treinos focados em ganho de altitude, resistência e eficiência em trilhas.",
  },
  {
    Icon: Bike,
    titulo: "Cross Training",
    texto: "Ciclismo e treinos complementares para manutenção da capacidade aeróbica e recuperação ativa.",
  },
  {
    Icon: Dumbbell,
    titulo: "Força & Mobilidade",
    texto: "Trabalho funcional orientado pelo treinador Alex Tomé, com foco em trailrunning.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function Img({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
}

export default function App() {
  const handleEmail = () => { window.location.href = `mailto:${ATLETA.email}`; };

  return (
    <div className="size-full bg-black text-white overflow-y-auto">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-10" />
        <Img
          src="/fotos/IMG_5134.JPG"
          alt="Rafael Moreira correndo em montanha com névoa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-20 text-center px-6"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-orange-400 mb-4 font-medium">
            Trail Runner · Skyrunner · Seleção Brasileira
          </p>
          <h1 className="text-6xl md:text-9xl mb-6 tracking-tight font-black">{ATLETA.nome}</h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto tracking-wide">{ATLETA.subtitulo}</p>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-orange-400 mb-2">{s.valor}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOBRE — branco */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl mb-8 font-black">Sobre</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">{ATLETA.bio1}</p>
              <p className="text-xl text-gray-600 leading-relaxed">{ATLETA.bio2}</p>
            </div>
            <div className="relative h-[600px] rounded-sm overflow-hidden">
              <Img
                src="/fotos/IMG_6338.JPG"
                alt="Rafael Moreira escalando rocha com vista das montanhas"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESULTADOS — branco com fundo foto */}
      <section className="py-32 px-6 relative text-white border-t border-gray-100">
        <div className="absolute inset-0 z-0">
          <img src="/fotos/IMG_4912.JPG" alt="Rafael Moreira correndo na Suíça" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="flex items-center gap-4 mb-20">
            <Trophy className="w-10 h-10 text-orange-400" />
            <h2 className="text-5xl font-black text-white">Resultados</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {RESULTADOS.map((r, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.08 }}
                className={`p-8 border rounded-sm backdrop-blur-sm ${r.destaque ? "border-orange-400/60 bg-orange-500/20" : "border-white/20 bg-white/10"}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-3xl font-black mb-1 text-white">{r.posicao}</div>
                    <div className="text-xl font-bold text-white">{r.evento}</div>
                    <div className="text-gray-300 mt-1 text-sm">{r.detalhe}</div>
                  </div>
                  {r.ano !== "–" && (
                    <span className="text-xs font-bold text-gray-300 border border-white/30 px-2 py-1 rounded-sm shrink-0">{r.ano}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRÓXIMAS PROVAS — preto */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="flex items-center gap-4 mb-16">
            <Calendar className="w-10 h-10 text-orange-400" />
            <h2 className="text-5xl font-black">Próximas Provas</h2>
          </motion.div>
          <div className="flex flex-col gap-4">
            {PROXIMAS_PROVAS.map((p, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.07 }}>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-6 border border-zinc-800 hover:border-orange-500/50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <Flag className="w-5 h-5 text-orange-400 shrink-0" />
                      <div>
                        <div className="font-bold text-lg group-hover:text-orange-400 transition-colors">{p.evento}</div>
                        <div className="text-gray-500 text-sm">{p.detalhe}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-orange-400 transition-colors shrink-0" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between p-6 border border-zinc-800 opacity-60">
                    <div className="flex items-center gap-4">
                      <Flag className="w-5 h-5 text-zinc-600 shrink-0" />
                      <div>
                        <div className="font-bold text-lg">{p.evento}</div>
                        <div className="text-gray-600 text-sm">{p.detalhe}</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TREINO — branco */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeInUp} className="text-5xl mb-20 font-black">Treino & Estilo de Vida</motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {TREINOS.map(({ Icon, titulo, texto }, i) => (
              <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }}>
                <Icon className="w-12 h-12 mb-4" />
                <h3 className="text-3xl mb-4 font-bold">{titulo}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA — preto */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-[700px] overflow-hidden rounded-sm">
              <Img
                src="/fotos/IMG_5136.JPG"
                alt="Rafael Moreira cruzando a fita no Jaraguá Sky"
                className="w-full h-full object-contain bg-black hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-[700px] overflow-hidden rounded-sm">
              <Img
                src="/fotos/IMG_5037.JPG"
                alt="Rafael Moreira comemorando com champanhe em Jaguá de Goiás"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="grid md:grid-cols-3 gap-6">
            <div className="relative h-[400px] overflow-hidden rounded-sm">
              <Img
                src="/fotos/IMG_5134.JPG"
                alt="Rafael Moreira correndo com névoa na montanha"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-sm">
              <Img
                src="/fotos/IMG_5135.JPG"
                alt="Rafael Moreira correndo na trilha ao amanhecer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-sm">
              <Img
                src="/fotos/IMG_6813.JPG"
                alt="Rafael Moreira atravessando rio em competição"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* EQUIPE & APOIADORES — branco */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">

          {/* Equipe de Preparação */}
          <motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-5xl font-black mb-4">Equipe de Preparação</h2>
            <p className="text-gray-500 text-lg mb-12">Os profissionais que me ajudam a chegar ao topo</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EQUIPE.map((a, i) => (
                <div key={i} className="text-center p-8 border border-gray-200 rounded-sm hover:border-orange-400 transition-colors">
                  <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4">
                    {a.logo ? (
                      <img src={a.logo} alt={a.nome} className="w-full h-full object-contain" />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center text-2xl font-black text-orange-500">
                        {a.nome.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="text-xl font-bold">{a.nome}</div>
                  <div className="text-orange-500 text-sm mt-1 uppercase tracking-wider mb-3">{a.papel}</div>
                  {a.instagram && (
                    <a href={a.instagram} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-400 hover:text-black transition-colors text-sm">
                      <Instagram className="w-4 h-4" />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Apoiadores */}
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl font-black mb-4">Apoiadores</h2>
            <p className="text-gray-500 text-lg mb-12">Marcas que acreditam na minha jornada</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {APOIADORES.map((a, i) => (
                <div key={i} className="text-center p-8 border border-gray-200 rounded-sm hover:border-orange-400 transition-colors">
                  <div className="w-32 h-24 flex items-center justify-center mx-auto mb-4">
                    {a.logo ? (
                      <img src={a.logo} alt={a.nome} className="w-full h-full object-contain" />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center text-2xl font-black text-orange-500">
                        {a.nome.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="text-xl font-bold">{a.nome}</div>
                  <div className="text-orange-500 text-sm mt-1 uppercase tracking-wider mb-3">{a.papel}</div>
                  {a.instagram && (
                    <a href={a.instagram} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-400 hover:text-black transition-colors text-sm">
                      <Instagram className="w-4 h-4" />
                      <span>Instagram</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA patrocinadores */}
          <motion.div {...fadeInUp} className="mt-16 text-center p-10 border border-dashed border-gray-300 rounded-sm">
            <p className="text-gray-500 text-lg mb-2">Interessado em patrocinar um atleta de elite?</p>
            <p className="text-black font-bold text-xl">Seu logotipo poderia estar aqui. 🚀</p>
          </motion.div>
        </div>
      </section>

      {/* REDES SOCIAIS — preto */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-5xl mb-8 font-black">Acompanhe a minha Jornada</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Treinos diários, corridas e resultados oficiais</p>
          </motion.div>
          <motion.div {...fadeInUp} className="flex justify-center gap-8 flex-wrap">
            <a href={ATLETA.instagram} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-gray-400 hover:text-white transition-colors group">
              <Instagram className="w-8 h-8" />
              <span>{ATLETA.instagramHandle}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href={ATLETA.strava} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-gray-400 hover:text-white transition-colors group">
              <Globe className="w-8 h-8" />
              <span>Strava</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href={ATLETA.itra} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl text-gray-400 hover:text-white transition-colors group">
              <Trophy className="w-8 h-8" />
              <span>ITRA — Perfil Oficial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTATO — branco */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-5xl mb-8 font-black">Vamos Conversar?</h2>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              Interessado em parceria, patrocínio ou colaboração? Entre em contato para discutirmos como podemos trabalhar juntos.
            </p>
            <p className="text-gray-400 mb-12">Atleta de elite com presença nacional e internacional — resultados comprovados no ranking mundial.</p>
            <button onClick={handleEmail}
              className="inline-flex items-center gap-4 bg-black text-white px-12 py-6 rounded-sm text-lg hover:bg-orange-500 transition-colors group cursor-pointer font-bold">
              <Mail className="w-6 h-6" />
              <span>Enviar Mensagem</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 bg-black border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2 font-black text-white tracking-widest">RAFAEL MOREIRA</p>
          <p className="text-sm text-gray-500">Trail Runner · Skyrunner </p>
          <p className="text-sm text-gray-600 mt-4">&copy; 2026 Rafael Moreira. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
