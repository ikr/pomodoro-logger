module("Test harness")

test("The GUI container element exists in the test harness", function() {
    equals($("#testContainer").size(), 1);
});

test("The GUI container in the test harness is invisible", function() {
    equals($("#testContainer").css("display"), "none");
});

//==================================================================================================

module(
    "GUI",
    {
        setup: function() {
            $('#testContainer').empty();
            pomodoroLoggerApplication($).init("#testContainer");
        }
    }
);

test("HTML GUI application version is defined", function() {
    equals(typeof pomodoroLoggerApplication($).version, "string", "Application version is a string");
    ok(pomodoroLoggerApplication($).version.length > 0, "Application version string isn't empty");
});

test("On init adds a button to the specified container", function() {
    equals($("#testContainer > button").size(), 1);
});

test("\"Done\" button has a label", function() {
    equals($("#testContainer > button").html(), "Done");
});

test("\"Done\" button has the correct type", function() {
    equals($("#testContainer > button").attr("type"), "button");
});

test("On init adds the check marks' div", function() {
    equals($("#testContainer > #checkMarks").size(), 1);
    ok($("#testContainer > #checkMarks").is("div"));
});

test("On init adds the last mark time div", function() {
    equals($("#testContainer > #lastMarkTime").size(), 1);
    ok($("#testContainer > #lastMarkTime").is("div"));
});

test("Clicking Done adds a check mark", function() {
    $("#testContainer > button").trigger("click");
    equals($("#checkMarks").html(), "x");
});
