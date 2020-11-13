/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const platforms = {
    1: {
        'name': 'PC',
        'url': 'width: 12px; height: 13px; background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTAgMTMuNzcybDYuNTQ1LjkwMlY4LjQyNkgwek0wIDcuNjJoNi41NDVWMS4yOTZMMCAyLjE5OHptNy4yNjUgNy4xNWw4LjcwNCAxLjJWOC40MjVINy4yNjV6bTAtMTMuNTd2Ni40Mmg4LjcwNFYweicgZmlsbD0nI0ZGRicvPjwvc3ZnPg==)',
    },
    2: {
        'name': 'PlayStation',
        'url': 'width: 17px; height: 13px; background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjEgMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTExLjExMiAxNkw4IDE0LjY1NFYwczYuNzY0IDEuMTQ3IDcuNjk1IDMuOTg3Yy45MzEgMi44NDItLjUyIDQuNjgyLTEuMDMgNC43MzYtMS40Mi4xNS0xLjk2LS43NDgtMS45Ni0uNzQ4VjMuMzlsLTEuNTQ0LS42NDhMMTEuMTEyIDE2ek0xMiAxNC4zMlYxNnM3LjY2Ni0yLjMzOCA4Ljc5NC0zLjI0YzEuMTI4LS45LTIuNjQxLTMuMTQyLTQuNjY2LTIuNzA0IDAgMC0yLjE1Mi4wOTktNC4xMDIuOTAxLS4wMTkuMDA4IDAgMS41MSAwIDEuNTFsNC45NDgtMS4wOTUgMS43NDMuNzNMMTIgMTQuMzJ6bS01LjAyNC0uNzczcy0uOTQyLjQ3Ni0zLjA0MS40NTJjLTIuMS0uMDI0LTMuOTU5LS41OTUtMy45MzUtMS44MzNDLjAyNCAxMC45MjggMy40NzYgOS41NzEgNi45NTIgOXYxLjczOGwtMy42OTMuOTUycy0uNjMyLjc4Ni4yMTcuODFBMTEuOTM0IDExLjkzNCAwIDAwNyAxMi4wNDZsLS4wMjQgMS41eicgZmlsbD0nI0ZGRicvPjwvc3ZnPg==)',
    },
    3: {
        'name': 'Xbox',
        'url': 'width: 13px; height: 13px; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZmlsbD0nI0ZGRicgZD0nTTMuNTY0IDEuMzU3bC0uMDIyLjAyYy4wNDYtLjA0OC4xMS0uMS4xNTQtLjEyOEM0Ljk0OC40MzUgNi4zOTYgMCA4IDBjMS41MDIgMCAyLjkwOC40MTUgNC4xMSAxLjEzNi4wODYuMDUyLjMyNC4yMTUuNDQ2LjM2M0MxMS40LjIyMiA3Ljk5MyAyLjk2MiA3Ljk5MyAyLjk2MmMtMS4xNzctLjkwOC0yLjI2LTEuNTI2LTMuMDY3LTEuNzQ2LS42NzQtLjE4NS0xLjE0LS4wMy0xLjM2Mi4xNDF6bTEwLjMwNSAxLjIwOGMtLjAzNS0uMDQtLjA3NC0uMDc2LS4xMDktLjExNi0uMjkzLS4zMjItLjY1My0uNC0uOTc4LS4zNzgtLjI5NS4wOTItMS42Ni41ODQtMy4zNDIgMi4xNzIgMCAwIDEuODk0IDEuODQxIDMuMDUzIDMuNzIzIDEuMTU5IDEuODgzIDEuODUyIDMuMzYyIDEuNDI2IDUuNDE1QTcuOTY5IDcuOTY5IDAgMDAxNiA3Ljk5OWE3Ljk2OCA3Ljk2OCAwIDAwLTIuMTMtNS40MzR6TTEwLjk4IDguNzdhNTUuNDE2IDU1LjQxNiAwIDAwLTIuMjg3LTIuNDA1IDUyLjg0IDUyLjg0IDAgMDAtLjctLjY4NmwtLjg0OC44NTRjLS42MTQuNjItMS40MTEgMS40My0xLjg1MyAxLjkwMi0uNzg3Ljg0LTMuMDQzIDMuNDc5LTMuMTcgNC45NTggMCAwLS41MDItMS4xNzQuNi0zLjg4LjcyLTEuNzY5IDIuODkzLTQuNDI1IDMuODAxLTUuMjkgMCAwLS44My0uOTEzLTEuODctMS41NDRsLS4wMDctLjAwMnMtLjAxMS0uMDA5LS4wMy0uMDJjLS41LS4zLTEuMDQ3LS41My0xLjU3My0uNTZhMS4zOTEgMS4zOTEgMCAwMC0uODc4LjQzMUE4IDggMCAwMDEzLjkyIDEzLjM4MWMwLS4wMDItLjE2OS0xLjA1Ni0xLjI0NS0yLjU3LS4yNTMtLjM1NC0xLjE3OC0xLjQ2LTEuNjk2LTIuMDR6Jy8+PC9zdmc+)',
    },
    4: {
        'name': 'iOS',
        'url': 'width: 10px; height: 16px; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMSAxOCc+PHBhdGggZmlsbD0nI0ZGRicgZD0nTTkuNTM4IDBIMS42NTFDLjg5NiAwIC4yODcuNTg3LjI4NyAxLjMxdjE1LjM2OGMwIC43MjMuNjEgMS4zMSAxLjM2NCAxLjMxaDcuODg3Yy43NTQgMCAxLjM2NC0uNTg3IDEuMzY0LTEuMzFWMS4zMWMwLS43MjMtLjYxLTEuMzEtMS4zNjQtMS4zMXptLTUuODkuNzk2aDMuODk0Yy4wOTggMCAuMTc4LjE0LjE3OC4zMTUgMCAuMTc0LS4wOC4zMTYtLjE3OC4zMTZIMy42NDhjLS4wOTkgMC0uMTc3LS4xNDItLjE3Ny0uMzE2IDAtLjE3NC4wNzgtLjMxNS4xNzctLjMxNXptMS45NDcgMTUuODk4Yy0uNDggMC0uODctLjM3NS0uODctLjgzNiAwLS40NjIuMzktLjgzNS44Ny0uODM1cy44Ny4zNzMuODcuODM1YzAgLjQ2MS0uMzkuODM2LS44Ny44MzZ6TTkuODggMTMuODNIMS4zMVYyLjIxaDguNTd2MTEuNjJ6Jy8+PC9zdmc+)',
    },
    5: {
        'name': 'Apple Macintosh',
        'url': 'width: 11px; height: 14px; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNSAxOCc+PHBhdGggZD0nTTEwLjg2OSAwaC4xMjdjLjEwMiAxLjI2LS4zNzkgMi4yMDItLjk2MyAyLjg4NC0uNTc0LjY3Ny0xLjM1OSAxLjMzNC0yLjYyOSAxLjIzNC0uMDg0LTEuMjQyLjM5Ny0yLjExNC45OC0yLjc5NEM4LjkyNy42OSA5LjkxOS4xMjYgMTAuODcgMHptMy43NTYgMTMuMTk2di4wMzZhMTAuNTM0IDEwLjUzNCAwIDAxLTEuNDk0IDIuODk5Yy0uNTcuNzg5LTEuMjY3IDEuODUtMi41MTMgMS44NS0xLjA3NyAwLTEuNzkyLS42OTYtMi44OTYtLjcxNS0xLjE2Ny0uMDItMS44MS41ODMtMi44NzcuNzM0aC0uMzY0Yy0uNzgzLS4xMTQtMS40MTYtLjc0LTEuODc3LTEuMzAyQTExLjQ1MiAxMS40NTIgMCAwMTAgMTAuMTM0di0uODA4Yy4wODMtMS45NjkgMS4wMzMtMy41NyAyLjI5NS00LjM0NS42NjctLjQxMyAxLjU4My0uNzY0IDIuNjAzLS42MDcuNDM3LjA2OC44ODQuMjE5IDEuMjc1LjM2OC4zNzEuMTQ0LjgzNS4zOTggMS4yNzUuMzg1LjI5OC0uMDA5LjU5NC0uMTY1Ljg5NC0uMjc1Ljg4LS4zMiAxLjc0LS42ODcgMi44NzctLjUxNCAxLjM2NS4yMDcgMi4zMzQuODE4IDIuOTMzIDEuNzYtMS4xNTUuNzQtMi4wNjggMS44NTUtMS45MTIgMy43Ni4xMzggMS43MyAxLjEzNyAyLjc0MiAyLjM4NSAzLjMzOHonIGZpbGw9JyNGRkYnLz48L3N2Zz4=)',
    },
    6: {
        'name': 'Linux',
        'url': 'width: 12px; height: 14px; background-image: url(https://rawg.io/assets/ea10db63cd5cf752e220d2726db4f934.svg)',
    },
    7: {
        'name': 'Nintendo',
        'url': 'width: 17px; height: 13px; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMSAxNic+PHBhdGggZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNOCAwaDVhOCA4IDAgMTEwIDE2SDhBOCA4IDAgMTE4IDB6bS0uMTM1IDEuOTM1YTYuMDY1IDYuMDY1IDAgMDAwIDEyLjEzaDUuMTJhNi4wNjUgNi4wNjUgMCAwMDAtMTIuMTNoLTUuMTJ6bS0xLjMzIDIuMzA0aDIuNDAxbDMuMTk5IDUuMTc1VjQuMjRoMi4zNDZ2Ny40OTVIMTIuMThMOC44NjQgNi41Mzd2NS4yMDFINi41M2wuMDA1LTcuNDk5eicvPjwvc3ZnPg==)',
    },
    8: {
        'name': 'Android',
        'url': 'width: 12px; height: 14px; background-image: url(https://rawg.io/assets/f8777fb92ed5b91753dfb9810fad29a1.svg)',
    },
    9: {
        'name': 'Atari',
        'url': 'width: 16px; height: 13px; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAxNic+PHBhdGggZD0nTTExLjA0MiAxNlYwSDguNzV2MTZoMi4yOTJ6TTcuMTAyIDBoMS4yMzFjMCA3LjQxNy0uMTkgOS4yMjQtMS4zMjUgMTEuNDEyQzUuODcgMTMuNTk5IDIuNjk4IDE1Ljc2MiAwIDE2di0yLjQ0NWMyLjAzNi0uMzMzIDMuODgzLTEuNDMgNS40OTItMy44NTVDNy4xMDIgNy4yNzUgNy4xNSAxLjUyIDcuMTAyIDB6bTUuNzk2IDBoLTEuMjMxYzAgNy40MTcuMTkgOS4yMjQgMS4zMjUgMTEuNDEyQzE0LjEzIDEzLjU5OSAxNy4zMDIgMTUuNzYyIDIwIDE2di0yLjQ0NWMtMi4wMzYtLjMzMy0zLjg4My0xLjQzLTUuNDkyLTMuODU1LTEuNjEtMi40MjUtMS42NTgtOC4xNzktMS42MS05Ljd6JyBmaWxsPScjRkZGJy8+PC9zdmc+)',
    },
    10: {
        'name': 'Commodore / Amiga',
        'url': 'width: 18px; height: 13px; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMyAxNic+PGcgZmlsbD0nI0ZGRic+PHBhdGggZD0nTTMuNjczIDcuNDk4aDIuOTkzbDUuNjI5IDguNDEzSDkuMzI5eicvPjxwYXRoIGQ9J00xOS45MzIuMDQ4aDIuOTY1TDEyLjMyNiAxNS45MTFIOS40OTd6TS4wMDMgNy40OThoMy4wMTlsNS42NzcgOC40MTNINS43MXonLz48cGF0aCBkPSdNMTYuNDAxLjA0OGgyLjk5MUw4LjczIDE1LjkxMUg1Ljg3OHonLz48L2c+PC9zdmc+)',
    },
    11: {
        'name': 'SEGA',
        'url': 'width: 10px; height: 12px; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMyAxNic+PGcgZmlsbD0nI0ZGRic+PHBhdGggZD0nTTcuNDY4IDE1Ljk5M2MzLjA1NiAwIDUuNTMyLTIuMzM1IDUuNTMyLTUuMjEyIDAtMi44ODMtMi40NzYtNS4yMTgtNS41MzItNS4yMThsLTEuOTQuMDFhLjI3MS4yNzEgMCAwMS0uMjc2LS4yNjRjMC0uMTQ2LjEyNC0uMjY1LjI3Ny0uMjY1bDcuNDU0LjAwMS4wMDMtMi4yMTJINS41MjdjLTEuNDQyIDAtMi42MTUgMS4xMDgtMi42MTUgMi40NyAwIDEuMzYzIDEuMTczIDIuNDY2IDIuNjE1IDIuNDY2bDEuOTQ5LjAyNWMxLjc1IDAgMy4xNjcgMS4zMzUgMy4xNjcgMi45ODMgMCAxLjY0OC0xLjQxNiAyLjk4Ny0zLjE2NyAyLjk4N0guMDAzTDAgMTZsNy40NjgtLjAwN3onLz48cGF0aCBkPSdNLjAwNiAxMy4xNjdoNy4zOGMxLjQyOCAwIDIuNTgzLTEuMTA2IDIuNTgzLTIuNDcyIDAtMS4zNjQtMS4xNTUtMi40NjgtMi41ODQtMi40NjhsLTEuOTI0LS4wMmMtMS43MjYgMC0zLjEyNi0xLjM0LTMuMTI2LTIuOTkzIDAtMS42NSAxLjQtMi45ODkgMy4xMjYtMi45ODlsNy4zNjYtLjAwMUwxMi44MjQgMEg1LjQ2MkMyLjQ0OCAwIDAgMi4zMzYgMCA1LjIyYzAgMi44ODMgMi40NDggNS4yMiA1LjQ2MiA1LjIybDEuOTA1LjAwM2MuMTQ1IDAgLjI2Ny4xMTMuMjY3LjI1NyAwIC4xNC0uMTIyLjI1My0uMjY3LjI1M2wtNy4zNjQuMDA2LjAwMyAyLjIwOCcvPjwvZz48L3N2Zz4=)',
    },
    12: {
        'name': '3DO',
        'url': 'width: 6px; height: 16px; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDIwJz48ZyBmaWxsPScjRkZGJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPjxyZWN0IHdpZHRoPSc3LjU3OScgaGVpZ2h0PSc1LjM2MScgeD0nLjIxMScgeT0nOC4wNDEnIHJ4PScyLjI2NScvPjxwYXRoIGQ9J00zLjk2LjA4N2wzLjg3IDMuODctMy43OSAzLjc5MS0zLjg3LTMuODd6Jy8+PGVsbGlwc2UgY3g9JzQuMTA1JyBjeT0nMTYuOTA3JyByeD0nMy4yNjMnIHJ5PSczLjA5MycvPjwvZz48L3N2Zz4=)',
    },
    13: {
        'name': 'Neo Geo',
        'url': 'width: 17px; height: 13px; background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMSAxNic+PHBhdGggZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNOCAwaDVhOCA4IDAgMTEwIDE2SDhBOCA4IDAgMTE4IDB6bS0uMTM1IDEuOTM1YTYuMDY1IDYuMDY1IDAgMDAwIDEyLjEzaDUuMTJhNi4wNjUgNi4wNjUgMCAwMDAtMTIuMTNoLTUuMTJ6bS0xLjMzIDIuMzA0aDIuNDAxbDMuMTk5IDUuMTc1VjQuMjRoMi4zNDZ2Ny40OTVIMTIuMThMOC44NjQgNi41Mzd2NS4yMDFINi41M2wuMDA1LTcuNDk5eicvPjwvc3ZnPg==)',
    },
    14: {
        'name': 'Web',
        'url': 'width: 12px; height: 12px; background-image: url(https://rawg.io/assets/8456e01e7ba63f4da68330dc38df8f38.svg)',
    },
};
