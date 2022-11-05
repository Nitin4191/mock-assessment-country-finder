import classes from './CardSize.module.css';

export default function CardSize(props) {
    return (
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    );
}