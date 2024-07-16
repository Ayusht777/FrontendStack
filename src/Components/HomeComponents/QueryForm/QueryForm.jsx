import * as yup from "yup";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "@/Components/Shared/Heading";
import { AlertTriangleIcon } from "lucide-react";
import QuerySelector from '@/Components/HomeComponents/QueryForm/QuerySelector';

const SubmitButton = () => (
  <button
    type="submit"
    aria-label="Submit form"
    className="my-2 min-w-16 rounded-lg bg-Logo px-5 py-1.5 text-center font-semibold tracking-tight text-Bg transition-colors duration-300 ease-in-out hover:bg-Logo/90 focus:outline-Logo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
  >
    Submit
  </button>
);

const FormField = ({ label, register, error, ...rest }) => (
  <>
    <label aria-label={label} className="my-2">{label}</label>
    <input
      {...register}
      className={`mb-1.5 box-border w-full rounded-md bg-Bg px-3 py-1 outline outline-1 outline-Border focus:bg-Nav ${error ? "focus:outline-red-500" : "focus:outline-Logo"}`}
      {...rest}
    />
    {error && (
      <span className="mt-0.5 flex items-center gap-x-1 font-medium text-red-500" role="alert">
        <AlertTriangleIcon className="size-3.5" strokeWidth={2.6} />
        {error.message}
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
    .matches(/^[a-zA-Z]+( [a-zA-Z]+)*$/, "Please use alphabets only for your full name."),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address.")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Please enter a valid email address."),
  subject: yup.string().oneOf(
    ["Report a Bug", "Issue with a Component", "Suggestion for Improvement", "General Inquiry"],
    "Please select a valid subject."
  ),
  message: yup
    .string()
    .required("Please enter your message.")
    .min(10, "Your message must have at least 10 characters.")
    .max(500, "Your message must not have more than 500 characters."),
});

const QueryForm = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { subject: "Select a Subject" }
  });

  const options = [
    { value: "Report a Bug", label: "Report a Bug" },
    { value: "Issue with a Component", label: "Issue with a Component" },
    { value: "Suggestion for Improvement", label: "Suggestion for Improvement" },
    { value: "General Inquiry", label: "General Inquiry" },
  ];

  const [selectedOption, setSelectedOption] = useState("Select a Subject");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Heading title="Connect with the Team" />
      <p className="-mt-6 mb-8 pl-4 text-center text-lg">
        Your Thoughts on this project?
      </p>
      <form
        className="mx-auto flex flex-col items-start px-4"
        onSubmit={handleSubmit(onSubmit)}
        aria-label="Contact form"
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
          render={({ field }) => (
            <QuerySelector
              options={options}
              selectedOption={field.value}
              onOptionChange={(value) => {
                field.onChange(value);
                setSelectedOption(value);
              }}
            />
          )}
        />
        {errors.subject && (
          <span className="mt-0.5 flex items-center gap-x-1 font-medium text-red-500" role="alert">
            <AlertTriangleIcon className="size-3.5" strokeWidth={2.6} />
            {errors.subject.message}
          </span>
        )}
        <label className="my-2">Message</label>
        <textarea
          {...register("message")}
          placeholder="Type your message here."
          rows={4}
          spellCheck={true}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mb-1.5 box-border w-full rounded-md bg-Bg px-3 py-1 outline outline-1 outline-Border focus:bg-Nav focus:outline-Logo"
        ></textarea>
        {errors.message && (
          <span className="mt-0.5 flex items-center gap-x-1 font-medium text-red-500" role="alert">
            <AlertTriangleIcon className="size-3.5" strokeWidth={2.6} />
            {errors.message.message}
          </span>
        )}
        <SubmitButton />
      </form>
    </>
  );
};

export default QueryForm;
