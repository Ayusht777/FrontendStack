import Button from "@/ChallangeComponents/Ayush/Button";
export const authors = [
  {
    author: "Ayush Talesara",
    img: `https://avatars.githubusercontent.com/u/106388215?v=4`,
  },
  {
    author: "Divyanshu Sahu",
    img: `https://avatars.githubusercontent.com/u/107391324?v=4`,
  },
  {
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
        renderedComponent: Button,
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
        renderedComponent: Button,
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
        renderedComponent: Button,
      },
      {
        author: "Aarsh Bharti",
        codeLanguage: "Jsx",
        dateCreated: "2024-04-25",
        code: `
    const Button = () => {
      return (
        <button className="w-56 h-9 bg-yellow-500 text-white">
          Click me
        </button>
      );
    };

    export default Button;
      `,
        renderedComponent: Button,
      },
    ],
  },
];
