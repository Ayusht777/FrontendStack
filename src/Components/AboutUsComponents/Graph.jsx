import GridBackground from "@/Components/GridBackground";

const Graph = () => {
  return (
    <GridBackground>
      <div className=" absolute box-border flex  aspect-square size-full items-center justify-center overflow-hidden">
        <svg
          className="w-full absolute -bottom-12"
          viewBox="0 0 404 312"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3333 266.003L2 282V312H402V2L393.667 15.3419L393.664 15.3459C385.33 28.6892 368.665 55.3702 352 81.5657C335.333 107.764 318.667 133.476 302 150.19C285.333 166.904 268.667 174.619 252 172.647C235.333 170.676 218.667 159.017 202 145.95C185.333 132.883 168.667 118.409 152 132.868C135.333 147.327 118.667 190.72 102 204.401C85.3333 218.081 68.6667 202.049 52 210.03C35.3333 218.011 18.6667 250.006 10.3333 266.003Z"
            fill="url(#paint0_linear_715_316)"
          />
          <path
            d="M2 282L10.3333 266.003C18.6667 250.006 35.3333 218.011 52 210.03C68.6667 202.049 85.3333 218.081 102 204.401C118.667 190.72 135.333 147.327 152 132.868C168.667 118.409 185.333 132.883 202 145.95C218.667 159.017 235.333 170.676 252 172.647C268.667 174.619 285.333 166.904 302 150.19C318.667 133.476 335.333 107.764 352 81.5657C368.667 55.3676 385.333 28.6838 393.667 15.3419L402 2"
            stroke="#D7F400"
            stroke-width="2.5"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_715_316"
              x1="202"
              y1="2"
              x2="202"
              y2="312"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D7F400" stop-opacity="0.3" />
              <stop offset="1" stop-color="#D7F400" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </GridBackground>
  );
};

export default Graph;
