'use client'
import React, { useState, useCallback, useMemo } from "react";
import Cropper from "react-easy-crop";

export default function ImageCropper({type, image, onCropComplete, handleSave, onClose } : any) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleCropComplete = useCallback(
    (_:any, croppedAreaPixels:any) => {
      onCropComplete(croppedAreaPixels);
    },
    [onCropComplete]
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-xl overflow-hidden">
        
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="font-semibold text-lg">Crop Image</h2>
          <button onClick={onClose} className="text-3xl font-bold cursor-pointer">
            x
          </button>
        </div>

        <div className="relative h-100 bg-black">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape={type}
            showGrid={false}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={handleCropComplete}
          />
        </div>

        <div className="px-4 py-4 space-y-3">
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Zoom</span>
            <input
              type="range"
              min={1}
              max={3}
              step={0.01}
              value={zoom}
              onChange={(e) => setZoom(e.target.value as any)}
              className="w-full"
            />
          </div>
  
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-md bg-[#055d59] text-white cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
