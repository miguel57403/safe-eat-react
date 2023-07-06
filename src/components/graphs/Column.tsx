import { Column } from "@ant-design/charts";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";

export const ColumnGraph: React.FC<IGlobalAttribute> = ({ ...props }) => {
  const data = [
    {
      type: "A",
      sales: 38,
    },
    {
      type: "B",
      sales: 52,
    },
    {
      type: "C",
      sales: 61,
    },
    {
      type: "D",
      sales: 145,
    },
    {
      type: "E",
      sales: 48,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
  };
  return <Column {...config} {...props} />;
};
