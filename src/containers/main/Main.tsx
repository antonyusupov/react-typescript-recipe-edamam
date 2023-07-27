import React, { useState } from 'react';
import './main.scss';
import CardsDisplay from '../../components/cardsDisplay/CardsDisplay';

const Main = () => {
  type datareturned = {
    data: object,
    hits: [],
    label: string
  }


  const [sendData, setSendData] = useState<{mealsArr: object[]}>({mealsArr: []});
  
  async function getData(word:string) {
    const app_id = YOUR_API_ID;
    const app_key = Your_API_Key;
    const url = ` https://api.edamam.com/search?q=${word}&app_id=${app_id}&app_key=${app_key}&from=0&to=3&calories=591-722&health=alcohol-free`;
    
    try{
      const response = await fetch(url);
      const data = (await response.json()) as datareturned;
      const formattedData = {
        mealsArr: data.hits
      }
      setSendData(formattedData);
      // console.log(data);
      return data;
    } catch (error) {
      console.error(error)
    }
  }
  // console.log(sendData);
  
  const handleSubmit =  (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const word: string = (document.querySelector('input')?.value) ?? '';
    void getData(word);
  }


  return (
    <div className='main-content_container'>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" name='input' />
          <input type="submit" value='Search' name='submit'/>
        </form>
      </div>
      <div className="cards-displayer_container">
        { 
        sendData.mealsArr.length === 0 
        ? 
        <div className='main-greeting_container'>
          <div>
            <h3>Search for Food by Name</h3>
            <p>You can search for foods by it's name. I will work on addvanced search by it's cuisine by ingredients or diet type.</p>
          </div>
        </div>
        : 
        <CardsDisplay props={sendData}/>
        }
      </div>
    </div>
  )
}

export default Main;