import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:lottie/lottie.dart';

import '../constants/animations.dart';
import '../constants/strings.dart';
import '../managers/switch_native_web.dart';
import 'dart:html' as html;

class ResumePage extends StatefulWidget {
  const ResumePage({Key? key}) : super(key: key);

  @override
  State<ResumePage> createState() => _ResumePageState();
}

class _ResumePageState extends State<ResumePage> {

  @override
  void initState() {
    downloadFile("https://www.hostize.com/v/AVvF4Jl7Su/prathamesh-sawardekar-resume-pdf" );
    super.initState();
  }

  void downloadFile(String url) {
   html.AnchorElement anchorElement =  html.AnchorElement(href: url);
   anchorElement.download = url;
   anchorElement.click();
}

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
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Text(
          Strings.thanks,
          textAlign: TextAlign.center,
          style: GoogleFonts.baloo2(
            textStyle: TextStyle(
                fontSize: 40 + font_size,
                color: Colors.red[900],
                fontWeight: FontWeight.w700,
                fontFamily: 'baloo2'),
          ),
        ),
        Expanded(
          child: Container(
              child: LottieBuilder.asset(Animations.resume)),
        ),
      ],
    ),);
  }
}
