/* eslint-disable react/destructuring-assignment */
import Head from "next/head";
import { useRouter } from "next/router";
import { siteMetadata } from "src/data/siteMetadata";

const CommonSEO = ({ title, description, ogType, ogImage, twImage }) => {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {ogImage.constructor.name === "Array" ? (
        ogImage.map(({ url }) => {
          return <meta property="og:image" content={url} key={url} />;
        })
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMetadata.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
    </Head>
  );
};

export const PageSEO = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  return (
    <>
      <CommonSEO title={title} description={description} ogType="website" ogImage={ogImageUrl} twImage={twImageUrl} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export const BlogSEO = ({ authorDetails, title, summary, date, lastmod, url, images = [] }) => {
  const router = useRouter();
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();
  const imagesArr = images.length === 0 ? [siteMetadata.socialBanner] : typeof images === "string" ? [images] : images;

  const featuredImages = imagesArr.map((img) => {
    return {
      "@type": "ImageObject",
      url: `${siteMetadata.siteUrl}${img}`,
    };
  });

  let authorList;
  if (authorDetails) {
    authorList = authorDetails.map((author) => {
      return {
        "@type": "Person",
        name: author.name,
      };
    });
  } else {
    authorList = {
      "@type": "Person",
      name: siteMetadata.author,
    };
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    image: featuredImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: authorList,
    publisher: {
      "@type": "Organization",
      name: siteMetadata.author,
      logo: {
        "@type": "ImageObject",
        url: `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      },
    },
    description: summary,
  };

  const twImageUrl = featuredImages[0].url;

  return (
    <>
      <CommonSEO title={title} description={summary} ogType="article" ogImage={featuredImages} twImage={twImageUrl} />
      <Head>
        {date && <meta property="article:published_time" content={publishedAt} />}
        {lastmod && <meta property="article:modified_time" content={modifiedAt} />}
        <link rel="canonical" href={`${siteMetadata.siteUrl}${router.asPath}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  );
};
