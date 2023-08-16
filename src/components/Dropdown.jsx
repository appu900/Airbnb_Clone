import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div className="h-8 w-8 bg-black rounded-full mt-1">
          <Menu.Button className="inline-flex w-8 h-8 rounded-full justify-center gap-x-1.5  bg-black text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
    
          </Menu.Button> 
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-5 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none font-nunito font-semibold">
            <div className="py-3 mt-2">
              <Menu.Item>
                {({ active }) => (
                  <Link
                   
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onclick={() => alert("hello woerod")}
                  >
                    Messege
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to=""
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onclick={() => alert("hello woerod")}
                  >
                    Notification
                  </Link>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <Link
                    to=""
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onclick={() => alert("hello woerod")}
                  >
                    Trips
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/wishlist"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onclick={() => alert("hello woerod")}
                  >
                    Wishlist
                  </Link>
                )}
              </Menu.Item>
             
            </div>
            <div className="mt-2 py-1">
           
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm font-normal"
                    )}
                  >
                    Airbnb your Home
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm font-normal"
                    )}
                  >
                    Account
                  </a>
                )}
              </Menu.Item>
            </div>
        

            <div className="py-1 mt-2">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm font-normal"
                    )}
                  >
                    Help
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm font-normal"
                    )}
                  >
                    Logout
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
