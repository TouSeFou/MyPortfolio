import React from "react";
import {MapContainer, TileLayer, Tooltip, Marker, Popup} from 'react-leaflet'

import '../assets/styles/Education.scss';
import 'leaflet/dist/leaflet.css';

const educations = [
    {
        "degreeName": "Master's Degree in Software Development and Information Systems",
        "location": "Brest, France",
        "institution": "Faculté des sciences et techniques UBO",
        "period": "09/2024 – 09/2025",
        "position": {"x": 48.4, "y": -4.4833}
    },
    {
        "degreeName": "Engineering Degree in Data Science and Artificial Intelligence",
        "location": "Rabat, Maroc",
        "institution": "École Nationale Supérieure D'arts Et Métiers",
        "period": "09/2022 – 09/2025",
        "position": {"x": 34.0133, "y": -6.8326}
    },
    {
        "degreeName": "University Diploma in Computer Science",
        "location": "Agadir, Maroc",
        "institution": "École Supérieure de Technologie",
        "period": "09/2020 – 06/2022",
        "position": {"x": 30.4278, "y": -9.5981}
    },
    {
        "degreeName": "High School Diploma in Physical Sciences",
        "location": "Dakhla, Maroc",
        "institution": "—",
        "period": "09/2019 – 06/2020",
        "position": {"x": 23.6848, "y": -15.958}
    }
]

const Education: React.FC = () => (
    <div id='education'>
        <h1 >Education Journey</h1>
        <MapContainer style={{margin:"auto", height:'600px' , width:"1200px" , alignContent:"center"}} center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
             {educations.map((education)=>(
                 <Marker position={[education.position.x, education.position.y]}>
                    <Popup className='w-auto'>
                        <strong>{education.degreeName}</strong>
                        <p style={{color:"black"}}>{education.institution}</p>
                        <i>{education.period}</i>
                    </Popup>

                </Marker>

             ))}

        </MapContainer>
    </div>
);

export default Education;
