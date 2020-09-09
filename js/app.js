const navToggle = document.querySelector('.nav-toggle');
const headerList = document.querySelector('.header-list');
const header = document.querySelector('.header');
const scrollLinks = document.querySelectorAll('.scroll-link');
const headerHeight = header.getBoundingClientRect().height;
const upScrollBtn = document.querySelector('.up-scroll-btn');

navToggle.addEventListener('click', () => {
  headerList.classList.toggle('header-list-open');
});

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const scrollHeightBottom = window.page;
  const width = window.innerWidth;
  if (scrollHeight > headerHeight) {
    header.style.position = 'fixed';
  } else {
    header.style.position = 'initial';
  }
  if (width > 991) {
    if (scrollHeight > 500) {
      upScrollBtn.style.opacity = 1;
    } else {
      upScrollBtn.style.opacity = 0;
    }
  }
});

scrollLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    headerList.classList.remove('header-list-open');
    const id = link.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - headerHeight - headerHeight;
    if (header.style.position === 'fixed') {
      position = element.offsetTop - headerHeight;
    }
    window.scrollTo({
      top: position,
      left: 0,
      behavior: 'smooth',
    });
  });
});
