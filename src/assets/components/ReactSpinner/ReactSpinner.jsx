import { Audio } from 'react-loader-spinner'
const ReactSpinner = () => {
    return (
        <div>
            <Audio height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading">

            </Audio>
        </div>
    );
};

export default ReactSpinner;