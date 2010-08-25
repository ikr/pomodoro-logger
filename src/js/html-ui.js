var pomodoroLoggerApplication = function($, clock) {
    var appendGuiContent = function(containerSelector) {
        $(containerSelector).append(
            [
                '<div id="checkMarks"/>',
                '<div>Total: <span id="totalCount">0</span></div>',
                '<div>Last: <span id="lastMarkTime"></span></div>',
                '<button id="doneButton" type="button">Done</button>'
            ].join("\n")
        );
    };
    
    var incrementElementInnerValue = function(elementSelector) {
        var currentValue = parseInt($(elementSelector).html(), 10);
        $(elementSelector).empty();
        $(elementSelector).append(currentValue + 1);
    };
    
    var theClock = function() {
        if ('undefined' === typeof clock) {
            return {
                now: function() {
                    return (new Date()).toTimeString();
                }
            };
        }
        
        return clock;
    };
    
    var bindDoneButtonClickHandler = function() {
        $("#doneButton").click(function() {
            $("#checkMarks").append("x");
            incrementElementInnerValue("#totalCount");
            $("#lastMarkTime").empty().append(theClock().now());
        });
    };
    
    return {
        version: "0.0.1",
        
        init: function(containerSelector) {
            appendGuiContent(containerSelector);
            bindDoneButtonClickHandler();
        }
    };
};