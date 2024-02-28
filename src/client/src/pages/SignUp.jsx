import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMasksTheater } from "@fortawesome/free-solid-svg-icons";
const SignUp = () => {
  return (
    <div class="center">
      <h1 class="text-4xl md:text-2xl text-center p-3 headline">
        <FontAwesomeIcon icon={faMasksTheater} /> dramaChecks
      </h1>
      <form class="space-y-6 md:space-y-3" action="#">
        <h5 class="text-2xl md:text-xl text-black-500 text-center signIn-title">
          Create Account
        </h5>
        <div>
          <label
            for="name"
            class="block mb-1 text-xl md:text-sm font-medium text-black-500 "
          >
            Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            class="border border-gray-300 h-11 md:h-8 text-`black`-500 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500"
            placeholder="John Smith"
            required
          />
        </div>
        <div>
          <label
            for="name"
            class="block mb-1 text-xl md:text-sm font-medium text-black-500 "
          >
            Country
          </label>
          <input
            type="country"
            name="country"
            id="country"
            class="border border-gray-300 h-11 md:h-8 text-black-500 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500"
            placeholder="France"
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-1 text-xl md:text-sm font-medium text-black-500 "
          >
            Email
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
            class="block mb-1 text-xl md:text-sm font-medium text-black-500"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="border border-gray-300 h-11 md:h-8 text-black-500 text-sm rounded-full block w-full p-2.5 dark:border-gray-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full text-white h-12 md:h-10 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 text-xl md:text-sm rounded-full text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
