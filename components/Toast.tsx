import { toast } from "react-hot-toast";
import classNames from "classnames";

type Props = {
  title: string;
  error: boolean;
};

export const Toast = ({ title, error }: Props): any =>
  toast.custom((t) => (
    <div
      className={classNames(
        " px-6 py-3.5 shadow-md rounded-lg flex items-center space-x-2 !z-[30000]",
        {
          "animate-enter": t.visible,
          "animate-leave": !t.visible,
          " bg-[#F2FCF5] text-[#029247] border-l-4 border-[#029247]": !error,
          "bg-[#FFF3F2] text-[#FF3B30] border-l-4 border-[#FF3B30]": error,
        }
      )}
    >
      <span className="font-semibold">{title ?? "Error Occurred"}</span>
    </div>
  ));

function Search() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
        fill="#CBCBCB"
      />
      <path
        d="M21.9999 22.7499C21.8099 22.7499 21.6199 22.6799 21.4699 22.5299L19.4699 20.5299C19.1799 20.2399 19.1799 19.7599 19.4699 19.4699C19.7599 19.1799 20.2399 19.1799 20.5299 19.4699L22.5299 21.4699C22.8199 21.7599 22.8199 22.2399 22.5299 22.5299C22.3799 22.6799 22.1899 22.7499 21.9999 22.7499Z"
        fill="#CBCBCB"
      />
    </svg>
  );
}

export default Search;