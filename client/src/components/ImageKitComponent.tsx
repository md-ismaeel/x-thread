"use client";
import { IKImage } from "imagekitio-next";
import React from "react";

interface ImageKitComponentProps {
    path?: string;
    alt: string;
    w?: number;
    h?: number;
    className?: string;
    tr?: boolean
}

export default function ImageKitComponent({ path, alt, w, h, tr, className }: ImageKitComponentProps) {
    const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

    return (
        <>
            <IKImage
                urlEndpoint={urlEndpoint}
                path={path}
                alt={alt}
                width={w}
                height={h}
                className={className}
                {...(tr ? { transformation: [{ width: `${w}`, height: `${h}` }] } : { width: w, height: h })}
            />
        </>
    );
}
