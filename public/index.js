async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    const response = await fetch('http://localhost:9001/counter',{
        method: 'PATCH',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            "value": 11
        })
    })

    const result = await response.json();

    let countValue = result.value;


    async function patchCounter() {
        countContainer.textContent = countValue;
        await fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "value": countValue
            })
        })
    }
    
    async function increment(){
        countValue++;
        await patchCounter()
    }

    async function decrement(){
        countValue--;
        await patchCounter()
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()

