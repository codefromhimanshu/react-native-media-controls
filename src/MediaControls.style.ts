import { StyleSheet } from "react-native";

const containerBackgroundColor = "rgba(45, 59, 62, 0)";
const playButtonBorderColor = "rgba(255,255,255,0.5)";
const white = "#fff";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: containerBackgroundColor,
    bottom: 0,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    left: 0,
    paddingHorizontal: 20,
    paddingBottom: 13,
    position: "absolute",
    right: 0,
    top: 0,
  },
  volumeContainer: {
    backgroundColor: containerBackgroundColor,
    paddingHorizontal: 20,
    paddingBottom: 13,
    position: "absolute",
    right: 0,
    top: 20,
    height: 50,
    width: 50,
  },
  controlsRow: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
  },
  fullScreenContainer: {
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
    paddingLeft: 20,
  },
  playButton: {
    alignItems: "center",
    borderColor: playButtonBorderColor,
    borderRadius: 100,
    borderWidth: 0,
    height: 50,
    justifyContent: "center",
    width: 50,
  },
  muteControlsRow: {
    alignItems: "center",
    flex: 1,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  },
  muteIcon: {
    height: 46,
    resizeMode: "contain",
    width: 46,
  },
  playIcon: {
    height: 22,
    resizeMode: "contain",
    width: 22,
  },
  progressColumnContainer: {
    flex: 1,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: -25,
  },
  progressSlider: {
    alignSelf: "stretch",
  },
  replayIcon: {
    height: 20,
    resizeMode: "stretch",
    width: 25,
  },
  thumb: {
    backgroundColor: white,
    borderRadius: 50,
    borderWidth: 3,
    height: 20,
    width: 20,
  },
  timeRow: {
    alignSelf: "stretch",
  },
  timerLabel: {
    color: white,
    fontSize: 12,
  },
  timerLabelsContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: -7,
  },
  toolbar: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  toolbarRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  track: {
    borderRadius: 1,
    height: 5,
  },
});
