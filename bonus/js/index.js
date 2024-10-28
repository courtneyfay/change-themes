const changeTheme = () => {
    // set up variables
    const heading = document.getElementById('heading');
    const septemberIsChecked = document.getElementById('september').checked;
    const octoberIsChecked = document.getElementById('october').checked;
    const novemberIsChecked = document.getElementById('november').checked;
    const decemberIsChecked = document.getElementById('december').checked;

    // display whichever theme the user chose
    if (septemberIsChecked) {
        heading.className = 'september';
    } else if (octoberIsChecked) {
        heading.className = 'october';
    } else if (novemberIsChecked) {
        heading.className = 'november';
    } else if (decemberIsChecked) {
        heading.className = 'december';
    } else {
        heading.className = 'default';
    }
}