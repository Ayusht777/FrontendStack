import * as yup from "yup";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "@/Components/Shared/Heading";
import DropDownMenu from "@/Components/DropDownMenu";
import Button from "@/Components/Shared/Button";
import { AlertTriangleIcon } from "lucide-react";
const FormField = ({ label, register, error, ...rest }) => (
  <>
    <label className="my-2">{label}</label>
    <input
      {...register}
      className={`mb-1.5 box-border w-full rounded-md bg-Bg px-3 py-1 outline outline-1 outline-Border  focus:bg-Nav ${error?.message ? "focus:outline-red-500" : "focus:outline-Logo"}`}
      {...rest}
    />
    {error && (
      <span className="mt-0.5 flex items-center gap-x-1 font-medium text-red-500">
        <AlertTriangleIcon className="size-3.5" strokeWidth={2.6} />
        {error?.message}
      </span>
    )}
  </>
);

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Please enter your full name.")
    .min(3, "Your full name must have at least 3 characters.")
    .max(50, "Your full name must not have more than 50 characters.")
    .matches(
      /^[a-zA-Z]+( [a-zA-Z]+)*$/,
      "Please use letters only for your full name."
    ),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address.")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please enter a valid email address."
    ),
  subject: yup.string().required("Please select a subject."),
  message: yup
    .string()
    .required("Please enter your message.")
    .min(10, "Your message must have at least 10 characters.")
    .max(500, "Your message must not have more than 500 characters."),
});

const QueryForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [selectedOption, setSelectedOption] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Heading title={"Connect with the Team"} />
      <p className=" -mt-6 mb-8 pl-4 text-center text-lg">Your Thoughts on this project?</p>
      <form
        className="  mx-auto flex  flex-col items-start px-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          label="Full Name"
          register={register("fullName")}
          error={errors.fullName}
          type="text"
          placeholder="Ayush Talesara"
        />
        <FormField
          label="Email"
          register={register("email")}
          error={errors.email}
          type="email"
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
        {errors.subject && (
          <span className="mt-0.5 flex items-center gap-x-1 font-medium text-red-500">
            <AlertTriangleIcon className="size-3.5" strokeWidth={2.6} />
            {errors.subject.message}
          </span>
        )}
        <label className="my-2">Message</label>
        <textarea
          {...register("message")}
          placeholder="Type your massage here."
          rows={4}
          spellCheck={true}
          className="mb-1.5 box-border w-full rounded-md  bg-Bg px-3 py-1 outline outline-1 outline-Border focus:bg-Nav focus:outline-Logo"
        ></textarea>
        {errors.message && (
          <span className="mt-0.5 flex items-center gap-x-1 font-medium text-red-500">
            <AlertTriangleIcon className="size-3.5" strokeWidth={2.6} />
            {errors.message.message}
          </span>
        )}
        <Button type="submit" title={"Submit"} />
      </form>
    </>
  );
};

export default QueryForm;
