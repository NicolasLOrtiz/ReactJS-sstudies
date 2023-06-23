import withLoader, { IElement } from "./withLoader";
import withHover from "./useHover";

const DogImages: IElement = ({ data, ...props }) => {
  const [ref, hovering] = withHover();

  return (
    // @ts-ignore
    <div {...props} ref={ref}>
      {hovering && <div id="hover">Hovering!</div>}
      <div id="list">
        {data?.message.map((dog, index) => (
          <img src={dog} alt="Dog" key={index} />
        ))}
      </div>
    </div>
  );
};

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);
