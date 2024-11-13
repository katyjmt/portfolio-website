import brands from "../data/brands.json";
import Image from "next/image";

type Props = {};
export default function BrandBar({}: Props) {
  return (
    <div className="brand-bar flex flex-wrap justify-end gap-4 w-full">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className={`${brand.name} flex basis-24 items-center`}
        >
          <Image
            src={`/brands/${brand.file}`}
            alt={brand.name}
            width={200}
            height={50}
            className={`object-contain ${
              brand.name === "Tommy Hilfiger" ? "w-10/12 m-auto" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
}
