import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface Photo {
  id: number;
  width: number;
  height: number;
  url: string | StaticImageData;
  src: {
    large: string;
  };
  alt: string;
  blurredDataUrl?: string;
}

type Props = {
  photo: Photo;
  sizes?: number;
};

export default function ImgContainer({ photo, sizes = 250 }: Props) {
  const widthHeightRatio = photo.height / photo.width;
  const galleryHeight = Math.ceil(sizes * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div
      className={`w-[${sizes}px] justify-self-center`}
      style={{ gridRow: `span ${photoSpans}` }}
    >
      <Link href="#" className="grid place-content-center">
        <div className="rounded-md overflow-hidden group">
          <Image
            src={photo.url}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={`${sizes}px`}
            placeholder="blur"
            blurDataURL={""}
            className="group-hover:opacity-75"
          />
        </div>
      </Link>
    </div>
  );
}
// export default function ImgContainer({ photo }: Props) {
//   const widthHeightRatio = photo.height / photo.width;
//   const galleryHeight = Math.ceil(250 * widthHeightRatio);
//   const photoSpans = Math.ceil(galleryHeight / 10) + 1;

//   return (
//     <div
//       className="w-[250px] justify-self-center"
//       style={{ gridRow: `span ${photoSpans}` }}
//     >
//       <Link
//         href={photo.url}
//         target="_blank"
//         className="grid place-content-center"
//       >
//         <div className="rounded-xl overflow-hidden group">
//           <Image
//             src={photo.src.large}
//             alt={photo.alt}
//             width={photo.width}
//             height={photo.height}
//             sizes="250px"
//             placeholder="blur"
//             blurDataURL={photo.blurredDataUrl}
//             className="group-hover:opacity-75"
//           />
//         </div>
//       </Link>
//     </div>
//   );
// }
