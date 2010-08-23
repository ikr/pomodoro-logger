var pomodoroLoggerApplication = function($) {
    function appendGuiContent(containerSelector) {
        $(containerSelector).append('<div id="checkMarks"/>');
        $(containerSelector).append('<div id="lastMarkTime"/>');
        $(containerSelector).append('<button id="doneButton" type="button">Done</button>');
    }
    
    function bindDoneButtonClickHandler() {
        
    }
    
    return {
        version: "0.0.1",
        
        init: function(containerSelector) {
            appendGuiContent(containerSelector);
            bindDoneButtonClickHandler();
        }
    }
}