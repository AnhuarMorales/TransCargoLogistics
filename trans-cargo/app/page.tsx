import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-dark/80 backdrop-blur-xl border-b border-orange/10">
        <Image 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20may%202026%2C%2010_56_10%20p.m.-xcCpxWNytfAQ5GR5QLqmJC3Vc5JaVG.png" 
          alt="Trans-Cargo Logistics" 
          width={180} 
          height={60}
          className="h-14 md:h-16 w-auto drop-shadow-[0_0_20px_rgba(244,123,32,0.5)]"
        />
        <div className="hidden md:flex items-center gap-10">
          <a href="#servicios" className="text-white/60 hover:text-orange text-sm font-medium transition-colors uppercase tracking-wider">Servicios</a>
          <a href="#roadmap" className="text-white/60 hover:text-orange text-sm font-medium transition-colors uppercase tracking-wider">Roadmap</a>
          <a href="#planes" className="text-white/60 hover:text-orange text-sm font-medium transition-colors uppercase tracking-wider">Planes</a>
          <a href="#rutas" className="text-white/60 hover:text-orange text-sm font-medium transition-colors uppercase tracking-wider">Rutas</a>
        </div>
        <a href="#contacto" className="bg-orange text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-orange/90 transition-all hover:shadow-[0_0_30px_rgba(244,123,32,0.4)]">
          Comenzar
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070"
            alt="Camiones de carga"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
        </div>
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange/30 to-transparent animate-pulse" />
          <div className="absolute bottom-1/3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange/20 to-transparent animate-pulse" style={{animationDelay: '1s'}} />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full pt-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-orange/10 border border-orange/30 px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
              <span className="text-orange text-xs font-bold uppercase tracking-[0.3em]">Plataforma B2B</span>
            </div>
            
            <h1 className="font-[var(--font-barlow-condensed)] text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] mb-8 tracking-tight">
              <span className="text-white">Trans</span><span className="text-orange">-Cargo</span><br/>
              <span className="text-white/90">Logistics</span>
            </h1>
            
            <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Conectamos empresas con transportistas verificados. Trazabilidad GPS, matching inteligente y operaciones seguras en Mexico.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#servicios" className="group bg-orange text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all hover:shadow-[0_0_40px_rgba(244,123,32,0.5)] flex items-center gap-3">
                Ver Servicios
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
          
          <div className="absolute right-6 md:right-12 bottom-12 md:bottom-24 flex flex-col gap-6 text-right">
            <div className="group">
              <div className="font-[var(--font-barlow-condensed)] text-5xl md:text-7xl font-black text-orange group-hover:scale-105 transition-transform">24/7</div>
              <div className="text-white/40 text-xs uppercase tracking-[0.2em]">Monitoreo GPS</div>
            </div>
            <div className="group">
              <div className="font-[var(--font-barlow-condensed)] text-5xl md:text-7xl font-black text-white group-hover:scale-105 transition-transform">100%</div>
              <div className="text-white/40 text-xs uppercase tracking-[0.2em]">Verificados</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 md:py-32 px-6 md:px-12 bg-dark relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Servicios</span>
              <h2 className="font-[var(--font-barlow-condensed)] text-5xl md:text-7xl font-black uppercase leading-none">
                Que <span className="text-orange">Ofrecemos</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { num: "01", title: "Verificacion Total", desc: "Validamos permisos, licencias, seguros y antecedentes de cada transportista.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" },
              { num: "02", title: "GPS Tiempo Real", desc: "Monitoreo 24/7 con alertas de retrasos, desvios y eventos criticos.", img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800" },
              { num: "03", title: "Matching Inteligente", desc: "Conectamos tu carga con el transportista ideal automaticamente.", img: "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800" },
              { num: "04", title: "Dashboard Operativo", desc: "Vista consolidada de envios, historial, KPIs y costos.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
              { num: "05", title: "Sistema Reputacion", desc: "Calificacion bidireccional que premia la calidad y confiabilidad.", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800" },
              { num: "06", title: "Alertas Push", desc: "Notificaciones sobre estatus, incidencias y actualizaciones.", img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800" },
            ].map((service, i) => (
              <div key={i} className="group relative h-80 overflow-hidden cursor-pointer">
                <Image src={service.img} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
                <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/20 transition-colors duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-orange/60 font-[var(--font-barlow-condensed)] text-6xl font-black absolute top-4 right-6 group-hover:text-orange/80 transition-colors">{service.num}</span>
                  <h3 className="font-[var(--font-barlow-condensed)] text-2xl font-bold uppercase mb-2 group-hover:text-orange transition-colors">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGEN BANNER */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=2000"
          alt="Flota de camiones"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="font-[var(--font-barlow-condensed)] text-5xl md:text-8xl font-black uppercase text-white mb-4">
              <span className="text-orange">+500</span> Transportistas
            </h2>
            <p className="text-white/60 text-lg">Red verificada en crecimiento</p>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="py-24 md:py-32 px-6 md:px-12 bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Desarrollo</span>
            <h2 className="font-[var(--font-barlow-condensed)] text-5xl md:text-7xl font-black uppercase">
              Roadmap <span className="text-orange">2026</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { phase: "Fase 1", title: "MVP", status: "En progreso", items: ["Registro y verificacion", "Publicacion de cargas", "Matching basico", "GPS tracking", "Notificaciones push"] },
              { phase: "Fase 2", title: "Beta", status: "Q3 2026", items: ["Matching inteligente", "Dashboard completo", "Sistema reputacion", "API integraciones", "Piloto Manzanillo-CDMX"] },
              { phase: "Fase 3", title: "Nacional", status: "Q4 2026", items: ["Cobertura Mexico", "IA predictiva", "Analitica avanzada", "ERP/TMS/WMS", "Expansion regional"] },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-px bg-gradient-to-b from-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-white/[0.02] border border-white/10 p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-orange text-xs font-bold uppercase tracking-wider">{step.phase}</span>
                    <span className="text-white/30 text-xs">{step.status}</span>
                  </div>
                  <h3 className="font-[var(--font-barlow-condensed)] text-4xl font-black uppercase text-white mb-6">{step.title}</h3>
                  <ul className="space-y-3">
                    {step.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-white/50 text-sm">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="py-24 md:py-32 px-6 md:px-12 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Precios</span>
            <h2 className="font-[var(--font-barlow-condensed)] text-5xl md:text-7xl font-black uppercase">
              Planes de <span className="text-orange">Suscripcion</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Basic", price: "Contactar", desc: "Operaciones pequenas", features: ["Verificacion basica", "Publicacion cargas", "GPS tracking", "Soporte email"] },
              { name: "Pro", price: "Contactar", desc: "Empresas en crecimiento", featured: true, features: ["Todo de Basic", "Matching inteligente", "Dashboard avanzado", "Soporte prioritario", "API acceso"] },
              { name: "Enterprise", price: "Custom", desc: "Soluciones a medida", features: ["Todo de Pro", "API dedicada", "Reportes custom", "Account manager", "SLA garantizado"] },
            ].map((plan, i) => (
              <div key={i} className={`relative group ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}>
                {plan.featured && <div className="absolute -top-4 left-0 right-0 h-1 bg-orange" />}
                <div className={`h-full p-8 transition-all ${plan.featured ? 'bg-orange/10 border-2 border-orange' : 'bg-white/[0.02] border border-white/10 group-hover:border-orange/30'}`}>
                  {plan.featured && <span className="inline-block bg-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4">Recomendado</span>}
                  <h3 className="font-[var(--font-barlow-condensed)] text-3xl font-black uppercase text-white mb-2">{plan.name}</h3>
                  <p className="text-white/40 text-sm mb-6">{plan.desc}</p>
                  <div className="mb-8">
                    <span className="font-[var(--font-barlow-condensed)] text-4xl font-black text-orange">{plan.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-white/60 text-sm">
                        <svg className="w-5 h-5 text-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contacto" className={`block text-center py-3 font-bold uppercase tracking-wider text-sm transition-all ${plan.featured ? 'bg-orange text-white hover:bg-orange/90' : 'border border-white/20 text-white hover:border-orange hover:text-orange'}`}>
                    Contactar
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RUTAS */}
      <section id="rutas" className="py-24 md:py-32 px-6 md:px-12 bg-dark relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Cobertura</span>
              <h2 className="font-[var(--font-barlow-condensed)] text-5xl md:text-7xl font-black uppercase leading-none mb-8">
                Rutas<br/><span className="text-orange">Mexico</span>
              </h2>
              <p className="text-white/40 mb-10 leading-relaxed">
                Corredores logisticos principales: puertos, fronteras y centros de distribucion.
              </p>
              
              <div className="space-y-4">
                {[
                  { route: "Manzanillo - CDMX", type: "Pacifico" },
                  { route: "Veracruz - CDMX", type: "Golfo" },
                  { route: "Lazaro Cardenas - Bajio", type: "Industrial" },
                  { route: "Nuevo Laredo - Monterrey", type: "Frontera" },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/[0.02] border border-white/10 group hover:border-orange/30 transition-colors">
                    <div className="w-3 h-3 bg-orange rounded-full group-hover:animate-pulse" />
                    <div className="flex-1">
                      <span className="text-white font-semibold">{r.route}</span>
                    </div>
                    <span className="text-orange/60 text-xs uppercase tracking-wider">{r.type}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200"
                alt="Logistica Mexico"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="relative py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000"
            alt="Carretera"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-[var(--font-barlow-condensed)] text-5xl md:text-8xl font-black uppercase mb-6">
            <span className="text-orange">Unete</span> Hoy
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Empresas y transportistas verificados. La logistica de Mexico evoluciona.
          </p>
          <a href="mailto:contacto@transcargo.mx" className="inline-flex items-center gap-3 bg-orange text-white px-10 py-5 font-bold uppercase tracking-wider text-lg hover:shadow-[0_0_60px_rgba(244,123,32,0.5)] transition-all">
            Contactar
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark border-t border-white/10 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2029%20may%202026%2C%2010_56_10%20p.m.-xcCpxWNytfAQ5GR5QLqmJC3Vc5JaVG.png" 
            alt="Trans-Cargo Logistics" 
            width={140} 
            height={48}
            className="h-10 w-auto drop-shadow-[0_0_6px_rgba(244,123,32,0.3)]"
          />
          <p className="text-white/30 text-sm">Trans-Cargo Logistics 2026</p>
        </div>
      </footer>
    </div>
  );
}
