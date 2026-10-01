"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide";
import { MorphIcon } from "morphicons/react";

import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Inicio", href: "#" },
  { label: "Préstamos", href: "#" },
  { label: "Inversiones", href: "#" },
  { label: "Contáctanos", href: "#" },
];

export function Header({ grayScale = false, invert = false }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className={`h-16 flex lg:grid lg:grid-cols-3 gap-5 items-center bg-accent max-w-340 w-full px-5 md:rounded-full justify-between fixed top-0 md:top-3 left-1/2 -translate-x-1/2 z-100
        ${grayScale ? "grayscale-100" : ""}
        ${invert ? "invert-100" : ""}`}
    >
      <Link href="/" aria-label="Logo de treebank" className="dark:text-white text-black">
        <svg xmlns="http://www.w3.org/2000/svg" height="20" fill="currentColor" viewBox="0 0 53 9">
          <path fill="#007234"
            d="M2.484 3.612v3.216q0 .336.156.492.168.144.552.144h.78V8.88H2.916Q.792 8.88.792 6.816V3.612H0v-1.38h.792V.588h1.692v1.644h1.488v1.38zm3.776-.348q.324-.528.84-.828.528-.3 1.2-.3V3.9h-.444q-.792 0-1.2.372-.396.372-.396 1.296V8.88H4.58V2.232h1.68zm8.752 2.148q0 .36-.048.648h-4.86q.06.72.504 1.128t1.092.408q.936 0 1.332-.804h1.812a3.06 3.06 0 0 1-1.104 1.584q-.816.612-2.004.612-.96 0-1.728-.42A3.1 3.1 0 0 1 8.82 7.356q-.42-.78-.42-1.8 0-1.032.42-1.812t1.176-1.2 1.74-.42q.948 0 1.692.408.756.408 1.164 1.164.42.744.42 1.716m-1.74-.48q-.012-.648-.468-1.032-.456-.396-1.116-.396-.624 0-1.056.384-.42.372-.516 1.044zm8.546.48q0 .36-.048.648h-4.86q.06.72.504 1.128t1.092.408q.936 0 1.332-.804h1.812a3.06 3.06 0 0 1-1.104 1.584q-.816.612-2.004.612-.96 0-1.728-.42a3.1 3.1 0 0 1-1.188-1.212q-.42-.78-.42-1.8 0-1.032.42-1.812t1.176-1.2 1.74-.42q.948 0 1.692.408.756.408 1.164 1.164.42.744.42 1.716m-1.74-.48q-.012-.648-.468-1.032-.456-.396-1.116-.396-.624 0-1.056.384-.42.372-.516 1.044z" />
          <path fill="#currentcolor"
            d="M27.196 4.584q.708.132 1.164.708t.456 1.32q0 .672-.336 1.188-.324.504-.948.792t-1.476.288h-3.612V.504H25.9q.852 0 1.464.276.624.276.936.768.324.492.324 1.116 0 .732-.396 1.224-.384.492-1.032.696m-3.072-.624h1.536q.6 0 .924-.264.324-.276.324-.78t-.324-.78-.924-.276h-1.536zm1.692 3.552q.612 0 .948-.288.348-.288.348-.816 0-.54-.36-.84-.36-.312-.972-.312h-1.656v2.256zm3.307-1.98q0-1.008.396-1.788.408-.78 1.092-1.2.696-.42 1.548-.42.744 0 1.296.3.564.3.9.756v-.948h1.692V8.88h-1.692v-.972a2.54 2.54 0 0 1-.9.78q-.564.3-1.308.3-.84 0-1.536-.432a3.1 3.1 0 0 1-1.092-1.212q-.396-.792-.396-1.812m5.232.024q0-.612-.24-1.044a1.64 1.64 0 0 0-.648-.672 1.7 1.7 0 0 0-.876-.24q-.468 0-.864.228t-.648.672q-.24.432-.24 1.032t.24 1.056q.252.444.648.684.408.24.864.24.468 0 .876-.228.408-.24.648-.672.24-.444.24-1.056m6.417-3.42q1.188 0 1.92.756.732.744.732 2.088v3.9h-1.68V5.208q0-.792-.396-1.212-.396-.432-1.08-.432-.696 0-1.104.432-.396.42-.396 1.212V8.88h-1.68V2.232h1.68v.828q.336-.432.852-.672a2.64 2.64 0 0 1 1.152-.252m7.586 6.744-2.256-2.832V8.88h-1.68V0h1.68v5.052l2.232-2.82h2.184L47.59 5.568l2.952 3.312z" />
          <path fill="#007234"
            d="M51.574 8.964q-.456 0-.756-.276a.96.96 0 0 1-.288-.708q0-.42.288-.696.3-.288.756-.288.444 0 .732.288a.92.92 0 0 1 .288.696q0 .42-.288.708a1 1 0 0 1-.732.276" />
        </svg>
      </Link>

      <nav
        className={`px-5 md:p-0 absolute flex flex-col left-full top-16 bg-white justify-around h-[calc(100dvh-3.75rem)] w-screen md:block md:static md:top-auto md:left-auto md:h-auto md:w-auto md:bg-transparent
          ${!openMenu ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <ul className="flex flex-col gap-5 md:flex-row md:items-center justify-center md:gap-[clamp(1rem,2vw,2.5rem)] text-xl md:text-[clamp(.8rem,1.5vw,.9rem)]">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="md:border-b py-3 md:border-none md:hover:underline md:underline-offset-5 md:hover:text-green-800 md:dark:hover:text-green-500 transition-colors">{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 md:hidden justify-center">
          <Button
            nativeButton={false}
            variant="outline"
            className="w-full py-6 text-md"
            render={
              <Link href="/ingresar">
                Iniciar sesión
              </Link>
            }
          />
          <Button
            nativeButton={false}
            variant="ghost"
            className="w-full py-6 bg-green-800 text-white text-md"
            render={
              <Link href="/registrarse">
                Registrate ahora
              </Link>
            }
          />
        </div>
      </nav>

      <div className="hidden md:flex justify-end items-center gap-1">
        <Button
          nativeButton={false}
          variant="secondary"
          className="rounded-full p-[clamp(.6rem,1.5vw,1.3rem)] text-[clamp(.8rem,1.5vw,.9rem)]"
          render={
            <Link href="/ingresar">
              Iniciar sesión
            </Link>
          }
        />

        <Button
          nativeButton={false}
          variant="primary"
          className="rounded-full bg-green-800 hover:bg-bg-green-hover text-white p-[clamp(.6rem,1.5vw,1.3rem)] text-[clamp(.8rem,1.5vw,.9rem)]"
          render={
            <Link href="/registrarse">
              Registrarse
            </Link>
          }
        />
      </div>

      <Button
        nativeButton={true}
        onClick={() => setOpenMenu(!openMenu)}
        variant="ghost"
        className="p-0 block md:hidden"
        aria-label="botón de navegación"
      >
        <MorphIcon strokeWidth={1.5} icon={openMenu ? X : Menu} className="size-10 text-green-800" />
      </Button>
    </header>
  );
}

export default Header;