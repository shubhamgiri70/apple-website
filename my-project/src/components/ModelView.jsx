import {
  PerspectiveCamera,
  View,
  Html,
  OrbitControls,
} from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import Model from "./Iphone";
import * as THREE from "three";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationRef,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={` w-full h-full ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      {/* Perspective Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* Lights */}
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1} 'small' : 'large'`}
        position={[0, 0, 0]}
      >
        {/* Model with Fallback */}
        <Suspense fallback={<Html>Loading...</Html>}>
          <Model
            Scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            size={size}
            item={item}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
