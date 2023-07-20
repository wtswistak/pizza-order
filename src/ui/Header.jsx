import { Link } from "react-router-dom";
import SearchOrder from "../feautures/order/SearchOrder";
import Username from "../feautures/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b  border-stone-300 bg-yellow-500 px-4 py-3 font-roboto uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
