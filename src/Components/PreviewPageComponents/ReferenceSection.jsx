import Heading from "@/Components/Shared/Heading";
import Steps from "@/Components/PreviewPageComponents/StepsComponent/StepsComponent";
const stepsData = [
  {
    id: 1,
    title: "Design Inspirations for This Components",
    commands: [
      {
        command: `https://dribbble.com/following`,
        isOptional: false,
        isLink: true,
      },
    ],
    open :true
  },
];

const ReferenceSection = () => {
  return (
    <section className="w-full max-w-[1200px] pb-8 md:pb-16 md:pt-20">
      <Heading title={"Resources used in this component"} />
      {stepsData.map((step) => (
        <Steps key={step.id} commands={step?.commands} title={step?.title} open={step.open} />
      ))}
    </section>
  );
};

export default ReferenceSection;
