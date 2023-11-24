import styled from "styled-components";
import Card from "../../Components/Card";
import { useData } from "../DataProvider";

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-left: 20px;
  margin-top: 60px;
`;

const HorizontalLine = styled.hr`
  margin-left: 20px;
`;

const CardList: React.FC = () => {
  const { data } = useData();

  return (
    <>
      <Title>Other Helpful Video Series</Title>
      <HorizontalLine className="solid"/>
      {data?.details &&
      <CardListContainer>
        {data?.details?.relatedContent?.map((item: any, index:number) => (
          <Card key={index} details={item} index={index + 1} />
        ))}
      </CardListContainer>}
    </>
  );
};

export default CardList;