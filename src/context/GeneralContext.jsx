import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const GeneralContext = React.createContext();

const GeneralContextProvider = ({children}) => {

    const [topNews, setTopNews] = useState([])

    const [businessNews, setBusinessNews] = useState([]);
    const [technologyNews, setTechnologyNews] = useState([]);
    const [politicsNews, setPoliticsNews] = useState([]);

    useEffect(() => { 
        fetchTopNews() 
        fetchBusinessNews()
        fetchPoliticsNews()
        fetchTechnologyNews()
      }, [])
    
      const fetchTopNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=popular&apiKey=dc52ecc5ef73462391d3138802474616");
          setTopNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }

      const fetchBusinessNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=business&apiKey=dc52ecc5ef73462391d3138802474616");
          setBusinessNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
      const fetchPoliticsNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=politics&apiKey=dc52ecc5ef73462391d3138802474616");
          setPoliticsNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
      const fetchTechnologyNews = async () => {
        try{
          const response = await axios.get("htps://newsapi.org/v2/everything?q=technology&apiKey=dc52ecc5ef73462391d3138802474616");
          setTechnologyNews(response.data.articles);
        }catch (error) {
          console.error(error);
        }
      }
      return(
        <GeneralContext.Provider value={{topNews, businessNews, technologyNews, politicsNews}} >{children}</GeneralContext.Provider>
      )
    }
    export default GeneralContextProvider
    