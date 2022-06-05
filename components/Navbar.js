import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo.png";

export function Navbar({ id }) {
  const items = [
    { title: "Home", href: "/" },
    { title: "Our Company", href: "/#our-company" },
    // { title: "Visi & Purpose", href: "/#visi-purpose" },
    // { title: "Value", href: "/#value" },
    { title: "Why me", href: "/#why-me" },
    { title: "Product", href: "/product" },
    { title: "Testimonial", href: "/#testimonial" },
    { title: "News", href: "/news" },
    { title: "FAQ", href: "/#faq" },
    // { title: "Payment", href: "/#payment" },
    { title: "Certified", href: "/#certified" },
    // { title: "Globe", href: "/#globe" },
    { title: "Contact", href: "/#contact" },
  ];

  return (
    <div className="flex justify-center">
      <div className="navbar bg-transparent absolute z-50 w-full">
        <div className="navbar-start w-full lg:w-fit">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-lg font-medium"
            >
              {items.map((el, idx) => {
                return (
                  <li key={idx}>
                    <Link href={el.href}>
                      <a
                        className={`active:bg-yellow-500 ${
                          id == idx ? "bg-yellow-500 text-white" : ""
                        }`}
                      >
                        {el.title}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:ml-0 ml-auto">
            <h1 className="text-2xl font-bold py-2 px-4 lg:text-left text-right text-white">
              Jendral <br />
              Coco
            </h1>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex text-white text-lg font-medium w-full">
          <ul className="menu menu-horizontal p-0">
            {items.map((el, idx) => {
              return (
                <li key={idx}>
                  <Link href={el.href}>
                    <a
                      className={`active:bg-yellow-500 ${
                        id == idx ? "bg-yellow-500" : ""
                      }`}
                    >
                      {el.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function NavbarDashboard({ title }) {
  return (
    <div className="navbar bg-transparent mb-0 rounded-box">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">{title}</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end flex items-center">
          <h4 className="mr-2">Admin</h4>
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
