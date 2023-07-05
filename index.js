let one = 1;
const name = "";
let mr = 0;
let sr = 0;
let messageout = document.getElementById("message").style;
let messagein = document.getElementById("mymessage").style;
let tries = 1;
let pross = true;

const myname = (e) => {
  const player = document.getElementById("name").value;
  if (player) {
    document.getElementById("player").innerHTML = player;
    document.getElementById("intro").style.display = "none";
    document.getElementById("game_sect").style.display = "flex";
    console.log(player);
  } else {
    alert("please enter your name");
  }
};

let get_user = (selected) => {
  if (one == 1) {
    one = 2;
    const selected_item = selected.id;
    let message = document.getElementById("what").innerHTML;
    const mscr = (document.getElementById("mscr").innerHTML = mr);
    const cscr = (document.getElementById("cscr").innerHTML = sr);
    const display_content = "selected_" + selected.id;
    const style_selected = document.getElementById(display_content).style;
    style_selected.display = "flex";
    style_selected.margin = "0px";
    let computer = Math.floor(Math.random() * 2);
    let games = ["cstone", "cpaper", "csiser"];
    const place = games.indexOf("c" + selected_item);
    games.splice(place, 1);
    let computerid = games[computer];
    const style_computer = document.getElementById(computerid).style;
    setTimeout(function sm() {
      style_computer.display = "flex";
      style_computer.margin = "0px";
    }, 2000);

    setTimeout(function mc() {
      if (selected_item && computerid) {
        let m = selected.id;
        let c = computerid;
        if (m == "stone") {
          if (c == "cpaper") {
            document.getElementById("what").innerHTML = "opps you fail";
            sr = sr + 1;
            document.getElementById("cscr").innerHTML = sr;
            messageout.display = "flex";
            messagein.display = "flex";
          } else {
            document.getElementById("what").innerHTML = "congs you win";
            mr = mr + 1;
            document.getElementById("mscr").innerHTML = mr;
            messageout.display = "flex";
            messagein.display = "flex";
          }
        }
        if (m == "paper") {
          if (c == " cstone") {
            document.getElementById("what").innerHTML = "congs you win";
            mr = mr + 1;
            document.getElementById("mscr").innerHTML = mr;
            messageout.display = "flex";
            messagein.display = "flex";
          } else {
            document.getElementById("what").innerHTML = "opps you fail";
            sr = sr + 1;
            document.getElementById("cscr").innerHTML = sr;
            messageout.display = "flex";
            messagein.display = "flex";
          }
        }
        if (m == "siser") {
          if (c == "cpaper") {
            document.getElementById("what").innerHTML = "congs you win";
            mr = mr + 1;
            document.getElementById("mscr").innerHTML = mr;
            messageout.display = "flex";
            messagein.display = "flex";
          } else {
            document.getElementById("what").innerHTML = "opps you fail";
            sr = sr + 1;
            document.getElementById("cscr").innerHTML = sr;
            messageout.display = "flex";
            messagein.display = "flex";
          }
        }
      }
    }, 3000);
  }
};

const cclose = () => {
  if (pross) {
    confirm("Do you want to close the   game");
  }
  sr = 0;
  mr = 0;
  one = 1;
  document.getElementById("cscr").innerHTML = sr;
  document.getElementById("mscr").innerHTML = mr;
  messageout.display = "none";
  messagein.display = "none";
  document.getElementById("intro").style.display = "flex";
  document.getElementById("game_sect").style.display = "none";
  const cards = document.querySelectorAll(".selected_game");
  for (let card of cards) {
    document.getElementById(card.id).style.display = "none";
  }
};
const contin = () => {
  if (tries <= 3) {
    one = 1;
    tries += 1;
    document.getElementById("cscr").innerHTML = sr;
    document.getElementById("mscr").innerHTML = mr;
    messageout.display = "none";
    messagein.display = "none";
    document.getElementById("game_sect").style.display = "flex";
    const cards = document.querySelectorAll(".selected_game");
    for (let card of cards) {
      document.getElementById(card.id).style.display = "none";
    }
  }
  if (tries > 3 && mr > sr) {
    alert(
      " congratation you win , there is no trials left. sign up again for more trials"
    );
    tries = 1;
    pross = false;
    cclose();
  }
  if (tries > 3 && mr < sr) {
    alert(
      " opps you fail, there is no trials left. sign up again for more trials "
    );
    tries = 1;
    pross = false;
    cclose();
  }
};

// let get_user = (call_computer) => {
//   const cards = document.querySelectorAll(".game");

//   const select = (e) => {
//     e.preventDefault();
//     for (let card of cards) {
//       card.style.display = "none";
//     }
//     e.target.style.display = "flex";
//     document.getElementById("computer").style.display = "flex";
//     console.log(e.target.id);
//   };

//   for (let card of cards) {
//     card.addEventListener("click", select);
//   }

//   console.log("hello");

//   call_computer();
// };

// let computer = () => {
//   console.log("time for computers");
// };
