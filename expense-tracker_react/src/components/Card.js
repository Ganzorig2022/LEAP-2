import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  //console.log(classes); //card expense-item

  return <div className={classes}>{props.children}</div>;
}

export default Card;
