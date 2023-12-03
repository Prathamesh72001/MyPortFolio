import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../constants/functions.dart';
import '../constants/images.dart';
import '../constants/strings.dart';

class ProjectTile extends StatefulWidget {
  final String title;
  final String description;
  final String image;
  final List<String> links;

  const ProjectTile(
      {Key? key,
      required this.title,
      required this.description,
      required this.image,
      required this.links})
      : super(key: key);

  @override
  State<ProjectTile> createState() => _ProjectTileState();
}

class _ProjectTileState extends State<ProjectTile> {
  @override
  void initState() {
    super.initState();
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
      padding: const EdgeInsets.only(left: 25, right: 25, bottom: 10),
      width: size.width - 50,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Text(
            widget.title,
            style: GoogleFonts.baloo2(
              textStyle: TextStyle(
                  fontSize: 25 + font_size,
                  color: Colors.red[900],
                  fontWeight: FontWeight.bold,
                  fontFamily: 'baloo2'),
            ),
          ),
          const SizedBox(
            height: 10,
          ),
          Text(
            widget.description,
            style: GoogleFonts.baloo2(
              textStyle: TextStyle(
                  fontSize: 15 + font_size,
                  color: Colors.deepOrange[900],
                  fontWeight: FontWeight.w700,
                  fontFamily: 'baloo2'),
            ),
          ),
          const SizedBox(
            height: 25,
          ),
          Container(
            constraints: const BoxConstraints(
                minHeight: 150, maxHeight: 300, minWidth: 150, maxWidth: 300),
            width: size.width,
            decoration:const BoxDecoration(
                color: Colors.white),
            child: Image.asset(widget.image,fit: BoxFit.fill,),
          ),
          const SizedBox(
            height: 10,
          ),
          Container(
            height: 50,
            child: ListView.builder(
                itemCount: widget.links.length,
                scrollDirection: Axis.horizontal,
                itemBuilder: (BuildContext context, int index) {
                  return widget.links[index] == ""
                      ? const SizedBox()
                      : Padding(
                          padding: const EdgeInsets.only(left: 8.0),
                          child: InkWell(
                            onTap: () {
                              CommonFunctions()
                                  .launchCurrentUrl(widget.links[index]);
                            },
                            child: Image.asset(
                              widget.links[index].contains("play.google.com")
                                  ? Images.google_play
                                  : widget.links[index]
                                          .contains("apps.apple.com")
                                      ? Images.apple
                                      : widget.links[index]
                                              .contains("github.com")
                                          ? Images.github
                                          : Images.google,
                              height: 40 + font_size,
                              width: 40 + font_size,
                            ),
                          ),
                        );
                }),
          )
        ],
      ),
    );
  }
}
