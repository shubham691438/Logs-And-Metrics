import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import trueFoundryImg from '../assets/TF-logo.svg';

import activeMetricsLogo from '../assets/metrics-active.png';
import inactiveMetricsLogo from '../assets/metrics-inactive.png';
import activeLogsLogo from '../assets/logs-active.png';
import inactiveLogsLogo from '../assets/logs-inactive.png';

import PropTypes from 'prop-types'; 
import TimeRangeSelect from './TimeRangeSelect';
import NavItem from './NavItem';

const navigation = [
  { name: 'Metrics', to: `/metrics`, current: false, activeLogo: activeMetricsLogo, inactiveLogo: inactiveMetricsLogo },
  { name: 'Logs', to: `/logs`, current: false, activeLogo: activeLogsLogo, inactiveLogo: inactiveLogsLogo },
  { name: 'StoryBook', to: `https://story-book-logs-and-metrics.vercel.app/`, current: false, activeLogo: activeLogsLogo, inactiveLogo: inactiveLogsLogo },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = ({searchParams,setChanges}) => {
  const location = useLocation();
  const [currentNavItem, setCurrentNavItem] = useState(navigation);

  useEffect(() => {
    const updatedNavigation = navigation.map(item => ({
      ...item,
      current: location.pathname.includes(item.name.toLowerCase())
    }));
    setCurrentNavItem(updatedNavigation);
  }, [location.pathname]);

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={trueFoundryImg}
                    alt="True Foundry"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {currentNavItem.map((item,key) => (
                     <NavItem item={item} key={key} classNames={classNames}/>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <TimeRangeSelect searchParams={searchParams} setChanges={setChanges}/>
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {currentNavItem.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

// Define PropTypes for Navbar component
Navbar.propTypes = {
  searchParams: PropTypes.object.isRequired, 
  setChanges: PropTypes.func.isRequired,
};

export default Navbar;
