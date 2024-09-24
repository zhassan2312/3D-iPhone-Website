import { View } from '@react-three/drei'
import React,{Suspense} from 'react'
import Lights  from './Lights.jsx'
import { PerspectiveCamera } from '@react-three/drei'
import Iphone from './Iphone.jsx'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import Loader from './Loader.jsx'

const ModelView = (
    { index, groupRef, gsapType, controlRef, setRotationState, item, size }
) => {
  return (
    <View
        index={index}
        id={gsapType}
        className={`w-full h-full absolute ${index===2? 'right-[-100%]' : ''}`}
    >
        <ambientLight intensity={0.3} />
        <PerspectiveCamera makeDefault position={[0,0,4]}>
        </PerspectiveCamera>

        <Lights />
        <OrbitControls makeDefault
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            target={new THREE.Vector3(0,0,0)}
            onEnd={() => 
            {
                setRotationState(controlRef.current.getAzimuthalAngle())
            }}
        />

        <group ref={groupRef} 
        name={`${index===1}? 'small' : 'Large'` }
        position={[0,0,0]}
        >
            <Suspense fallback={<Loader />}>
                <Iphone 
                    scale={index===1 ? [15,15,15]: [17,17,17]}
                    item={item}
                    size={size}
                />
            </Suspense>
        </group>
    </View>
  )
}

export default ModelView