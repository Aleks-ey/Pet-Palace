import { AppBuilder } from "@aleks-ey/dynamic-app-builder";

const Contact = () => {
  const fields = [
    {
      name: "name",
      label: "Name",
      tag: "input",
      props: { type: "text", required: true },
      inputStyle: {
        className: "bg-white text-black",
      },
    },
    {
      name: "email",
      label: "Email",
      tag: "input",
      props: { type: "text", required: true },
      inputStyle: {
        className: "bg-white text-black",
      },
    },
    {
      name: "message",
      label: "Message",
      tag: "textarea",
      props: { required: true },
      inputStyle: {
        className: "bg-white text-black",
      },
    },
  ];

  const contactConfig = {
    type: "ElementComponent",
    props: {
      style: {
        backgroundColor: "bg-base-light bg-opacity-90",
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
            padding: "content-center",
          },
        },
        children: [
          {
            type: "ElementComponent",
            props: {
              style: {
                className:
                  "flex justify-center items-center text-center font-florisha text-5xl",
              },
            },
            children: [
              {
                type: "TextComponent",
                props: {
                  text: "Contact Us",
                },
              },
            ],
          },
          {
            type: "ElementComponent",
            props: {
              style: {
                className: "flex justify-center items-center",
              },
            },
            children: [
              {
                type: "FormComponent",
                props: {
                  style: {
                    width: "w-full md:w-1/2 lg:w-1/3 xl:w-1/4",
                    padding: "p-3 md:p-10",
                    center: "justify-center items-center",
                  },
                  fields: fields,
                  button: {
                    type: "submit",
                    text: "Send Message",
                    style: {
                      backgroundColor:
                        "bg-white md:bg-blue-500 border-blue-500",
                      hoverColors:
                        "hover:bg-white hover:text-blue-500 hover:border-blue-500",
                      color: "text-blue-500 md:text-white",
                      textAlign: "text-center",
                      fontSize: "text-lg",
                      font: "font-montserrat",
                      padding: "px-4 py-2",
                      border: "rounded-full",
                    },
                  },
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
      <AppBuilder config={contactConfig} />
    </>
  );
};

export default Contact;
