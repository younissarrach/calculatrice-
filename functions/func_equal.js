equal.addEventListener('click', function() {
    const data = display.value;
    display.value = '';
    let t = []
    for (let i = 0; i < data.length; i++) {
        t.push(data[i])
    }
    let k = 0;
    let j = []
    let trouveItANumber = true
    for (let i = 0; i < t.length; i++) {
        if (t[i] !== '+' && t[i] !== '-' && t[i] !== '*' && t[i] !== '/') {
            if (trouveItANumber === true) {
                if (i === 0) {
                    console.log(k);
                    j[k] = Number(t[i])
                } else {
                    console.log(k - 1);
                    let x = j[k - 1]
                    k = k - 1
                    j[k] = Number(x + '' + t[i])
                }

                trouveItANumber = true
                k++
            } else {
                k++
                j[k] = Number(t[i])
                trouveItANumber = false
            }

        } else {
            k++
            trouveItANumber = false;
            j[k] = t[i]
        }
    }
    console.log(j);
});