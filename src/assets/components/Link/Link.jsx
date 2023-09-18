import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className='hover:bg-yellow-600 hover:rounded-xl px-6 '><a href={route.path}>{route.name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;