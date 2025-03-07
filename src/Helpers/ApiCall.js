export default async function getProductDetails() {
  try {
    const response = await fetch(
      "https://real-time-amazon-data.p.rapidapi.com/search?query=Pant&page=1&country=IN&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "08d3753d0fmsh17a23f91216251fp125443jsn7263da5d9e2c",
          "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let Products = await response.json();
    return Products.data.products;
  } catch (error) {
    console.error("Error:", error);
  }
}
