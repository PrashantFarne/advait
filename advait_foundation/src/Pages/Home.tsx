import React from 'react';
import Header from './Home/Header';
import Subheader from './Home/Subheader';
import Introduction from './Home/Introduction';
import VideoList from './Home/VideoList';
import CardList from './Home/CardList';
import FAQ from './Home/Faq';
import Footer from './Home/Footer';
import { useData } from './DataProvider';
import Loader from '../Components/Loader';


const Home = () => {
    const { data } = useData();

  return (
    <>
    {(data?.faq && data?.details)  ?
      <>
        <Header />
        <Subheader />
        <Introduction />
        <VideoList />
        <CardList />
        <FAQ />
        <Footer />
      </>:
      <Loader />
    }
    </>
  );
};

export default Home;
