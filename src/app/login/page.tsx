"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaUserTie } from "react-icons/fa6";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(2, 'Digite seu nome'),
    password: z.string().min(2, 'Digite sua senha corretamente')
})

const page = () => {

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            password: ""
        }
    })

    const onSubmit = () => {
        router.push('/fila')
    }

    return(
        <div className="w-screen h-screen bg-gray-900 flex justify-center items-center">
            <div className="bg-slate-950 p-6 rounded-md flex flex-col justify-center items-center gap-7">
                <div className="text-white flex flex-col justify-center items-center">
                    <FaUserTie className="text-xl"/>
                    Funcionário
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-white">Seu Nome</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            autoFocus
                                            {...field}
                                            className="text-black"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                                        <FormField
                        control={form.control}
                        name='password'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Sua Senha</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        {...field}
                                        className="text-black"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                                        />
                        
                                        <Button type="submit">Entrar</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default page