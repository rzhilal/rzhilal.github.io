import junkieBack from "../../../images/junkielabs.png"
import hundiBack from "../../../images/hundi_d.png"

export type Experience= {
    key: number;
    name: string;
    detail: string;
    tech: string[];
    link?: string ;
    image: string
}

export type Experiences = {
    key: number;
    name: string;
    projects: Experience[]
}
export const experienceList:[Experiences] = [
    {
        key : 1,
        name: "@Junkielabs",
        projects: [
            {
                key: 11,
                name: "Junkielabs Backend",
                detail: "Developed using Django-Rest-Framework. Caters for an Open and Collaborative platform for developers, designers and innovators to come together on a project and collaborate. The platform will handle in mundane day-to-day tasks for efficient collaboration. ",
                tech: ["Django", "DynamoDb", "AWS-Lambda", "Zappa"],
                link: "https://junkielabs.in/",
                image: junkieBack
            },
            {
                key: 12,
                name: "Junkielabs Admin-Dashboard",
                detail: "Implemented in React, using React-Admin library. An Admin Dashboard integration with Backend Api for Database access and Super-User control.",
                tech: ["React", "TypeScript"],
                link: "https://junkielabs.in/",
                image: junkieBack
            },
            {
                key: 13,
                name: "Hundi Record-Book Backend",
                detail: "A Rest-Api in python using FastApi framework, with MongoDb as its nosql database. With features like Scheduled event triggers, notification system, analytics, OAuth based user-verification.",
                tech: ["FastApi", "MongoDB", "Firebase Authentication", "GCP"],
                image: hundiBack
            }
        ]
    }
]
