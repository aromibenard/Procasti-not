'use client'

import { useFormStatus } from "react-dom"
import { Button } from "./ui/button"




export default function SubmitButton({ text } : { text:string } ) {
    const { pending } = useFormStatus()
    return (
        <Button type="submit" disabled={pending} 
        className={'w-full'}>
            {pending ? 'Loading...': text}
        </Button>
    )
}