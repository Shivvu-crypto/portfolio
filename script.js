// ===== FADE-IN ON SCROLL =====
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');
  const windowBottom = window.innerHeight + window.scrollY;

  elements.forEach(el => {
    const elTop = el.offsetTop + 100; // start fading slightly before fully visible
    if (windowBottom > elTop) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// ===== DYNAMIC TYPING FOR NAME =====
const nameEl = document.getElementById('dynamic-name');
const fullName = "Shivam Tripathi";
let i = 0;

function typeName() {
  if (i < fullName.length) {
    nameEl.innerHTML += fullName.charAt(i);
    i++;
    setTimeout(typeName, 120); // speed of typing
  }
}
typeName();

// ===== DYNAMIC TYPING FOR SKILLS =====
const skills = [
  "Python, Pandas, Matplotlib, NumPy",
  "Data Analysis & Visualization",
  "Research & Analytical Thinking",
  "Sociology, Anthropology, Economics Knowledge",
  "Flask / Small Web Projects",
  "C, C++, Java"
];

const skillsEl = document.getElementById('dynamic-skills');
let skillIndex = 0;

function typeSkill(skill, el, callback) {
  let j = 0;
  function typeChar() {
    if (j < skill.length) {
      el.innerHTML += skill.charAt(j);
      j++;
      setTimeout(typeChar, 40); // typing speed for skills
    } else {
      el.innerHTML += " ✅";
      callback();
    }
  }
  typeChar();
}

function showSkills() {
  if (skillIndex < skills.length) {
    const li = document.createElement('li');
    skillsEl.appendChild(li);
    typeSkill(skills[skillIndex], li, () => {
      skillIndex++;
      setTimeout(showSkills, 300); // delay between skills
    });
  }
}

showSkills();
