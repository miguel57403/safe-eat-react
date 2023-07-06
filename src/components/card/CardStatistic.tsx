import { Card, Col, Statistic } from "antd";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";

interface ICardStatistic extends IGlobalAttribute {
  title: string;
  value: number;
  color?: string;
}

export const CardStatistic: React.FC<ICardStatistic> = ({
  title,
  value,
  color,
  ...props
}) => {
  return (
    <Col {...props}>
      <Card bordered={false}>
        <Statistic
          {...{ title, value }}
          precision={0}
          valueStyle={{ color: color || "#52c41a" }}
        />
      </Card>
    </Col>
  );
};
