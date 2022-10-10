let shield = true;
let counter = 0;
let won = false;

let s1unmarked = true;
let s2unmarked = true;
let s3unmarked = true;
let s4unmarked = true;
let s5unmarked = true;
let s6unmarked = true;
let s7unmarked = true;
let s8unmarked = true;
let s9unmarked = true;

let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
let s4 = document.getElementById("s4");
let s5 = document.getElementById("s5");
let s6 = document.getElementById("s6");
let s7 = document.getElementById("s7");
let s8 = document.getElementById("s8");
let s9 = document.getElementById("s9");

s1.value = "s1";
s2.value = "s2";
s3.value = "s3";
s4.value = "s4";
s5.value = "s5";
s6.value = "s6";
s7.value = "s7";
s8.value = "s8";
s9.value = "s9";

function finish() {
  if (
    false == s1unmarked &&
    s1unmarked == s2unmarked &&
    s2unmarked == s3unmarked &&
    s3unmarked == s4unmarked &&
    s4unmarked == s5unmarked &&
    s5unmarked == s6unmarked &&
    s6unmarked == s7unmarked &&
    s7unmarked == s8unmarked &&
    s8unmarked == s9unmarked
  ) {
    if (!won) {
      alert("Velha");
    }
  }
}

function winner() {
  if (!shield) {
    alert("O jogador do escudo venceu");
  } else {
    alert("O jogador das espadas venceu");
  }
}

function toMarkS1() {
  if (!won) {
    if (s1unmarked) {
      if (shield) {
        s1.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/shield_1f6e1-fe0f.png)";
        shield = false;
        s1.value = "shield";
      } else {
        s1.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/crossed-swords_2694-fe0f.png)";
        shield = true;
        s1.value = "swords";
      }
    }

    if (s1.value == s2.value && s2.value == s3.value) {
      won = true;
      winner();
    } else if (s4.value == s5.value && s5.value == s6.value) {
      won = true;
      winner();
    } else if (s7.value == s8.value && s8.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s4.value && s4.value == s7.value) {
      won = true;
      winner();
    } else if (s2.value == s5.value && s5.value == s8.value) {
      won = true;
      winner();
    } else if (s3.value == s6.value && s6.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s5.value && s5.value == s9.value) {
      won = true;
      winner();
    } else if (s3.value == s5.value && s5.value == s7.value) {
      won = true;
      winner();
    }

    s1unmarked = false;

    finish();
  }
}

function toMarkS2() {
  if (!won) {
    if (s2unmarked) {
      if (shield) {
        s2.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/shield_1f6e1-fe0f.png)";
        shield = false;
        s2.value = "shield";
      } else {
        s2.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/crossed-swords_2694-fe0f.png)";
        shield = true;
        s2.value = "swords";
      }
    }

    if (s1.value == s2.value && s2.value == s3.value) {
      won = true;
      winner();
    } else if (s4.value == s5.value && s5.value == s6.value) {
      won = true;
      winner();
    } else if (s7.value == s8.value && s8.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s4.value && s4.value == s7.value) {
      won = true;
      winner();
    } else if (s2.value == s5.value && s5.value == s8.value) {
      won = true;
      winner();
    } else if (s3.value == s6.value && s6.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s5.value && s5.value == s9.value) {
      won = true;
      winner();
    } else if (s3.value == s5.value && s5.value == s7.value) {
      won = true;
      winner();
    }

    s2unmarked = false;

    finish();
  }
}
function toMarkS3() {
  if (!won) {
    if (s3unmarked) {
      if (shield) {
        s3.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/shield_1f6e1-fe0f.png)";
        shield = false;
        s3.value = "shield";
      } else {
        s3.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/crossed-swords_2694-fe0f.png)";
        shield = true;
        s3.value = "swords";
      }
    }

    if (s1.value == s2.value && s2.value == s3.value) {
      won = true;
      winner();
    } else if (s4.value == s5.value && s5.value == s6.value) {
      won = true;
      winner();
    } else if (s7.value == s8.value && s8.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s4.value && s4.value == s7.value) {
      won = true;
      winner();
    } else if (s2.value == s5.value && s5.value == s8.value) {
      won = true;
      winner();
    } else if (s3.value == s6.value && s6.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s5.value && s5.value == s9.value) {
      won = true;
      winner();
    } else if (s3.value == s5.value && s5.value == s7.value) {
      won = true;
      winner();
    }

    s3unmarked = false;

    finish();
  }
}
function toMarkS4() {
  if (!won) {
    if (s4unmarked) {
      if (shield) {
        s4.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/shield_1f6e1-fe0f.png)";
        shield = false;
        s4.value = "shield";
      } else {
        s4.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/crossed-swords_2694-fe0f.png)";
        shield = true;
        s4.value = "swords";
      }
    }

    if (s1.value == s2.value && s2.value == s3.value) {
      won = true;
      winner();
    } else if (s4.value == s5.value && s5.value == s6.value) {
      won = true;
      winner();
    } else if (s7.value == s8.value && s8.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s4.value && s4.value == s7.value) {
      won = true;
      winner();
    } else if (s2.value == s5.value && s5.value == s8.value) {
      won = true;
      winner();
    } else if (s3.value == s6.value && s6.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s5.value && s5.value == s9.value) {
      won = true;
      winner();
    } else if (s3.value == s5.value && s5.value == s7.value) {
      won = true;
      winner();
    }

    s4unmarked = false;

    finish();
  }
}
function toMarkS5() {
  if (!won) {
    if (s5unmarked) {
      if (shield) {
        s5.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/shield_1f6e1-fe0f.png)";
        shield = false;
        s5.value = "shield";
      } else {
        s5.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/crossed-swords_2694-fe0f.png)";
        shield = true;
        s5.value = "swords";
      }
    }

    if (s1.value == s2.value && s2.value == s3.value) {
      won = true;
      winner();
    } else if (s4.value == s5.value && s5.value == s6.value) {
      won = true;
      winner();
    } else if (s7.value == s8.value && s8.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s4.value && s4.value == s7.value) {
      won = true;
      winner();
    } else if (s2.value == s5.value && s5.value == s8.value) {
      won = true;
      winner();
    } else if (s3.value == s6.value && s6.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s5.value && s5.value == s9.value) {
      won = true;
      winner();
    } else if (s3.value == s5.value && s5.value == s7.value) {
      won = true;
      winner();
    }

    s5unmarked = false;

    finish();
  }
}
function toMarkS6() {
  if (!won) {
    if (s6unmarked) {
      if (shield) {
        s6.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/shield_1f6e1-fe0f.png)";
        shield = false;
        s6.value = "shield";
      } else {
        s6.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/crossed-swords_2694-fe0f.png)";
        shield = true;
        s6.value = "swords";
      }
    }

    if (s1.value == s2.value && s2.value == s3.value) {
      won = true;
      winner();
    } else if (s4.value == s5.value && s5.value == s6.value) {
      won = true;
      winner();
    } else if (s7.value == s8.value && s8.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s4.value && s4.value == s7.value) {
      won = true;
      winner();
    } else if (s2.value == s5.value && s5.value == s8.value) {
      won = true;
      winner();
    } else if (s3.value == s6.value && s6.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s5.value && s5.value == s9.value) {
      won = true;
      winner();
    } else if (s3.value == s5.value && s5.value == s7.value) {
      won = true;
      winner();
    }

    s6unmarked = false;

    finish();
  }
}
function toMarkS7() {
  if (!won) {
    if (s7unmarked) {
      if (shield) {
        s7.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/shield_1f6e1-fe0f.png)";
        shield = false;
        s7.value = "shield";
      } else {
        s7.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/crossed-swords_2694-fe0f.png)";
        shield = true;
        s7.value = "swords";
      }
    }

    if (s1.value == s2.value && s2.value == s3.value) {
      won = true;
      winner();
    } else if (s4.value == s5.value && s5.value == s6.value) {
      won = true;
      winner();
    } else if (s7.value == s8.value && s8.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s4.value && s4.value == s7.value) {
      won = true;
      winner();
    } else if (s2.value == s5.value && s5.value == s8.value) {
      won = true;
      winner();
    } else if (s3.value == s6.value && s6.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s5.value && s5.value == s9.value) {
      won = true;
      winner();
    } else if (s3.value == s5.value && s5.value == s7.value) {
      won = true;
      winner();
    }

    s7unmarked = false;

    finish();
  }
}
function toMarkS8() {
  if (!won) {
    if (s8unmarked) {
      if (shield) {
        s8.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/shield_1f6e1-fe0f.png)";
        shield = false;
        s8.value = "shield";
      } else {
        s8.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/crossed-swords_2694-fe0f.png)";
        shield = true;
        s8.value = "swords";
      }
    }

    if (s1.value == s2.value && s2.value == s3.value) {
      won = true;
      winner();
    } else if (s4.value == s5.value && s5.value == s6.value) {
      won = true;
      winner();
    } else if (s7.value == s8.value && s8.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s4.value && s4.value == s7.value) {
      won = true;
      winner();
    } else if (s2.value == s5.value && s5.value == s8.value) {
      won = true;
      winner();
    } else if (s3.value == s6.value && s6.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s5.value && s5.value == s9.value) {
      won = true;
      winner();
    } else if (s3.value == s5.value && s5.value == s7.value) {
      won = true;
      winner();
    }

    s8unmarked = false;

    finish();
  }
}
function toMarkS9() {
  if (!won) {
    if (s9unmarked) {
      if (shield) {
        s9.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/shield_1f6e1-fe0f.png)";
        shield = false;
        s9.value = "shield";
      } else {
        s9.style.cssText =
          "background-image: url(https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/crossed-swords_2694-fe0f.png)";
        shield = true;
        s9.value = "swords";
      }
    }

    if (s1.value == s2.value && s2.value == s3.value) {
      won = true;
      winner();
    } else if (s4.value == s5.value && s5.value == s6.value) {
      won = true;
      winner();
    } else if (s7.value == s8.value && s8.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s4.value && s4.value == s7.value) {
      won = true;
      winner();
    } else if (s2.value == s5.value && s5.value == s8.value) {
      won = true;
      winner();
    } else if (s3.value == s6.value && s6.value == s9.value) {
      won = true;
      winner();
    } else if (s1.value == s5.value && s5.value == s9.value) {
      won = true;
      winner();
    } else if (s3.value == s5.value && s5.value == s7.value) {
      won = true;
      winner();
    }

    s9unmarked = false;

    finish();
  }
}
