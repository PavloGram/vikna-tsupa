import React from "react";

function Schema() {
  return (
    <>
      <section
        className="buy-text"
        style={{
          width: "600px",
          height: "300px",
          padding: "20px",
          textAlign: "center",
          margin: " auto",
        }}
      >
        {" "}
        Продаючий текст
      </section>
      <section
        className="product"
        style={{
          width: "1000px",
          height: "300px",
          padding: "20px",
          textAlign: "center",
          margin: " auto",
          backgroundColor: "gray",
        }}
      >
        Ассортимент продукції
      </section>
      <section
        className="catalog"
        style={{
          width: "600px",
          height: "300px",
          padding: "20px",
          textAlign: "center",
          margin: " auto",
        }}
      >
        Приклади робіт
      </section>
    </>
  );
}

export default Schema;
