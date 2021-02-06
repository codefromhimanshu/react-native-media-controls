import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import styles from "./MediaControls.style";
import { Props } from "./MediaControls";

type VolumeControlsProps = Pick<Props, "onMute" | "mainColor" | "mute"> & {};

const VolumeControls = (props: VolumeControlsProps) => {
  const { onMute, mute } = props;
  const icon = mute
    ? require("./assets/mute.png")
    : require("./assets/unmute.png");
  const content = (
    <TouchableOpacity
      style={[styles.playButton]}
      onPress={onMute}
      accessibilityLabel={!mute ? "Tap to mute" : "Tap to unmute"}
      accessibilityHint={"Mute & unmute the Video"}
    >
      <Image source={icon} style={styles.muteIcon} />
    </TouchableOpacity>
  );

  return <View style={[styles.muteControlsRow]}>{content}</View>;
};

export { VolumeControls };
