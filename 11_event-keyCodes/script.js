window.addEventListener("keydown", (e) => {
  const insert = document.getElementById("insert");
  insert.innerHTML = "";

  const keyCodes = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };
  console.log(keyCodes);

  for (let key in keyCodes) {
    const div = document.createElement("div");
    div.classList.add("key");

    const span = document.createElement("span");

    const small = document.createElement("small");
    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    span.appendChild(valueText);

    div.appendChild(span);
    div.appendChild(small);

    insert.appendChild(div);
  }
});

// ALTERNATIVE
// window.addEventListener("keydown", (e) => {
//   const insert = document.getElementById("insert");
//   insert.innerHTML = `
//   <div class="key">
//     ${event.key === " " ? "Space" : event.key}
//     <small>event.key</small>
//   </div>

//   <div class="key">
//     ${event.keyCode}
//     <small>event.keyCode</small>
//   </div>

//   <div class="key">
//     ${event.code}
//     <small>event.code</small>
//   </div>

//   `;
// });
