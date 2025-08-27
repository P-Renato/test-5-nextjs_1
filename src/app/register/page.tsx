"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must have at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must have at least 2 characters.",
  }),
  confirmPassword: z.string().min(2, {
    message: "Password must have at least 2 characters.",
  }),
})

export default function RegisterForm(){
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            "username": "",
            "email": "",
            "password": "",
            "confirmPassword": "",
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>){
        console.log("Register form values: ", values);

        try {
            const response = await fetch('/api/auth/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            if(!response.ok){
                throw new Error("Register failed");
            }
            const data = await response.json();
            console.log("Register successful: ", data);
            // router.push('/login')
        }
        catch (err) {

        }
    }

    return (
        <div className="border m-4 p-4 w-3xl justify-center">
            <Form {...form}>
                <form className="border " onSubmit={
                    form.handleSubmit(onSubmit)
                }>
                    <FormField 
                    control={form.control}
                    name="username"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Insert your username"  {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField 
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Insert your email"  {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField 
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Insert your password"  {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField 
                    control={form.control}
                    name="confirmPassword"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Confirm your password"  {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button className="cursor-pointer" type="submit">Register now!</Button>

                </form>
            </Form>
        
        </div>
    )



}


