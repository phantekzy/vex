'use client'
// External packages
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
// UI components
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { subjects } from "@/constants"
import { Textarea } from "./ui/textarea"
import { createTutor } from "@/lib/actions/tutor.actions"
import { redirect } from "next/navigation"

const formSchema = z.object({
    name: z
        .string()
        .min(1, "Please provide the tutor’s name."),
    subject: z
        .string()
        .min(1, "Please select the subject of the lesson"),
    topic: z
        .string()
        .min(1, "Please define the topic of the lesson"),
    voice: z
        .string()
        .min(1, "Please select your tutor's voice"),
    style: z
        .string()
        .min(1, "The voice style selection is required"),
    duration: z.coerce
        .number()
        .min(1, "The lesson duration is required"),
})

type FormValues = z.infer<typeof formSchema>

const TutorForm = () => {
    /* Define the form with the explicit type */
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: 15,
        },
    })

    const onSubmit = async (data: FormValues) => {
        const tutor = await createTutor(data)
        if (tutor) {
            redirect(`/tutors/${tutor.id}`)
        } else {
            console.log("Tutor creation failed")
            redirect("/")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mb-10">
                {/* Name section */}
                <FormField<FormValues>
                    control={form.control as any}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Specify your designated AI tutor’s name : </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ferchouch" {...field}
                                    className="input"
                                />
                            </FormControl>
                            <FormDescription>
                                Specify the designated name of your personal AI tutor.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Subject section */}
                <FormField<FormValues>
                    control={form.control as any}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select the tutoring subject :</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input ">
                                        <SelectValue placeholder="Select the subject" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {subjects.map((subject) => (
                                            <SelectItem
                                                key={subject}
                                                value={subject}
                                                className="capitalize"
                                            >
                                                {subject}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription>
                                Select Tutoring Subject
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Topic section */}
                <FormField<FormValues>
                    control={form.control as any}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Specify the topic for tutoring :</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Ex. Introduction to Algebra" {...field}
                                    className="input"
                                />
                            </FormControl>
                            <FormDescription>
                                Define the focus area for your tutor.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Voice selection */}
                <FormField<FormValues>
                    control={form.control as any}
                    name="voice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Choose the desired tutor voice :</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input ">
                                        <SelectValue placeholder="Select a voice" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='male'>
                                            Male
                                        </SelectItem>
                                        <SelectItem value='female'>
                                            Female
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription>
                                Pick a voice style for your AI tutor
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Voice style */}
                <FormField<FormValues>
                    control={form.control as any}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Select the tutor’s speaking style :</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input ">
                                        <SelectValue placeholder="Select the style" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value='formal'>
                                            Formal
                                        </SelectItem>
                                        <SelectItem value='casual'>
                                            Casual
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormDescription>
                                Choose how your AI tutor should speak
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Duration Section */}
                <FormField<FormValues>
                    control={form.control as any}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Duration of the tutoring session in minutes :</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    placeholder="Enter duration in minutes (e.g., 30)"
                                    {...field}
                                    className="input"
                                />
                            </FormControl>
                            <FormDescription>
                                Specify how long the session should last
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full cursor-pointer"
                >
                    Confirm Tutor Setup
                </Button>
            </form>
        </Form>
    )
}

export default TutorForm
