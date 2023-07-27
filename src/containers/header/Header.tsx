import './header.scss';

const Header = () => {
  return (
    <div className='header-main_container'>
      <div className="header-image_container">
        <img src='https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      </div>
      <div className="header-content_container">
        <h2>Cooking like Chefs with Edamam</h2>
        <p>Edamam is the API that I use in this app. I recomend you to surf at their website. You will find very usefull API's about Cooking, Ingredients and more.</p>
        <a href='https://www.edamam.com' target='_blank'>Visit Edamam</a>
      </div>
    </div>
  )
}

export default Header;