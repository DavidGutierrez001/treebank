import { Button } from "@/components/ui/button";
import Image from "next/image";

import { ChartContent } from "@/components/example-chart";

import { DataTable } from "@/app/dashboard/movimientos/data-table";
import { columns } from "@/app/dashboard/movimientos/columns";
import { movementsData } from "@/data/movimientos";

export default function Dashboard() {
    return (
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[auto_325px_auto] pb-5 gap-5">
            <h1 className="row-start-1 col-span-2 text-lg">Bienvenido, <span className="font-semibold">David</span></h1>

            <section
                aria-labelledby="titulo-cuentas"
                className="flex flex-col gap-5 lg:border lg:p-5 rounded-md col-start-1 row-start-2 col-span-1 justify-between"
            >
                <h2 id="titulo-cuentas" className="text-lg font-medium">Mis cuentas</h2>
                <div>
                    <Button variant="outline" aria-label="País de las cuentas: Colombia. Cambiar país">
                        Colombia
                    </Button>
                </div>

                <ul className="flex gap-5 overflow-x-auto">
                    <li>
                        <Image
                            src="/credit-card2.svg"
                            width={300}
                            height={350}
                            alt="Tarjeta de crédito TreeBank a nombre de David Gutiérrez, terminada en 4678"
                        />
                    </li>
                    <li>
                        <Image
                            src="/credit-card.svg"
                            width={300}
                            height={350}
                            alt="Segunda tarjeta de crédito del usuario, terminada en 4678"
                        />
                    </li>
                </ul>
            </section>

            <section
                aria-labelledby="titulo-rendimiento"
                className="flex flex-col gap-5 border p-5 rounded-md col-start-2 row-start-2"
            >
                <h2 id="titulo-rendimiento" className="text-lg font-medium">Rendimiento anual</h2>
                <ChartContent />
            </section>

            <section
                aria-labelledby="titulo-movimientos"
                className="flex flex-col gap-5 col-start-1 col-span-2 row-start-3"
            >
                <h2 id="titulo-movimientos" className="text-lg font-medium">Movimientos</h2>
                <DataTable
                    columns={columns}
                    data={movementsData}
                    className="w-full h-full max-h-50"
                />
            </section>
        </div>
    )
}
