import "./SignIn.css";
const SignIn = () => {
  return (
    <div class="center">
      <h1 class="text-2xl text-center p-3 headline">dramaChecks</h1>
      <form class="space-y-6" action="#">
        <h5 class="text-xl text-black-500 text-center signIn-title">
          Sign in to our platform
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-black-500 "
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            class="border border-gray-300 text-black-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-black-500"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="border border-gray-300 text-black-500 text-sm rounded-lg block w-full p-2.5 dark:border-gray-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign In
        </button>
        <div class="text-sm font-medium text-black-500">
          Not registered?{" "}
          <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">
            Create account
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
