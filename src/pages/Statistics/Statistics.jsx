import { useLoaderData } from "react-router-dom";
import { Chart } from "react-google-charts";

const Statistics = () => {
 
  const totalData = useLoaderData().length;
  console.log(totalData);

  const donatedItemsJson = localStorage.getItem("donated");
  const donatedItems = donatedItemsJson ? JSON.parse(donatedItemsJson) : [];
  const donatedItemsLength = donatedItems.length;
  console.log(donatedItemsLength);

  
  const data = [
    ["Total Donation", "Your Donation"],
    ["Total Donation", totalData],
    ["Your Donation", donatedItemsLength],
  ];



  return (
    <div>
      <Chart className="text-3xl" chartType="PieChart" data={data} width={"100%"} height={"650px"}   />
    </div>
  );
};

export default Statistics;
