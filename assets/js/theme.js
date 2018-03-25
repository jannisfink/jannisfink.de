var themes = ['default', 'sublime', 'monokai', 'eclipse', 'solarized-light'];

restoreThemeFromLocalStorage();

(function (){
    var sel = createSelect();
    createEntries(sel);

    sel.addEventListener('change', entrySelected);
})();

function entrySelected(ev) {
    setActiveTheme(ev.target.value);
}

function setActiveTheme(theme) {
    var bodyClassName = 'theme theme--' + theme;
    var body = document.getElementsByTagName('body')[0];
    body.className = bodyClassName;

    localStorage.setItem('theme', theme);
}

function restoreThemeFromLocalStorage() {
    var theme = localStorage.getItem('theme');
    if (theme === null) {
        // theme not yet selected
        return;
    }
    if (themes.indexOf(theme) === -1) {
        // theme does not exist
        localStorage.removeItem('theme');
        return;
    }
    setActiveTheme(theme);
}

function getActiveTheme() {
    var body = document.getElementsByTagName('body')[0];
    var classes = body.className.split(' ');
    var themeClassName = classes.find(function(className) {
        return className.includes('--');
    })
    if (themeClassName !== undefined) {
        return themeClassName.split('--')[1];
    }
    return undefined;
}

function createEntries(sel) {
    themes.forEach(function (theme) {
        entry = document.createElement('option');
        entry.setAttribute('value', theme);
        entry.innerHTML = theme;
        if (theme === getActiveTheme()) {
            entry.selected = true;
        }
        sel.appendChild(entry);
    });
}

/**
 * Create the select tag in js so it display's nothing when JS is disabled
 */
function createSelect() {
    var elem = document.getElementById('theme-select');
    var sel = document.createElement('select');

    elem.appendChild(sel);

    return sel;
}