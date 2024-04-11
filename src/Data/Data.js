import Test from "@/Components/Test";

export const data = [
  {
    id: "01",
    componentCode: `
      const Test = () => {
        return (
          <button className="w-56 h-12 bg-green-500 text-white">click me</button>
        );
      };
      
      export default Test;
    `,
    Component: Test,
  },
];
