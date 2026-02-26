

let total = document.getElementById("total-count");
let interviewCount = document.getElementById("interviews-count");
let rejectedCount = document.getElementById("rejected-count");
let jobsCount = document.getElementById("jobs-count");
// console.log(total, interview, rejected);

const allCard = document.getElementById("all-card");
// console.log(allCard.children.length);

const allBtn = document.getElementById("all-btn");
const interviewsBtn = document.getElementById("interviews-btn");
const rejectedBtn = document.getElementById("rejected-btn");

const allCards = document.getElementById("all-card");
const interviewsCard = document.getElementById("interviews-card");
const rejectedCard = document.getElementById("rejected-card");

function toggleStyle(id) {
  const buttons = [allBtn, interviewsBtn, rejectedBtn];
  buttons.forEach((btn) => {
    if (btn.id === id) {
      btn.classList.add("bg-blue-500", "text-white");
    } 
    else {
      btn.classList.remove("bg-blue-500", "text-white");
    }
  });

  if (id === "all-btn") {
    allCard.classList.remove("hidden");
    interviewsCard.classList.add("hidden");
    rejectedCard.classList.add("hidden");
  }
  
  else if (id === "interviews-btn") {
    allCard.classList.add("hidden");
    interviewsCard.classList.remove("hidden");
    rejectedCard.classList.add("hidden");
  }
  
  else if (id === "rejected-btn") {
    allCard.classList.add("hidden");
    interviewsCard.classList.add("hidden");
    rejectedCard.classList.remove("hidden");
  }
}

// const mainContainer = document.querySelector(".job-container");

function calculateCounts() {
  total.innerText = allCard.children.length;
  jobsCount.innerText = `${allCard.children.length} jobs`;
  // interviewCount.innerText = interviewsCountList.length;
  // rejectedCount.innerText = rejectedCountList.length;

  // let totalCount = allCard.children.length;
}
calculateCounts();

const interviewContainer = document.getElementById("interviews-card");
const rejectedContainer = document.getElementById("rejected-card");



document.querySelectorAll("main .job-container .mobile").forEach((card) => {
  card.addEventListener("click", function (event) {
    const clickElements = event.target;
    const parentCard = clickElements.closest(".job-container .mobile");
    if (clickElements.classList.contains("interview-btn")) {
     interviewContainer.appendChild(parentCard);
    // console.log("interview button clicked");
  }
  else if (clickElements.classList.contains("rejected-btn")) {
    // console.log("rejected button clicked");
    rejectedContainer.appendChild(parentCard);
  }
    else if (clickElements.classList.contains("delete-btn")) {
      parentCard.remove();
      alert("Are you sure you want to delete this job card?");
    }
}
)});
// console.log(document.querySelectorAll("main .job-container .mobile"));




