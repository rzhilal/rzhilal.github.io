import junkieBack from "../../../images/asha.jpg"
import dicuci from "../../../images/dicuci.png"
import kantin from "../../../images/Kantin.png"
import pelanggan from "../../../images/Pelanggan.png"

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

export const experienceList:Experiences[] = [
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
    },
    {
        id : 1,
        name: "@My Project",
        projects: [
            {
                id: 0,
                name: "Mobile Apps DiPujas Kantin",
                detail: "Developed DiPujas Kantin using Flutter, ExpressJS, and Firebase, addressing long queues, update real-time menus, and inefficient service in universities.",
                tech: ["NodeJS", "ExpressJS", "Firebase", "Flutter"],
                link: "https://play.google.com/store/apps/details?id=com.dipujas.kantin&pli=1",
                image: kantin,
            },
            {
                id: 1,
                name: "Mobile Apps DiPujas Konsumen",
                detail: "Developed DiPujas Konsumen with Flutter, ExpressJS, and Firebase for online ordering in universities, reducing queues, automating service, and increasing speed. Enables quick online food ordering, fast payments, and shorter lines.",
                tech: ["NodeJS", "ExpressJS", "Firebase", "Flutter"],
                link: "https://play.google.com/store/apps/details?id=com.dipujas.konsumen",
                image: pelanggan
            }
        ]
    }
]
