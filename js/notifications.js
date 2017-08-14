/**
 * Created by yos on 13/08/17.
 */

function sendNotificate(msg, body){
    if (body) {
        var options = {
            body: body
        };
    }
    var notification = Notification || mozNotification ||webkitNotification;
    if (typeof notification === 'undefined') {
        alert("Notifications not supported");
    } else {
        notification.requestPermission(function(permission){
            if (Notification.permission === 'granted'){
                new Notification(msg, options);
            }
        })
    }
}