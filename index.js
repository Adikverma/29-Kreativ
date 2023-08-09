const contentNavList = document.querySelector('.content-nav-list');
const size=contentNavList.childElementCount;
let selectIndex=0;
for(let i=0;i<size;i++){
    contentNavList.children[i].addEventListener('click', () => {
        contentNavList.children[selectIndex].classList.toggle('sort-selected');
        selectIndex=i;
        contentNavList.children[selectIndex].classList.toggle('sort-selected');
    });
}
