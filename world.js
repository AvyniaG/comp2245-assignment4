window.onload = function () {
    document.getElementById('lookup').addEventListener('click', function () {
        const country = document.getElementById('country').value;
        fetch('world.php?country=' + encodeURIComponent(country))
            .then(res => res.text())
            .then(data => document.getElementById('result').innerHTML = data);
    });

    document.getElementById('lookup-cities').addEventListener('click', function () {
        const country = document.getElementById('country').value;
        fetch('world.php?country=' + encodeURIComponent(country) + '&lookup=cities')
            .then(res => res.text())
            .then(data => document.getElementById('result').innerHTML = data);
    });
}
