import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-16 ">
      <div className="mb-8 flex justify-center">
        <img
          src="/public/logo.png"
          alt="Logo de la empresa"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-3 text-center">
        <div>
          <h2 className="mb-4 text-xl font-semibold">Páginas</h2>
          <ul className="space-y-2">
            <li>
              <Link>
                Descubrir
              </Link>
            </li>
            <li>
              <Link to="/">
                Nuestra selección
              </Link>
              
            </li>
            <li>
              <Link to="/">
                Colecciones seleccionadas
              </Link>
            </li>
            <li>
              <Link to="/">
                Búsquedas populares
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">Legal y Cookies</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/">
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <Link to="/">
                Política de Cookies
              </Link>
            </li>
            <li>
              <Link to="/">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link to="/">
                Libro De Reclamaciones Virtual
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold">Contacto</h2>
          <div className="space-y-2">
            <p>Dirección:</p>
            <p>Cal. Condor No.100,</p>
            <p>Urb. Umacollo</p>
            <p>Yanahuara - Arequipa</p>
            <p className="mt-4">Correo de contacto:</p>
            <p>info@mipagina.com</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-4 border p-4">
        <a
          href="#"
          className="rounded-full bg-white p-4  text-[#722F37] hover:bg-white/90 border"
          aria-label="WhatsApp"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
        <a
          href="#"
          className="rounded-full bg-white p-4  text-[#722F37] hover:bg-white/90 border"
          aria-label="Facebook"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
          </svg>
        </a>
        <a
          href="#"
          className="rounded-full bg-white p-4  text-[#722F37] hover:bg-white/90 border"
          aria-label="TikTok"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Footer;
