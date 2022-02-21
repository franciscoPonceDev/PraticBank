/* eslint-disable array-callback-return */
const cards = [
  {
    title: '<span>Cartão Pratic:</span> Compre com descontos incríveis e receba dinheiro de volta.',
    description: 'São mais de 300 lojas e milhares de ofertas. E uma parte do valor da compra volta pra você como Cash Back!',
    link: 'Abra já a sua conta! →',
    href: '#',
    imageUrl: './assets/Card1.png',
    imageAlt: 'Credit card',
    id: 1,
  },
  {
    title: 'Precisando de dinheiro?<br> A gente ajuda :)',
    description: 'Empréstimo Pratico e Rápido',
    link: 'Saiba mais →',
    href: '#',
    imageUrl: './assets/Card2.png',
    imageAlt: 'Entrepreneur woman',
    id: 1,
  },
];

const cardsSection = document.getElementById('cards-section');

const generateCard = (details) => {
  const cardTemplate = `
            <div class="card-description">
                <h2>${details.title}</h2><br>
                <p>${details.description}</p>
                <a href="${details.href}" class="btn-btn btn-link">${details.link}</a>
            </div>
            <div class="card-image">
                <img class="card-img" src="${details.imageUrl}" alt="${details.imageAlt}">
            </div>
    `;
  return cardTemplate;
};

cards.map((card) => {
  const HTMLElement = document.createElement('div');
  HTMLElement.className = 'card';
  HTMLElement.innerHTML = generateCard(card);
  cardsSection.appendChild(HTMLElement);
});

// Smooth scrolling anchor tag

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function smooth(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});