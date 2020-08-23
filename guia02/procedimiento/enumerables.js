var ROLE;
(function (ROLE) {
    ROLE[ROLE["Employee"] = 5] = "Employee";
    ROLE[ROLE["Manager"] = 4] = "Manager";
    ROLE[ROLE["Admin"] = 2] = "Admin";
    ROLE[ROLE["Developer"] = 1] = "Developer";
})(ROLE || (ROLE = {}));
var role = ROLE.Employee;
console.log(role);
