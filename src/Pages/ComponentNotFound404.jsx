import { HiEye } from "react-icons/hi2";
import Button from "@/Components/Shared/Button";
import { Link } from "react-router-dom";
import {PackageX} from "lucide-react"
import GridBackgroundV2 from "@/Components/Shared/GridBackgroundV2";

const ComponentNotFound404 = () => {
  return (
    <GridBackgroundV2 TwClass="[mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,#000_70%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_60%_70%_at_50%_0%,#000_70%,transparent_100%)]">
      <div
        className=" relative z-20 flex min-h-dvh items-center justify-center"
        aria-label="Page Not Found "
      >
        <div className=" flex  w-4/5 flex-col items-center justify-center">
          <div className="mb-8 box-border flex size-64 items-center justify-center rounded-full bg-Nav p-8 ">
            <PackageX className=" size-full text-Logo" />
          </div>
          <div className="flex flex-col text-center leading-10 md:-mt-4 ">
            <h2 className=" text-2xl text-white md:text-3xl max-w-xl">
              We're sorry, the component you're looking for hasn't been uploaded
              yet.
            </h2>
          </div>
          <div className="mt-4 md:mt-8">
            <Link to="/">
              <Button title="GO TO GALLERY" path={"/gallery"} />
            </Link>
          </div>
        </div>
      </div>
    </GridBackgroundV2>
  );
};

export default ComponentNotFound404;
