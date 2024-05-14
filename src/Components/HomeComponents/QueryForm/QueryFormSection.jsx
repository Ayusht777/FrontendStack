import QueryForm from "@/Components/HomeComponents/QueryForm/QueryForm";

const QueryFormSection = () => {
  return (
    <section className=" relative  my-16 w-full max-w-[1200px] ">
      <div className="   w-full rounded-lg bg-[radial-gradient(#D7F400_1px,#111213_1px)]  p-0 text-white   outline outline-2 outline-Nav md:bg-[size:1.5rem_1.5rem] md:py-16">
        <div className=" mx-auto max-w-xl rounded-lg bg-Bg  md:p-4 p-2  outline outline-2 outline-Logo">
          <QueryForm />
        </div>
      </div>
    </section>
  );
};

export default QueryFormSection;
