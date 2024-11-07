// List of article images
const imageUrls = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Fl6-95Vpd1uCumsq5zRzziS5i717TxE0DQ&s",
  "https://www.sarit-lari.co.il/wp-content/uploads/2024/04/A-mortgage-for-any-purpose.png",
  "https://www.taxfinance.co.il/wp-content/uploads/2021/11/%D7%94%D7%97%D7%96%D7%A8-%D7%9E%D7%A1-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90.jpg",
  "https://www.hon.co.il/wp-content/uploads/2011/11/%D7%9E%D7%93%D7%A8%D7%99%D7%9B%D7%99-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-55x55-1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg8XUmVrHyyJYi_nX7XhmqVvxuRCZsxYXddg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mstqgQrshWiJkwhS91-GFjZIa8bBmANtZw&s"
];

const getRandomImage = () => {
  return imageUrls[Math.floor(Math.random() * imageUrls.length)];
};

// Sample articles with random images
const articles = [
    { title: "Understanding Mortgage Basics", description: "A beginner's guide to mortgages.", image: getRandomImage() , id: 1},
    { title: "Refinancing Options Explained", description: "Learn about refinancing options.", image: getRandomImage(), id: 2 },
    { title: "Managing Debt Effectively", description: "Tips to manage your debt effectively.", image: getRandomImage(), id: 3 },
    { title: "Top Mortgage Mistakes to Avoid", description: "Common mortgage mistakes.", image: getRandomImage() , id: 4},
    { title: "Understanding Interest Rates", description: "How interest rates work.", image: getRandomImage() , id: 5},
    { title: "Should You Refinance Your Mortgage?", description: "Factors to consider for refinancing.", image: getRandomImage(), id: 6 },
    { title: "How to Improve Your Credit Score", description: "Steps to improve your credit score.", image: getRandomImage() , id: 7},
    { title: "Fixed vs. Variable Rate Mortgages", description: "Pros and cons of different rates.", image: getRandomImage() , id: 8},
    { title: "Mortgage Pre-Approval", description: "Benefits of mortgage pre-approval.", image: getRandomImage(), id: 9 },
    { title: "How Much Can You Borrow?", description: "Understanding borrowing limits.", image: getRandomImage() , id: 10},
    { title: "Saving for a Down Payment", description: "Tips for saving for a down payment.", image: getRandomImage() , id: 11},
    { title: "Home Equity Loans vs. HELOCs", description: "Differences between home loans and HELOCs.", image: getRandomImage(), id: 12 },
    { title: "Understanding Closing Costs", description: "Guide to various closing costs.", image: getRandomImage(), id: 13 },
    { title: "How to Choose the Right Lender", description: "Choosing the right mortgage lender.", image: getRandomImage() , id: 14},
    { title: "The Importance of Mortgage Insurance", description: "Overview of mortgage insurance.", image: getRandomImage() , id: 15},
    { title: "Buying a Home with Low Income", description: "Purchasing a home on a budget.", image: getRandomImage() , id: 16},
    { title: "Understanding Foreclosure", description: "Preventing foreclosure and how it works.", image: getRandomImage(), id: 17 },
    { title: "15-Year vs. 30-Year Mortgage", description: "Choosing a mortgage term.", image: getRandomImage() , id: 18},
    { title: "The Mortgage Application Process", description: "Step-by-step guide to mortgage applications.", image: getRandomImage() , id: 19},
    { title: "The Role of Mortgage Brokers", description: "How brokers help find the best mortgage.", image: getRandomImage() , id: 20}
  ];
  export default articles;
