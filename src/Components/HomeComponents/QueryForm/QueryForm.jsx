import { useForm } from "react-hook-form";
import DropDownMenu from "@/Components/DropDownMenu";
const QueryForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("s");
  };

  return (
    <form
      className=" flex max-w-64 flex-col items-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Full Name</label>
      <input
        type="text"
        {...register("FullName")}
        className="mb-1 mt-2 box-border w-full rounded-md bg-inherit px-3 py-1 outline outline-1  outline-Border focus:outline-Logo"
        placeholder="Ayush"
      />
      <label>Email</label>
      <input
        type="email"
        {...register("Email")}
        className="mb-1 mt-2 box-border w-full rounded-md bg-inherit px-3 py-1 outline outline-1  outline-Border focus:outline-Logo"
        placeholder="ayush@mail.com"
      />
      <label>Subject</label>
      <DropDownMenu />
      <label>Message</label>
      <textarea
        {...register("Message")}
        placeholder="Type your massage here."
        rows={4}
        className="mb-1 mt-2 box-border w-full rounded-md  bg-inherit px-3 py-1 outline outline-1 outline-Border focus:outline-Logo"
      ></textarea>
      <input type="submit" />
    </form>
  );
};

export default QueryForm;
