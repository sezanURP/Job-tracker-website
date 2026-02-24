
let interviewsCountList = [];
let rejectedCountList = [];


let total = document.getElementById("total-count");
let interviewCount = document.getElementById("interviews-count");
let rejectedCount = document.getElementById("rejected-count");
let jobsCount = document.getElementById("jobs-count");
// console.log(total, interview, rejected);

const allCard = document.getElementById("all-card");
// console.log(allCard.children.length);

const mainContainer = document.querySelector("main");

const allBtn = document.getElementById("all-btn");
const interviewsBtn = document.getElementById("interviews-btn");
const rejectedBtn = document.getElementById("rejected-btn");

function toggleStyle(id) {
   const buttons = [allBtn, interviewsBtn, rejectedBtn];
   buttons.forEach(btn => {
      if (btn.id === id) {
         btn.classList.add("bg-blue-500", "text-white");
      } else {
         btn.classList.remove("bg-blue-500", "text-white");
      }
   });
}

// const mainContainer = document.querySelector(".job-container");

function calculateCounts() {
   total.innerText= allCard.children.length;
   jobsCount.innerText = `${allCard.children.length} jobs`;
   interviewCount.innerText = interviewsCountList.length;
   rejectedCount.innerText = rejectedCountList.length;

   // let totalCount = allCard.children.length;

}
calculateCounts();


