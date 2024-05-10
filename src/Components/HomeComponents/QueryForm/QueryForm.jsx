import * as yup from "yup";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "@/Components/Shared/Heading";
import DropDownMenu from "@/Components/DropDownMenu";
import Button from "@/Components/Shared/Button";

const validationSchema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
});

const QueryForm = () => {
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [selectedOption, setSelectedOption] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
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
          {...register("fullName")}
          className="mb-1.5 box-border w-full rounded-md bg-Bg px-3 py-1 outline outline-1 outline-Border  focus:bg-Nav focus:outline-Logo"
          placeholder="Ayush Talesara"
        />
        <label className="my-2">Email</label>
        <input
          type="email"
          {...register("email")}
          className="mb-1.5 box-border w-full rounded-md bg-Bg px-3 py-1 outline outline-1 outline-Border  focus:bg-Nav focus:outline-Logo"
          placeholder="ayush@mail.com"
        />
        <label className="my-2">Subject</label>
        <Controller
          name="subject"
          control={control}
          defaultValue={selectedOption}
          render={({ field }) => (
            <DropDownMenu
              dropdownOptions={["option 1", "option 2", "option 3"]}
              onOptionChange={(value) => {
                field.onChange(value);
                setSelectedOption(value);
              }}
              selectedOption={field.value}
            />
          )}
        />

        <label className="my-2">Message</label>
        <textarea
          {...register("message")}
          placeholder="Type your massage here."
          rows={4}
          className="mb-1.5 box-border w-full rounded-md  bg-Bg px-3 py-1 outline outline-1 outline-Border focus:bg-Nav focus:outline-Logo"
        ></textarea>

        <Button type="submit" title={"Submit"} />
      </form>
    </div>
  );
};

export default QueryForm;
