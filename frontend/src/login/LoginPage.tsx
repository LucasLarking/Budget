import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="h-full">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">

            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Logga In Till Ditt Konto
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="focus:outline-none block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#09B96D] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Lösenord
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-[#09B96D] hover:text-green-700"
                    >
                      Glömt Ditt Lösenord?
                    </a>
                  </div>
                </div>
                <div className="">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="focus:outline-none block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#09B96D] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md   bg-[#09B96D] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#09B96D]"
                >
                  Logga In
                </button>
              </div>
            </form>

            <p className="mt-10  text-center text-sm text-gray-500">
              Inte Medlem?
              <a
                href="#"
                className="ml-1 font-semibold leading-6 text-[#09B96D] hover:text-green-700"
              >
                Registrera Dig Idag
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
