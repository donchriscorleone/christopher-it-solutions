import { links } from "@/app/utility/links";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col items-center gap-5 md:flex-row">
        <div className="flex justify-between items-center">
          {/* Footer Links */}
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white hover:text-gray-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Footer Text */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Christopher I.T Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
