import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import eyeAnimation from "../assets/eye-animation.json"; 

export const LoadingScreen = ({ onComplete }) => {
    const lottieRef = useRef();

    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        if (lottieRef.current) {
            lottieRef.current.setSpeed(0.8); 
        }

        return () => document.body.classList.remove("overflow-hidden");
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <div className="w-screen h-screen md:scale-100 scale-[2]">
                <Lottie
                    lottieRef={lottieRef}
                    animationData={eyeAnimation}
                    loop={false}
                    autoplay={true}
                    style={{ width: "100%", height: "100%" }}
                    onComplete={() => {
                        onComplete();
                    }}
                />
            </div>
        </div>
    );
};