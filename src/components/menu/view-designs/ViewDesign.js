import { useState } from "react";
import classes from "./ViewDesign.module.css";
import { useRouteLoaderData } from "react-router-dom";
import LikeIcon from "../../../icons/like-icon";

const DUMMY_LIST = [
  {
    id: "d1",
    title: "Design 1",
    description: "This is the first Design.",
    price: 300,
    brand: "Brand 1",
    oldPrice: 350,
    image: "https://picsum.photos/536/354",
  },
  {
    id: "d2",
    title: "Design 2",
    description: "This is the second Design.",
    price: 300,
    brand: "Brand 2",
    oldPrice: 350,
    image: "https://picsum.photos/536/355",
  },
  {
    id: "d3",
    title: "Design 3",
    description: "This is the third Design.",
    price: 300,
    brand: "Brand 3",
    oldPrice: 350,
    image: "https://picsum.photos/536/353",
  },
  {
    id: "d4",
    title: "Design 4",
    description: "This is the fourth Design.",
    price: 300,
    brand: "Brand 4",
    oldPrice: 350,
    image: "https://picsum.photos/536/352",
  },
  {
    id: "d5",
    title: "Design 5",
    description: "This is the fifth Design.",
    price: 300,
    brand: "Brand 5",
    oldPrice: 350,
    image: "https://picsum.photos/536/351",
  },
  {
    id: "d6",
    title: "Design 6",
    description: "This is the sixth Design.",
    price: 300,
    brand: "Brand 6",
    oldPrice: 350,
    image: "https://picsum.photos/536/356",
  },
  {
    id: "d7",
    title: "Design 7",
    description: "This is the seventh Design.",
    price: 300,
    brand: "Brand 7",
    oldPrice: 350,
    image: "https://picsum.photos/536/357",
  },
  {
    id: "d8",
    title: "Design 8",
    description: "This is the eighth Design.",
    price: 300,
    brand: "Brand 8",
    oldPrice: 350,
    image: "https://picsum.photos/536/358",
  },
  {
    id: "d9",
    title: "Design 9",
    description: "This is the ninth Design.",
    price: 300,
    brand: "Brand 9",
    oldPrice: 350,
    image: "https://picsum.photos/536/359",
  },
  {
    id: "d10",
    title: "Design 10",
    description: "This is the tenth Design.",
    price: 300,
    brand: "Brand 10",
    oldPrice: 350,
    image: "https://picsum.photos/536/360",
  },
  {
    id: "d11",
    title: "Design 11",
    description: "This is the 11th Design.",
    price: 300,
    brand: "Brand 11",
    oldPrice: 350,
    image: "https://picsum.photos/536/361",
  },
//   {
//     id: "d",
//     title: "Design ",
//     description: "This is the  Design.",
//     price: 300,
//     brand: "Brand ",
//     oldPrice: 350,
//     image: "https://picsum.photos/536/362",
//   },
];
export default function ViewDesign() {
    const token = useRouteLoaderData("root");
    const [isShow, setIsShow]= useState(false);

    const [cardItem, setCardItem]=useState(null);

    function handleShowDetails(item){
        setCardItem(item);
        setIsShow(true);
    }

    function handleGoBack(){
        setIsShow(false);
    }

    let content=(
        <div className={classes.designs}>
      <h1>View All Designs</h1>
      <ul className={classes["cards-container"]}>
        {DUMMY_LIST.map((item)=>{
            return <li onClick={handleShowDetails.bind(null,item)} key={item.id} className={classes.card}>
                    <img src={item.image} alt={item.title}/>
                    <p className={classes.title}>{item.title}</p>
                    <p>{item.description}</p>
                    <p className={classes.price}>
                        <span>₹{item.price} </span>
                        <del>₹{item.oldPrice}</del>
                    </p>
                    <div className={classes.actions}>
                        <button>VIEW</button>
                    </div>
            </li>
        })}
      </ul>
    </div>
    );

    if(isShow){
        content = (
            <div className={classes["details-container"]}>
                <h1>{cardItem.title} Details</h1>
                <div className={classes["card-details"]}>
                    <img src={cardItem.image} alt={cardItem.title}/>
                    <section className={classes.content}>
                        <h2 className={classes.title}>{cardItem.title}</h2>
                        <p className={classes.brand}>{cardItem.brand}</p>
                        <p>{cardItem.description}</p>
                        <p className={classes.price}>
                            <span>₹{cardItem.price} </span>
                            <del>₹{cardItem.oldPrice}</del>
                        </p>
                        <div className={classes.actions}>
                            <button>ADD TO CART</button>
                            <button>BUY</button>
                        </div>
                    </section>
                </div>
                <button className={classes.back} onClick={handleGoBack}>Back</button>
            </div>
        )
    }

  return <>{content}</>;
}
