import React from "react";
import "../css/index.css";

const books = [
  {
    image: "img/img1.jpg",
    name: "Gece Yarısı Kütüphanesi",
    author: "Matt Haig",
  },
  {
    image: "img/img2.jpg",
    name: "Cumhuriyet'in İlk Sabahı",
    author: "Şermin Yaşar ",
  },
  {
    image: "img/img3.jpg",
    name: "Hyunam-Dong Kitabevi",
    author: "HWANG BO-REUM ",
  },
];

// const book1 = {
//   image: "img/img1.jpg",
//   name: "Gece Yarısı Kütüphanesi",
//   author: "Matt Haig",
// };

// const book2 = {
//   image: "img/img2.jpg",
//   name: "Cumhuriyet'in İlk Sabahı",
//   author: "Şermin Yaşar ",
// };

// const book3 = {
//   image: "img/img3.jpg",
//   name: "Hyunam-Dong Kitabevi",
//   author: "HWANG BO-REUM ",
// };

// const names = ["Ali", "Veli", "Hasan"];
// const newNames = names.map((name) => {
//   console.log(name);
//   return <h1>{name}</h1>;
// });

const a = books.map((x) => {
  return <BookCard book={x}></BookCard>;
});

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((x) => {
        return <BookCard {...x}></BookCard>;
      })}
    </section>
  );
};

function BookCard(props) {
  console.log(props);
  return (
    <div className="bookCard">
      <img className="bookImage" src={props.image} alt="image1" />
      <h2>{props.name}</h2>
      <h2 style={{ color: "#495057", fontSize: 20 }}>{props.author}</h2>
      <span className="number">1</span>
    </div>
  );
}
export default BookList;
