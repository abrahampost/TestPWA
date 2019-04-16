(() => {
    let app = {
        a: document.querySelector('#a'),
        b: document.querySelector('#b'),
        c: document.querySelector('#c'),
        calculate: document.querySelector('#calculate'),
        answer: document.querySelector('#answer')
    };

    app.calculate.addEventListener('click', (e) => {
        calculateZeroes();
    });

    function calculateZeroes() {
        console.log("Calculating zeroes");
        const a = app.a.value;
        const b = app.b.value;
        const c = app.c.value;

        if (!a || !b || !c) {
            app.answer.textContent = 'undefined variable';
            return;
        }

        const determinant = b * b - 4 * a * c;
        if (determinant < 0) {
            //an imaginary root
            app.answer.textContent = 'result is undefined';
            return;
        }
        
        let rootOne = (-b + Math.sqrt(determinant)) / (2 * a);
        let rootTwo = (-b - Math.sqrt(determinant)) / (2 * a);
        if (rootOne === rootTwo) {
            //if there is just one root
            app.answer.textContent = rootOne;
        } else {
            app.answer.textContent = rootTwo + ", " + rootOne;
        }
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(console.log('Service worker registered'));
    }
})();
