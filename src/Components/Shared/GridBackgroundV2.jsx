const GridBackgroundV2 = ({ children ,  TwClass="[mask-image:radial-gradient(ellipse_60%_7%_at_50%_0%,#000_70%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_60%_11%_at_50%_0%,#000_70%,transparent_100%)]"}) => {
  return (
    <div className="relative h-full w-full bg-Bg">
      <div
        className={`absolute  inset-0  h-full bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)] bg-[size:56px_56px] ${TwClass} `}
      ></div>
      {children}
    </div>
  );
};

export default GridBackgroundV2;
