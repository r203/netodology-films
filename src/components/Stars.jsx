import Star from "./Star";

const Stars = ({ count = 0 }) => {
  let array = [];

  if (isNaN(count)) {
    return null;
  }

  if(count > 0 && count <= 5){
    for (let i = 0; i < count; i++) {
      array.push(i);
      
    }
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {array.map((item) => {
        return <Star key={item.toString()}/>
      })}
    </ul>
  )
}

export default Stars;