import withLoader, { IElement } from "./withLoader";
import withHover from "./withHover";

const DogImages: IElement = ({ data, hovering, ...props }) => {
  return (
    <div {...props}>
      {hovering && <div id="hover">Hovering!</div>}
      <div id="list">
        {data.message.map((dog, index) => (
          <img src={dog} alt="Dog" key={index} />
        ))}
      </div>
    </div>
  );
};

export default withHover(
  withLoader(DogImages, "https://dog.ceo/api/breed/labrador/images/random/6")
);
