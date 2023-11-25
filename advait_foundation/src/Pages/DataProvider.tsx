import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface DataContextProps {
  data: any;
  fetchData: () => void;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

interface CourseData {
  title: string;
  description: string;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<any>({faq:null, details:null });
  const apiUrl = 'https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3';
  const apiUrlFaq = 'https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english';
  const fetchData = async () => {
    try {
      const response = await axios.get<CourseData>(apiUrl);
      setData((prev: any)=> ({...prev, details: response?.data ?? ''}));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchDataFaq = async () => {
    try {
      const response = await axios.get<CourseData>(apiUrlFaq);
      setData((prev: any)=> ({...prev, faq: response?.data ?? ''}));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDataFaq();
  }, []);

  return <DataContext.Provider value={{ data, fetchData }}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};