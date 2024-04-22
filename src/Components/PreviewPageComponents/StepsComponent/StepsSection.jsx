import StepsComponent from "@/Components/PreviewPageComponents/StepsComponent/StepsComponent";
import Heading from "@/Components/Shared/Heading";

const stepsData = [
  {
    id: 1,
    title: "Step 1: Get Started with Vite Setup",
    commands: [
      {
        command: "pnpm create vite test-app --template react-swc",
        isOptional: true,
      },
      { command: "cd test-app", isOptional: true },
      { command: "pnpm install", isOptional: true },
      { command: "pnpm run dev", isOptional: true },
      { command: "http://localhost:5173/", isOptional: true },
    ],
  },
  {
    id: 2,
    title: "Step 2: Installing Dependencies",
    commands: [
      {
        command: "pnpm install -D tailwindcss postcss autoprefixer",
        isOptional: true,
      },
      { command: "npx tailwindcss init -p", isOptional: true },
      {
        command: `//Add this to tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    export default {
        content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
        extend: {},
        },
        plugins: [],
    };`,
        isOptional: true,
      },
      {
        command: `//Add this to index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;`,
        isOptional: true,
      },
      { command: "pnpm install lucide-react", isOptional: true },
    ],
  },
  {
    id: 3,
    title: "Step 3: Running the Component Code",
    commands: [
      {
        command: "Copy the above component code to your project.",
        isOptional: false,
      },
      {
        command:
          "Create a Component.jsx file in the src/components/ directory.",
        isOptional: false,
      },
      {
        command:
          "Import Component.jsx from the src/components/ directory to App.jsx",
        isOptional: false,
      },
      {
        command: "Render the <Component /> within the App.jsx file.",
        isOptional: false,
      },
    ],
  },
];

const StepsSection = () => {
  return (
    <section className="md:w-4/5 w-full md:my-20 my-12">
      <Heading title="Run This Code Locally" type="sub" />
      {stepsData.map((step) => (
        <StepsComponent key={step.id} Data={step} />
      ))}
    </section>
  );
};

export default StepsSection;
