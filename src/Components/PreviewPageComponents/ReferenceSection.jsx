import Heading from "@/Components/Shared/Heading";
import StepsComponent from "@/Components/PreviewPageComponents/StepsComponent/StepsComponent";
const stepsData = [
  {
    id: 1,
    title: "Design Inspirations for This Components",
    commands: [
      {
        command: `https://dribbble.com/following`,
        isOptional: false,
      },
    ],
  },
];

const ReferenceSection = () => {
  return (
    <section className="md:w-4/5 w-full md:my-32 my-12">
      <Heading title="Resources used in this component" type="sub" />
      {stepsData.map((step) => (
        <StepsComponent key={step.id} Data={step} />
      ))}
    </section>
  );
};

export default ReferenceSection;
