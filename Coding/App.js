import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//Config driven UI
const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "121603",
      name: "Kannur Food Point",
      uuid: "51983905-e698-4e31-b0d7-e376eca56320",
      city: "1",
      area: "Tavarekere",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
      cuisines: ["Kerala", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 25,
      maxDeliveryTime: 35,
      slaString: "25-35 MINS",
      lastMileTravel: 2.5999999046325684,
      slugs: {
        restaurant: "kannur-food-point-btm",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
      locality: "SG Palya",
      parentId: 20974,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "55% off",
        shortDescriptionList: [
          {
            meta: "55% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "55% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "55% OFF",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "55% off on all orders",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5702282~p=1~eid=00000185-abae-3995-341a-56d40022016d",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "121603",
        deliveryTime: 27,
        minDeliveryTime: 25,
        maxDeliveryTime: 35,
        lastMileTravel: 2.5999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "229",
      name: "Meghana Foods",
      uuid: "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
      city: "1",
      area: "Koramangala",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 43,
      minDeliveryTime: 40,
      maxDeliveryTime: 50,
      slaString: "40-50 MINS",
      lastMileTravel: 2.799999952316284,
      slugs: {
        restaurant: "meghana-foods-5th-block-koramangala",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
      locality: "5th Block",
      parentId: 635,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "229",
        deliveryTime: 43,
        minDeliveryTime: 40,
        maxDeliveryTime: 50,
        lastMileTravel: 2.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "30531",
      name: "Hotel Empire",
      uuid: "587c2181-5bdb-454f-ae6b-6a1b2efffb90",
      city: "1",
      area: "Ashok Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "qltgnkyywuo5gmnpqzbm",
      cuisines: ["North Indian", "Kebabs", "Biryani"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 35,
      maxDeliveryTime: 45,
      slaString: "35-45 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "empire-restaurant-central-bangalore-central-bangalore",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "Empire SuitesNo.35, Castle Street, Off Brigade Road,Bengaluru, Karnataka 560025",
      locality: "Brigade Road",
      parentId: 475,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5629031~p=4~eid=00000185-abae-3995-341a-56d500220431",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "30531",
        deliveryTime: 39,
        minDeliveryTime: 35,
        maxDeliveryTime: 45,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "428",
      name: "Biryani Pot",
      uuid: "6db20a8b-dd85-4148-b750-107169f7f826",
      city: "1",
      area: "Btm Layout",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "mdipoyzfzsa7n7igskht",
      cuisines: ["North Indian", "Biryani"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 4,
      slugs: {
        restaurant: "biryani-pot-madiwala-junction-btm",
        city: "bangalore",
      },
      cityState: "1",
      address: "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
      locality: "Maruti Nagar",
      parentId: 21798,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹90 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "428",
        deliveryTime: 35,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
];
const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt="biriyani"
      />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4> {lastMileTravelString} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};
const Footer = () => {
  return <h4>foot</h4>;
};
/***
 * - Header
 *    - Logo
 *    - Nav Items
 *
 * - Body
 *   - Search Bar
 *   - Restaurants List
 *       -Restaurants Card
 *           - Image
 *           - Name
 *           - Ratings
 *           - Cusines
 * -Footer
 *   - Links
 *   - Copy Rights
 */
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
