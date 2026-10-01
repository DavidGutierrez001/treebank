"use client"

import { AlertCircle, CheckCircle2, Clock, XCircle } from "lucide-react"
import { createColumnHelper } from "@tanstack/react-table"
import Image from "next/image";

const columnHelper = createColumnHelper()

// Use `accessor` for data columns and `display` for columns without one.
export const columns = [
    columnHelper.accessor("tarjeta", {
        header: "Tarjeta",
        cell: ({ getValue }) => {
            const name = getValue();
            return (
                <div className="flex items-center gap-5 min-w-43">
                    <Image
                        src={`/${name.toLowerCase()}.svg`}
                        width={30}
                        height={30}
                        alt=""
                        aria-hidden="true">
                    </Image>
                    <div className="flex flex-col">
                        <span>{name}</span>
                        <span className="text-black/60">**** 4678</span>
                    </div>
                </div>
            );
        }
    }),

    columnHelper.accessor("estado", {
        header: "Estado",
        cell: ({ getValue }) => {
            const estadoValue = getValue();

            // Definimos el color y el ícono según el valor
            let icon = <AlertCircle className="w-4 h-4 text-gray-500" aria-hidden="true" />;
            let badgeColor = "bg-gray-100 text-gray-800";

            if (estadoValue === "Aprobado") {
                icon = <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />;
                badgeColor = "bg-green-50 text-green-700 border-green-200";

            } else if (estadoValue === "Pendiente") {
                icon = <Clock className="w-4 h-4 text-amber-600" aria-hidden="true" />;
                badgeColor = "bg-amber-50 text-amber-700 border-amber-200";

            } else if (estadoValue === "Fallido" || estadoValue === "Rechazado") {
                icon = <XCircle className="w-4 h-4 text-red-600" aria-hidden="true" />;
                badgeColor = "bg-red-50 text-red-700 border-red-200";
            }

            return (
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${badgeColor}`}>
                    {icon}
                    <span>{estadoValue}</span>
                </div>
            );
        },
    }),
    columnHelper.accessor("fecha", {
        header: "Fecha",
    }),
    columnHelper.accessor("hora", {
        header: "Hora",
    }),
    columnHelper.accessor("comercio", {
        header: "Comercio",
    }),
    columnHelper.accessor("monto", {
        header: "Monto",
        cell: ({ getValue }) => {
            const monto = getValue();

            const entrada = monto.startsWith("+");
            const salida = monto.startsWith("-");

            return (
                <span className={entrada ? "text-green-700" : "text-red-700"}>
                    <span className="sr-only">{entrada ? "Ingreso: " : "Retiro: "}</span>
                    {entrada ? `+ $${monto.slice(1)} COP` : `- $${monto.slice(1)} COP`}
                </span>
            )
        }
    }),
]