window.onload = function() {

    const lookupButton = document.getElementById('lookup');

    lookupButton.addEventListener('click', function() {
        const country = document.getElementById('country').value;

        fetch('world.php?country=' + encodeURIComponent(country))
            .then(response => response.text())
            .then(data => {
                document.getElementById('result').innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
        });

}