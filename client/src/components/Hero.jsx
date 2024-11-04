import Typewriter from 'typewriter-effect';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import asif from '../assets/images/asif.png';
import cv from '../assets/docs/Asif Zaman.pdf';
import computer from '../assets/model/desktop.glb';


// 3D Model Component
function Model() {
    const { scene } = useGLTF(computer);
    return (
        <primitive 
            object={scene} 
            scale={0.5} 
            position={[1, 0, 0]} 
        />
    );
}``

const Hero = () => {
    return (
        <div id="home" className="flex flex-col items-center w-full max-w-full mx-auto px-8 py-16 space-y-8">
            {/* Text Section */}
            <div className="w-full text-left max-w-7xl space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Hello, Myself <span className="text-green-600">
                        <Typewriter
                            options={{
                                strings: ['Asif Zaman'],
                                autoStart: true,
                                loop: true,
                                delay: 500,
                                deleteSpeed: Infinity,
                                cursor: '_',
                            }}
                        />
                    </span>
                </h1>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Having experience as
                    <span className="ml-2 font-bold text-2xl text-green-600">
                        <Typewriter
                            options={{
                                strings: [
                                    'Fullstack development',
                                    'Mobile app development',
                                    'Three.js development',
                                    'AI & ML researcher',
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                                cursor: '|',
                            }}
                        />
                    </span>
                </h3>
                
                <p className="text-lg text-gray-600 mt-4">
                    Allows me to navigate various aspects of software development. "I bring a comprehensive approach to building scalable and efficient systems” refers to the diverse skill set implied by the listed designations.
                </p>

                {/* View CV Button */}
                <a
                    href={cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition-all"
                >
                    Download CV
                </a>
            </div>

            {/* 3D Model Canvas Section */}
            <div className="w-1/2 h-[50vh] md:h-[600px] bg-transparent">
                <Canvas dpr={[1, 2]} shadows>
                    <ambientLight intensity={0.3} />
                    <directionalLight 
                        position={[10, 10, 5]} 
                        intensity={10} 
                        castShadow 
                        shadow-mapSize={[2048, 2048]} 
                    />
                    <Environment preset="studio" />
                    <Model />
                    <OrbitControls 
                        enableZoom={false}
                        maxAzimuthAngle={0.1}   
                        minAzimuthAngle={-0.1}  
                        maxPolarAngle={Math.PI / 2.1} 
                        minPolarAngle={Math.PI / 2.5}
                        enableDamping={true} 
                        dampingFactor={0.05}   
                        rotateSpeed={0.2} 
                        enablePan={false}
                    />
                </Canvas>
            </div>
        </div>
    );
};

export default Hero;
