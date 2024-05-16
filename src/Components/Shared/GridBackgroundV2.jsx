const GridBackgroundV2 = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-Bg">
      <div className="absolute  inset-0  bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_7%_at_50%_0%,#000_70%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_60%_11%_at_50%_0%,#000_70%,transparent_100%)]">
      </div>
      {children}
    </div>
  );
};

export default GridBackgroundV2;
