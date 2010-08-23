module("Test harness")

test("The GUI container element exists in the test harness", function() {
    equals($("#test_container").size(), 1);
});

//--------------------------------------------------------------------------------------------------

test("The GUI container in the test harness is invisible", function() {
    equals($("#test_container").css("display"), "none");
});

//==================================================================================================

module(
    "GUI",
    {
        setup: function() {
            $('#test_container').empty();
            pomodoroLoggerApplication($).init("#test_container");
        }
    }
);

test("HTML GUI application version is defined", function() {
    equals(typeof pomodoroLoggerApplication($).version, "string", "Application version is a string");
    ok(pomodoroLoggerApplication($).version.length > 0, "Application version string isn't empty");
});

//--------------------------------------------------------------------------------------------------

test("On init adds a button to the specified container", function() {
    equals($("#test_container > button").size(), 1);
});

test("\"Done\" button has a label", function() {
    equals($("#test_container > button").html(), "Done");
});

test("\"Done\" button has the correct type", function() {
    equals($("#test_container > button").attr("type"), "button");
});

//==================================================================================================

