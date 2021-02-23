document.getElementById('btn').addEventListener('click', function() {
    let delay = Math.floor(Math.random() * 2 + 1) * 1000;
        
        document.getElementById('animation').classList.remove('hidden');
        document.getElementById('animation').classList.add('visible');
        //comment
    setTimeout(() => {
        let billInput = document.getElementById('bill');
        let bill = parseInt(billInput.value);
        
        let splitInput = document.getElementById('split');
        let split = parseInt(splitInput.value);
       //comment
        let tipInput = document.getElementById('tip');
        let tip = parseInt(tipInput.value);
        
        let tipDisplay = bill * tip / 100;
        
        let totalDisplay = bill + tipDisplay;
        
        let perPersonDisplay = totalDisplay / split;
        
        document.getElementById('animation').classList.remove('visible');
        document.getElementById('animation').classList.add('hidden');
        document.getElementById('tip-display').innerHTML = tipDisplay;
        document.getElementById('total-display').innerHTML = totalDisplay;
        document.getElementById('per-person-display').innerHTML = perPersonDisplay;
        document.getElementById('display-info').classList.remove('hidden');
        document.getElementById('display-info').classList.add('visible');
    }, delay);
} )
    
    

    
        
    
    
    
    
    
    


