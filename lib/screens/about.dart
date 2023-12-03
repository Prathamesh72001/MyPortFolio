import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../constants/functions.dart';
import '../constants/images.dart';
import '../constants/strings.dart';

class AboutPage extends StatefulWidget {
  const AboutPage({Key? key}) : super(key: key);

  @override
  State<AboutPage> createState() => _AboutPageState();
}

class _AboutPageState extends State<AboutPage> {
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
      child: SingleChildScrollView(
        child: Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Container(
                padding: const EdgeInsets.only(left: 25,right: 25,bottom: 10),
                child: Text(
                  Strings.about,
                  style: GoogleFonts.baloo2(
                    textStyle: TextStyle(
                        fontSize: 30 + font_size,
                        color: Colors.red[900],
                        fontWeight: FontWeight.bold,
                        fontFamily: 'baloo2'),
                  ),
                ),
              ),
              Container(
                    constraints:const BoxConstraints(
                      minHeight: 150,
                      maxHeight: 250
                    ),
                    height: size.height / 2,
                    width: size.width,
                    decoration:const BoxDecoration(
                        image: DecorationImage(image: AssetImage(Images.profile)),
                        shape: BoxShape.circle
                    ),),
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
                              fontSize: 15 + font_size,
                              color: Colors.deepOrange[900],
                              fontWeight: FontWeight.w700,
                              fontFamily: 'baloo2'),
                        ),
                      ),
                      SizedBox(
                        width:size.width - 50,
                        child: Text(
                          Strings.name,
                          style: GoogleFonts.baloo2(
                            textStyle: TextStyle(
                                fontSize: 25 + font_size,
                                color: Colors.red[900],
                                fontWeight: FontWeight.w900,
                                fontFamily: 'baloo2'),
                          ),
                        ),
                      ),
                      SizedBox(
                        width:size.width - 50,
                        child: Text(
                          Strings.about_text,
                          overflow: TextOverflow.clip,
                          style: GoogleFonts.baloo2(
                            textStyle: TextStyle(
                              fontSize: 15 + font_size,
                              wordSpacing: 0,
                              color: Colors.deepOrange[900],
                              fontWeight: FontWeight.w700,
                              fontFamily: 'baloo2',
                            ),
                          ),
                        ),
                      )
                    ],
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
