const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
React.createElement("h1", {}, "Adopt Me"),
React.createElement(Pet, {
animal: "Dog",
      name: "Shiro",
      breed: "Pariah",
    }),
    React.createElement(Pet, {
      animal: "Bird",
      name: "Jiju",
      breed: "Amazon Parrots",
    }),
  ]);
};
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(React.createElement(App));
