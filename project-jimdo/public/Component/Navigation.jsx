const Navigation = () => {
  return (
    <div className="navbar">
      <div className="image">
        <img className="imageone" src="../public/images/logo.jpg" alt="" />
      </div>
      <div className="listone">
        <ul className="navlist">
          <li>
            <div className="dropdown">
              <button className="dropbtn">Products</button>
              <div className="dropdown-content">
                <a href="#blue">website</a>
                <a href="">online store</a>
                <a href="">domen</a>
              </div>
            </div>
          </li>
          <li>Inspiration</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Features</li>
        </ul>
      </div>
      <div className="listtwo">
        <ul className="navlist">
          <li>
            {" "}
            <div className="dropdown2">
              <button className="dropbtn2">Help</button>
              <div className="dropdown-content2">
                <a href="">Help center</a>
                <a href="">Contect support</a>
              </div>
            </div>
          </li>
          <li>Log In</li>
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
