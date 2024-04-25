import { Color } from "three";
import { useRef, useState, useEffect } from 'react';

const Lights = () => {
    const pointLightRef = useRef(null);
    const [lightZ, setLightZ] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setLightZ((prevZ) => (prevZ > -90 ? prevZ - 3 : prevZ)); // Ajusta -200 según tu límite
        }, 1000); // 1000 milisegundos = 1 segundo

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
        <ambientLight color={new Color("white")} intensity={0.0} />
        <directionalLight color={new Color("white")} intensity={0.001} />
        <pointLight
            ref={pointLightRef}
            position={[0, 3, lightZ]}
            color={new Color("white")}
            intensity={100}  // Ajusta la intensidad
            distance={6}    // Ajusta la distancia de influencia
            decay={1}        // Ajusta la atenuación (opcional)
        />
    </>
    // return <>
    //     <ambientLight
    //         color={new Color("white")} 
    //         intensity={0.05} 
    //     />
    //     <directionalLight
    //         color={new Color("white")} 
    //         intensity={0.1} 
    //     />
    //     <pointLight position={[1, -10, -50]} 
    //     color={new Color("white")}
    //     intensity={2000}


    //     />

    // </>
)}
export default Lights;