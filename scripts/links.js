// Define the base URL for the GitHub Pages site
const baseURL = "https://wagnerxd12.github.io/wdd230/"; // 

// Define the URL for the links JSON data file
const linksURL = "https://wagnerxd12.github.io/wdd230/data/links.json"; // 

// Function to fetch links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks); // Correctly pass the 'weeks' array to displayLinks
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

// Function to display links
function displayLinks(weeks) {
  const ul = document.getElementById("links-list");
  weeks.forEach(week => {
    const weekItem = document.createElement("li");
    weekItem.textContent = week.week;
    ul.appendChild(weekItem);

    const linksUl = document.createElement("ul");
    week.links.forEach(link => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.url;
      a.textContent = link.title;
      li.appendChild(a);
      linksUl.appendChild(li);
    });
    ul.appendChild(linksUl);
  });
}

// Call the getLinks function to fetch and display the links
getLinks();








