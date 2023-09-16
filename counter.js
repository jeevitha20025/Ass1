let count = 0;
const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const num = document.querySelector('.num');
const reset = document.querySelector('.reset');

const clickHandler =() => {
count+=1;
num.innerHTML = count;
};

const clickHandler2 =()=> {
count-=1;
num.innerHTML = count;
};
const clickHandler3 =() => {
count=0;
num.innerHTML = count;
};
    

inc.addEventListener('click', clickHandler);
dec.addEventListener('click', clickHandler2);
reset.addEventListener('click', clickHandler3);