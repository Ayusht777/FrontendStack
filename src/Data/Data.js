import  ButtonWrapperAyush  from "@/ChallangeComponents/Ayush Talesara/Button";
import  ButtonWrapperDivyanshu from "@/ChallangeComponents/Divyanshu Sahu/Button";
import  ButtonWrapperHarshit  from "@/ChallangeComponents/Harshit/Button";

export const authors = [
  {
    id:0,
    author: "Ayush Talesara",
    img: `https://avatars.githubusercontent.com/u/106388215?v=4`,
  },
  {
    id:1,
    author: "Divyanshu Sahu",
    img: `https://avatars.githubusercontent.com/u/107391324?v=4`,
  },
  {
    id: 2,
    author: "Harshit Sharma",
    img: `https://avatars.githubusercontent.com/u/106171546?v=4`,
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
    const Button = () => {
      return (
        <button className="w-56 h-9 bg-blue-500 text-white">
          Click me
        </button>
      );
    };
    export default Button;
      `,
        renderedComponent:ButtonWrapperAyush,
      },
      {
        author: "Divyanshu Sahu",
        codeLanguage: "Jsx",
        dateCreated: "2024-04-25",
        code: `
    const Button = () => {
      return (
        <button className="w-56 h-9 bg-green-500 text-white">
          Click me
        </button>
      );
    };

    export default Button;
      `,
        renderedComponent: ButtonWrapperDivyanshu,
      },
      {
        author: "Harshit Sharma",
        codeLanguage: "Jsx",
        dateCreated: "2024-04-25",
        code: `
    const Button = () => {
      return (
        <button className="w-56 h-9 bg-red-500 text-white">
          Click me
        </button>
      );
    };

    export default Button;
      `,
        renderedComponent: ButtonWrapperHarshit,
      },
      
    ],
  },
];
