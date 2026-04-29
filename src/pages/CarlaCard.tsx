import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode";
import { toast } from "sonner";
import { MessageCircle, Globe, Share2, QrCode } from "lucide-react";
import carlaImg from "@/assets/carla-vicente.png";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_NUMBER = "5521988340783";
const WHATSAPP_MESSAGE = "Olá Carla, vim pelo seu cartão digital.";

const CarlaCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    document.title = "Carla Vicente, Sommelier de Chá";

    const head = document.head;
    const added: HTMLElement[] = [];

    const addTag = (tag: string, attrs: Record<string, string>) => {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      head.appendChild(el);
      added.push(el);
    };

    addTag("link", { rel: "manifest", href: "/manifest.webmanifest" });
    addTag("meta", { name: "theme-color", content: "#1A2E1A" });
    addTag("link", { rel: "apple-touch-icon", href: "/carla-icon-192.png" });
    addTag("meta", { name: "apple-mobile-web-app-capable", content: "yes" });
    addTag("meta", { name: "apple-mobile-web-app-title", content: "Carla Vicente" });
    addTag("meta", { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" });

    const url = window.location.href;
    setPageUrl(url);

    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url, {
        width: 220,
        margin: 1,
        color: { dark: "#1A2E1A", light: "#F5F0E8" },
      }).catch(() => undefined);
    }

    return () => {
      added.forEach((el) => el.remove());
    };
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: "Carla Vicente, Sommelier de Chá",
      text: "Carla Vicente, Sommelier de Chá. Cartão de visitas digital.",
      url: pageUrl || window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
      await navigator.clipboard.writeText(shareData.url);
      toast.success("Link copiado para a área de transferência.");
    } catch {
      // user cancelled or unsupported, ignore
    }
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <main className="relative min-h-dvh text-primary-foreground flex flex-col items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/95 z-[1]" />
      <svg
        className="absolute inset-0 w-full h-full z-[2]"
        viewBox="0 0 400 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M-50 200 Q 100 170, 200 220 T 450 200" stroke="hsl(40 45% 57% / 0.18)" strokeWidth="0.8" className="hero-line" />
        <path d="M-50 400 Q 120 360, 220 410 T 450 390" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="1" className="hero-line-reverse" />
        <path d="M-50 600 Q 100 570, 200 620 T 450 600" stroke="hsl(40 45% 57% / 0.12)" strokeWidth="0.6" className="hero-line-slow" />
        <path d="M-50 750 Q 150 720, 250 760 T 450 740" stroke="hsl(0 0% 100% / 0.06)" strokeWidth="1" className="hero-line" />
        <circle cx="80" cy="220" r="2" fill="hsl(40 45% 57% / 0.3)" />
        <circle cx="320" cy="410" r="2.5" fill="hsl(0 0% 100% / 0.15)" />
        <circle cx="200" cy="620" r="2" fill="hsl(40 45% 57% / 0.25)" />
      </svg>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center px-6 py-12">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mb-8">
          Tea Mind Business Hub
        </p>

        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110" />
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-accent/70 shadow-2xl">
            <img
              src={carlaImg}
              alt="Carla Vicente"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <h1 className="font-serif text-4xl font-medium text-primary-foreground text-center leading-tight">
          Carla Vicente
        </h1>
        <div className="flex items-center gap-3 mt-4 mb-10">
          <span className="h-px w-8 bg-accent/60" />
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-accent">
            Sommelier de Chá
          </p>
          <span className="h-px w-8 bg-accent/60" />
        </div>

        <div className="w-full flex flex-col gap-3 mb-12">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-full flex items-center justify-center gap-3 bg-accent text-accent-foreground font-sans text-sm tracking-wider uppercase transition-opacity hover:opacity-90"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            WhatsApp
          </a>

          <Link
            to="/pt"
            className="h-14 w-full flex items-center justify-center gap-3 border border-primary-foreground/40 text-primary-foreground font-sans text-sm tracking-wider uppercase transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            <Globe className="w-4 h-4" strokeWidth={1.5} />
            Site Tea Mind
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="h-14 w-full flex items-center justify-center gap-3 border border-accent/60 text-primary-foreground font-sans text-sm tracking-wider uppercase transition-colors hover:border-accent hover:bg-accent/10"
          >
            <Share2 className="w-4 h-4" strokeWidth={1.5} />
            Compartilhar
          </button>
        </div>

        <div className="w-full flex flex-col items-center pt-10 border-t border-primary-foreground/15">
          <div className="flex items-center gap-2 mb-5">
            <QrCode className="w-3 h-3 text-accent" strokeWidth={1.5} />
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary-foreground/60">
              Aponte para salvar o cartão
            </p>
          </div>
          <div className="p-4 bg-background border border-accent/40 shadow-xl">
            <canvas ref={canvasRef} aria-label="QR code do cartão de visitas" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarlaCard;
