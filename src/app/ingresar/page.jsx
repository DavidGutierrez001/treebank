import LoginForm from "@/components/LoginForm";
import { Header } from "@/components/Header";

export default function Login() {
    return (
        <div className="flex flex-col items-center h-[calc(100vh-6.25rem)] mt-20 lg:mt-22 w-full">
            <Header />
            <LoginForm />
        </div>
    )
}