import { Img } from "@chakra-ui/react"

import React from 'react'
export default function About() {
    return (
        <div className="hover-container">
            <Img src="/assets/contact us/contact_us.jpg" alt="Image" className="hover-image" />
            <div className="hover-text">What can I help with?</div>
        </div>
    )
}