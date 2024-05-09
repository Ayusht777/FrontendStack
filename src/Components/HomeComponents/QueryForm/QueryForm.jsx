import { useForm } from "react-hook-form";
import DropDownMenu from "@/Components/DropDownMenu";
import Heading from '@/Components/Shared/Heading'
const QueryForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("s");
  };

  return (
    <div className="mx-auto max-w-lg py-4 text-white">
      <Heading title={"Connect with the Team"} />
      <p className=" -mt-6 mb-4 pl-4 ">
        Do you have any suggestions for this project or have any issues with it?
      </p>
      <form
        className="  mx-auto flex  flex-col items-start px-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="my-2">Full Name</label>
        <input
          type="text"
          {...register("FullName")}
          className="mb-1.5 box-border w-full rounded-md bg-Bg px-3 py-1 outline outline-1 outline-Border  focus:bg-Nav focus:outline-Logo"
          placeholder="Ayush Talesara"
        />
        <label className="my-2">Email</label>
        <input
          type="email"
          {...register("Email")}
          className="mb-1.5 box-border w-full rounded-md bg-Bg px-3 py-1 outline outline-1 outline-Border  focus:bg-Nav focus:outline-Logo"
          placeholder="ayush@mail.com"
        />
        <label className="my-2">Subject</label>
        <DropDownMenu />
        <label className="my-2">Message</label>
        <textarea
          {...register("Message")}
          placeholder="Type your massage here."
          rows={4}
          className="mb-1.5 box-border w-full rounded-md  bg-Bg px-3 py-1 outline outline-1 outline-Border focus:bg-Nav focus:outline-Logo"
        ></textarea>
        <input type="submit" className="my-2" />
      </form>
    </div>
  );
};

export default QueryForm;
