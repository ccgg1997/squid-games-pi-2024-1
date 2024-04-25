import RedManCircle from "./RedManCircle";
import RedManQuad from "./RedManQuad";
import RedManTriangle from "./RedManTriangle";
import { RigidBody } from '@react-three/rapier'

export default function RedMen() {
    
    return <>
            
        <RedManCircle position={[0, 0 , -10]} scale={2.5} />
        <RigidBody colliders="cuboid" type='fixed'><RedManTriangle position={[0, 0 , -20]} scale={2.5} /></RigidBody>
        <RigidBody colliders="cuboid" type='fixed'><RedManQuad position={[0, 0 , -30]} scale={2.5} /></RigidBody>
        
    </>
}