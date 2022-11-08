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
        name: "Junkielabs",
        projects: [
            {
                key: 11,
                name: "Junkielabs Backend Development",
                detail: "Caters for an Open source based Collaborative platform for developers to work together on a project.",
                tech: ["Django", "DynamoDb", "AWS", "Zappa"],
                link: "https://junkielabs.in/",
                image: junkieBack
            },
            {
                key: 12,
                name: "Junkielabs Admin-Dashboard Development",
                detail: "Implemented in React, an Admin Dashboard integration with Backend Api for Data access and User control.",
                tech: ["React", "TypeScript"],
                link: "https://junkielabs.in/",
                image: junkieBack
            },
            {
                key: 13,
                name: "Hundi-Record Book Backend Development",
                detail: "A Rest-Api in python using FastApi framework. With features like Scheduled event triggers, notification system, analytics, OAuth based user verification.",
                tech: ["FastApi", "MongoDB", "Firebase Authentication", "GCP"],
                image: hundiBack
            }
        ]
    }
]
