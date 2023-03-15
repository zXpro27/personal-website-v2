'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// Portfolio Page
// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });


// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// cards portfolio 
const cardBox = document.querySelector(".project-list");

let dataCards = [
  {
    id: 1,
    thumb: "./images/portfolio/exerteach.png",
    title: "ExerTeach",
    kategori: "web development",
    url: "https://exer-teach.vercel.app/"
  },
  {
    id: 2,
    title: "Plant'shop",
    thumb: "./images/portfolio/preview.png",
    kategori: "web design",
    url: "https://plantshop-pro.vercel.app/"
  },
  {
    id: 3,
    thumb: "./images/portfolio/fitclub.png",
    title: "FitClub",
    kategori: "web design",
    url: "https://fitclub-pro.vercel.app/"
  },
  {
    id: 4,
    thumb: "./images/portfolio/bookshelf.png",
    title: "Bookshelf",
    kategori: "web development",
    url: "https://bookshelf-pro.vercel.app/"
  },
  {
    id: 5,
    thumb: "./images/portfolio/covid.png",
    title: "Covid-19",
    kategori: "web design",
    url: "https://covid-19-pro.vercel.app/"
  },
];

cardBox.innerHTML = "";
// show cards
dataCards.map((dc) => {
  let newCard = `
  <div class="project-item active" data-filter-item data-category="${dc.kategori}" key="${dc.id}">
    <a href="${dc.url}" target="_blank">
      <figure class="project-img">
        <div class="project-item-icon-box">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
        <img src="${dc.thumb}" alt="${dc.title}" loading="lazy">
      </figure>
      <h3 class="project-title">${dc.title}</h3>
      <p class="project-category">${dc.kategori}</p>
    </a>
  </div>
  `;
  
  cardBox.innerHTML += newCard;
  
  // filter variables
  const filterItems = document.querySelectorAll("[data-filter-item]");
  
  const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }
};

  // add event in all select items
  for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    
    filterFunc(selectedValue);

  });
}
});


// Blog page 
const blogContainer = document.querySelector(".blog-posts"),
      blogPostList = document.querySelector(".blog-posts-list"),
      blogDetailList = document.querySelector(".blog-detail-list");
      
blogPostList.innerHTML = "";
blogDetailList.innerHTML = "";

// fetch API 
let dataPostList = [
  {
    id: 1,
    thumb: "./images/blog/techstack.webp",
    title: "My Tech Stack",
    desc: "Beberapa tentang alat yang membantu saya lebih cepat dalam menjalankan bisnis SaaS secara efisien.",
    category: "Teknologi",
    created: "4 Januari, 2023",
    details: [
      "Banyak orang bertanya kepada saya tentang tumpukan teknologi yang saya gunakan untuk membuat produk SaaS. Sebenarnya ini pertanyaan yang paling sering saya dapatkan. Itu sebabnya saya ingin menunjukkan kepada Anda alat dan layanan yang membantu saya membangun produk SaaS dengan cepat.",
      "Disclaimer: gunakan alat yang membantu Anda mengirim lebih cepat, bukan alat yang terdengar (seksi).",
      "https://www.showwcase.com/show/16387/my-tech-stack",
    ],
  },
  {
    id: 2,
    thumb: "./images/blog/stillness.jpg",
    title: "Hadapi Ketakutan mu!!!",
    desc: "Kisah bagaimana saya melawan ketakutan terbesar saya.",
    category: "Pola pikir",
    created: "15 Agustus, 2022",
    details: [
      "Sepanjang hidup saya, saya adalah seorang introvert yang takut bertemu orang baru dan mengekspos diri saya pada pengalaman baru.",
      "Tapi ketakutan terbesar saya adalah berbicara di depan umum. Saya tidak pernah berpikir bahwa saya akan mampu berbicara di depan banyak orang dan berhasil menginspirasi mereka.",
      "https://www.showwcase.com/show/16447/hadapi-ketakutanmu",
    ]
  },
  {
    id: 3,
    thumb: "./images/blog/jampasir.webp",
    title: "Hukum Jam Pasir",
    desc: "Saya menyebut 1 hukum dan 5 prinsip dalam buku Hukum Jam Pasir. Mengapa?",
    category: "Pengembangan diri",
    created: "11 Agustus, 2022",
    details: [
      "Perubahan energi dari satu bentuk energi ke bentuk energi lainnya dapat diibaratkan seperti pasir dalam jam pasir. Jumlah pasir yang masuk ke tabung bagian bawah jam jumlah nya sama dengan jumlah pasir yang keluar dari tabung bagian atas jam",
      "Energi dapat mengubah lokasi, seperti pasir dalam jam pasir. Meskipun energi berubah bentuk, itu tetap energi. Bentuk energi dapat berubah seperti dari cahaya menjadi listrik, atau gerak menjadi listrik.",
      "https://google.com/"
    ]
  }
];

dataPostList.map((dp) => {
  let newPostItem = `
  <div class="blog-post-item" key="${dp.id}" data-post-item>
    <a href="">
      <figure class="blog-banner-box">
        <img src="${dp.thumb}" alt="${dp.title}" loading="lazy" data-post-avatar>
      </figure>
      <div class="blog-content">
        <div class="blog-meta">
          <p class="blog-category" data-post-category>${dp.category}</p>
          <span class="dot"></span>
          <time datetime="2023-01-4" data-post-time>${dp.created}</time>
        </div>
        <h3 class="h3 blog-item-title" data-post-title>${dp.title}</h3>
        <p class="blog-text" data-post-desc>${dp.desc}</p>
        <span class="hide">${dp.details[0]}</span>
        <span class="hide">${dp.details[1]}</span>
        <span class="hide">${dp.details[2]}</span>
      </div>
    </a>
  </div>
  `
  
  blogPostList.innerHTML += newPostItem;
});

const postCard = document.querySelectorAll("[data-post-item]"),
      postBox = document.querySelectorAll(".blog-posts-item");

// Detail Display Blog
blogContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.src) {
    
    let blogImg = e.target.src,
        blogCategory = e.target.parentElement.nextElementSibling.children[0].children[0].innerText,
        blogTime = e.target.parentElement.nextElementSibling.children[0].children[2].innerText,
        blogTitle = e.target.parentElement.nextElementSibling.children[1].innerText,
        blogDesc = e.target.parentElement.nextElementSibling.children[2].innerText,
        text1 = e.target.parentElement.nextElementSibling.children[3].innerText,
        text2 = e.target.parentElement.nextElementSibling.children[4].innerText,
        text3 = e.target.parentElement.nextElementSibling.children[5].innerText;
    
    e.target.parentElement.parentElement.parentElement.parentElement.classList.add("active");
    e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add("active");
    
    let previewData = [blogImg, blogCategory, blogTime, blogTitle, blogDesc, text1, text2, text3];
    
    showDetail(previewData);
    window.scrollTo(0, 0);
  }
  
  if (e.target.className === "btn") {
    
    e.target.parentElement.parentElement.parentElement.classList.remove("active");
    e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.remove("active");
  }
});

// show detail page
function showDetail([...selectedValue]) {
  const previewDetail = selectedValue;
  
  let postDetail = `
  <div class="blog-detail">
    <figure class="detail-img">
      <img src="${previewDetail[0]}" alt="${previewDetail[1]}"/>
    </figure>
    <div class="blog-menu">
      <button class="btn">
        < kembali
      </button>
      <p>${previewDetail[2]}</p>
    </div>
    <h1>${previewDetail[3]}</h1>
    <p class="blog-text">${previewDetail[4]}</p>
    <div class="separator"></div>
    <div class="text-content">
      <p>${previewDetail[5]}</p>
      <p>${previewDetail[6]}</p>
    </div>
    <div class="danger">
      <button onclick="window.location='${previewDetail[7]}'";><ion-icon name="arrow-redo-outline" class="icon"></ion-icon></button>
      <h5 class="h5">Karena waktu pembuatan yang terbatas, mohon baca artikel selengkapnya dihalaman lain selagi menunggu update terbaru dari Personal Page saya</h5>
    </div>
  </div>
  `
  
  blogDetailList.innerHTML = postDetail;
}

// submit reset form (Contact Page)
const btnSub = document.querySelector(".form-btn"),
      form = document.querySelector(".form");

const nameVal = document.getElementById("name"),
      emailVal = document.getElementById("email"),
      pesan = document.getElementById("pesan");

btnSub.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();
  
  if (!nameVal.value || !emailVal.value || !pesan.value) {
    alert("Silahkan lengkapi field yang belum diisi!!")
    return false;
  }
  
  if (nameVal && emailVal && pesan) {
    form.submit();
  }
  // 👇️ clear input field
  form.reset();
});


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


/*=============== SCROLL REVEAL =============== */
ScrollReveal({
  reset: true,
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
});

ScrollReveal().reveal('.contact-item', {
  delay: 600
});

ScrollReveal().reveal('.abt, .porto, .tleft, .skill-progress-fill', {
  origin: 'left'
});
ScrollReveal().reveal('.tright', {
  origin: 'right'
});
ScrollReveal().reveal('.service-item, .contact-item', {
  interval: 100,
});
