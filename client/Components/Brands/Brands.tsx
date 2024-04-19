import { styles } from "@/Style/styles";
import { Card } from "../ui/card";

const Brands = () => {
  const brands = [
    {
      id: 1,
      url: "https://m-cdn.phonearena.com/images/manufacturers/26-150/LG.webp",
    },
    {
      id: 2,
      url: "https://m-cdn.phonearena.com/images/manufacturers/74-150/Apple.webp",
    },
    {
      id: 3,
      url: "https://m-cdn.phonearena.com/images/manufacturers/23-150/Samsung.webp",
    },
    {
      id: 4,
      url: "https://m-cdn.phonearena.com/images/manufacturers/4-150/Sony.webp",
    },
  ];
  return (
    <div className="w-full flex-col flex justify-center items-center">
      <div className="flex w-11/12">
        <div className={`${styles.heading}`}>Brands Partner</div>
      </div>
      <Card
        className={`${styles.section} grid place-items-center gap-5 py-5 md:py-3 grid-cols-2 md:flex justify-evenly items-center mb-10 p-2 rounded-sm`}
      >
        {brands.map((item, index) => (
          <img
            key={index}
            className="w-[100px] shadow-2xl rounded-full p-4 h-[100px] object-cover"
            src={item.url}
            alt=""
          />
        ))}
      </Card>
    </div>
  );
};

export default Brands;
