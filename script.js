const inputs = document.querySelectorAll('.controls input');

function varUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', varUpdate));
inputs.forEach(input => input.addEventListener('mousemove', varUpdate));
