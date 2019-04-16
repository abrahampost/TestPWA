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

    // This is the "Offline copy of pages" service worker

    // Check compatibility for the browser we're running this in
    if ("serviceWorker" in navigator) {
        if (navigator.serviceWorker.controller) {
            console.log("[ServiceWorker] active service worker found, no need to register");
        } else {
            // Register the service worker
            navigator.serviceWorker
                .register("service-worker.js", {
                    scope: "./"
                })
                .then(function (reg) {
                    console.log("[ServiceWorker] Service worker has been registered for scope: " + reg.scope);
                });
        }
    }

})();
