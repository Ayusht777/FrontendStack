const GridBackground = ({children}) => {
  console.log(children)
  return (
    <div className=" relative  box-border size-full  overflow-hidden rounded-3xl outline outline-1  outline-Border aspect-square">
      <div className="absolute inset-0 bg-Nav bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] bg-[size:48px_48px] "></div>
      {children}
    </div>
  );
};

export default GridBackground;
