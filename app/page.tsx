import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Database,
  Globe2,
  Layers3,
  LineChart,
  Mail,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Zap,
    title: "AI Automation",
    description: "End-to-end workflow automation that removes repetitive manual work.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Custom AI assistants for lead handling, support, and operations.",
  },
  {
    icon: LineChart,
    title: "Lead Generation",
    description: "Automated lead capture, qualification, follow-up, and nurturing.",
  },
  {
    icon: Workflow,
    title: "Workflow Systems",
    description: "Connect your CRM, email, forms, calendar, and business tools.",
  },
  {
    icon: Globe2,
    title: "AI SEO / GEO",
    description: "Get found in Google and AI search engines with modern optimization.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Real-time dashboards for insights, ROI, and performance tracking.",
  },
];

const industries = [
  "Real Estate",
  "Healthcare",
  "Med Spas",
  "Home Services",
  "E-commerce",
  "Professional Services",
];

const steps = [
  {
    title: "Audit",
    description: "We map your manual workflows, tools, bottlenecks, and growth opportunities.",
  },
  {
    title: "Build",
    description: "We design AI agents, automations, integrations, and dashboards around your business.",
  },
  {
    title: "Scale",
    description: "We improve results, monitor performance, and turn your systems into growth assets.",
  },
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/fluxential-logo-short.png"
        alt="Fluxential"
        width={170}
        height={40}
        priority
      />
    </div>
  );
}

function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  if (variant === "secondary") {
    return (
      <a
        href="#services"
        className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href="#contact"
      className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet to-electric px-7 py-4 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
    >
      {children}
    </a>
  );
}

function WorkflowMockup() {
  return (
    <div className="gradient-border relative mx-auto w-full max-w-xl rounded-[2rem] p-5 shadow-violetGlow">
      <div className="absolute -inset-20 -z-10 rounded-full bg-electric/20 blur-3xl" />
      <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-electric/20 via-transparent to-violet/20" />

      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
        <div className="mb-5 grid grid-cols-3 gap-3">
          {[
            ["247", "Active Workflows"],
            ["1,120 hrs", "Time Saved"],
            ["+38%", "Avg. Growth"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-midnight/80 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="h-7 w-7 rounded-full bg-electric/20" />
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              </div>
              <p className="text-xl font-bold text-white">{value}</p>
              <p className="text-xs text-slate">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 items-center gap-4">
          <div className="rounded-2xl border border-electric/30 bg-electric/10 p-4 text-center">
            <Database className="mx-auto mb-2 h-6 w-6 text-electric" />
            <p className="text-sm font-semibold">Lead Capture</p>
          </div>
          <div className="h-px bg-gradient-to-r from-electric to-violet" />
          <div className="rounded-2xl border border-violet/30 bg-violet/10 p-4 text-center">
            <Sparkles className="mx-auto mb-2 h-6 w-6 text-violet" />
            <p className="text-sm font-semibold">AI Qualification</p>
          </div>
          <div className="col-start-1 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <Mail className="mx-auto mb-2 h-6 w-6 text-white" />
            <p className="text-sm font-semibold">CRM Update</p>
          </div>
          <div className="col-start-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
            <ArrowRight className="mx-auto mb-2 h-6 w-6 text-white" />
            <p className="text-sm font-semibold">Follow-up</p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-midnight/80 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-semibold">Performance</p>
            <p className="text-emerald-400">+42%</p>
          </div>
          <div className="flex h-24 items-end gap-2">
            {[30, 45, 35, 58, 50, 70, 64, 88].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-lg bg-gradient-to-t from-violet to-electric"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-midnight text-white">
      <div className="border-b border-white/10 bg-gradient-to-r from-electric/20 via-violet/20 to-electric/10 px-6 py-3 text-center text-sm text-white/90">
        <span className="mr-3 rounded-full bg-violet px-3 py-1 text-xs font-bold">NEW</span>
        Helping businesses automate operations & scale with intelligent systems
        <ArrowRight className="ml-2 inline h-4 w-4" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Logo />

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <a href="#" className="text-white">Home</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-violet to-electric px-5 py-3 text-sm font-semibold text-white shadow-glow md:inline-flex"
          >
            Book a Strategy Call
          </a>
        </div>
      </header>

      <section className="relative px-6 py-14 md:py-20">
        <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-silver">
              AI Automation & Growth Systems
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              AI Systems That Scale{" "}
              <span className="gradient-text">Businesses</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate md:text-xl">
              Fluxential builds intelligent automations, AI workflows, and growth
              systems that save time, reduce cost, and increase revenue.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button>
                Book a Free AI Strategy Call <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="secondary">
                <PlayCircle className="h-5 w-5" /> See How It Works
              </Button>
            </div>

            <div className="mt-10 grid gap-4 text-sm font-semibold text-white/85 sm:grid-cols-3">
              {["Increase Efficiency", "Reduce Manual Work", "Drive More Revenue"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-electric" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          <WorkflowMockup />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 text-sm font-semibold text-white/70 md:justify-between">
          <span className="text-xs uppercase tracking-[0.3em] text-slate">Trusted industries</span>
          {industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-24 text-midnight">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-violet">
              How We Help
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Scale With Intelligent Automation
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We create AI systems that automate operations, improve speed, and
              turn repetitive work into measurable growth.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <service.icon className="mb-6 h-9 w-9 text-violet" />
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-electric">
              Solutions
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Built for industries where speed matters.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate">
              Fluxential helps service businesses capture leads faster, respond
              instantly, automate follow-up, and reduce operational drag.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <div key={industry} className="gradient-border rounded-3xl p-6">
                <Layers3 className="mb-5 h-8 w-8 text-electric" />
                <h3 className="text-xl font-bold">{industry}</h3>
                <p className="mt-3 text-sm leading-6 text-slate">
                  AI workflows for intake, qualification, follow-up, reporting,
                  and customer experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white px-6 py-24 text-midnight">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-violet">
              Process
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              From manual workflows to intelligent systems.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-violet text-lg font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-black">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-6 py-24">
        <div className="absolute inset-x-0 bottom-0 -z-10 h-80 bg-gradient-to-t from-violet/20 to-transparent" />
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center shadow-violetGlow backdrop-blur md:p-14">
          <ShieldCheck className="mx-auto mb-6 h-12 w-12 text-electric" />
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Ready to automate your business?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate">
            Book a free AI strategy call and discover where automation can save
            time, reduce cost, and create growth inside your business.
          </p>
          <div className="mt-8">
            <a
              href="mailto:hello@fluxential.com"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet to-electric px-8 py-4 text-sm font-bold text-white shadow-glow transition hover:scale-[1.02]"
            >
              hello@fluxential.com <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <Logo />
          <p className="text-sm text-slate">
            © {new Date().getFullYear()} Fluxential. Intelligent Systems. Real Growth.
          </p>
        </div>
      </footer>
    </main>
  );
}
