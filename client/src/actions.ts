"use server";

import ImageKit from "imagekit";
const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export const shareAction = async (formData: FormData) => {
  const file = formData.get("file") as File;
  // const des = formData.get("des") as string;
  // console.log(file,des);

  const byte = await file.arrayBuffer();
  const buffer = Buffer.from(byte);

  imagekit
    .upload({
      file: buffer,
      fileName: file.name,
      folder: "/post",
      transformation: {
        pre: "w-600",
      },
    })
    .then((result) => {
      console.log(result.url);
    })
    .catch((error) => {
      console.error(error);
    });
};
