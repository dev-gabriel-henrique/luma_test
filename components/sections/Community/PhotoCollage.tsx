import Image from "next/image";

interface CollagePhotoDTO {
  src: string;
  alt: string;
  aspect: string;
}

interface CollageColumnDTO {
  offset: string;
  photos: CollagePhotoDTO[];
}

const columns: CollageColumnDTO[] = [
  {
    offset: "mt-10",
    photos: [
      {
        src: "/Images/persons2.jpg",
        alt: "Student taking notes at a desk",
        aspect: "aspect-4/5",
      },
      {
        src: "/Images/persons7.jpg",
        alt: "Teacher smiling in a classroom",
        aspect: "aspect-2/3",
      },
    ],
  },
  {
    offset: "mt-0",
    photos: [
      {
        src: "/Images/persons1.jpg",
        alt: "Student reading a book",
        aspect: "aspect-4/5",
      },
      {
        src: "/Images/persons6.jpg",
        alt: "Library shelves full of books",
        aspect: "aspect-3/5",
      },
      {
        src: "/Images/persons8.jpg",
        alt: "Student studying on a laptop",
        aspect: "aspect-4/5",
      },
    ],
  },
  {
    offset: "mt-4",
    photos: [
      {
        src: "/Images/persons3.jpg",
        alt: "Graduate holding a diploma",
        aspect: "aspect-4/5",
      },
      {
        src: "/Images/persons5.jpg",
        alt: "Quiet study corner",
        aspect: "aspect-4/5",
      },
      {
        src: "/Images/persons9.jpg",
        alt: "Online class on a monitor",
        aspect: "aspect-4/5",
      },
    ],
  },
  {
    offset: "mt-8",
    photos: [
      {
        src: "/Images/persons4.jpg",
        alt: "Teacher holding a notebook",
        aspect: "aspect-2/4",
      },
      {
        src: "/Images/persons10.jpg",
        alt: "Student smiling outdoors",
        aspect: "aspect-3/4",
      },
    ],
  },
];

export default function PhotoCollage() {
  return (
    <div className="relative mx-auto w-full max-w-md md:max-w-lg">
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 aspect-square w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary-light"
      />

      <div className="relative grid grid-cols-4 gap-2 sm:gap-3">
        {columns.map((column) => (
          <ul
            key={column.photos[0].src}
            className={`flex flex-col gap-2 sm:gap-3 ${column.offset}`}
          >
            {column.photos.map((photo) => (
              <li
                key={photo.src}
                className={`relative overflow-hidden rounded-md bg-white shadow-sm ${photo.aspect}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 767px) 25vw, 12vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
