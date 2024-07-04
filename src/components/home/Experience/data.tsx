import junkieBack from "../../../images/asha.jpg"
import dicuci from "../../../images/dicuci.png"

export type Experience= {
    id: number;
    name: string;
    detail: string;
    tech: string[];
    link?: string ;
    image: string
}

export type Experiences = {
    id: number;
    name: string;
    projects: Experience[]
}
export const experienceList:[Experiences] = [
    {
        id : 0,
        name: "@PT Hirata Insan Mandiri",
        projects: [
            {
                id: 0,
                name: " Backend Developer for Mobile Dicuci Laundry Online Application Project",
                detail: "Developed using LoopBack API, this platform caters to an open and collaborative environment for developers, designers, and innovators to create and manage an online laundry service. It efficiently handles day-to-day operations such as order management, user authentication, and service tracking to enhance collaboration and streamline the laundry process.",
                tech: ["NodeJS", "Loopback API", "MongoDB", "Docker"],
                image: dicuci,
            },
            {
                id: 1,
                name: "ASHA Logbook",
                detail: "A system information website for  fisher and integration with Backend Api for Database access and Super-User control.",
                tech: ["React", "TypeScript"],
                image: junkieBack
            }
        ]
    }
]
