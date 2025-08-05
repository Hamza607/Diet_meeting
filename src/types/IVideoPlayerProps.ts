
interface IVideoPlayerProps {
    src: string;
    autoPlay?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    poster?: string;
    className?: string;
}
export type {IVideoPlayerProps}