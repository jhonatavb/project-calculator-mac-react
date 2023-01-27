import './Button.css';

const btn = (props) => {
    return <button
        onClick={
            () => {
                if(props.label === '×') props.click && props.click('*');
                else if(props.label === '÷') props.click && props.click('/');
                else if(props.label === '−') props.click && props.click('-');
                else props.click && props.click(props.label);
            }
        }
        className={`
            button
            ${ props.operation ? 'operation' : '' }
            ${ props.double ? 'double' : '' }
            ${ props.triple ? 'triple' : '' }
    `}>
        { 
            props.label
        }
    </button>;
}

export default btn;

