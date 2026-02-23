import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <p className="text-sm font-sans tracking-[0.3em] uppercase text-foreground/50 mb-4">Page not found</p>
        <h1 className="font-serif text-7xl md:text-9xl font-light text-primary mb-6">404</h1>
        <div className="w-16 h-px bg-accent mx-auto mb-6" />
        <p className="font-sans text-foreground/60 mb-10 max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-block font-sans text-sm tracking-[0.2em] uppercase border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
