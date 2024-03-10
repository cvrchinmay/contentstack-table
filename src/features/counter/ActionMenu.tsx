import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ActionButton from "../../ActionButton";
import FiltersIcon from "../../FiltersIcon";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface IMenu {
  id: string;
  menuItem: string;
}

interface props {
  menu: IMenu[];
  currentKey: string | number;
  isClicked: boolean;
  onClickHandler: Function;
  actionType?: string;
}

const ActionsMenu: React.FC<props> = ({ menu, currentKey, isClicked, onClickHandler, actionType = "menu" }) => {
  return (
    <Menu as="div" className="relative inline-block text-left z-100">
      <div>
        <Menu.Button className="flex items-center text-gray-400 rounded-full ">
          {actionType === "filter" ? <FiltersIcon onClickHandler={() => {}}/>: <ActionButton isClicked={isClicked} onClickHandler={() => { onClickHandler(currentKey) }} />}
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
        <Menu.Items className={`absolute ${actionType === "filter" ? "top-7 -right-20" : "right-0"} z-10 origin-top-right bg-white border border-gray-100 rounded-md shadow-2xl w-52`}>
          <div className="py-1.5">
            {menu.length &&
              menu.map((item) => {
                return (
                  <Menu.Item key={item?.id}>
                    {({ active }) => (
                      <div>
                        <span
                          className={classNames(
                            active ? "bg-menu-active-bg-color text-gray-900" : "text-gray-700",
                            "block px-5 py-3 font-normal text-sm cursor-pointer"
                          )}
                        >
                          {item?.menuItem}
                        </span>
                      </div>
                    )}
                  </Menu.Item>
                );
              })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ActionsMenu;