import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/widgets/project_widget.dart';

import '../constants/images.dart';
import '../constants/strings.dart';

class ExperiencePage extends StatefulWidget {
  const ExperiencePage({Key? key}) : super(key: key);

  @override
  State<ExperiencePage> createState() => _ExperiencePageState();
}

class _ExperiencePageState extends State<ExperiencePage> {
  final List _titles = [
    Strings.iTap,
    Strings.jyppzer,
    Strings.canvia,
    Strings.classmate,
    Strings.groccer_basket,
    Strings.adventure_time
  ];

  final List _descriptions = [
    Strings.iTap_desc,
    Strings.jyppzer_desc,
    Strings.canvia_desc,
    Strings.classmate_desc,
    Strings.groccer_basket_desc,
    Strings.adventure_time_desc
  ];

  final List<String> _links = [
    Strings.iTap_link,
    Strings.jyppzer_link,
    Strings.canvia_link,
    "",
    Strings.groccer_basket_link,
    Strings.adventure_time_link
  ];

  final List<String> _images = [
    Images.itap,
    Images.jyppzer,
    Images.canvia,
    Images.classmates,
    Images.groccerbasket,
    Images.adventuretime
  ];

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
      height: size.height-60,
      width: size.width,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Container(
            padding: const EdgeInsets.only(left: 25,right: 25,bottom: 10),
            child: Text(
              Strings.my_projects,
              style: GoogleFonts.baloo2(
                textStyle: TextStyle(
                    fontSize: 30 + font_size,
                    color: Colors.red[900],
                    fontWeight: FontWeight.bold,
                    fontFamily: 'baloo2'),
              ),
            ),
          ),
          Expanded(
            child: ListView.builder(itemCount: 6,
                itemBuilder: (BuildContext context, int index) {
                  return ProjectTile(title: _titles[index], description: _descriptions[index],links: _links[index].split(","),image: _images[index],);}),
          )
        ],
      ),
    );
  }
}
