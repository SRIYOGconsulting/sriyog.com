"use client"
import { useFloatingIcons } from "@/src/context/FloatingIconContext";
import FloatingIcons from "./FloatingIcons";

export default function Floating(){
        const { showFloatingIcons } = useFloatingIcons();

    return (
        <>
            {showFloatingIcons ? <FloatingIcons /> : null}
        </>
    )
}