import { Link } from "react-router-dom";
import DynamicIcon from "./DynamicIcon";

export default function Logo() {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-2 font-serif text-xl font-semibold tracking-tight text-amber-700 dark:text-amber-400"
    >
      <DynamicIcon icon="Shell" size="lg" className="text-amber-600 dark:text-amber-300" />
      <span>Áurea Web</span>
      <span className="text-xs font-mono text-amber-500 dark:text-amber-600 font-normal">
        Φ
      </span>
    </Link>
  );
}