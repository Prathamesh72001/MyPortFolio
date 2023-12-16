import 'dart:html' as html;

import 'package:url_launcher/url_launcher.dart';

class CommonFunctions{
  getIsAndroid(){
    return RegExp(r'android', caseSensitive: false)
        .hasMatch(html.window.navigator.userAgent);
  }

  getIsIPhone(){
    return RegExp(r'(iPod|iPhone|iPad)',caseSensitive: false)
        .hasMatch(html.window.navigator.userAgent);
  }

  launchCurrentUrl(String? url) async {
    final Uri uri = Uri.parse(url ?? '');
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.inAppWebView);
    } else {
      throw 'Could not launch $url';
    }
  }

  launchEmailSubmission() async {
    final Uri params = Uri(
        scheme: 'mailto',
        path: 'sawardekar38@gmail.com',
        queryParameters: {
          'subject': '',
          'body': ''
        }
    );
    String url = params.toString();
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }
}