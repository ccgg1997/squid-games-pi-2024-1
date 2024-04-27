import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import RedMen from "./characters/redMen/RedMen";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import Controls from "./controls/Controls";
import Avatar from "./characters/avatar/Avatar";
import useMovements from "../../utils/key-movements";
import Ecctrl, { EcctrlAnimation } from "ecctrl";

export default function Level1() {
    const map = useMovements();

    return (
        <KeyboardControls map={map} >
            <Canvas
                shadows={false}
            >
                <Perf position="top-left" />
                <Suspense fallback={null}>
                    <Lights ></Lights>
                        {/* <Environments /> */}
                        <Physics debug={true}>
                            <World />
                            <Girl />
                            <RedMen />
                            <Ecctrl
                                camInitDis={-2}
                                camMaxDis={-2}
                                maxVelLimit={5} 
                                jumpVel={4} 
                                position={[1,10,-10]}
                                characterInitDir={180}
                                camInitDir= {{ x: 0, y: 10 }}
                            >
                                <Avatar />
                            </Ecctrl>
                        </Physics>
                    
                    <WelcomeText position={[0, 1, -2]} />
                </Suspense>
                <Controls />
            </Canvas>
        </KeyboardControls>

    )
}
