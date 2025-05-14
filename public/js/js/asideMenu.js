"use strict";
const asideMenuTriggerButton = document.getElementById("aside-menu-trigger-button");
const asideMenuImage = document.getElementById("aside-menu-image");
const asideMenu = document.getElementById("aside-menu");
const content = document.getElementById("content");
function closeAsideMenu({ asideMenuLinksNames, asideMenuData, }) {
    if (!asideMenu || !content || !asideMenuTriggerButton || !asideMenuImage) {
        return;
    }
    asideMenu.style.width = "70px";
    asideMenu.style.alignItems = "center";
    content.style.marginLeft = "90px";
    asideMenuTriggerButton.innerText = ">";
    asideMenuData.asideMenuStatus = "closed";
    asideMenuLinksNames.forEach((link) => {
        Array.from(link.children).find((child) => {
            if (child.tagName === "SPAN") {
                child.classList.add("d-none");
            }
        });
    });
    setTimeout(() => {
        asideMenuImage.src = "./assets/tudu_logo-2.png";
    }, 200);
}
function openAsideMenu({ asideMenuData, asideMenuLinksNames, }) {
    if (!asideMenu || !content || !asideMenuTriggerButton || !asideMenuImage) {
        return;
    }
    asideMenu.style.width = "250px";
    asideMenu.style.alignItems = "flex-end";
    content.style.marginLeft = "270px";
    asideMenuTriggerButton.innerText = "<";
    asideMenuImage.src = "./assets/tudu_full_logo.png";
    asideMenuData.asideMenuStatus = "open";
    asideMenuLinksNames.forEach((link) => {
        Array.from(link.children).find((child) => {
            if (child.tagName === "SPAN") {
                setTimeout(() => {
                    child.classList.remove("d-none");
                }, 100);
            }
        });
    });
}
if (asideMenuTriggerButton && asideMenu) {
    const asideMenuLinksNames = asideMenu.querySelectorAll("a");
    asideMenuTriggerButton.addEventListener("click", () => {
        const asideMenuData = asideMenu.dataset;
        const status = asideMenuData.asideMenuStatus;
        const isAsideMenuOpen = status === "open";
        const asideMenuTrggerData = {
            asideMenuData,
            asideMenuLinksNames,
        };
        if (isAsideMenuOpen) {
            closeAsideMenu(asideMenuTrggerData);
            return;
        }
        openAsideMenu(asideMenuTrggerData);
    });
}
