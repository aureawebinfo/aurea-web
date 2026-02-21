import logo_aurea from "/logo_aurea.png";

export default function Logo() {
  return (
    <a
      href="/"
      className="flex items-center gap-2 font-serif text-xl font-semibold tracking-tight text-amber-700 dark:text-amber-400"
    >
      <img src={logo_aurea} alt="Áurea Web" className="h-8" />
      <span>Áurea Web</span>
      <span className="text-xs font-mono text-amber-500 dark:text-amber-600 font-normal">
        Φ
      </span>
    </a>
  );
}
