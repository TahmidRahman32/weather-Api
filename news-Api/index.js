let allData = [];
// console.log("my data", allData);
const newsDataLoad = async () => {
   const res = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-12-24&sortBy=publishedAt&apiKey=05f0fddb00e1454bb02c492854822090");
   const data = await res.json();
   allData = data?.articles;
   displayData(data?.articles.slice(0, 8));
   // .then((res) => res.json())
   // .then((data) => {
   //    allData = data?.articles;
   // });
   // .catch((err) => {
   //    console.log("ERROR:", err);
   // });
};


// setTimeout(() => {
//    console.log("All data in fetch", allData);
//    displayData(allData);
// }, 3000);

const displayData = (newses) => {
   // console.log(newses);

   const container = document.getElementById("container");
   container.innerHTML = "";
   // newses = newses;

   const showAll = document.getElementById("show-all");
   if (newses.length === 8) {
      showAll.classList.remove("hidden");
   } else {
      showAll.classList.add("hidden");
   }
   newses.map((news) => {
      // console.log(news.source.name);
      // console.log(news.urlToImage);
      const div = document.createElement("div");
      div.innerHTML = `
      <div  class="card card-side bg-base-100 shadow-xl">
             <figure><img class="w-48 rounded" src="${news.urlToImage != "" ? news.urlToImage : ""}" /></figure>
            <div class="card-body"> 
               <h2 class="card-title">${news.source ? news.source.name : "name is not found"}</h2>
               <p>Click the button to watch on Jetflix app.</p>
               <div class="card-actions justify-end">
                  <button class="btn btn-primary">details</button>
               </div>
            </div>
         </div>
      `;
      container.appendChild(div);
   });
};

newsDataLoad();

const showAllBtn = async () => {
  const res = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-12-24&sortBy=publishedAt&apiKey=05f0fddb00e1454bb02c492854822090");
   const data = await res.json();
   allData = data?.articles;
   displayData(allData);
   console.log(allData);
  

};



// const showTime = () => {
//    let data = new Data();
//    let h = data.getHours();
//    let m = data.getMinutes();
//    let s = data.getseconds();
//    let session = "AM";

//    if (h === 0) {
//       h = 12;
//    } else if (h > 12) {
//       h = h - 12;
//       session = "PM";
//    }

//    h = (h < 10) ? "0" + h : h;
//    m = (m < 10) ? "0" + m : m;
//    s = (s < 10)? "0" + h : h;

//    let time = h + ":" + m + ":" + s + " " + session;

//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;

//     setTimeout(showTime, 1000);
// };
