import Image from "next/image";
import Link from "next/link";

export const Card = (props) => {
  return (
    <div className="p-4" style={{ maxWidth: "544px" }}>
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60">
        {props.href ? (
          <Link href={props.href} aria-label={`Link to ${props.title}`} passHref>
            <Image
              alt={props.title}
              src={props.imgSrc}
              className="object-cover object-center lg:h-48 md:h-36"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={props.title}
            src={props.imgSrc}
            className="object-cover object-center lg:h-48 md:h-36"
            width={544}
            height={306}
          />
        )}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight z-50">
            {props.href ? (
              <Link href={props.href} aria-label={`Link to ${props.title}`}>
                {props.title}
              </Link>
            ) : (
              props.title
            )}
          </h2>
          <p
            className="mb-3 prose text-gray-500 max-w-none min-h-full md:max-h-28 md:overflow-x-auto"
            style={{ minHeight: "150px" }}
          >
            {props.description}
          </p>
          {props.href && (
            <Link
              href={props.href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 "
              aria-label={`Link to ${props.title}`}
            >
              {props.title} 詳細 &rarr;&rarr;&rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export const CardModal = (props) => {
  return (
    <div className="p-4" style={{ maxWidth: "800px" }}>
      <div className="flex flex-col md:flex-row h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 p-3">
        {props.href ? (
          <a target="_blank" href={props.href} aria-label={`Link to ${props.title}`} passHref rel="noreferrer">
            <Image
              alt={props.title}
              src={props.imgSrc}
              className="object-cover object-center lg:h-48 md:h-36"
              width={272}
              height={153}
            />
          </a>
        ) : (
          <Image
            alt={props.title}
            src={props.imgSrc}
            className="object-cover object-center lg:h-48 md:h-36"
            width={272}
            height={153}
          />
        )}
        <div className="px-6  md:w-2/3">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight z-50">
            {props.href ? (
              <Link href={props.href} aria-label={`Link to ${props.title}`}>
                {props.title}
              </Link>
            ) : (
              props.title
            )}
          </h2>
          <p className="mb-3 prose text-gray-500 max-w-none min-h-full md:max-h-24" style={{ minHeight: "150px" }}>
            {props.description}
          </p>
          {props.href && (
            <a
              target="_blank"
              href={props.href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 "
              aria-label={`Link to ${props.title}`}
              rel="noreferrer"
            >
              {props.title} 詳細 &rarr;&rarr;&rarr;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
