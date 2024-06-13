import data from "../data/site.json";  // Import the entire JSON data

const products = data.projects;  // Access the 'projects' array from the imported data

const productElement = document.getElementById("product");
const productHeroSectionElement = document.createElement("section");
const productListSectionElement = document.createElement("section");
const productWrapHeroElement = document.createElement("div");
const productWrapProductListElement = document.createElement("div");
const productTitleElement = document.createElement("h1");
const productNameElement = document.createElement("span");
const productCoverImgElement = document.createElement("img");
const productWorkLineListElement = document.createElement("ul");
const productArticleElement = document.createElement("article");
const productArticleOneElement = document.createElement("article");
const productOverviewContentElement = document.createElement("div");
const productOverviewImgElement = document.createElement("img");
const productOverviewTitleElement = document.createElement("h5");
const productOverviewTextElement = document.createElement("p");
const productArticleImgListElement = document.createElement("article");

// Get the query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Find the product with the matching ID
const product = products.find((item) => item.id === Number(productId));

if (product) {
    // Add Content
    productTitleElement.textContent = product.title;
    productNameElement.textContent = product.name;
    productCoverImgElement.src = product.imgCover;
    productCoverImgElement.style.width = "100%";
    productOverviewImgElement.src = product.productImg2["img"];
    productOverviewTitleElement.textContent = "Overview";
    productOverviewTextElement.textContent = product.productImg2["overview"];

    // Add ClassNames
    productNameElement.className = "product__single-text";
    productWrapHeroElement.classList.add("container", "center");
    productWrapProductListElement.classList.add("container", "testing");
    productArticleElement.className = "article";
    productArticleOneElement.className = "overview";
    productOverviewContentElement.className = "overview__content";
    productOverviewImgElement.className = "overview__img";
    productOverviewTitleElement.className = "overview__title";
    productOverviewTextElement.className = "overview__text";
    productWorkLineListElement.className = "workline__list";
    productArticleImgListElement.className = "product__img-list";

    for (const key in product.jobDetail) {
        const productWorkLineItemElement = document.createElement("li");
        const paragraphTitle = document.createElement("p");
        const paragraphText = document.createElement("p");

        // ClassName
        productWorkLineItemElement.className = "workline__item";
        paragraphTitle.className = "workline__title";
        paragraphText.className = "workline__text";

        // Display Content
        paragraphTitle.textContent = key;
        paragraphText.textContent = product.jobDetail[key];

        // Append Element
        productWorkLineItemElement.appendChild(paragraphTitle);
        productWorkLineItemElement.appendChild(paragraphText);
        productWorkLineListElement.appendChild(productWorkLineItemElement);
    }

    // Display array of images
    product.productImgDetails.forEach((imgUrl, index) => {
        const productArticleImgItemElement = document.createElement("div");
        const productArticleImgElement = document.createElement("img");

        // ClassNames
        productArticleImgItemElement.classList.add("product__img-item", `product__img-item--${index}`);
        productArticleImgElement.className = "product__img";
        productArticleImgElement.src = imgUrl;

        // Append Element
        productArticleImgItemElement.appendChild(productArticleImgElement);
        productArticleImgListElement.appendChild(productArticleImgItemElement);
    });

    // Append Child to parent Elements
    productHeroSectionElement.appendChild(productWrapHeroElement);
    productWrapHeroElement.appendChild(productTitleElement);
    productWrapHeroElement.appendChild(productNameElement);
    productListSectionElement.appendChild(productWrapProductListElement);
    productWrapProductListElement.appendChild(productArticleElement);
    productArticleElement.appendChild(productCoverImgElement);
    productArticleElement.appendChild(productWorkLineListElement);
    productWrapProductListElement.appendChild(productArticleOneElement);
    productArticleOneElement.appendChild(productOverviewImgElement);
    productArticleOneElement.appendChild(productOverviewContentElement);
    productOverviewContentElement.appendChild(productOverviewTitleElement);
    productOverviewContentElement.appendChild(productOverviewTextElement);
    productWrapProductListElement.appendChild(productArticleImgListElement);

    // Append Sections to the main product element
    productElement.appendChild(productHeroSectionElement);
    productElement.appendChild(productListSectionElement);
} else {
    console.error('Product not found');
}
