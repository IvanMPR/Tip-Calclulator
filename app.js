document.getElementById('btn').addEventListener('click', function() {
    let delay = Math.floor(Math.random() * 2 + 1) * 1000;
        
        document.getElementById('animation').classList.remove('hidden');
        document.getElementById('animation').classList.add('visible');
    
    setTimeout(() => {
        let billInput = document.getElementById('bill');
        let bill = parseInt(billInput.value);
        let splitInput = document.getElementById('split');
        let split = parseInt(splitInput.value);
        let tipInput = document.getElementById('tip');
        var tip = parseInt(tipInput.value);
        var tipDisplay = bill * tip / 100;
        var totalDisplay = bill + tipDisplay;
        var perPersonDisplay = totalDisplay / split;
        document.getElementById('animation').classList.remove('visible');
        document.getElementById('animation').classList.add('hidden');
        document.getElementById('tip-display').innerHTML = tipDisplay;
        document.getElementById('total-display').innerHTML = totalDisplay;
        document.getElementById('per-person-display').innerHTML = perPersonDisplay;
        document.getElementById('display-info').classList.remove('hidden');
        document.getElementById('display-info').classList.add('visible');
    }, delay);
} )
    
    

    
        
    
    
    
    
    
    


