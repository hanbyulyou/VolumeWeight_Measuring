document.addEventListener("DOMContentLoaded", function() {

    const resultButton = document.querySelector('.result_button');
    const resetButton = document.querySelector('.reset_button');

    resultButton.addEventListener('click', function() {
        calculateVolumeWeight();
    })

    resetButton.addEventListener('click', function() {
        resetInputs();
    });

    document.querySelectorAll('.measure input').forEach(function(input) {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                resultButton.click();
            }
        });
    });

    function calculateVolumeWeight() {
        const width = parseFloat(document.querySelector('.width_input').value);
        const length = parseFloat(document.querySelector('.length_input').value);
        const height = parseFloat(document.querySelector('.height_input').value);

        if (!isNaN(width) && !isNaN(length) && !isNaN(height)) {
            const volumeWeight = (width * length * height) / 5000;
            document.querySelector('.result_all').value = volumeWeight.toFixed(4);
        } else {
            alert("가로, 세로, 높이를 올바르게 입력하세요.");
        }

    }

    function resetInputs() {
        document.querySelectorAll('.measure input').forEach(function(input) {
            input.value = '';
        });
        document.querySelector('.result_all').value = '';
    }




});