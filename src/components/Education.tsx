import '../assets/styles/Education.scss';
import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const educations = [
    {
        degreeName: "Master's Degree in Software Development and Information Systems",
        link: "https://www.univ-brest.fr/departement-informatique/fr/page/parcours-dosi-developpement-logiciel-des-systemes-dinformation",
        location: "Brest, France",
        institution: "Faculty of Science and Technology UBO",
        period: "09/2024 – 09/2025",
        position: {x: 48.4, y: -4.4833},
        image: "/ubo.jpg"
    },
    {
        degreeName: "Engineering Degree in Data Science and Artificial Intelligence",
        link: "https://ensam.um5.ac.ma/node/98",
        location: "Rabat, Maroc",
        institution: "National School of Arts and Crafts",
        period: "09/2022 – 09/2025",
        position: {x: 34.0133, y: -6.8326},
        image: "/ensam.png"
        // image: "https://unevoc.unesco.org/network/up/morocco_ensam_um5.png"
    },
    {
        degreeName: "University Diploma in Computer Science",
        link: "https://www.esta.ac.ma/?page_id=117",
        location: "Agadir, Maroc",
        institution: "Higher School of Technology",
        period: "09/2020 – 06/2022",
        position: {x: 30.4278, y: -9.5981},
        image: "/est.png"
    },
    {
        degreeName: "High School Diploma in Physical Sciences",
        link:"",
        location: "Dakhla, Maroc",
        institution: "Lalla Khadija High School",
        period: "09/2019 – 06/2020",
        position: {x: 23.6848, y: -15.958},
        image: "lycee.png"
    }
];

function VEducation() {
    return (
        <div id="taher" className="items-container" >
            {educations.map((education, index) => (
                <div className='educationCard'>

                        <img src={education.image} width={'500px'} height={"150px"}  alt="img"  />
                        <h4 >{education.degreeName}</h4>
                        <p>{education.period}</p>
                        <p >{education.institution} <i>{education.location}</i></p>
                </div>


            ))}
        </div>
    );
}




const Education = () => {
    return (
        <div className='education-container' id="education">
            <h1>Education</h1>
            <div className='cardContainer'>
                    {educations.map((education)=> (
                        <SingleCard
                                image={education.image}
                                CardTitle={`${education.degreeName} (${education.period})`}
                                titleHref={education.link}
                                btnHref="/#"
                                CardDescription={`${education.institution} (${education.location})`}
                                Button=""
                            />

                    ))}
                </div>
                    </div>





    );
};



interface SingleCardProps {
    image: string;
    Button: string;
    CardDescription: string;
    CardTitle: string;
    titleHref: string;
    btnHref: string;
}

const SingleCard = ({
    image,
    Button,
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
}: SingleCardProps) => {
    return (
        <>

            <div className=" educationCard mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
                <img src={image} alt="" />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                        <a
                            href={titleHref ? titleHref : "/#"}
                            className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                            {CardTitle}
                        </a>
                    </h3>
                    <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
                        {CardDescription}
                    </p>

                    {Button && (
                        <a
                            href={btnHref ? btnHref : "#"}
                            className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
                        >
                            {Button}
                        </a>
                    )}
                </div>
            </div>
            {/*  */}
        </>
    );
};
export default Education;
