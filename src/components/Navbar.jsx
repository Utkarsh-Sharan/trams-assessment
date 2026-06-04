import Menu from "../assets/menu.png";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center py-2">
      <h2 className="font-gerbil">Elementum</h2>

      <article className="font-satoshi flex justify-between items-center gap-10">
        <p className="cursor-pointer hover:underline">Home</p>
        <p className="cursor-pointer hover:underline">Studio</p>
        <p className="cursor-pointer hover:underline">Services</p>
        <p className="cursor-pointer hover:underline">Contacts</p>
        <p className="cursor-pointer hover:underline">FAQs</p>
      </article>

      <img src={Menu} alt="menu" className="w-7" />
    </nav>
  )
}

export default Navbar