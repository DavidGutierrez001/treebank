import { DataTable } from "@/app/dashboard/movimientos/data-table";
import { columns } from "@/app/dashboard/movimientos/columns";
import { movementsData } from "@/data/movimientos";

export default function movimientos() {
    return (
        <>
            <h1 id="titulo-movimientos-tabla" className="text-lg">Tus Movimientos</h1>
            <section aria-labelledby="titulo-movimientos-tabla">
                <DataTable
                    columns={columns}
                    data={movementsData}
                    className="w-full h-full max-h-50"
                />
            </section>
        </>
    )
}
