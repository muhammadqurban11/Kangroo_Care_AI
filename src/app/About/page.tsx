import { Button } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/react"
import React from 'react'
export default function About() {
    return (
        <div>
            This is About Page
            <HStack>
                <Button>Click me</Button>
                <Button>Click me</Button>
            </HStack>
        </div>
    )
}