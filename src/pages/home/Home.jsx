import { AppBuilder } from "@aleks-ey/dynamic-app-builder";

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
            padding: "pt-32",
          },
        },
        children: [
          {
            type: "ElementComponent",
            props: {
              style: {
                className:
                  "justify-center items-center text-center font-florisha text-5xl",
              },
            },
            children: [
              {
                type: "TextComponent",
                props: {
                  text: "Hello World",
                },
              },
            ],
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
