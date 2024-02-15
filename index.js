
const accessKey = "6iaZE_w8c0nI14MAe-8ZEw6_NUyrHsg-6t1lzRROd5c";

const searchForm = document.getElementById("search-form");
const searchResult = document.getElementById("search-result");
const searchBox = document.getElementById("search-box");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})