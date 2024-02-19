'use client'

import Container from "@/components/share/Container"
import Button from "@/components/ui/Button"
import { useRouter } from "next/navigation"

const Error = () => {
    const router = useRouter()
    return (
        <Container>
            <div className="w-full flex flex-col items-center gap-y-10">
                <h1 className="text-4xl font-semibold text-center">Somethings Went Wrong!!!</h1>
                <Button onClick={() => router.refresh()}>
                    Refresh
                </Button>
            </div>
        </Container>
    )
}

export default Error