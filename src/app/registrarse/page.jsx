import { Header } from "@/components/Header";
import RegisterForm from "@/components/RegisterForm";

export default function Registrarse() {
    return (
        <div className="flex flex-col items-center h-[calc(100vh-6.25rem)] mt-20 lg:mt-22 w-full">
            <Header />
            <RegisterForm />
        </div>
    );
}