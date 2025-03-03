const allButton = document.querySelectorAll('.completed-btn');
let compleateTaskCount = 0;
for (const button of allButton) {
    button.addEventListener('click', function () {
        const taskElement = document.getElementById('task');
        const checkoutElement = document.getElementById('checkbox-number'); 
        
       
        button.disabled = true;
        button.style.opacity = 0.5;

        let taskCount = getTextValueById('task');
        let checkoutCount = getTextValueById('checkbox-number');

        if (taskCount > 0) {
            alert('Board Updated Successfully');
            taskElement.innerText = taskCount - 1;
            checkoutElement.innerText = checkoutCount + 1;
            
        
            const parentCard = button.closest('.card');
            const heading = parentCard.querySelector('.item');

            if (heading) {
                const activity = document.getElementById('activity-log-container');
                const newItem = document.createElement('p');
                newItem.innerHTML = `<h4>You have completed the task:</h4>   ${heading.innerText}`;
                
                newItem.style.padding = '10px'
                activity.appendChild(newItem);
                const currentTime = getCurrentTime();

                newItem.innerHTML = `<h4>You have completed the task:</h4> ${heading.innerText} at: ${currentTime}`;
                activity.appendChild(newItem);
                compleateTaskCount++;
            }
        }

        if(compleateTaskCount===6){
            alert('Congratulations! You have unlocked all the cards');
        }
    });
}

const activityButton = document.getElementById('activity-btn').addEventListener('click', function(){
    const activityContainer = document.getElementById('activity-log-container');
    activityContainer.innerHTML = ''; 
})


document.getElementById('discover-new-today').addEventListener('click', function(){
    window.location.href = './faq.html'
})


