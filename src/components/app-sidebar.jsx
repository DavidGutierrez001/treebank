"use client";

import { LayoutDashboard, ArrowLeftRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
} from "@/components/ui/avatar";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroupLabel,
    SidebarGroupAction,
    SidebarGroupContent
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function AppSidebar() {
    const pathname = usePathname();

    const projects = [
        { name: "Resumen", url: "/dashboard/resumen", icon: LayoutDashboard },
        { name: "Movimientos", url: "/dashboard/movimientos", icon: ArrowLeftRight },
    ];

    return (
        <Sidebar>
            <SidebarHeader className="flex items-center justify-center w-full py-10">
                <Image
                    src="/treebank.svg"
                    alt="TreeBank"
                    width={24}
                    height={24}
                    className="mr-2 h-auto w-35"
                />
            </SidebarHeader>

            <SidebarContent>
                <nav aria-label="Navegación principal">
                    <SidebarGroup>
                        <SidebarGroupLabel>Menú</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {projects.map((project) => {
                                    const isActive = project.url === pathname;
                                    return (
                                        <SidebarMenuItem key={project.name}>
                                            <SidebarMenuButton
                                                render={<Link href={project.url} />}
                                                aria-current={isActive ? "page" : undefined}
                                                className={isActive ? "bg-bg-green font-semibold text-white" : undefined}
                                            >
                                                <project.icon aria-hidden="true" />
                                                <span>{project.name}</span>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </nav>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="justify-start" render={<Button className="w-full cursor-pointer py-7" variant="ghost" />}>
                                <Avatar className="gap-3 border border-red-500">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="" />
                                    <AvatarFallback>DG</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col items-start text-xs">
                                    <span>David Gutierrez</span>
                                    <span className="text-black/80">Usuario</span>
                                </div>
                                <ChevronDown className="ml-auto" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>Cuenta</DropdownMenuLabel>
                                    <DropdownMenuItem>Seguridad</DropdownMenuItem>
                                    <DropdownMenuItem>Preferencias</DropdownMenuItem>
                                    <DropdownMenuItem>Configuración</DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem variant="destructive" render={<Link href="/ingresar" />}>Cerrar sesión</DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}