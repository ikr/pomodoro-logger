module("Meta: test harness itself")

test("The GUI container element exists in the test harness", function() {
    equals($("#testContainer").size(), 1);
});

test("The GUI container in the test harness is invisible", function() {
    equals($("#testContainer").css("display"), "none");
});

//==================================================================================================

module(
    "GUI basics",
    {
        setup: function() {
            $('#testContainer').empty();
            pomodoroLoggerApplication($, theTimeIsNowClock()).init("#testContainer");
        }
    }
);

test("HTML GUI application version is defined", function() {
    equals(
        typeof pomodoroLoggerApplication($, theTimeIsNowClock()).version,
        "string",
        "Application version is a string"
    );
    
    ok(
        pomodoroLoggerApplication($, theTimeIsNowClock()).version.length > 0,
        "Application version string isn't empty"
    );
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

test("On init adds an empty last mark time span", function() {
    equals($("#testContainer #lastMarkTime").size(), 1);
    ok($("#testContainer #lastMarkTime").is("span"), "Timestamp must be in a span");
    equals($("#testContainer #lastMarkTime").html(), "");
});

test("Clicking Done adds a check mark", function() {
    $("#testContainer > button").trigger("click");
    equals($("#checkMarks").html(), "x");
    
    $("#testContainer > button").trigger("click");
    equals($("#checkMarks").html(), "xx");
});

test("Initial total count is zero", function() {
    equals($("#testContainer #totalCount").html(), "0");
});

test("Clicking Done increments the total count", function() {
    $("#testContainer > button").trigger("click");
    equals($("#totalCount").html(), "1");
    
    $("#testContainer > button").trigger("click");
    equals($("#totalCount").html(), "2");
});

//==================================================================================================

module(
    "GUI timing",
    {
        setup: function() {
            $('#testContainer').empty();
        }
    }
);

test("On Done click the current timestamp is printed", function() {
    pomodoroLoggerApplication($, theTimeIsNowClock()).init("#testContainer");
    
    $("#testContainer > button").trigger("click");
    
    equals($("#lastMarkTime").html(), "The time is now");
});

test("Done click handling works without explicit clock passed", function() {
    pomodoroLoggerApplication($).init("#testContainer");
    $("#testContainer > button").trigger("click");
    ok($("#lastMarkTime").html().length > 0, "Timestamp must be not empty");
});

//==================================================================================================

function theTimeIsNowClock() {
    return {
        now: function() { return "The time is now"; }
    };
}