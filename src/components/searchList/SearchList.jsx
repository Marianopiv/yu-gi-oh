import { Fragment, useContext, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { CardsProvContext } from "../provider/CardsProv";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const types = [
  "Skill Card",
  "Spell Card",
  "Trap Card",
  "Normal Monster",
  "Normal Tuner Monster",
  "Effect Monster",
  "Tuner Monster",
  "Flip Monster",
  "Flip Effect Monster",
  "Flip Tuner Effect Monster",
  "Spirit Monster",
  "Union Effect Monster",
  "Gemini Monster",
  "Pendulum Effect Monster",
  "Pendulum Normal Monster",
  "Pendulum Tuner Effect Monster",
  "Ritual Monster",
  "Ritual Effect Monster",
  "Toon Monster",
  "Fusion Monster",
  "Synchro Monster",
  "Synchro Tuner Monster",
  "Synchro Pendulum Effect Monster",
  "XYZ Monster",
  "XYZ Pendulum Effect Monster",
  "Link Monster",
  "Pendulum Effect Fusion Monster",
  "Token",
];

export default function SearchList() {
  const { fetchData, fetchFilter} = useContext(CardsProvContext);
  const navigate = useNavigate();


  const handleSearch = () => {
    navigate("/CardList");
    fetchData();
  };
  const handleFilter = (type) => {
    navigate("/CardList");
    fetchFilter(type);
  };

  
  return (
    <Menu as="div" className="relative inline-block z-50">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-gray-100">
          Search by
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute sm:-left-10 sm:z-10 sm:mt-2  sm:w-48  divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-96 overflow-auto">
          <div className="py-1 flex flex-col items-center">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleSearch}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  All cards
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="flex flex-wrap justify-between items-center">
            {types.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => handleFilter(item)}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-xs"
                    )}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
