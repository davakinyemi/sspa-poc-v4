function showWhenAnyOf(routes) {
    return function () {
        return routes.some((route) => window.location.pathname === route);
    }
}

function showWhenPrefix(routes) {
    return function (location) {
        return routes.some((route) => location.pathname.startsWith(route));
    };
}

function showExcept(routes) {
    return function (location) {
        return routes.every((route) => location.pathname !== route);
    };
}

export {
    showWhenAnyOf,
    showWhenPrefix,
    showExcept
};