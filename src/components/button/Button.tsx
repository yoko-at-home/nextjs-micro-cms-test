import type { VFC } from "react";

type Props = {
  children: Node;
};
export const Button: VFC<Props> = (props) => {
  return (
    <span className="text-gray-300 sm:px-4 bg-gradient-to-r from-gray-400 to-gray-500 opacity-80 p-3 rounded">
      {props.children}
    </span>
  );
};
