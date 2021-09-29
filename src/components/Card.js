/* eslint-disable react/destructuring-assignment */
import Image from "next/image";
import Link from "next/link";

export const Card = ({ title, description, imgSrc, href }) => {
  return (
    <div className="p-4" style={{ maxWidth: "544px" }}>
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`} passHref>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center lg:h-48 md:h-36"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center lg:h-48 md:h-36"
            width={544}
            height={306}
          />
        )}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight z-50">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p
            className="mb-3 prose text-gray-500 max-w-none min-h-full md:max-h-28 md:overflow-x-auto"
            style={{ minHeight: "150px" }}
          >
            {description}
          </p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 "
              aria-label={`Link to ${title}`}
            >
              会員登録いただくと、製品詳細をご覧いただくことができます。&rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export const CardModal = ({ title, description, imgSrc, href }) => {
  return (
    <div className="p-4" style={{ maxWidth: "800px" }}>
      <div className="flex h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 p-3">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`} passHref>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center lg:h-48 md:h-36"
              width={272}
              height={153}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center lg:h-48 md:h-36"
            width={272}
            height={153}
          />
        )}
        <div className="px-6  w-2/3">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight z-50">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="mb-3 prose text-gray-500 max-w-none min-h-full md:max-h-24" style={{ minHeight: "150px" }}>
            {description}
          </p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 "
              aria-label={`Link to ${title}`}
            >
              会員登録いただくと、製品詳細をご覧いただくことができます。&rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
