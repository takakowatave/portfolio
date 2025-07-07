import { SiGithub, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-100">
      <div className="flex justify-center gap-6">
      <a
        href="https://github.com/takakowatave"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub className="w-6 h-6 text-gray-400 hover:text-gray-900 transition-colors" />
      </a>
      <a
        href="https://x.com/kiko_furby"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiX className="w-6 h-6 text-gray-400 hover:text-gray-900 transition-colors" />
      </a>
      </div>
      <p className="mt-2 text-center text-gray-400">© 2025 kikotkk</p>
    </footer>
  
  );
}
