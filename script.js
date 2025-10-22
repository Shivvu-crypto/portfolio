// Fade-in scroll effect
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');
  const windowBottom = window.innerHeight + window.scrollY;

  elements.forEach(el => {
    const elTop = el.offsetTop + 100;
    if (windowBottom > elTop) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Dynamic typing for name
const nameEl = document.getElementById('dynamic-name');
const fullName = "Shivam Tripathi";
let i = 0;

function typeName() {
  if (i < fullName.length) {
    nameEl.innerHTML += fullName.charAt(i);
    i++;
    setTimeout(typeName, 150);
  }
}
typeName();

// Dynamic typing for skills
const skills = [
  "Python, Pandas, Matplotlib, NumPy",
  "Data Analysis & Visualization",
  "Research & Analytical Thinking",
  "Sociology, Anthropology, Economics Knowledge",
  "Flask / Small Web Projects"
];

const skillsEl = document.getElementById('dynamic-skills');
let skillIndex = 0;

function typeSkill(skill, el, callback) {
  let j = 0;
  function typeChar() {
    if (j < skill.length) {
      el.innerHTML += skill.charAt(j);
      j++;
      setTimeout(typeChar, 50);
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
      setTimeout(showSkills, 300);
    });
  }
}

showSkills();
