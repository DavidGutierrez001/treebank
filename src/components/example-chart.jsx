"use client"
import { BarChart, Bar, CartesianGrid, XAxis } from "recharts"
import { ChartContainer } from "@/components/ui/chart"
import { resumeYearlyData } from "@/data/resume-yearly"

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#00863e",
    },
    mobile: {
        label: "Mobile",
        color: "#009645",
    },

}

const chartData = resumeYearlyData;

const mesesConDatos = chartData.filter((item) => typeof item.total === "number");
const totalAnual = mesesConDatos.reduce((suma, item) => suma + item.total, 0);
const mesMayor = mesesConDatos.reduce((mayor, item) => (item.total > mayor.total ? item : mayor));
const mesMenor = mesesConDatos.reduce((menor, item) => (item.total < menor.total ? item : menor));
const currency = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

const descripcion =
    `Gráfico de barras con el rendimiento acumulado mes a mes entre enero y ` +
    `${mesMayor.month.toLowerCase()}, de ${currency.format(mesMenor.total)} a ${currency.format(mesMayor.total)}. ` +
    `Acumulado del periodo: ${currency.format(totalAnual)}. ` +
    `Octubre, noviembre y diciembre no tienen datos registrados. ` +
    `Los valores exactos están disponibles en la tabla de movimientos.`;

export function ChartContent() {
    return (
        <figure className="m-0 flex flex-col gap-2">
            <ChartContainer
                config={chartConfig}
                className="h-60 w-full"
                role="img"
                aria-label={descripcion}
            >
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <Bar dataKey="total" fill="var(--color-desktop)" radius={4} barSize={40} />
                </BarChart>
            </ChartContainer>
            <figcaption className="sr-only">
                {descripcion}
            </figcaption>
        </figure>
    )
}
