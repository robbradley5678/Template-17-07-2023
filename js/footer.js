/* Inserts "footer.html" content and adds current year to copyright */

let footer = document.querySelector('footer');
let currentYear = new Date().getFullYear();

async function loadContent() {
    return fetch('./footer.html')
        .then(res => res.text())
        .then(html => {
            footer.innerHTML = html;
            let year = document.getElementById('year');
            year.innerHTML = currentYear;
        });
}

loadContent();
