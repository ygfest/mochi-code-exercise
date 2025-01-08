import { TbError404 } from "react-icons/tb";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-between gap-4">
        <p className="text-center text-[15rem] text-primary">
          <TbError404 />
        </p>
        <div>
          <h2 className="text-center text-[2rem] font-black">Not Found</h2>
          <p className="text-center">Nothing to see here.</p>
          <Link href="/">
            <p className="hover:bg-primary/20 transition ease-in-out duration-100 rounded-md px-4 py-2 font-semibold text-primary mt-8">
              {" "}
              Go to products showcase instead?{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
