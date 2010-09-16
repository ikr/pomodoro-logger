var pomodoroLogger = function () {
    return {
        localClock: {
            now: function () {
                return (new Date()).toTimeString();
            }
        },
        
        application: function($, clock) {
            var appendGuiContent = function(containerSelector) {
                $(containerSelector).append(
                    [
                        '<div class="pomodoroLogger">',
                        '<table>',
                        '<tr><td>Done:</td><td><span id="checkMarks"></span><td></tr>',
                        '<tr><td>Total:</td><td><span id="totalCount">0</span></td></tr>',
                        '<tr><td>Last:</td><td><span id="lastMarkTime"></span></td></tr>',
                        '</table>',
                        '<div id="buttonDiv"><button id="doneButton" type="button">Done</button></div>',
                        '</div>'
                    ].join("\n")
                );
            };
    
            var incrementElementInnerValue = function(elementSelector) {
                var currentValue = parseInt($(elementSelector).html(), 10);
                $(elementSelector).empty();
                $(elementSelector).append(currentValue + 1);
            };
    
            var bindDoneButtonClickHandler = function () {
                $("#doneButton").click(function () {
                    $("#checkMarks").append("x");
                    incrementElementInnerValue("#totalCount");
                    $("#lastMarkTime").empty().append(clock.now());
                });
            };
    
            return {
                version: "0.0.1",
        
                init: function(containerSelector) {
                    appendGuiContent(containerSelector);
                    bindDoneButtonClickHandler();
                }
            };
        }
    };
}();