function filterByTeam() {
    let searchBox = document.getElementById('searchBox');
    let searchText = searchBox.value.toLowerCase();

    let tables = document.querySelectorAll('.afcSchedule');
    tables.forEach(function(table) {
        let rows = table.querySelectorAll('tbody tr');
        let hasMatchingRow = false;

        rows.forEach(function(row) {
            let teamNameCell = row.querySelector('td:first-child');
            if (teamNameCell) {
                let teamName = teamNameCell.textContent.toLowerCase();
                if (teamName.includes(searchText)) {
                    row.style.display = 'table-row';
                    hasMatchingRow = true;
                } else {
                    row.style.display = 'none';
                }
            }
        });

        if (hasMatchingRow) {
            table.style.display = 'table';
        } else {
            table.style.display = 'none';
        }
    });
}

function filterByGroup() {
    let select_groups = document.querySelector('.select_groups');
    let selectedGroup = select_groups.value.toLowerCase();

    // Loop through each match group and hide/show based on the selected group
    let matchGroups = document.querySelectorAll('table[id$="matches"]');
    matchGroups.forEach(function (matchGroup) {
        if (selectedGroup === '' || matchGroup.id.toLowerCase() === 'grp' + selectedGroup + 'matches') {
            matchGroup.style.display = 'table';
        } else {
            matchGroup.style.display = 'none';
        }
    });
}
