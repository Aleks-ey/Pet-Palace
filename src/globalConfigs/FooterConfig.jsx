const footerConfig = {
  type: "FooterComponent",
  props: {
    footer: {
      style: {
        backgroundColor: "bg-accent",
        padding: "py-10 px-10",
      },
    },
    slogo: {
      logo: {
        src: "src/assets/logos/react.svg",
        alt: "Company/Website Logo",
        logoStyle: {
          className: "h-24 md:h-32 w-auto",
        },
      },
    },
    navLinks: {
      links: [
        { text: "Appointments", link: "/" },
        { text: "Location", link: "/" },
        { text: "Services", link: "/" },
        { text: "About Us", link: "/" },
        { text: "Contact", link: "/contact" },
      ],
      linkStyle: {
        font: "font-montserrat",
        fontSize: "text-sm",
        backgroundColor: "bg-transparent",
        color: "text-white",
        padding: "px-2 py-2",
        border: "border-transparent",
        hoverColors:
          "hover:text-blue-500 hover:border-b hover:border-b-blue-500",
        activeColors: "active:text-blue-500 active:border-blue-500",
        focusStyle: "focus:outline-none",
      },
      style: {
        display:
          "flex flex-col text-center md:flex-row space-y-4 md:space-y-0 md:space-x-2",
      },
    },
    contactInfo: {
      items: [
        { text: "Mail: info@info.org" },
        { text: "Phone: +1 (234) 567-890" },
        {
          isLink: true,
          link: "https://facebook.com/",
          text: "Facebook",
          icon: {
            iconUrl: "/path/to/facebook-icon.png",
            className: "w-4 h-4 mr-2",
          },
          customStyle: {
            display: "flex",
            direction: "flex-row",
          },
        },
      ],
      style: {
        font: "font-montserrat text-sm",
        display: "flex flex-col items-center space-y-2 text-white",
      },
    },
  },
};

export default footerConfig;
