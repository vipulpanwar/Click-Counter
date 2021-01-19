// set inicial count
let count = 0;

//selecting value and buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");     /* selecting all butttons (it is in form of node list which is array like but not array. to work on it we will use forEach method) */

btns.forEach(function (btn){                    /* The forEach() method calls a function once for each element in my list, in order. */
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;  /* getting all the classes of the particular button that we have clicked*/ 
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count == 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});