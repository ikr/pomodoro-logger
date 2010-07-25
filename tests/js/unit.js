test("HTML GUI application version is defined", function() {
    equals(typeof pomodoroLoggerApplication.version, "string", "Application version is a string");
    ok(pomodoroLoggerApplication.version.length > 0, "Application version string isn't empty");
});