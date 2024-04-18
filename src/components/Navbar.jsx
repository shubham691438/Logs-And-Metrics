import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import trueFoundryImg from '../assets/TF-logo.svg';
import activeMetricsLogo from '../assets/metrics-active.png';
import inactiveMetricsLogo from '../assets/metrics-inactive.png';
import activeLogsLogo from '../assets/logs-active.png';
import inactiveLogsLogo from '../assets/logs-inactive.png';

const navigation = [
  { name: 'Metrics', to: `/metrics/5/${Date.now()}`, current: false, activeLogo: activeMetricsLogo, inactiveLogo: inactiveMetricsLogo },
  { name: 'Logs', to: `/logs/5/${Date.now()}`, current: false, activeLogo: activeLogsLogo, inactiveLogo: inactiveLogsLogo },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = ({selectedTimeRange,setChanges}) => {
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
                    {currentNavItem.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'border-b-4 border-b-violet-700': 'text-gray-900 hover:border-b-4 border-b-violet-400',
                          'rounded px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <div className='flex items-center'>
                          <img
                            className="h-4 w-auto"
                            src={item.current ? item.activeLogo : item.inactiveLogo}
                          />
                          <p className='px-2'>{item.name}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <form className="max-w-sm mx-auto">
                  <select value={selectedTimeRange} onChange={(e)=>{setChanges(e.target.value,Date.now())}} id="duration" className="font-semibold bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-white dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected value={5} >Last 5 minutes</option>
                    <option value={15}>Last 15 minutes</option>
                    <option value={30}>Last 30 minutes</option>
                    <option value={60}>Last 1 hour</option>
                    <option value={180}>Last 3 hours</option>
                    <option value={360}>Last 6 hours</option>
                  </select>
                </form>
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

export default Navbar;
