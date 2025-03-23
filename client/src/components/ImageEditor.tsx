import Image from "next/image";
import React from "react";

interface ImageEditorProps {
    previewUrl: string;
    onClose: () => void;
}

export default function ImageEditor({ previewUrl, onClose }: ImageEditorProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="relative bg-black border border-textGray p-4 rounded-lg shadow-lg">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-black hover:bg-slate-900 px-2 py-1 rounded-full"
                >
                    ✕
                </button>

                {/* Image */}
                <div className="rounded-lg overflow-hidden">
                    <Image src={previewUrl} alt="edit" width={600} height={600} />
                </div>
            </div>
        </div>
    );
}
