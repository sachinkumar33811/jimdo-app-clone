const Bluebar = () => {
  return (
    <div className="shopsection">
      <div className="shop">
        <div className="shoptext">
          <p>Selling made simple</p>
          <p id="shoppara">Create an independent online store—hassle-free.</p>
          <ul id="listfour">
            <li>No transaction fees (your products, your profit)</li>
            <li>Offer shipping and local pickup options</li>
            <li>Book appointments right on your site</li>
            <li>Take payments via PayPal or Stripe</li>
            <li>Manage all your orders in one place</li>
            <li>Sell on Instagram and Facebook</li>
            <li>Boost your store with sales & discounts</li>
          </ul>
          <button id="buttonthree">let get started</button>
          <p id="shopend">
            <u>How to create an online store</u>
          </p>
        </div>
        <img id="man" src="../public/images/shop_section.webp" alt="" />
      </div>
      <div className="examplesection">
        <p id="egparaone">Sites worth seeing</p>
        <p id="egparatwo">
          Real people. Real websites. From artists to chefs, freelancers to
          startups, check out what <br /> customers have already built with
          Jimdo.
        </p>
        <div className="button4">
          {" "}
          <button id="buttonfour">More Example</button>
        </div>
        <br />
        <br />
        <div className="egimage">
          <img src="../public/images/mobile_1.webp" alt="" />
          <img src="../public/images/website_1.webp" alt="" />
          <img src="../public/images/mobile_2.webp" alt="" />
          <img src="../public/images/website_2.webp" alt="" />
          <img src="../public/images/mobile_3.webp" alt="" />
        </div>
        <p id="egparathree">
          Make it memorable <br />
          With a free logo
        </p>
        <p id="egparafour">
          You're building your brand—now get a logo to match. Use our Logo
          Creator to design your own business logo and download all the files
          you need for digital and print. It's free to use.
        </p>
        <p id="egparafive">
          <u>How to create a logo</u>
        </p>
        <div className="eglogo">
          <img src="../public/images/logo_1.webp" alt="" />
          <img src="../public/images/logo_2.webp" alt="" />
          <img src="../public/images/logo_3.webp" alt="" />
          <img src="../public/images/logo_4.webp" alt="" />
          <img src="../public/images/logo_5.webp" alt="" />
        </div>
        <div className="button5">
          {" "}
          <button id="buttonfive">Try it free</button>
        </div>
      </div>
      <div className="matze">
        <img id="man" src="../public/images/matze.png" alt="" />
        <div className="indi">
          <p id="indipendent">Independent but not alone</p>
          <p id="passionate">
            We’re passionate about self-employed small business owners like you.
            Helping you harness your power and thrive online has been our
            mission from the beginning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bluebar;
