import "./SignIn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMasksTheater } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div class="center">
      <h1 class="text-4xl md:text-2xl text-center p-3 headline">
        <FontAwesomeIcon icon={faMasksTheater} /> dramaChecks
      </h1>

      <form class="space-y-6" action="#">
        <h5 class="text-2xl md:text-xl text-black-500 text-center signIn-title">
          Sign In
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 text-xl md:text-sm font-medium text-black-500 "
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="border border-gray-300 h-11 md:h-8 text-black-500 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-xl md:text-sm font-medium text-black-500"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="border border-gray-300 h-11 md:h-8 text-black-500 rounded-full block w-full p-2.5 dark:border-gray-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full text-white h-12 md:h-10 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 text-xl md:text-sm rounded-full text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Sign In
        </button>
        <div class="text-sm text-xl md:text-sm text-black-500 font-bold">
          Not registered?{" "}
          <Link
            to="/signup"
            class="text-black-700 hover:underline dark:text-black-500"
          >
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
