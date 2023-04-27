function localStorageCheck(name, defaultValue) {
    const value = localStorage.getItem(name);
    if (!value) {
        localStorage.setItem(name, defaultValue);
        return defaultValue;
    }
    return parseInt(value);
}

function setupLocalStorage() {
    localStorageCheck("exp", 0);
    localStorageCheck("level", 1);
    localStorageCheck("maxExp", 5);

    localStorageCheck("linkedin-exp", 1);
    localStorageCheck("twitter-exp", 1);
    localStorageCheck("facebook-exp", 1);
    localStorageCheck("github-exp", 3);
    localStorageCheck("resume-exp", 10);
    localStorageCheck("church-conference-exp", 8);
    localStorageCheck("church-target-exp", 3);
    localStorageCheck("church-react-exp", 3);
    localStorageCheck("church-javascript-exp", 3);
    localStorageCheck("velaflame-flutter-exp", 5)
    localStorageCheck("velaflame-rainmaker-exp", 6)
    localStorageCheck("velaflame-dart-exp", 5)
    localStorageCheck("broadcasting-vuejs-exp", 3);
    localStorageCheck("broadcasting-node-exp", 5);
    localStorageCheck("broadcasting-docker-exp", 7);
    localStorageCheck("ls-vuejs-exp", 13);
    localStorageCheck("ls-dotnet-exp", 13);
    localStorageCheck("ls-mysql-exp", 13);
    localStorageCheck("z-vuejs-exp", 20);
    localStorageCheck("z-electron-exp", 20);
    localStorageCheck("z-javascript-exp", 20);
    localStorageCheck("lyceum-exp", 25)
    localStorageCheck("lyceum-facebook-exp", 25)
}

export default setupLocalStorage;