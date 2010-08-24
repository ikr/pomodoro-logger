var pomodoroLoggerApplication = function($, clock) {
    return {
        version: "0.0.1",
        
        init: function(containerSelector) {
            appendGuiContent(containerSelector);
            bindDoneButtonClickHandler();
        }
    }
    
    function appendGuiContent(containerSelector) {
        $(containerSelector).append('<div id="checkMarks"/>');
        $(containerSelector).append('<div>Total: <span id="totalCount">0</span></div>');
        $(containerSelector).append('<div>Last: <span id="lastMarkTime"></span></div>');
        $(containerSelector).append('<button id="doneButton" type="button">Done</button>');
    }
    
    function bindDoneButtonClickHandler() {
        $("#doneButton").click(function() {
            $("#checkMarks").append("x");
            incrementElementInnerValue("#totalCount");
            $("#lastMarkTime").empty().append(theClock().now());
        });
    }
    
    function incrementElementInnerValue(elementSelector) {
        var currentValue = parseInt($(elementSelector).html());
        $(elementSelector).empty();
        $(elementSelector).append(currentValue + 1);
    }
    
    function theClock() {
        if ('undefined' === typeof clock) return {
            now: function() {
                return (new Date()).toTimeString();
            }
        }
        
        return clock;
    }
}