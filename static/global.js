// let allLinks = document.querySelectorAll("a");
// console.log(allLinks);

// let p = document.createElement("p");
// p.textContent = "Hello";
// document.body.append(p)
// document.body.insertAdjacentHTML("beforeend", <p>Hello</p>);

console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

// let navLinks = $$("nav a");
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname);
// currentLink?.classList.add("current");

let pages = [
    {url: "portifolio-svelte/", title: "Home"},
    {url: "portifolio-svelte/projects", title: "Projects"},
    {url: "portifolio-svelte/resume", title: "Resume"},
    {url: "portifolio-svelte/contacts", title: "Contacts"},
    {url: "https://github.com/jgabrielsg/", title: "GitHub"},
];

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
    let url = p.url;
    let title = p.title;
    // Create link and add it to nav
    // const ARE_WE_HOME = document.documentElement.classList.contains("home");
    // if (!ARE_WE_HOME && !url.startsWith("http")) {
    //     url = "../" + url;
    // }
    
    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }
    if (a.host !== location.host) {
        a.target = "_blank"
    }
    nav.append(a);
}

