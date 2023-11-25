import styled from "styled-components";
import VideoCard from "../../Components/VideoCard";
import { useData } from "../DataProvider";

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Title = styled.div`
  margin-left: 20px;
  font-weight: 700;
  font-size: 18px;
  margin-top: 60px;
`;

const HorizontalLine = styled.hr`
  margin-left: 20px;
`;

const VideoList: React.FC = () => {
  const { data } = useData();
  
  return (
    <>
      <Title>Video Series (8)</Title>
      <HorizontalLine className="solid"/>
      {data?.details &&
      <CardListContainer>
        {data?.details?.courses?.map((item: { courses: any; }, index: number) => (
          <VideoCard key={index} details={item} index={index + 1} />
        ))}
      </CardListContainer>}
    </>
  );
};

export default VideoList;