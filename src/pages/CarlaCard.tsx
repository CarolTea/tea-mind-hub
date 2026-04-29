import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode";
import { toast } from "sonner";
import { MessageCircle, Globe, Share2, QrCode } from "lucide-react";
import carlaImg from "@/assets/carla-vicente.png";

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
    <main className="min-h-dvh bg-background text-foreground flex flex-col items-center px-6 py-10">
      <div className="w-full max-w-sm flex flex-col items-center">
        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mb-6">
          Tea Mind Business Hub
        </p>

        <div className="relative mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-accent/60 shadow-lg">
            <img
              src={carlaImg}
              alt="Carla Vicente"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <h1 className="font-serif text-3xl font-medium text-foreground text-center leading-tight">
          Carla Vicente
        </h1>
        <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mt-3 mb-10">
          Sommelier de Chá
        </p>

        <div className="w-full flex flex-col gap-3 mb-10">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground font-sans text-sm tracking-wider uppercase transition-opacity hover:opacity-90"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            WhatsApp
          </a>

          <Link
            to="/pt"
            className="h-14 w-full flex items-center justify-center gap-3 border border-foreground/30 text-foreground font-sans text-sm tracking-wider uppercase transition-colors hover:border-foreground/60"
          >
            <Globe className="w-4 h-4" strokeWidth={1.5} />
            Site Tea Mind
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className="h-14 w-full flex items-center justify-center gap-3 border border-accent/60 text-foreground font-sans text-sm tracking-wider uppercase transition-colors hover:border-accent"
          >
            <Share2 className="w-4 h-4" strokeWidth={1.5} />
            Compartilhar
          </button>
        </div>

        <div className="w-full flex flex-col items-center pt-8 border-t border-border/60">
          <div className="flex items-center gap-2 mb-4">
            <QrCode className="w-3 h-3 text-accent" strokeWidth={1.5} />
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Aponte para salvar o cartão
            </p>
          </div>
          <div className="p-4 bg-muted/40 border border-border/60">
            <canvas ref={canvasRef} aria-label="QR code do cartão de visitas" />
          </div>
        </div>

        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-12 text-center">
          Para instalar como app, use o menu do navegador, adicionar à tela inicial.
        </p>
      </div>
    </main>
  );
};

export default CarlaCard;