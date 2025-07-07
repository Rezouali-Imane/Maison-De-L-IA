// --- Course Filter Functionality ---
const filterBtns = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    courseCards.forEach(card => {
      if (filter === 'all' || card.dataset.tags.includes(filter)) {
        card.style.display = 'flex';
        setTimeout(() => card.classList.remove('hide'), 10);
      } else {
        card.classList.add('hide');
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  });
});

// --- Course Card Tooltip Popup ---
function showCourseTooltip(card, courseName) {
  // Remove any existing tooltip
  const oldTip = card.querySelector('.course-tooltip');
  if (oldTip) oldTip.remove();
  // Create tooltip element
  const tip = document.createElement('div');
  tip.className = 'course-tooltip';
  tip.innerHTML = `🔔 You've selected the <b>${courseName}</b> course!<br>Get ready to build the web.`;
  card.appendChild(tip);
  // Animate in
  setTimeout(() => tip.classList.add('show'), 10);
  // Auto-hide after 2.5s
  setTimeout(() => {
    tip.classList.remove('show');
    setTimeout(() => tip.remove(), 400);
  }, 2500);
}

courseCards.forEach(card => {
  // Get course name from card
  const courseName = card.querySelector('.course-header h3').textContent;
  // Only trigger on card click, not button
  card.addEventListener('click', e => {
    if (e.target.classList.contains('learn-btn')) return;
    showCourseTooltip(card, courseName);
  });
});

// --- Progress Bar Animation ---
courseCards.forEach(card => {
  const progressBar = card.querySelector('.progress-bar');
  const fill = progressBar.querySelector('.progress-fill');
  const target = progressBar.dataset.progress;
  let animated = false;
  // Animate on hover or button click
  function animateBar() {
    if (!animated) {
      fill.style.width = target + '%';
      animated = true;
    }
  }
  card.addEventListener('mouseenter', animateBar);
  card.querySelector('.learn-btn').addEventListener('click', animateBar);
});

// --- Reviews Carousel ---
const slides = document.querySelectorAll('.review-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let carouselInterval = null;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
    dots[i].classList.toggle('active', i === idx);
  });
  currentSlide = idx;
}
function nextSlide() {
  let next = (currentSlide + 1) % slides.length;
  showSlide(next);
}
function startCarousel() {
  if (carouselInterval) clearInterval(carouselInterval);
  carouselInterval = setInterval(nextSlide, 5000);
}
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    startCarousel();
  });
});
showSlide(0);
startCarousel();

// --- Feedback Form Animation ---
const feedbackForm = document.querySelector('.feedback-form');
const feedbackInput = document.querySelector('.feedback-input');
const feedbackConfirmation = document.querySelector('.feedback-confirmation');

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  feedbackConfirmation.classList.add('show');
  feedbackInput.value = '';
  setTimeout(() => {
    feedbackConfirmation.classList.remove('show');
  }, 2200);
});

// --- Card Hide Animation (for filter) ---
const style = document.createElement('style');
style.innerHTML = `
.course-card.hide { opacity: 0; transform: scale(0.95) translateY(30px); transition: opacity 0.3s, transform 0.3s; }
.course-tooltip {
  position: absolute;
  left: 50%;
  top: 18px;
  transform: translateX(-50%) scale(0.8);
  background: #181840;
  color: #F7FF00;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.75rem;
  border: 2px solid #00FFFF;
  border-radius: 10px;
  box-shadow: 0 0 16px #00FFFF, 0 0 8px #B200FF;
  padding: 18px 22px 14px 22px;
  z-index: 10;
  opacity: 0;
  pointer-events: none;
  text-align: center;
  transition: opacity 0.35s cubic-bezier(0.4,2,0.6,1), transform 0.35s cubic-bezier(0.4,2,0.6,1);
}
.course-tooltip.show {
  opacity: 1;
  transform: translateX(-50%) scale(1.08);
  animation: tooltipBounce 0.5s cubic-bezier(0.4,2,0.6,1);
}
@keyframes tooltipBounce {
  0% { transform: translateX(-50%) scale(0.7); }
  60% { transform: translateX(-50%) scale(1.15); }
  100% { transform: translateX(-50%) scale(1.08); }
}
`;
document.head.appendChild(style); 