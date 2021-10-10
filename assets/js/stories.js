var currentSkin = getCurrentSkin();
var stories = new Zuck('stories', {
    backNative: true,
    previousTap: true,
    skin: currentSkin['name'],
    autoFullScreen: currentSkin['params']['autoFullScreen'],
    avatars: currentSkin['params']['avatars'],
    paginationArrows: currentSkin['params']['paginationArrows'],
    list: currentSkin['params']['list'],
    cubeEffect: currentSkin['params']['cubeEffect'],
    localStorage: true,
    stories: [
        Zuck.buildTimelineItem(
            "0",
            "https://lestatus.ru/wp-content/uploads/%D0%A1%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B0%D0%B2%D0%B8%D1%8F.jpg",
            "Відпочинок на природі",
            "",
            timestamp(),
            [
                ["ramon-1", "photo", 3, "assets/images/stories/c62cf35bd6e4802af7080f871eb9bf3f.png", "assets/images/stories/stories-1.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/stories/3d53084c599b27eb7f7c5257e0e35f47.jpg", "assets/images/stories/stories-1.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/stories/b7d85968f2d2e948ab045b993f41d49b.jpg", "assets/images/stories/stories-1.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/stories/c4abc90c158ed3f985bad565bd4405ef.jpg", "assets/images/stories/stories-1.jpg", '', false, false, timestamp()]
            ]
        ),
        Zuck.buildTimelineItem(
            "1",
            "https://lestatus.ru/wp-content/uploads/%D0%A1%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B0%D0%B2%D0%B8%D1%8F.jpg",
            "Закінчую складний проект",
            "",
            timestamp(),
            [
                ["ramon-1", "photo", 3, "assets/images/stories/61e94db3f3c4b97d86d6d9acf99ad81a.png", "assets/images/stories/stories-2.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/stories/8b4d0d14c5e58c1b4d772a6bda1c55bf.png", "assets/images/stories/stories-2.jpg", '', false, false, timestamp()]
            ]
        ),
        Zuck.buildTimelineItem(
            "2",
            "https://lestatus.ru/wp-content/uploads/%D0%A1%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B0%D0%B2%D0%B8%D1%8F.jpg",
            "Переїхав у нову квартиру",
            "",
            timestamp(),
            [
                ["ramon-1", "photo", 3, "assets/images/stories/ed37fb01f901af4093f5d5ef7873f0e0.jpg", "assets/images/stories/stories-3.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/stories/59fcdbb59c12a389a6c3f755da242039.jpg", "assets/images/stories/stories-3.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/stories/6f68b252872d7301bff4aaa175a154e0.png", "assets/images/stories/stories-3.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/stories/60e2ee2128d17313b9efb3e49868947c.jpg", "assets/images/stories/stories-3.jpg", '', false, false, timestamp()]
            ]
        ),
        Zuck.buildTimelineItem(
            "3",
            "https://lestatus.ru/wp-content/uploads/%D0%A1%D0%BA%D0%B0%D0%BD%D0%B4%D0%B8%D0%BD%D0%B0%D0%B2%D0%B8%D1%8F.jpg",
            "Осінь прийшла",
            "",
            timestamp(),
            [
                ["ramon-1", "photo", 3, "assets/images/stories/c303d915800b71c8ab60748f244bcc35.jpg", "assets/images/stories/stories-4.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/stories/29c80ffafd58706b93b65f80fa316448.jpg", "assets/images/stories/stories-4.jpg", '', false, false, timestamp()],
                ["ramon-1", "photo", 3, "assets/images/stories/e77422a2d3ac37fe7e138f84dac43e42.jpg", "assets/images/stories/stories-4.jpg", '', false, false, timestamp()]
            ]
        )
    ]
});