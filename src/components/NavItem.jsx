import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


const NavItem = ({item,classNames}) => {
  return (
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
  )
}
NavItem.propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      current: PropTypes.bool.isRequired,
      activeLogo: PropTypes.string.isRequired,
      inactiveLogo: PropTypes.string.isRequired,
    }).isRequired,
    classNames: PropTypes.func.isRequired,
  };
  
export default NavItem