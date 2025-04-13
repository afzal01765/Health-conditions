let counters = document.querySelectorAll('.counter');
let time = 300; 

counters.forEach(counter => {
    let updateCounter = () => {
        let target = +counter.getAttribute("data-target");
        let count = +counter.innerText;
        let increment = target / time;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 1000);
        } else {
            counter.innerText = target;
        }
    }
    updateCounter();
});

let health = document.querySelector('.health');

setTimeout(() => {
    health.innerText = "You are FiT";
}, 2000);
