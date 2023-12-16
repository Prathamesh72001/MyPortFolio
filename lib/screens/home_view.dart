import 'dart:ui';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/constants/colors.dart';
import 'package:portfolio/constants/strings.dart';
import 'package:portfolio/screens/about.dart';
import 'package:portfolio/screens/contact.dart';
import 'package:portfolio/screens/experience.dart';
import 'package:portfolio/screens/home.dart';
import 'package:portfolio/screens/resume.dart';
import 'package:portfolio/constants/functions.dart';

import '../constants/images.dart';
import '../managers/notification_manager.dart';

class HomeView extends StatefulWidget {
  const HomeView({Key? key}) : super(key: key);

  @override
  State<HomeView> createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView>
    with SingleTickerProviderStateMixin {
  int _currentIndex = 0;
  TabController? _controller;
  final List<Widget> _children = [
    const HomePage(),
    const AboutPage(),
    const ExperiencePage(),
    const ContactPage(),
    const ResumePage()
  ];

  final List _selectedLabelColor = [
    Colors.lightBlueAccent,
    Colors.pinkAccent,
    Colors.yellow[900],
    Colors.green,
    Colors.indigoAccent
  ];

  @override
  void initState() {
    _controller = TabController(length: 5, vsync: this);
    _controller?.addListener(onTabChange);
    NotificationCenterManager.notificationManager.subscribe("screen_index",
        (p0) {
          print(p0);
      if (p0 != null && mounted) {
        onDrawerItemClick(p0);
      }
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return DefaultTabController(
      length: 5,
      child: Stack(
        children: [
          Container(
            width: size.width,
            height: size.height,
            decoration: const BoxDecoration(
                image: DecorationImage(
                    image: AssetImage(Images.background), fit: BoxFit.fill)),
          ),
          Scaffold(
              backgroundColor: Colors.transparent,
              extendBody: true,
              body: Container(
                child: _children[_currentIndex],
              ),
              appBar: CommonFunctions().getIsAndroid() ||
                      CommonFunctions().getIsIPhone() ||
                      size.width < 750
                  ? AppBar(
                      backgroundColor: Colors.transparent,
                      toolbarHeight: kToolbarHeight,
                      elevation: 0,
                    )
                  : AppBar(
                      elevation: 0,
                      shadowColor: Colors.transparent,
                      backgroundColor: Colors.transparent,
                      toolbarHeight: 70,
                      bottom: PreferredSize(
                        preferredSize: const Size.fromHeight(0),
                        child: Container(
                          padding: const EdgeInsets.only(
                              left: 10, right: 10, bottom: 10),
                          width: size.width,
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Row(
                                children: [
                                  Padding(
                                    padding: const EdgeInsets.only(left: 8.0),
                                    child: Image.asset(
                                      Images.android,
                                      height: 50,
                                      width: 50,
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.only(
                                        left: 8.0, right: 8.0),
                                    child: Image.asset(
                                      Images.flutter,
                                      height: 50,
                                      width: 50,
                                    ),
                                  ),
                                ],
                              ),
                              SizedBox(
                                width: 600,
                                child: TabBar(
                                    controller: _controller,
                                    splashFactory: NoSplash.splashFactory,
                                    splashBorderRadius:
                                        BorderRadius.circular(15),
                                    indicator: BoxDecoration(
                                        color: Colors.deepOrange[900],
                                        borderRadius:
                                            BorderRadius.circular(15)),
                                    labelColor: Colors.white,
                                    indicatorColor: Colors.transparent,
                                    unselectedLabelColor: Colors.white,
                                    tabs: [
                                      Strings.home,
                                      Strings.about,
                                      Strings.experience,
                                      Strings.contact,
                                      Strings.resume
                                    ]
                                        .map((text) => Tab(
                                              child: Align(
                                                  alignment: Alignment.center,
                                                  child: Text(
                                                    text,
                                                    style: GoogleFonts.baloo2(
                                                      textStyle:
                                                          const TextStyle(
                                                              fontSize: 16,
                                                              fontWeight:
                                                                  FontWeight
                                                                      .bold,
                                                              fontFamily:
                                                                  'baloo2'),
                                                    ),
                                                  )),
                                            ))
                                        .toList()),
                              )
                            ],
                          ),
                        ),
                      ),
                    ),
              drawer: CommonFunctions().getIsAndroid() ||
                      CommonFunctions().getIsIPhone() ||
                      size.width < 750
                  ? Drawer(
                      child: ListView(
                        padding: const EdgeInsets.all(0),
                        children: [
                          DrawerHeader(
                            decoration: const BoxDecoration(
                                image: DecorationImage(
                                    image: AssetImage(Images.background),
                                    fit: BoxFit.fill)), //BoxDecoration
                            child: Stack(
                              children: [
                                Positioned(
                                  bottom: 0,
                                  left: 0,
                                  child: Row(
                                    children: [
                                      Image.asset(
                                        Images.android,
                                        height: 50,
                                        width: 50,
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.only(
                                            left: 8.0, right: 8.0),
                                        child: Image.asset(
                                          Images.flutter,
                                          height: 50,
                                          width: 50,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ), //UserAccountDrawerHeader
                          ), //DrawerHeader
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: ListTile(
                              leading: Image.asset(
                                Images.home,
                                height: 20,
                                width: 20,
                              ),
                              title: Text(
                                Strings.home,
                                style: GoogleFonts.baloo2(
                                  textStyle: const TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                      fontFamily: 'baloo2'),
                                ),
                              ),
                              onTap: () {
                                onDrawerItemClick(0);
                              },
                              selected: _currentIndex==0,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
                              selectedTileColor: Colors.deepOrange[900],
                              selectedColor: Colors.white,

                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: ListTile(
                              leading: Image.asset(
                                Images.about,
                                height: 20,
                                width: 20,
                              ),
                              title: Text(
                                Strings.about,
                                style: GoogleFonts.baloo2(
                                  textStyle: const TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                      fontFamily: 'baloo2'),
                                ),
                              ),
                              selected: _currentIndex==1,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
                              selectedTileColor: Colors.deepOrange[900],
                              selectedColor: Colors.white,
                              onTap: () {
                                onDrawerItemClick(1);
                              },
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: ListTile(
                              leading: Image.asset(
                                Images.experience,
                                height: 20,
                                width: 20,
                              ),
                              title: Text(
                                Strings.experience,
                                style: GoogleFonts.baloo2(
                                  textStyle: const TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                      fontFamily: 'baloo2'),
                                ),
                              ),
                              onTap: () {
                                onDrawerItemClick(2);
                              },
                              selected: _currentIndex==2,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
                              selectedTileColor:Colors.deepOrange[900],
                              selectedColor: Colors.white,
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: ListTile(
                              leading: Image.asset(
                                Images.contact,
                                height: 20,
                                width: 20,
                              ),
                              title: Text(
                                Strings.contact,
                                style: GoogleFonts.baloo2(
                                  textStyle: const TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                      fontFamily: 'baloo2'),
                                ),
                              ),
                              onTap: () {
                                onDrawerItemClick(3);
                              },
                              selected: _currentIndex==3,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
                              selectedTileColor:Colors.deepOrange[900],
                              selectedColor: Colors.white,
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(8.0),
                            child: ListTile(
                              leading: Image.asset(
                                Images.resume,
                                height: 20,
                                width: 20,
                              ),
                              title: Text(
                                Strings.resume,
                                style: GoogleFonts.baloo2(
                                  textStyle: const TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                      fontFamily: 'baloo2'),
                                ),
                              ),
                              onTap: () {
                                onDrawerItemClick(4);
                              },
                              selected: _currentIndex==4,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
                              selectedTileColor: Colors.deepOrange[900],
                              selectedColor: Colors.white,
                            ),
                          )
                        ],
                      ),
                    )
                  : const SizedBox()),
        ],
      ),
    );
  }

  void onDrawerItemClick(int index) {
    if(Navigator.canPop(context)){
      Navigator.pop(context);
    }
    setState(() {
      _currentIndex = index;
      _controller?.index=index;
    });
  }

  void onTabChange() {
    if (_currentIndex == _controller!.index) return;
    setState(() {
      _currentIndex = _controller!.index;
    });
  }
}
