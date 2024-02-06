document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('[data-dropdown-button]');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdown = this.closest('[data-dropdown]');
            dropdown.classList.toggle('active');
        });
    });

    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
    dropdownMenus.forEach(menu => {
        const dropdownItems = menu.querySelectorAll('li');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function() {
                const dropdown = this.closest('[data-dropdown]');
                const dropdownButton = dropdown.querySelector('[data-dropdown-button] a');
                dropdownItems.forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
                dropdownButton.textContent = this.textContent;
                dropdown.classList.remove('active');
            });
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('[data-dropdown]')) {
            document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

