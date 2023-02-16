window.addEventListener("load", solve);

function solve() {
  //get inputs
  const fName = document.querySelector("#first-name");
  const lName = document.querySelector("#last-name");
  const a = document.querySelector("#age");
  const g = document.querySelector("#genderSelect");
  const des = document.querySelector("#task");
  const inProgress = document.querySelector("#in-progress");
  const submitButton = document.querySelector("#form-btn");
  const clearBtn = document.querySelector("#clear-btn");
  const count = document.querySelector("#progress-count");
  const finished = document.querySelector("#finished");

  submitButton.addEventListener("click", dishManager);

  function dishManager() {
    const firstName = fName.value;
    const lastName = lName.value;
    const age = a.value;
    const gender = g.value;
    const description = des.value;
    if (
      firstName === "" ||
      lastName === "" ||
      age === "" ||
      gender === "" ||
      description === ""
    ) {
      return;
    }
    //createing elements
    const li = document.createElement("li");
    li.classList.add("each-line");

    const arc = document.createElement("article");
    const name = document.createElement("h4");
    name.textContent = `${firstName} ${lastName}`;

    const ageAndGender = document.createElement("p");
    ageAndGender.textContent = `${gender}, ${age}`;

    const desc = document.createElement("p");
    desc.textContent = `Dish description: ${description}`;

    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.textContent = "Mark as complete";

    //adding inputs to "In progress"
    inProgress.appendChild(li);
    li.appendChild(arc);
    arc.appendChild(name);
    arc.appendChild(ageAndGender);
    arc.appendChild(desc);
    li.appendChild(editButton);
    li.appendChild(completeButton);
    //clearing inputs fields
    fName.value = "";
    lName.value = "";
    a.value = "";
    des.value = "";
    count.textContent = Number(count.textContent) + 1;

    completeButton.addEventListener("click", completePosts);

    function completePosts() {
      // const nameText = name.textContent;
      // const ageAndGenderText = ageAndGender.textContent;
      // const paragaphText = desc.textContent;

      // const newLi = document.createElement("li");
      // newLi.classList.add("each-line");

      // const article = document.createElement("article");

      // const names = document.createElement("h4");
      // names.textContent = nameText;

      // const otherData = document.createElement("p");
      // otherData.textContent = ageAndGenderText;

      // const paragraph = document.createElement("p");
      // paragraph.textContent = paragaphText;

      // finished.appendChild(newLi);
      // newLi.appendChild(article);
      // article.appendChild(names);
      // article.appendChild(otherData);
      // article.appendChild(paragraph);

      editButton.remove();
      completeButton.remove();

      count.textContent = Number(count.textContent) - 1;

      finished.appendChild(li);
      // li.remove();

      clearBtn.addEventListener("click", clear);
      function clear() {
        finished.innerHTML = "";
      }
    }
    editButton.addEventListener("click", editList);
    function editList() {
      count.textContent = Number(count.textContent) - 1;
      li.remove();

      fName.value = firstName
      lName.value = lastName
      a.value = age
      g.value = gender
      des.value = description
    }
  }
}
