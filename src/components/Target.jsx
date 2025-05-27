import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Target = (props) => {
  const targetRef = useRef(null);
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      ease: "power1.inOut",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
    // gsap.to(targetRef.current.rotation, {
    //   y: targetRef.current.rotation.y + Math.PI * 2,
    //   ease: "power1.inOut",
    //   duration: 10,
    //   repeat: -1,
    // });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
