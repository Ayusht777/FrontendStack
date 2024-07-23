import ButtonWrapperAyush from "@/ChallangeComponents/Ayush Talesara/Button";
import ButtonWrapperDivyanshu from "@/ChallangeComponents/Divyanshu Sahu/Button";
import ButtonWrapperHarshit from "@/ChallangeComponents/Harshit/Button";
import ButtonWrapperAarsh from "@/ChallangeComponents/Aarsh Bharti/Button";

export const authors = [
  {
    id: 0,
    author: "Ayush Talesara",
    img: `https://avatars.githubusercontent.com/u/106388215?v=4`,
  },
  {
    id: 1,
    author: "Divyanshu Sahu",
    img: `https://avatars.githubusercontent.com/u/107391324?v=4`,
  },
  {
    id: 2,
    author: "Harshit Sharma",
    img: `https://avatars.githubusercontent.com/u/106171546?v=4`,
  },
  {
    id: 3,
    author: "Aarsh Bharti",
    img: `https://avatars.githubusercontent.com/u/103813892?v=4`,
  },
];
export const componentsData = [
  {
    id: 1,
    name: "Button",
    type: "Basic",
    variations: [
      {
        author: "Ayush Talesara",
        codeLanguage: "Jsx",
        dateCreated: "2024-04-25",
        code: `
    import { cn } from "@/Utils/twMerge";
    const ButtonWrapperAyush = () => {
      return (
        <div className="flex h-full w-full items-center justify-center ">
          <Button BgColor="bg-gray-100" hoverColor={"hover:bg-gray-100/90"}>
            Button
          </Button>
        </div>
      );
    };
    const Button = ({
      BgColor = "bg-gray-100",
      hoverColor = "hover:bg-gray-100/90",
      children,
    }) => {
      return (
        <button
          type="button"
          className={cn(
        \`rounded-md px-6 py-2 transition-colors ease-in-out focus:outline focus:outline-1 focus:outline-black \`, 
        \`\${BgColor}\`\, 
        \`\${hoverColor}\`\,
          )}
        >
          {children}
        </button>
      );
    };

    export default ButtonWrapperAyush;

      `,
        renderedComponent: ButtonWrapperAyush,
        attributes: [
          {
            attribute: "Children",
            type: "ReactNode",
            description:
              "You Can put String for title and svg + string for icon version",
            defaultValue: "-",
          },
          {
            attribute: "BgColor",
            type: "String",
            description: "Set the Background Color of the Button",
            defaultValue: "bg-gray-100",
          },
          {
            attribute: "hoverColor",
            type: "String",
            description: "Set the Hover State Color of the Button",
            defaultValue: "hover:bg-gray-100/90",
          },
        ],
      },
      {
        author: "Divyanshu Sahu",
        codeLanguage: "Jsx",
        dateCreated: "2024-04-25",
        code: `
      import { cn } from "@/Utils/twMerge";
      const ButtonWrapperDivyanshu = () => {
        return (
          <div className="flex h-full w-full items-center justify-center ">
            <Button BgColor="bg-red-500" hoverColor={"hover:bg-red-500/90"}>
              Button
            </Button>
          </div>
        );
      };
      const Button = ({
        BgColor = "bg-gray-100",
        hoverColor = "hover:bg-gray-100/90",
        children,
      }) => {
        return (
          <button
            type="button"
            className={cn(
              \` rounded-md px-6 py-2 transition-colors ease-in-out focus:outline  focus:outline-1 focus:outline-black \`,
              \`\${BgColor}\`\,
              \`\${hoverColor}\`\,
           )}
          >
            {children}
          </button>
        );
      };

      export default ButtonWrapperDivyanshu;
`,
        renderedComponent: ButtonWrapperDivyanshu,
        attributes: [
          {
            attribute: "Children",
            type: "ReactNode",
            description:
              "You Can put String for title and svg + string for icon version",
            defaultValue: "-",
          },
          {
            attribute: "BgColor",
            type: "String",
            description: "Set the Background Color of the Button",
            defaultValue: "bg-gray-100",
          },
          {
            attribute: "hoverColor",
            type: "String",
            description: "Set the Hover State Color of the Button",
            defaultValue: "hover:bg-gray-100/90",
          },
        ],
      },
      {
        author: "Harshit Sharma",
        codeLanguage: "Jsx",
        dateCreated: "2024-04-25",
        code: `
      import { cn } from "@/Utils/twMerge";
      const ButtonWrapperHarshit = () => {
        return (
          <div className="flex h-full w-full items-center justify-center ">
            <Button BgColor="bg-blue-500" hoverColor={"hover:bg-blue-500/90"}>
              Button
            </Button>
          </div>
        );
      };
      const Button = ({
        BgColor = "bg-gray-100",
        hoverColor = "hover:bg-gray-100/90",
        children,
      }) => {
        return (
          <button
            type="button"
            className={cn(
              \`\ rounded-md px-6 py-2 transition-colors ease-in-out focus:outline  focus:outline-1 focus:outline-black \`\,
              \`\${BgColor}\`\,
              \`\${hoverColor}\`\,
            )}
          >
            {children}
          </button>
        );
      };

      export default ButtonWrapperHarshit;

      `,
        renderedComponent: ButtonWrapperHarshit,
        attributes: [
          {
            attribute: "Children",
            type: "ReactNode",
            description:
              "You Can put String for title and svg + string for icon version",
            defaultValue: "-",
          },
          {
            attribute: "BgColor",
            type: "String",
            description: "Set the Background Color of the Button",
            defaultValue: "bg-gray-100",
          },
          {
            attribute: "hoverColor",
            type: "String",
            description: "Set the Hover State Color of the Button",
            defaultValue: "hover:bg-gray-100/90",
          },
        ],
      },
      {
        author: "Aarsh Bharti",
        codeLanguage: "Jsx",
        dateCreated: "2024-04-25",
        code: `
        import { cn } from "@/Utils/twMerge";
      const ButtonWrapperAarsh = () => {
        return (
          <div className="flex h-full w-full items-center justify-center ">
            <Button BgColor="bg-stone-100" hoverColor={"hover:bg-stone-100/90"}>
              Button
            </Button>
          </div>
        );
      };
      const Button = ({
        BgColor = "bg-gray-100",
        hoverColor = "hover:bg-gray-100/90",
        children,
      }) => {
        return (
          <button
            type="button"
            className={cn(
              \`\ rounded-md px-6 py-2 transition-colors ease-in-out focus:outline  focus:outline-1 focus:outline-black \`\,
              \`\${BgColor}\`\,
              \`\${hoverColor}\`\
            )}
          >
            {children}
          </button>
        );
      };

      export default ButtonWrapperAarsh;

      `,
        renderedComponent: ButtonWrapperAarsh,
        attributes: [
          {
            attribute: "Children",
            type: "ReactNode",
            description:
              "You Can put String for title and svg + string for icon version",
            defaultValue: "-",
          },
          {
            attribute: "BgColor",
            type: "String",
            description: "Set the Background Color of the Button",
            defaultValue: "bg-gray-100",
          },
          {
            attribute: "hoverColor",
            type: "String",
            description: "Set the Hover State Color of the Button",
            defaultValue: "hover:bg-gray-100/90",
          },
        ],
      },
    ],
  },
];
