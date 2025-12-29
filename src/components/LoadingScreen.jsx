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
            <div className="h-screen"> 
                <Lottie 
                    lottieRef={lottieRef}
                    animationData={eyeAnimation}
                    loop={false} 
                    autoplay={true}
                    onComplete={() => {
                        onComplete();
                    }}
                />
            </div>
        </div>
    );
};