import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Navbar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const { logout, user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    const checkAdminRole = async () => {
      if (user) {
        const response = await fetch(
          `https://ecommerce-dashboard-server-awlu.onrender.com/users/${user?.email}`
        );
        const data = await response.json();
        if (data.role === "admin") {
          setIsAdmin(true);
        }
      }
    };
    checkAdminRole();
  }, [user]);

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          CapQuest
        </Link>
      </div>
      <div className="flex-none lg:hidden">
        {/* Hamburger Menu for Mobile */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/productlist">Product List</Link>
            </li>
            {user && (
              <>
                <li onClick={handleLogout}>
                  <p>Logout</p>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/productlist">Product List</Link>
          </li>
          {user && (
            <>
              <li onClick={handleLogout}>
                <p>Logout</p>
              </li>
            </>
          )}
        </ul>
      </div>
      {user && (
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {totalQuantity}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{totalQuantity} items</span>
                <span className="text-info">Subtotal: ${totalPrice}</span>
                <div className="card-actions">
                  <Link
                    to="/cartproducts"
                    className="btn btn-primary btn-block"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL || "/placeholder.jpg"}
                  alt="User Avatar"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-400 rounded-box w-52"
            >
              {isAdmin && (
                <>
                  <li>
                    <Link to="/add-products" className="justify-between">
                      Add New Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/added-products" className="justify-between">
                      Added Product Lists
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/my-profile" className="justify-between">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
