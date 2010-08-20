module("GUI");

test("HTML GUI application version is defined", function() {
    equals(typeof pomodoroLoggerApplication.version, "string", "Application version is a string");
    ok(pomodoroLoggerApplication.version.length > 0, "Application version string isn't empty");
});

test("The GUI container element exists in the test harness", function() {
    equals($('#test_container').size(), 1);
});

test("The GUI container in the test harness is invisible", function() {
    equals($('#test_container').css("display"), "none");
});