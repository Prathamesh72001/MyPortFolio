import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:lottie/lottie.dart';
import 'package:portfolio/constants/animations.dart';
import 'package:portfolio/constants/strings.dart';
import '../constants/functions.dart';
import '../constants/images.dart';
import '../managers/notification_manager.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final double font_size = size.width < 360
        ? -5
        : size.width < 750
            ? -2.5
            : size.width < 1280
                ? 2.5
                : 5;
    return Container(
      padding: const EdgeInsets.only(left: 25,right: 25,bottom: 10),
      height: size.height-60,
      width: size.width,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: CommonFunctions().getIsAndroid() ||
                CommonFunctions().getIsIPhone() ||
                size.width < 750
            ? MainAxisAlignment.spaceEvenly
            : MainAxisAlignment.spaceBetween,
        children: [
          SizedBox(
            height: size.height-140,
            width: size.width,
            child: SingleChildScrollView(
              child: SizedBox(
                height: size.height-140,
                width: size.width,
                child: Column(
      mainAxisSize: MainAxisSize.min ,
        children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              Strings.hi_text,
                              style: GoogleFonts.baloo2(
                                textStyle: TextStyle(
                                    fontSize: 18 + font_size,
                                    color: Colors.deepOrange[900],
                                    fontWeight: FontWeight.w700,
                                    fontFamily: 'baloo2'),
                              ),
                            ),
                            SizedBox(
                              width: CommonFunctions().getIsAndroid() ||
                                      CommonFunctions().getIsIPhone() ||
                                      size.width < 750
                                  ? size.width - 50
                                  : size.width / 2,
                              child: Text(
                                Strings.name,
                                style: GoogleFonts.baloo2(
                                  textStyle: TextStyle(
                                      fontSize: 30 + font_size,
                                      color: Colors.red[900],
                                      fontWeight: FontWeight.w900,
                                      fontFamily: 'baloo2'),
                                ),
                              ),
                            ),
                            SizedBox(
                              width: CommonFunctions().getIsAndroid() ||
                                      CommonFunctions().getIsIPhone() ||
                                      size.width < 750
                                  ? size.width - 50
                                  : size.width / 2,
                              child: Text(
                                Strings.build_text,
                                overflow: TextOverflow.clip,
                                style: GoogleFonts.baloo2(
                                  textStyle: TextStyle(
                                    fontSize: 18 + font_size,
                                    wordSpacing: 0,
                                    color: Colors.deepOrange[900],
                                    fontWeight: FontWeight.w700,
                                    fontFamily: 'baloo2',
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                        CommonFunctions().getIsAndroid() ||
                                CommonFunctions().getIsIPhone() ||
                                size.width < 750
                            ? const SizedBox()
                            : Container(
                                constraints:const BoxConstraints(
                                  minHeight: 500,
                                ),
                                height: size.height - 180,
                                width: (size.width / 2) - 50,
                                child: LottieBuilder.asset(Animations.home))
                      ],
                    ),
                    CommonFunctions().getIsAndroid() ||
                            CommonFunctions().getIsIPhone() ||
                            size.width < 750
                        ? Expanded(
                          child: Container(
                              constraints:const BoxConstraints(
                                minHeight: 300,
                              ),
                              height: (size.height / 2) - 180,
                              width: size.width,
                              child: LottieBuilder.asset(Animations.home)),
                        )
                        : const SizedBox(),
                  ],
                ),
              ),
            ),
          ),
          SizedBox(
            width: size.width - 25,
            height: 50 + font_size,
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                OutlinedButton(
                  onPressed: () {
                    NotificationCenterManager.notificationManager
                        .notify("screen_index", 3);
                  },
                  style: OutlinedButton.styleFrom(
                      padding: const EdgeInsets.all(15),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(15)),
                      side: BorderSide(color: Colors.deepOrange[900]!, width: 3)),
                  child: Center(
                    child: Text(
                      Strings.get_in_touch,
                      style: GoogleFonts.baloo2(
                        textStyle: TextStyle(
                            fontSize: 18 + font_size,
                            color: Colors.deepOrange[900],
                            fontWeight: FontWeight.bold,
                            fontFamily: 'baloo2'),
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    InkWell(
                      onTap: () {
                        CommonFunctions().launchCurrentUrl(
                            Strings.Facebook_link);
                      },
                      child: Image.asset(
                        Images.facebook,
                        height: 40 + font_size,
                        width: 40 + font_size,
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 8.0),
                      child: InkWell(
                        onTap: () {
                          CommonFunctions().launchCurrentUrl(
                              Strings.Linkedin_link);
                        },
                        child: Image.asset(
                          Images.linkedin,
                          height: 40 + font_size,
                          width: 40 + font_size,
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 8.0),
                      child: InkWell(
                        onTap: () {
                          CommonFunctions().launchEmailSubmission();
                        },
                        child: Image.asset(
                          Images.gmail,
                          height: 40 + font_size,
                          width: 40 + font_size,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
