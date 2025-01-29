"use client";
import React, { useEffect, useRef } from "react";
import { useEditor } from "@/features/editor/hooks/use-editor";
import { fabric } from "fabric";
import { Navbar } from "./navbar";

export const Editor = () => {
  const { init } = useEditor();

  const canvasRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });
    init({
      initialCanvas: canvas,
      initialContainer: containerRef.current!,
    });
  }, [init]);

  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
        <div className="flex-1 h-full bg-muted " ref={containerRef}>
          <canvas ref={canvasRef} />
        </div>
      </div>
    </div>
  );
};
