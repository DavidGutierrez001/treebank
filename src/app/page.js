"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { Star, CircleCheck, Plane, Hamburger } from "lucide-react";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [fadeLoading, setFadeLoading] = useState(true);

  useEffect(() => {

    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setFadeLoading(false);

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "auto";
      }, 500);

    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`fixed inset-0 bg-background flex items-center justify-center text-bg-green transition-opacity duration-500 
        ${fadeLoading ? "opacity-100 z-50" : "opacity-0 -z-999"}`}>
        <Spinner id="spinner" className="size-15" />
      </div>
      <div id="content" className={`w-full h-full transition-all duration-1000 opacity-0 
      ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Header />

        <main
          id="contenido"
          tabIndex={-1}
          className="mt-16 md:mt-22 w-full flex flex-col items-center overflow-x-hidden bg-background focus:outline-none"
        >
          <section id="homeContent" className="relative overflow-hidden max-w-340 w-full gap-10 flex flex-col">
            <div className="flex flex-col justify-center items-center text-center pt-15 gap-10 md:gap-5">
              <h1 className="flex flex-col gap-2 font-poppins text-[clamp(2.7rem,5.5vw,3.75rem)] font-medium tracking-tight leading-none md:leading-tight">
                Tu dinero controlado.
                <span className="text-muted-foreground/80">Sin rodeos. Sin burocracia.</span>
              </h1>
              <Link className="bg-green-800 hover:bg-green-900 w-fit text-lg px-10 py-4 rounded-full cursor-pointer text-white" href="/registrarse">
                Únete ahora
              </Link>
            </div>

            <div className="relative h-[calc(100vh-16rem)]">
              <Image
                src="iphone-mockup2.svg"
                width={650}
                height={650}
                alt="imagen centrada de un teléfono mostrando la interfaz de la aplicacion"
                priority
                className="absolute left-1/2 -translate-x-1/2 translate-y-10 -rotate-12 w-full md:w-180">
              </Image>

              <Image
                src="/casa.webp"
                width={250}
                height={250}
                alt="imagen representando la compra de una vivienda"
                className="hidden lg:block absolute left-10 top-15 border-4 border-white rounded-xl shadow-2xl">
              </Image>

              <Image
                src="/telefono-mano.webp"
                width={250}
                height={250}
                alt="imagen de una persona mirando el teléfono"
                className="hidden lg:block absolute right-10 top-0 border-4 border-white rounded-xl shadow-2xl">
              </Image>

              <div className="absolute right-5 sm:right-20 lg:left-1/8 bottom-0 md:bottom-10 flex flex-col w-fit">
                <div className="max-w-60 md:max-w-85 max-h-20 grid grid-cols-[1fr_3fr_3fr] border p-3 rounded-md md:rounded-2xl shadow-2xl shadow-green-900/40 place-items-center z-20 bg-secondary -rotate-1">
                  <span>
                    <Image
                      src="/mastercard.svg"
                      width={35}
                      height={35}
                      alt="mastercard">
                    </Image>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[clamp(.6rem,1.5vw,1rem)] md:text-base">Mastercard</span>
                    <span className="text-muted-foreground text-[clamp(.6rem,1.5vw,1rem)] md:text-base">**** 5678</span>
                  </div>
                  <div className="font-semibold text-end text-green-800 dark:text-green-500 text-[clamp(.6rem,1.5vw,1rem)] md:text-base">+ $100.000 COP</div>
                </div>
                <div className="max-w-60 md:max-w-85 max-h-20 grid grid-cols-[1fr_3fr_3fr] border p-3 rounded-md md:rounded-2xl shadow-2xl shadow-green-900/40 place-items-center rotate-7 md:-rotate-7 z-10 bg-secondary -translate-y-8 md:-translate-y-10 translate-x-1">
                  <span>
                    <Image
                      src="/visa.svg"
                      width={35}
                      height={35}
                      alt="visa">
                    </Image>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[clamp(.6rem,1.5vw,1rem)] md:text-base">Visa</span>
                    <span className="text-muted-foreground text-[clamp(.6rem,1.5vw,1rem)] md:text-base">**** 5678</span>
                  </div>
                  <div className="font-semibold text-end text-green-800 dark:text-green-500 text-[clamp(.6rem,1.5vw,1rem)] md:text-base">+ $50.000 COP</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-5 sm:left-15 lg:right-10 lg:bottom-10 lg:top-auto lg:left-auto rounded-md md:rounded-2xl w-full max-w-[35svw] md:max-w-75 items-start lg:items-end flex flex-col p-3 md:p-5 gap-2 bg-background dark:bg-secondary border lg:border-0">
              <h3 className="font-medium text-[clamp(.7rem,2.1vw,1.12rem)]">Medios de pago aliados</h3>
              <ul className="flex flex-wrap items-center uppercase justify-start lg:justify-end gap-1 md:gap-2 text-muted-foreground text-[clamp(.4rem,1.7vw,.9rem)] lg:text-base w-full">
                <li className="border px-2 md:px-3 py-1 rounded md:rounded-md shadow-lg" aria-label="visa">Visa</li>
                <li className="border px-2 md:px-3 py-1 rounded md:rounded-md shadow-lg" aria-label="mastercard">Mastercard</li>
                <li className="border px-2 md:px-3 py-1 rounded md:rounded-md shadow-lg" aria-label="american express">American Express</li>
              </ul>
            </div>
          </section>

          <section className="min-h-screen w-full bg-[#021107] relative flex flex-col items-center px-5 py-20 lg:x-20 gap-10">
            <h2 className="flex gap-2 font-poppins text-[clamp(2.7rem,5.5vw,3.75rem)] text-center leading-none flex-col sm:flex-row font-medium tracking-tight text-[#969ba5]">
              Préstamos<span className="text-white">simples.</span>
            </h2>

            <div className="flex flex-col md:grid md:grid-cols-[1fr_300px_1fr]  lg:grid-cols-[1fr_1fr_1fr] grid-rows-8 max-w-340 gap-5 md:gap-0">
              <div className="h-full flex flex-col justify-center items-center text-white col-start-1 row-start-1 row-end-8">
                <div className="border border-white/50 bg-background/10 rounded-lg p-5 flex flex-col gap-5 relative">
                  <h3 className="text-base">PASO 2</h3>
                  <h4 className="text-xl">Selecciona lo que necesitas</h4>
                  <p className="text-zinc-300">Completa la solicitud de tu préstamo o inversión según lo que necesites. En minutos podrás ver si tu solicitud fue aprobada.</p>

                  <div className="w-20 h-px bg-background/50 absolute top-1/2 left-full -translate-y-1/2 hidden md:block" />
                </div>
              </div>

              <div className="col-start-2 row-start-1 row-end-8 relative order-last">
                <Image
                  src="iphone-mockup.svg"
                  width={400}
                  height={400}
                  alt="imagen de un teléfono mostrando la vista de préstamos"
                  className="-rotate-13 relative md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 h-90 md:h-auto">
                </Image>
              </div>

              <div className="border border-white/30 bg-background/5 rounded-lg p-5 flex flex-col gap-5 relative col-start-3 row-start-2 row-end-4 text-white order-first">
                <h3 className="text-base">PASO 1</h3>
                <p className="text-zinc-300">Registra tus datos personales y envia tus documentos</p>
                <div className="w-20 h-px bg-background/50 absolute top-1/2 right-full -translate-y-1/2 hidden md:block" />
              </div>

              <div className="border border-white/30 bg-background/5 rounded-lg p-5 flex flex-col gap-5 relative col-start-3 row-start-6 row-end-8 text-white">
                <h3 className="text-base">PASO 3</h3>
                <p className="text-zinc-300">Recibe el dinero en tu cuenta bancaria y disfruta de comprar lo que quieras</p>
                <div className="w-20 h-px bg-background/50 absolute top-1/2 right-full -translate-y-1/2 hidden md:block" />
              </div>

            </div>
          </section>

          <section className="w-full py-20 px-5 lg:p-20 gap-10 flex flex-col items-center overflow-hidden">
            <h2 className="flex gap-2 font-poppins text-[clamp(2.7rem,5.5vw,3.75rem)] font-medium tracking-tighter">
              Mayor<span className="text-muted-foreground">ventaja.</span>
            </h2>

            <div className="flex flex-col md:grid md:grid-cols-4 lg:grid-cols-6 grid-rows-auto lg:grid-rows-4 max-w-120 md:max-w-340 w-full max-h-screen gap-5">
              <div className="border col-span-2 row-span-1 md:col-span-2 md:row-span-2 p-10 md:p-5 rounded-2xl shadow-lg shadow-black/3 bg-secondary">
                <div className="flex flex-col gap-5 items-center justify-center w-full h-full text-center">
                  <div className="w-full flex justify-center">
                    <div className="w-30 h-35 bg-background border shadow-xl rounded-xl rotate-20 z-10 relative translate-x-3 flex flex-col items-center justify-center gap-3">
                      <div className="bg-black size-10 rounded-md">
                        <Plane size={40} fill="#fff" />
                      </div>
                      <span>Vuelos</span>
                      <span className="font-medium">+120 pts</span>
                    </div>
                    <div className="w-30 h-35 border shadow-xl bg-[#021107] rounded-xl -rotate-20 z-5 relative -translate-x-3 flex flex-col items-center justify-center gap-3">
                      <div className="bg-background size-10 rounded-md">
                        <Hamburger size={40} fill="#000" />
                      </div>
                      <span>Comida</span>
                      <span className="font-medium">+60 pts</span>
                    </div>
                  </div>
                  <h3 className="mt-5 text-xl font-medium">Canjea puntos y recompensas</h3>
                  <p className="max-w-80  text-muted-foreground">Colecciona cashback, puntos y millas según el producto que adquieras.</p>
                </div>
              </div>

              <div className="border col-span-2 row-span-2 p-10 md:p-5 rounded-2xl shadow-lg shadow-black/3 bg-secondary">
                <div className="flex flex-col gap-15 items-center justify-center w-full h-full text-center">
                  <div className="gap-3 flex flex-col">
                    <h3 className="text-xl font-medium">Paga con tarjeta de crédito</h3>
                    <p className="max-w-80 text-muted-foreground">Compra en hasta 12 cuotas sin interés con tu tarjeta de crédito.</p>
                  </div>
                  <div className="w-full flex justify-center">
                    <Image
                      src="/credit-card.svg"
                      width={200}
                      height={200}
                      alt="tarjeta de credito"
                      className="object-cover relative -rotate-15 translate-x-20 -translate-y-5">
                    </Image>
                    <Image
                      src="/credit-card2.svg"
                      width={200}
                      height={200}
                      alt="tarjeta de credito"
                      className="object-cover relative -rotate-5 -translate-x-20 -translate-y-3">
                    </Image>
                  </div>
                </div>
              </div>

              <div className="border col-span-2 row-span-2 px-10 pt-10 md:px-5 md:pt-5 rounded-2xl shadow-lg shadow-black/3 bg-secondary overflow-hidden">
                <div className="flex flex-col gap-15 items-center mt-5 w-full h-full text-center">
                  <div className="gap-3 flex flex-col">
                    <h3 className="text-xl font-medium">Pagos al instante</h3>
                    <p className="max-w-80  text-muted-foreground">Sin filas ni esperas, paga con tus dispositivos en segundos.</p>
                  </div>
                  <div className="w-full flex flex-col justify-between items-center max-h-50">
                    <Image
                      src="/iphone-front.svg"
                      width={200}
                      height={200}
                      alt="iphone frontal"
                      className="object-cover">
                    </Image>
                  </div>
                </div>
              </div>

              <div className="border row-span-3 col-span-2 lg:col-span-3 md:row-span-2 p-10 rounded-2xl shadow-lg shadow-black/3 bg-secondary overflow-hidden">
                <div className="flex flex-col gap-5 items-center w-full h-full text-center md:text-left">
                  <div className="gap-5 flex flex-col">
                    <h3 className="text-xl font-medium">Transferencias internacionales sin costos</h3>
                    <p className=" text-muted-foreground">Recibe dinero en minutos sin importar en qué parte del mundo se encuentre tu contacto.</p>
                  </div>
                  <div className="w-full flex justify-center">
                    <div className="w-100 min-w-81 lg:min-w-auto h-60 rounded-2xl p-5 gap-5 flex flex-col bg-background shadow-xl">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Movimientos</h3>
                        <span>&gt;</span>
                      </div>
                      <div className="flex flex-col w-full h-full justify-between text-sm">
                        <div className="grid grid-cols-[1fr_3fr_3fr] items-center gap-3">
                          <div>
                            <Image
                              src="/mastercard.svg"
                              width={35}
                              height={35}
                              alt="mastercard">
                            </Image>
                          </div>
                          <div className="flex flex-col">
                            <span>Mastercard</span>
                            <span className="text-muted-foreground">**** 1234</span>
                          </div>
                          <div className="font-semibold text-end text-green-600">+ $50.000 COP</div>
                        </div>

                        <div className="grid grid-cols-[1fr_3fr_3fr] items-center gap-3">
                          <div>
                            <Image
                              src="/mastercard.svg"
                              width={35}
                              height={35}
                              alt="mastercard">
                            </Image>
                          </div>
                          <div className="flex flex-col">
                            <span>Mastercard</span>
                            <span className="text-muted-foreground">**** 5678</span>
                          </div>
                          <div className="font-semibold text-end text-red-600">- $50.000 COP</div>
                        </div>

                        <div className="grid grid-cols-[1fr_3fr_3fr] items-center gap-3">
                          <div>
                            <Image
                              src="/visa.svg"
                              width={35}
                              height={35}
                              alt="visa">
                            </Image>
                          </div>
                          <div className="flex flex-col">
                            <span>Visa</span>
                            <span className="text-muted-foreground">**** 9876</span>
                          </div>
                          <div className="font-semibold text-end text-green-600">+ $100.000 COP</div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border col-span-4 lg:col-span-3 lg:row-span-2 p-10 rounded-2xl shadow-lg shadow-black/3 bg-[#021107] text-white overflow-hidden">
                <div className="flex flex-col gap-5 w-full h-full text-center lg:text-left relative">
                  <div className="gap-3 flex flex-col">
                    <h3 className="text-xl font-medium">Gestiona todas tus cuentas</h3>
                    <p className="text-zinc-300 max-w-100">Puedes ver y gestionar todas tus cuentas desde nuestra plataforma digital.</p>
                  </div>
                  <Image
                    src="/dashboard.svg"
                    width={450}
                    height={450}
                    alt="dashboard"
                    className="absolute object-cover -rotate-5 left-1/2 -translate-x-1/3 -bottom-15">
                  </Image>
                </div>
              </div>

            </div>
          </section>

          <section className=" w-full gap-10 flex flex-col overflow-hidden bg-accent items-center justify-center px-5 py-20 md:p-20">
            <div className="flex flex-col max-w-340 w-full gap-5 md:gap-10">
              <h2 className="font-poppins text-[clamp(2.7rem,5.5vw,3.75rem)] font-medium tracking-tighter leading-none text-center lg:text-start text-muted-foreground">
                Nuestros clientes <span className="text-accent-foreground">opinan.</span>
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-2 md:gap-5">
                <span className="flex justify-center lg:justify-start">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="text-[#269659]" size={35} fill="currentColor" />
                  ))}
                </span>

                <span className="font-poppins">Trustpilot</span>
                <span className="text-muted-foreground">Clasificado 4.5/5.0</span>
              </div>
              <div className="flex w-full gap-5 min-h-70 overflow-x-auto">
                <div className="flex flex-col flex-1 border rounded-2xl p-10 bg-background shadow-lg shadow-black/3 gap-3 justify-between min-w-80">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="text-[#007234]" size={35} fill="currentColor" />
                    ))}
                  </div>
                  <p>Realmente me impresiona la agilidad de este banco. Me siento tranquilo sabiendo que tengo el respaldo de una entidad que se preocupa por mis necesidades financieras.</p>
                  <div className="flex gap-5 items-center">
                    <Image
                      src="/person1.svg"
                      width={60}
                      height={60}
                      alt="person3">
                    </Image>
                    <div className="flex flex-col">
                      <span className="font-semibold">Sebastian G.</span>
                      <span>Diseñador UX/UI</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 border rounded-2xl p-10 bg-background shadow-lg shadow-black/3 gap-3 justify-between min-w-80">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="text-[#007234]" size={35} fill="currentColor" />
                    ))}
                  </div>
                  <p>La atención al cliente ha sido excepcional. Siempre resuelven mis dudas de manera rápida y eficiente.</p>
                  <div className="flex gap-5 items-center">
                    <Image
                      src="/person2.svg"
                      width={60}
                      height={60}
                      alt="person3">
                    </Image>
                    <div className="flex flex-col">
                      <span className="font-semibold">Carolina M.</span>
                      <span>Contadora pública</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col flex-1 border rounded-2xl p-10 bg-background shadow-lg shadow-black/3 gap-3 justify-between min-w-80">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="text-[#007234]" size={35} fill="currentColor" />
                    ))}
                  </div>
                  <p>Las tasas de interés son muy competitivas y las herramientas de presupuesto me han ayudado a organizar mis finanzas personales como nunca antes.</p>
                  <div className="flex gap-5 items-center">
                    <Image
                      src="/person3.svg"
                      width={60}
                      height={60}
                      alt="person3">
                    </Image>
                    <div className="flex flex-col">
                      <span className="font-semibold">Andrés P.</span>
                      <span>Ingeniero de software</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="min-h-180 w-full gap-10 flex overflow-hidden items-center justify-center p-5 py-20 lg:p-20">
            <div className="flex flex-col md:flex-row max-w-340 justify-center items-center w-full gap-10">
              <div className="flex-1 flex max-w-340 w-full relative order-3 md:order-0 justify-center">
                <Image
                  src="/personas-telefono.webp"
                  width={550}
                  height={550}
                  alt="personas mirando celular"
                  className="object-cover rounded-2xl border-4 shadow-xl saturate-150">
                </Image>
                <div className="w-35 h-30 lg:w-50 lg:h-40 bg-secondary absolute right-0 -top-1 rotate-10 border shadow-xl rounded-xl flex flex-col items-center justify-center gap-1">
                  <CircleCheck className="text-green-600" size={35} />
                  <h4 className="font-semibold">Completado</h4>
                  <p className="text-xs">Tu renta fue enviada.</p>
                </div>
              </div>
              <div className="flex flex-col flex-1 w-full gap-5 lg:gap-10 text-center lg:text-start">
                <h2 className="font-poppins text-[clamp(2.7rem,5.5vw,3.75rem)] font-medium tracking-tighter leading-12">
                  Tus movimientos <br /> son <span className="text-muted-foreground">nuestra prioridad.</span>
                </h2>
                <p className="leading-8">Todos tus movimientos están protegidos por nuestros sistemas de seguridad más avanzados. Es por ello que nuestro equipo siempre siempre está dispuesto a satisfacer tu seguridad.</p>
              </div>
            </div>
          </section>
          <section className="h-150 w-full gap-10 flex items-center bg-[#007234] justify-center p-5 py-20 md:p-20 relative">
            <div className="flex flex-col md:flex-row max-w-340 h-full w-full justify-center items-center z-10 gap-10">
              <div className="flex-2 flex flex-col items-start gap-5 w-full">
                <h2 className="font-poppins text-[clamp(1rem,1.5vw,1.8rem)] tracking-tighter leading-tight text-white/90">
                  Únete a la revolución, simple, segura, beneficiosa.
                </h2>
                <h3 className="font-poppins text-[clamp(2.7rem,5.5vw,3.75rem)] font-medium tracking-tighter leading-14 lg:leading-20 text-white">
                  Mueve tu dinero <br /> en nuestra banca digital.
                </h3>
                <Link href="/registrarse" className="bg-background/90 w-40 h-15 rounded-full cursor-pointer flex items-center justify-center hover:bg-background transition-colors">
                  Unirse ahora
                </Link>
              </div>
              <div className="flex-1 flex items-end justify-end w-full h-full">
                <Image
                  src="/hand-iphone.svg"
                  width={630}
                  height={630}
                  alt="hand iphone"
                  className="object-cover absolute bottom-0 right-5 pointer-events-none w-[clamp(200px,50vw,500px)] sm:w-[clamp(300px,40vw,600px)]">
                </Image>
              </div>
            </div>
          </section>
          <footer className="min-h-130 w-full gap-10 flex justify-center py-20 px-5 md:p-20 relative">
            <div className="flex max-w-340 w-full gap-5 flex-col">
              <div className="flex flex-col md:flex-row justify-between h-full">
                <section className="flex-1 md:flex-3 flex flex-col gap-5">
                  <Link href="/" aria-label="Logo de treebank" className="dark:text-white text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" viewBox="0 0 53 9">
                      <path fill="#007234"
                        d="M2.484 3.612v3.216q0 .336.156.492.168.144.552.144h.78V8.88H2.916Q.792 8.88.792 6.816V3.612H0v-1.38h.792V.588h1.692v1.644h1.488v1.38zm3.776-.348q.324-.528.84-.828.528-.3 1.2-.3V3.9h-.444q-.792 0-1.2.372-.396.372-.396 1.296V8.88H4.58V2.232h1.68zm8.752 2.148q0 .36-.048.648h-4.86q.06.72.504 1.128t1.092.408q.936 0 1.332-.804h1.812a3.06 3.06 0 0 1-1.104 1.584q-.816.612-2.004.612-.96 0-1.728-.42A3.1 3.1 0 0 1 8.82 7.356q-.42-.78-.42-1.8 0-1.032.42-1.812t1.176-1.2 1.74-.42q.948 0 1.692.408.756.408 1.164 1.164.42.744.42 1.716m-1.74-.48q-.012-.648-.468-1.032-.456-.396-1.116-.396-.624 0-1.056.384-.42.372-.516 1.044zm8.546.48q0 .36-.048.648h-4.86q.06.72.504 1.128t1.092.408q.936 0 1.332-.804h1.812a3.06 3.06 0 0 1-1.104 1.584q-.816.612-2.004.612-.96 0-1.728-.42a3.1 3.1 0 0 1-1.188-1.212q-.42-.78-.42-1.8 0-1.032.42-1.812t1.176-1.2 1.74-.42q.948 0 1.692.408.756.408 1.164 1.164.42.744.42 1.716m-1.74-.48q-.012-.648-.468-1.032-.456-.396-1.116-.396-.624 0-1.056.384-.42.372-.516 1.044z" />
                      <path fill="#currentcolor"
                        d="M27.196 4.584q.708.132 1.164.708t.456 1.32q0 .672-.336 1.188-.324.504-.948.792t-1.476.288h-3.612V.504H25.9q.852 0 1.464.276.624.276.936.768.324.492.324 1.116 0 .732-.396 1.224-.384.492-1.032.696m-3.072-.624h1.536q.6 0 .924-.264.324-.276.324-.78t-.324-.78-.924-.276h-1.536zm1.692 3.552q.612 0 .948-.288.348-.288.348-.816 0-.54-.36-.84-.36-.312-.972-.312h-1.656v2.256zm3.307-1.98q0-1.008.396-1.788.408-.78 1.092-1.2.696-.42 1.548-.42.744 0 1.296.3.564.3.9.756v-.948h1.692V8.88h-1.692v-.972a2.54 2.54 0 0 1-.9.78q-.564.3-1.308.3-.84 0-1.536-.432a3.1 3.1 0 0 1-1.092-1.212q-.396-.792-.396-1.812m5.232.024q0-.612-.24-1.044a1.64 1.64 0 0 0-.648-.672 1.7 1.7 0 0 0-.876-.24q-.468 0-.864.228t-.648.672q-.24.432-.24 1.032t.24 1.056q.252.444.648.684.408.24.864.24.468 0 .876-.228.408-.24.648-.672.24-.444.24-1.056m6.417-3.42q1.188 0 1.92.756.732.744.732 2.088v3.9h-1.68V5.208q0-.792-.396-1.212-.396-.432-1.08-.432-.696 0-1.104.432-.396.42-.396 1.212V8.88h-1.68V2.232h1.68v.828q.336-.432.852-.672a2.64 2.64 0 0 1 1.152-.252m7.586 6.744-2.256-2.832V8.88h-1.68V0h1.68v5.052l2.232-2.82h2.184L47.59 5.568l2.952 3.312z" />
                      <path fill="#007234"
                        d="M51.574 8.964q-.456 0-.756-.276a.96.96 0 0 1-.288-.708q0-.42.288-.696.3-.288.756-.288.444 0 .732.288a.92.92 0 0 1 .288.696q0 .42-.288.708a1 1 0 0 1-.732.276" />
                    </svg>
                  </Link>
                  <span>La banca digital pensada para ti.</span>
                </section>
                <section className="flex-1 md:flex-2 flex-col justify-items-center md:justify-items-end grid grid-cols-2">
                  <ul className="flex flex-col gap-5">
                    <li><a href="">Políticas de privacidad</a></li>
                    <li><a href="">Términos y condiciones</a></li>
                  </ul>
                  <ul className="flex flex-col gap-5">
                    <li><a href="">Características</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Contáctanos</a></li>
                  </ul>
                </section>
              </div>
              <Separator />
              <div className="flex flex-col md:flex-row gap-2 items-center justify-between text-xs md:text-sm text-muted-foreground">
                <span>Todos los derechos reservados © {new Date().getFullYear()} treeBank</span>
                <span>Arquitectura de Información y Usabilidad - UNIMINUTO</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
