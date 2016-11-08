var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var x = 0
// Write a while loop that prints out the contents of ingredients:
while (x < 1) {
  console.log(ingredients.join(', '));
  x++;
}
// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = 7; i >= 0; i--) {
  console.log(ingredients[i])
}