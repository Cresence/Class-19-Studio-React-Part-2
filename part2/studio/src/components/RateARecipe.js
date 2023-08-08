let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe() {
  return stars
}
function GiveRating(props) {
    return props.rating > 0 && props.rating < 6 ? <h3>{stars[props.rating - 1]}</h3> : null;
 }

export default GiveRating;

//conditional to render stars based on a number provided in App.js 
