const baseURL = "http://localhost:3000/monsters/";

document.addEventListener("DOMContentLoaded", () => {

  getMonsters();
  
});

function getMonsters() {
  fetch(baseURL)
    .then((res) => res.json())
    .then((monsterData) => monsterData.forEach(renderMonsters));
}

function renderMonsters(monster) {
  let container = document.createElement("div");

  let name = document.createElement("h3");
  name.innerText = `Name: ${monster.name}`;

  let age = document.createElement("h4");
  age.innerText = `Age: ${monster.age}`;

  let description = document.createElement("p");
  description.innerText = `Description: ${monster.description}`;

  container.append(name, age, description);
  document.getElementById("monster-container").appendChild(container);
}

function createMonsterForm() {
    const a = document.createElement("form"),
      b = document.createElement("input"),
      c = document.createElement("input"),
      d = document.createElement("input"),
      e = document.createElement("button");
    (a.id = "monster-form"),
      (b.id = "name"),
      (c.id = "age"),
      (d.id = "description"),
      (b.placeholder = "name..."),
      (c.placeholder = "age..."),
      (d.placeholder = "description..."),
      (e.innerHTML = "Create"),
      a.appendChild(b),
      a.appendChild(c),
      a.appendChild(d),
      a.appendChild(e),
      document.getElementById("create-monster").appendChild(a),
      addSubmitEventListener();
}

function handleSubmit(event) {
  event.preventDefault();
  
  let newName = event.target.name.value;
  let newAge = event.target.age.value;
  let newDescription = event.target.description.value;

  let newMonster = {
      name: newName,
      age: newAge,
      description: newDescription
  }

  let reqObj = {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(newMonster)
  };

  fetch(baseURL, reqObj)
    .then((res) => res.json())
    .then(renderMonsters);

    // debugger 
    
}
