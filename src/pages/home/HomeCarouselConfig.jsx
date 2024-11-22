const carouselChildContent = [
  {
    type: "ElementComponent",
    props: {
      tag: "div",
      style: {
        className:
          "absolute bg-accent bg-opacity-70 top-1/4 md:left-40 md:w-1/3 h-fit mx-10 py-10 md:p-10 rounded-lg inset-0 flex flex-col justify-center md:items-left md:text-left",
      },
    },
    children: [
      {
        type: "TextComponent",
        props: {
          text: "Your Pet Is",
          tag: "h1",
          style: {
            className:
              "mb-2 text-4xl md:text-5xl font-florisha font-bold text-white",
          },
        },
      },
      {
        type: "TextComponent",
        props: {
          text: "Our Priority",
          tag: "h1",
          style: {
            className:
              "text-4xl md:text-5xl font-florisha font-bold text-white",
          },
        },
      },
      {
        type: "TextComponent",
        props: {
          text: "Pet Palace Veterinary Clinic is an independently owned and operated vet clinic that provides a wide range of services for your pets. Our passion is to provide the best care for your pets.",
          tag: "p",
          style: {
            className: "px-4 md:px-0 my-8 text-lg md:text-2xl text-white",
          },
        },
      },
      {
        type: "ButtonComponent",
        props: {
          text: "Book an Appointment",
          onClick: () => console.log("button clicked"),
          style: {
            className:
              "w-fit bg-white font-montserrat border-blue-500 text-blue-500 mx-auto md:mx-0 px-4 py-2 rounded-full",
          },
        },
      },
    ],
  },
  {
    type: "ElementComponent",
    props: {
      tag: "div",
      style: {
        className:
          "absolute bg-accent bg-opacity-70 top-1/4 md:left-40 md:w-1/3 h-fit mx-10 py-10 md:p-10 rounded-lg inset-0 flex flex-col justify-center md:items-left md:text-left",
      },
    },
    children: [
      {
        type: "TextComponent",
        props: {
          text: "Trust Us,",
          tag: "h1",
          style: {
            className:
              "mb-2 text-4xl md:text-5xl font-florisha font-bold text-white",
          },
        },
      },
      {
        type: "TextComponent",
        props: {
          text: "We Care",
          tag: "h1",
          style: {
            className:
              "text-4xl md:text-5xl font-florisha font-bold text-white",
          },
        },
      },
      {
        type: "TextComponent",
        props: {
          text: "At Pet Palace Veterinary Clinic, our team of professionals are dedicated to providing the best care for your pets. We treat your pets as if they were our own. You can trust in us to make sure your pets are healthy and happy.",
          tag: "p",
          style: {
            className: "px-4 md:px-0 my-8 text-lg md:text-2xl text-white",
          },
        },
      },
      {
        type: "ButtonComponent",
        props: {
          text: "Book an Appointment",
          onClick: () => console.log("button clicked"),
          style: {
            className:
              "w-fit bg-white font-montserrat border-blue-500 text-blue-500 mx-auto md:mx-0 px-4 py-2 rounded-full",
          },
        },
      },
    ],
  },
];
const arrows = [
  {
    type: "right",
    function: "next",
    style: {
      className: "bg-transparent right-36 hidden md:flex",
    },
    arrowChildren: [
      {
        type: "ImageComponent",
        props: {
          src: "/icons/arrows/chevron-right.svg",
          style: {
            className:
              "w-16 h-16 p-1 invert-[95%] sepia-[5%] saturate-[0%] hue-rotate-[40deg] brightness-[104%] contrast-[107%]",
          },
        },
      },
    ],
  },
];

const homeCarouselConfig = {
  type: "CarouselComponent",
  props: {
    backgrounds: [
      {
        src: "/images/vet&cat.jpg",
        customStyle: {
          objectFit: "object-cover",
        },
      },
      {
        src: "/images/vet&dog.jpg",
        customStyle: {
          objectFit: "object-cover",
        },
      },
    ],
    carouselChildren: carouselChildContent,
    arrows: arrows,
    style: {
      className: "h-screen w-full relative overflow-hidden",
    },
  },
};

export default homeCarouselConfig;
