/// <reference types="react" />
import { Props } from "./MediaControls";
declare type VolumeControlsProps = Pick<Props, "onMute" | "mainColor" | "mute"> & {};
declare const VolumeControls: (props: VolumeControlsProps) => JSX.Element;
export { VolumeControls };
