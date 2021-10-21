export const PageTitle = (props) => {
  return (
    <h1 className="mt-10 mb-5 lg:mb-10 text-3xl font-extrabold leading-9 tracking-tight text-gray-900  sm:text-4xl sm:leading-10 md:text-5xl md:leading-10 md:mb-16">
      {props.children}
    </h1>
  );
};
