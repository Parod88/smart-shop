import DescriptionRow from "./DescriptionRow";

const DetailDescription = ({ item }) => {
  return (
    <div className="flex flex-col justify-center min-h-[10rem] max-w-[30rem]">
      <ul className="flex flex-col hover:cursor-default text-blue-500">
        <span className="text-lg font-bold">{item.brand}</span>
        <div className="flex justify-between w-full">
          <span>{item.model}</span>
          <span>{item.price} €</span>
        </div>
        <DescriptionRow title={"cpu"} text={item.cpu} />
        <DescriptionRow title={"ram"} text={item.ram} />
        <DescriptionRow title={"SO"} text={item.os} />
        <DescriptionRow
          title={"Pantalla"}
          text={item.displaySize + ", " + item.displayResolution}
        />
        <DescriptionRow title={"Batería"} text={item.battery} />
        <DescriptionRow
          title={"Cámaras"}
          text={`Trasera: ${item.primaryCamera[0]}. Frontal: ${item.secondaryCmera}`}
        />
        {item.dimentions ? (
          <DescriptionRow title={"Dimensiones"} text={item.dimentions} />
        ) : (
          <></>
        )}
        {item.weight ? (
          <DescriptionRow title={"Peso"} text={`${item.weight} grs`} />
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default DetailDescription;
