const Content = () => {
  return (
    <div className="websection">
      <div className="hero">
        <div className="heading">Everything for your business</div>
        <div className="disc">
          <p id="paraone">
            Help your customers find you with a home for your business online.
            Jimdo has all of the digital tools you need, including a customized,
            compliant website, an online store that's open 24/7, and more.
          </p>
          <button id="buttonone">Start Free</button>
        </div>
      </div>
      <img className="imagetwo" src="../public/images/homepage.webp" alt="" />
      <div className="homepage">
        <p id="homepageone">Websites without the effort</p>
        <p id="homepagetwo">
          Design your website exactly how you want it—we provide everything you
          need to get started.
        </p>
       
      </div>
      <div className="videosection">
          <video controls autoPlay muted loops id="vid" src="../public/images/website_section.mp4" alt="" />
          <div className="weblist">
            <ul id="listthree">
              <li>Make changes any time</li>
              <li>Add your own images and text</li>
              <li>Free image library and photo editing</li>
              <li>Flexible layouts</li>
              <li>Mobile-optimized for all screens</li>
            </ul>
            <p id="website"><u>How to create a website</u></p>
          </div>
        </div>
        <div id="blue">
      <p>Create your website today.</p>
      <button id="buttontwo">Let's get started</button>

    </div>
    </div>
  );
};

export default Content;
