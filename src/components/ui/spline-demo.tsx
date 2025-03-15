
'use client'

import { useState, useEffect } from "react";
import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Bot, Laptop, Lightbulb } from "lucide-react";
 
export function SplineSceneBasic() {
  const [splineError, setSplineError] = useState(false);

  // Handle errors with Spline loading
  useEffect(() => {
    const handleError = () => {
      const errorHandler = (event: ErrorEvent) => {
        if (event.message.includes("Failed to fetch") && 
            event.filename.includes("spline")) {
          setSplineError(true);
        }
      };
      
      window.addEventListener('error', errorHandler);
      
      return () => {
        window.removeEventListener('error', errorHandler);
      };
    };
    
    handleError();
  }, []);

  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border border-neutral-800">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-400 max-w-lg">
            Bring your AI to life with blockchain technology. Create immersive experiences 
            that capture attention and enhance your project.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          {!splineError ? (
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 bg-neutral-800/40 rounded-lg flex justify-center">
                      <Bot className="h-8 w-8 text-neutral-400" />
                    </div>
                    <div className="p-3 bg-neutral-800/40 rounded-lg flex justify-center">
                      <Laptop className="h-8 w-8 text-neutral-400" />
                    </div>
                    <div className="p-3 bg-neutral-800/40 rounded-lg flex justify-center">
                      <Lightbulb className="h-8 w-8 text-neutral-400" />
                    </div>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm">
                  3D scene visualization
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
