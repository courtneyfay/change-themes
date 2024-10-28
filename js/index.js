const changeTheme = () => {
    // set up variables
    const heading = document.getElementById('heading');
    const octoberIsChecked = document.getElementById('october').checked;
    const novemberIsChecked = document.getElementById('november').checked;

    // display whichever theme the user chose
    if (octoberIsChecked) {
        heading.className = 'october';
    } else if (novemberIsChecked) {
        heading.className = 'november';
    } else {
        heading.className = 'default';
    }
}