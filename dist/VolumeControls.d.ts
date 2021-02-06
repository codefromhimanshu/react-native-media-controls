/// <reference types="react" />
import { Props } from "./MediaControls";
declare type VolumeControlsProps = Pick<Props, "onMute" | "mute"> & {};
declare const VolumeControls: (props: VolumeControlsProps) => JSX.Element;
export { VolumeControls };
