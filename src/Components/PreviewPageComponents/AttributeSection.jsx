import React from "react";
import Heading from "@/Components/Shared/Heading";
const TableCell = ({ children }) => (
  <td className="max-w-[200px] px-6 py-2">{children}</td>
);

const TableRow = ({ attribute, type, description, defaultValue }) => (
  <tr className="border-b-2 border-Bg text-gray-50/90 ">
    <TableCell>{attribute}</TableCell>
    <TableCell>{type}</TableCell>
    <TableCell>{description}</TableCell>
    <TableCell>{defaultValue}</TableCell>
  </tr>
);
const AttributeSection = ({ attributes }) => {
  return (
    <section className="my-16 w-full max-w-[1200px]">
      <Heading title={"Attributes For This Component"} />
      <div className="w-full md:overflow-hidden rounded-xl overflow-x-scroll">
        <table className="w-full rounded-t-lg bg-gradient-to-tr from-Nav to-Nav/10 text-left">
          <thead className="bg-Border [&>tr>th:first-child]:rounded-l-lg  [&>tr>th:last-child]:rounded-r-lg [&>tr]:h-12">
            <tr className="text-lg text-gray-100/90">
              <th className="px-6 py-2">Attributes</th>
              <th className="px-6 py-2">Type</th>
              <th className="px-6 py-2">Description</th>
              <th className="px-6 py-2">Default</th>
            </tr>
          </thead>
          <tbody>
            {attributes?.map((attr, index) => (
              <TableRow
                key={index}
                attribute={attr.attribute}
                type={attr.type}
                description={attr.description}
                defaultValue={attr.defaultValue}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AttributeSection;
