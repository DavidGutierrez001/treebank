"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function DashboardLayout({ children }) {
    const pathname = usePathname();

    return (
        <SidebarProvider>
            <AppSidebar />
            <main id="contenido" tabIndex={-1} className="flex w-full flex-col gap-5 p-5 focus:outline-none">
                <div className="flex pb-5 items-center gap-5 border-b justify-between">
                    <div className="flex items-center gap-3">
                        <SidebarTrigger variant="outline" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink render={<Link href="/" />}>Inicio</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="capitalize">
                                        <Link href={pathname}>{pathname.slice("/dashboard/".length)}</Link>
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <div className="flex items-center gap-3">
                        <Popover>
                            <PopoverTrigger
                                render={<Button variant="outline" />}
                                className="cursor-pointer"
                                aria-label="Notificaciones: no hay notificaciones nuevas"
                            >
                                <Bell aria-hidden="true" />
                            </PopoverTrigger>
                            <PopoverContent align="end" className="min-h-50 w-full max-w-100 min-w-80">
                                <PopoverHeader>
                                    <PopoverTitle>Notificaciones</PopoverTitle>
                                    <PopoverDescription>
                                        Aún no tienes notificaciones.
                                    </PopoverDescription>
                                </PopoverHeader>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                {children}
            </main>
        </SidebarProvider >
    )
}