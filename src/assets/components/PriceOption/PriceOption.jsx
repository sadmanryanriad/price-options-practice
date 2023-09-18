import PropTypes from 'prop-types';
import PriceTable from '../PriceTable/PriceTable';

const PriceOption = (option) => {
    // const [name,price,features] = option;
    console.log(option);
    return (
        <div>
            <PriceTable ></PriceTable>
        </div>
    );
};

PriceOption.prototype = {
    option: PropTypes.object
}

export default PriceOption;