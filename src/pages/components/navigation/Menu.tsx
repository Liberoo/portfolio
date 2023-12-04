const menuItems = [
  { title: "About", link: "/about" },
  { title: "Oferta", link: "/oferta" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Faq", link: "/faq" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

const Menu = ({ desktop }) => {
  return (
    <ul
      className={`gap-5 ${
        desktop ? "hidden md:flex" : "flex items-center flex-col"
      } `}
    >
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
