const DetailImage = ({ image }) => {
  return (
    <div className="w-[25rem] h-[25rem]">
      <img
        className="w-full h-full object-contain"
        src={image}
        alt="item image"
      />
    </div>
  );
};
export default DetailImage;
