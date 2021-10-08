/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
export const getStaticProps = async (context) => {
  const slug = context.params?.slug;
  const draftKey = context.previewData?.draftKey;
  const content = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/news/${slug}${draftKey !== undefined ? `?draftKey=${draftKey}` : ""}`,
    { headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY || "" } }
  ).then((res) => res.json());
  return {
    props: {
      content,
    },
  };
};
