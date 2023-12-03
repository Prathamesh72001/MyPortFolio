import 'package:notification_center/notification_center.dart';

class NotificationCenterManager {
  static var notificationManager = NotificationCenterManager();
  static final NotificationCenterManager _instance =
      NotificationCenterManager._internal();
  factory NotificationCenterManager() {
    return _instance;
  }
  NotificationCenterManager._internal();
  void subscribe(String notificationName, Function(dynamic) callback) {
    NotificationCenter().subscribe(notificationName, callback);
  }

  void notify(String notificationName, dynamic data) {
    NotificationCenter().notify(notificationName, data: data);
  }

  void unsubscribe(String notificationName) {
    NotificationCenter().unsubscribe(notificationName);
  }
}
