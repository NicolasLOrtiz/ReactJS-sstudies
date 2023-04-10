import useContainerComponent from "./useContainerComponent";

const PresentationalComponent = ({ images }: { images: string[] }) => {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt="dog" />
      ))}
    </div>
  );
};

export function PresentationalComponentWithHooks() {
  const dogs = useContainerComponent();

  return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
}

export default PresentationalComponent;
