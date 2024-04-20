import { ModeToggle } from "@/components/mode-togggle";

export const Footer = () => {
  return (
    <footer className="border sticky top-full">
      <div className="container h-16 flex items-center justify-between">
        <p className="text-muted-foreground">&copy; taka</p>
        <ModeToggle />
      </div>
    </footer>
  );
};
