import NextImage from "next/image";

// eslint-disable-next-line react/destructuring-assignment
export const CustomImage = ({ ...rest }) => {
  return <NextImage {...rest} />;
};
