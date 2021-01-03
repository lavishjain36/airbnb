import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>80 stays. 3 January to 6 january.2 Guests</p>
        <h1>Stays Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://images.flyinstatic.com/ebtranet-images/130666/1.jpg"
        location="Private room in center of Pune"
        title="Independant luxury studio apartment"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
        star={4.5}
        price="₹4340 / night"
        total="₹8547 total"
      />

      <SearchResult
        img="https://cf.bstatic.com/images/hotel/max1280x900/199/199489952.jpg"
        location="Private room in center of Manali"
        title="Manali Studio Apartments"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="₹3340 / night"
        total="₹5547 total"
      />
      <SearchResult
        img="https://thumbnails.trvl-media.com/K4Rrz3kfYuIblYCBOvTrmHudwQk=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/6000000/5180000/5171900/5171850/058c6d68_z.jpg"
        location="Private room in center of Goa"
        title="30 mins to Panji Street, Excel Goa"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="₹5340 / night"
        total="₹6547 total"
      />
      <SearchResult
        img="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_650,q_auto,w_1000/itemimages/47/25/4725202_v1.jpeg"
        location="Private room in center of Bengaluru"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="₹5340 / night"
        total="₹5547 total"
      />

      <SearchResult
        img="https://media-cdn.tripadvisor.com/media/photo-s/12/f5/01/22/kullu-valley-hotel.jpg"
        location="Private room in center of Kullu"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="₹6340 / night"
        total="₹9547 total"
      />
      <SearchResult
        img="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/11/33/11336584_v3.jpeg"
        location="Private room in center of Manali"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="₹6340 / night"
        total="₹8547 total"
      />
    </div>
  );
}

export default SearchPage;
