import { AppBuilder } from "@aleks-ey/dynamic-app-builder";
import homeCarouselConfig from "./HomeCarouselConfig";

const Home = () => {
  const homeConfig = {
    type: "ElementComponent",
    props: {
      style: {
        backgroundColor: "bg-white",
        color: "text-white",
        height: "min-h-screen",
        width: "w-full",
      },
    },
    children: [
      {
        type: "ElementComponent",
        props: {
          style: {
            height: "h-screen",
            padding: "",
          },
        },
        children: [
          {
            type: "ElementComponent",
            props: {
              style: {
                className: "opacity-80",
              },
            },
            children: [homeCarouselConfig],
          },
        ],
      },
    ],
  };

  return (
    <>
      <AppBuilder config={homeConfig} />
    </>
  );
};

export default Home;
