"use client";

import Mission from "./components/Mission";
import Link from "next/link";
import Button from "../shared-components/Button";

const About = () => {
    return (
        <div>
            <h1>This is the page about us</h1>
            <Mission/>

            <Link href={"/"} className="underline-offset-4 text-red-300">Go to Homepage</Link>

            <Button
            buttonText="Click Me!"
            variant="default"
            onClickHandler={() => alert('Button clicked successfully!!')}
            />
        </div>
    )
}

export default About;