let total = document.getElementById("total-count");
let interviewCount = document.getElementById("interviews-count");
let rejectedCount = document.getElementById("rejected-count");
let jobsCount = document.getElementById("jobs-count");

// Button Toggle Functionality, Card Display Logic and Empty State Display Logic

const allBtn = document.getElementById("all-btn");
const interviewsBtn = document.getElementById("interviews-btn");
const rejectedBtn = document.getElementById("rejected-btn");

// const allCards = document.getElementById("all-card");
const interviewsCard = document.getElementById("interviews-card");
const rejectedCard = document.getElementById("rejected-card");

const emptyState = document.getElementById("empty-state");

const allCard = document.getElementById("all-card");

function toggleStyle(id) {
  const buttons = [allBtn, interviewsBtn, rejectedBtn];
  buttons.forEach((btn) => {
    if (btn.id === id) {
      btn.classList.add("bg-blue-500", "text-white");
    } else {
      btn.classList.remove("bg-blue-500", "text-white");
    }
  });

  if (id === "all-btn") {
    allCard.classList.remove("hidden");
    interviewsCard.classList.add("hidden");
    rejectedCard.classList.add("hidden");
  } else if (id === "interviews-btn") {
    allCard.classList.add("hidden");
    interviewsCard.classList.remove("hidden");
    rejectedCard.classList.add("hidden");
  } else if (id === "rejected-btn") {
    allCard.classList.add("hidden");
    interviewsCard.classList.add("hidden");
    rejectedCard.classList.remove("hidden");
  }
}

// Job card update and delete functionality

const interviewContainer = document.getElementById("interviews-card");
const rejectedContainer = document.getElementById("rejected-card");

document.querySelectorAll("main .job-container .mobile").forEach((card) => {
  card.addEventListener("click", function (event) {
    const clickElements = event.target;
    const parentCard = clickElements.closest(".job-container .mobile");

    if (clickElements.classList.contains("interview-btn")) {
      interviewContainer.appendChild(parentCard);

      const statusButton = parentCard.querySelector(".status");
      statusButton.innerText = "Interviewed";
      statusButton.classList.remove("bg-gray-200");
      statusButton.classList.add("bg-green-400", "text-white");
      // updateCounts();
    } else if (clickElements.classList.contains("rejected-btn")) {
      rejectedContainer.appendChild(parentCard);

      const statusButton = parentCard.querySelector(".status");
      statusButton.innerText = "Rejected";
      statusButton.classList.remove("bg-gray-200");
      statusButton.classList.add("bg-red-400", "text-white");
      // updateCounts();
    } else if (clickElements.classList.contains("delete-btn")) {
      parentCard.remove();
      alert("Are you sure you want to delete this job?");
    }
  });
});

// Card count update functionality

const totalUpdate = document.getElementById("total-count");
const interviewsUpdate = document.getElementById("interviews-count");
const rejectedUpdate = document.getElementById("rejected-count");

function updateCounts() {
  const totalCards = document.querySelectorAll(".job-container .mobile").length;
  const interviewCards = document.querySelectorAll(
    "#interviews-card .mobile",
  ).length;
  const rejectedCards = document.querySelectorAll(
    "#rejected-card .mobile",
  ).length;

  totalUpdate.innerText = totalCards;
  jobsCount.innerText = `${interviewCards + rejectedCards} of ${allCard.children.length} jobs`;
  interviewsUpdate.innerText = interviewCards;
  rejectedUpdate.innerText = rejectedCards;
}

updateCounts();

document.querySelectorAll(".job-container .mobile").forEach((card) => {
  card.addEventListener("click", updateCounts);
});



// Empty state display logic

function checkEmptyState() {
  const totalCards = document.querySelectorAll(".job-container .mobile").length;
  const interviewCards = document.querySelectorAll(
    "#interviews-card .mobile",
  ).length;
  const rejectedCards = document.querySelectorAll(
    "#rejected-card .mobile",
  ).length;

  const emptyState = document.getElementById("empty-state");


  if (totalCards === 0) {
    emptyState.classList.remove("hidden");
    emptyState.innerHTML =
      '<p class="text-gray-500 text-3xl mx-auto">No jobs yet</p>';
  } else {
    emptyState.classList.add("hidden");
  }

  if (interviewCards === 0 && totalCards > 0) {
    emptyState.classList.remove("hidden");
    // emptyState.innerHTML = "<p class=\"text-gray-500 text-3xl mx-auto\"><i class=\"fa-duotone fa-solid fa-book-open-lines\">  </i> <br> No interviews yet</p>";
  } else {
    emptyState.classList.add("hidden");
  }

  if (rejectedCards === 0 && totalCards > 0) {
    emptyState.classList.remove("hidden");
    // emptyState.innerHTML = "<p class=\"text-gray-500 text-3xl mx-auto\"><i class=\"fa-duotone fa-solid fa-book-open-lines\">  </i> <br> No rejections yet</p>";
  } else {
    emptyState.classList.add("hidden");
  }

  
}
checkEmptyState();

document.querySelectorAll(".job-container .mobile").forEach((card) => {
  card.addEventListener("click", checkEmptyState);
});
