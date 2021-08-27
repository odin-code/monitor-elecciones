import React, { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Select = ({ data, active, handleClick, channelButton }) => {
  const [selected, setSelected] = useState(active);

  /*useEffect(() => {
    setActiveChannel && setActiveChannel(active);
  }, [active]);*/

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-1 relative w-full">
            <Listbox.Button className="py-2 cursor-pointer relative w-full bg-white dark:bg-gray-800 border dark:border-none border-gray-200 rounded-md pl-3 pr-10 text-left focus:outline-none sm:text-sm">
              <span className="flex items-center">
                {selected.img ? (
                  <img
                    src={selected.img}
                    alt=""
                    className="flex-shrink-0 h-6 w-6 rounded-full"
                  />
                ) : (
                  <div className="flex-shrink-0 h-6 w-0" />
                )}
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            {channelButton && (
              <div className="flex absolute top-0 right-0 -mt-0.5 -mr-1">
                <span className="absolute inline-flex animate-ping">
                  <span className="inline-flex rounded-full h-3 w-3 bg-pink-300 opacity-75"></span>
                </span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-400"></span>
              </div>
            )}

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800  shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {data.map((d) => (
                  <Listbox.Option
                    key={d.key}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "text-white bg-gradient-to-r from-blue-500 to-teal-400"
                          : "text-gray-900 dark:text-gray-200",
                        "cursor-pointer select-none relative"
                      )
                    }
                    value={d}>
                    {({ selected, active }) => (
                      <div className="w-full">
                        <a
                          className="flex w-full no-scrollbar items-center my-2"
                          onClick={() => handleClick(d.embedId)}>
                          {d.img ? (
                            <img
                              src={d.img}
                              alt=""
                              className="flex-shrink-0 h-6 w-6 rounded-full my-2 ml-2"
                            />
                          ) : (
                            ""
                          )}
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}>
                            {d.name}

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-blue-500",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}>
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </span>
                        </a>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Select;
