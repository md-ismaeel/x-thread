"use client";
import { useState } from "react";
import ImageKitComponent from "./ImageKitComponent";
import Image from "next/image";
import { shareAction } from "@/actions";
import ImageEditor from "./ImageEditor";

export const Share = () => {
    const [media, setMedia] = useState<File | null>(null);
    const [isEditorOpen, seIsEditorOpen] = useState<boolean>(false);

    function handleMediaChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            console.log(e.target.files[0]);
            setMedia(e.target.files![0]);
        }
    }

    const preview = media && URL.createObjectURL(media);

    return (
        <form className="flex p-4 gap-4" action={shareAction}>
            {/* avatar */}
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <ImageKitComponent path="/general/avatar.png" alt="post" w={100} h={100} tr={true} />
            </div>

            {/* Others */}
            <div className="flex-1 flex flex-col gap-4">
                <input type="text" name="des" placeholder="what's happening?" className="bg-transparent placeholder:text-textGray outline-none text-lg" />

                {/* Icons and buttons */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                        <input type="file" name="file" onChange={handleMediaChange} accept="image/*" className="hidden" id="img-file" />
                        {/* previewUrl */}
                        {media && <div className="relative rounded-lg overflow-hidden">
                            <Image src={preview!} alt="preview" width={600} height={600} className="object-cover" />
                            <button onClick={() => seIsEditorOpen(true)} className="absolute top-2 left-2 bg-black text-white font-bold text-sm px-5 py-1 rounded-full">Edit</button>
                        </div>}

                        {/* image edit model */}
                        {isEditorOpen && preview && <ImageEditor previewUrl={preview} onClose={() => seIsEditorOpen(false)} />}
                        <label htmlFor="img-file" className="cursor-pointer">
                            <Image src="/icons/image.svg" alt="more" width={20} height={20} className="cursor-pointer" />
                        </label>
                        <Image src="/icons/gif.svg" alt="more" width={20} height={20} className="cursor-pointer" />
                        <Image src="/icons/poll.svg" alt="more" width={20} height={20} className="cursor-pointer" />
                        <Image src="/icons/emoji.svg" alt="more" width={20} height={20} className="cursor-pointer" />
                        <Image src="/icons/schedule.svg" alt="more" width={20} height={20} className="cursor-pointer" />
                        <Image src="/icons/location.svg" alt="more" width={20} height={20} className="cursor-pointer" />
                    </div>
                    <button className="bg-white text-black py-1 px-4 rounded-full">Post</button>
                </div>
            </div>
        </form>
    );
}