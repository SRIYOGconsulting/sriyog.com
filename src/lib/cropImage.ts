export async function getCroppedImage(imageSrc: string | File, crop: any): Promise<File> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  canvas.width = crop.width;
  canvas.height = crop.height;

  ctx.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) return;
      const file = new File([blob], "cropped.jpg", { type: "image/jpeg" });
      resolve(file);
    }, "image/jpeg");
  });
}

function createImage(url: string | File) {
  return new Promise<HTMLImageElement>((resolve) => {
    const img = new Image();
    img.src = typeof url === "string" ? url : URL.createObjectURL(url);
    img.onload = () => resolve(img);
  });
}
