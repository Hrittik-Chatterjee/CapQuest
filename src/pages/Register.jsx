import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../login-registration/GoogleLogin";

const Register = () => {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { createUser, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const imageUrl = form.imageUrl.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPasswordMatch(false);
    }

    console.log(email, password, confirm_password);

    if (password === confirm_password) {
      createUser(email, password).then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            email: data?.user?.email,
            imageUrl: imageUrl,
            name: name,
          };
          fetch("https://ecommerce-dashboard-server-awlu.onrender.com/users", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              navigate(from);
            });
        }
      });
    }
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-300">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="name"
                required
                autoComplete="email"
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-2"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your Photo URL
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="imageUrl"
                required
                autoComplete="imageUrl"
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-2"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-2"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                name="password"
                type="password"
                required
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-2"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                name="confirm_password"
                type="password"
                required
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-2"
              />
            </div>
          </div>

          {!passwordMatch && (
            <div className="my-2">
              <p className="text-red-500">Passwords do not match!</p>
            </div>
          )}

          <div className="form-control mt-6">
            <input
              className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white"
              type="submit"
            />
          </div>
          <GoogleLogin />
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
