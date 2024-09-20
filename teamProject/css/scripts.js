'use strict';

const headerLoginLink = document.querySelector('.header_login a');
const modalWrap = document.getElementById('modalWrap');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBg = document.getElementById('modalBg');

// 모달 열기 함수
function openModal() {
    modalWrap.style.display = 'block';
    modalBg.style.display = 'block';
    setTimeout(() => {
        modalWrap.style.opacity = '1';
        modalBg.style.opacity = '0.7';
    }, 10);
}

// 모달 닫기 함수
function closeModal() {
    modalWrap.style.opacity = '0';
    modalBg.style.opacity = '0';
    setTimeout(() => {
        modalWrap.style.display = 'none';
        modalBg.style.display = 'none';
    }, 300);
}

headerLoginLink.addEventListener('click', function (event) {
    event.preventDefault();
    openModal();
});

closeModalBtn.addEventListener('click', function () {
    closeModal();
});

modalBg.addEventListener('click', function () {
    closeModal();
});


function btnClick() {
    const seriesSet = document.getElementById('seriesSet')

    if (seriesSet.classList.contains('show')) {
        seriesSet.classList.remove('show'); // show 클래스를 삭제하여 사라지도록 함
    } else {
        seriesSet.classList.add('show'); // show 클래스를 추가하여 나타나도록 함
    }
}


//  검색창 모달

function showSearch() {
    document.querySelector(".background2").className = "background2 show3";
}

document.querySelector("#show3").addEventListener("click", showSearch);



function clsoeSearch() {
    document.querySelector(".background2").className = ("background2");
}

document.querySelector(".closeX").addEventListener("click", clsoeSearch)


//  카테고리 모달 


function show() {
    document.querySelector(".background").className = "background show";
}

function close() {
    document.querySelector(".background").className = "background";
}

document.querySelector("#show").addEventListener("click", show);
document.querySelector("#close").addEventListener("click", close);