var pomodoroLoggerApplication = function($) {
    return {
        version: "0.0.1",
        
        init: function(containerSelector) {
            $(containerSelector).append('<button type="button">Done</button>');
        }
    }
}