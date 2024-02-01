import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import styles from './VideoItem.module.scss';
import { PlayIcon, PauseIcon, VolumeIcon, MuteIcon, HeartIcon, OpenCommentIcon, FavoriteVideoIcon, ShareIcon, HeartActiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function VideoItem({data}) {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMute, setIsMute] = useState(true);
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const [isLike, setIsLike] = useState(false);
    const [progess, setProgess] = useState(0);
    const translateControlCircleY = progess * 36; // controls circle có thể tịnh tiến max là 36px
    
    const videoRef = useRef(null);
    const progessRef = useRef(null);
    const buttonRef = useRef(null);
    // console.log('==================Videoitem rerender =================')
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // console.log(entries)
            const entry = entries[0];
            // entries.map(entry => { console.log(entry);setIsVideoVisible(entry.isIntersecting)})
            // console.log(entry)
            setIsVideoVisible(entry.isIntersecting)
        })

        observer.observe(buttonRef.current)

        // if(isVideoVisible && videoRef.current) {
        //     if(isPlaying){
        //         videoRef.current.play();
        //     }else 
        //     // setIsPlaying(true)
        // }else if(!isVideoVisible && videoRef.current){
        //     // setIsPlaying(false)
        //     if(!isPlaying)
        //         videoRef.current.pause();
        // }
        if(videoRef.current) {
            if(isVideoVisible) {
                if(isPlaying)
                    videoRef.current.play();
                else videoRef.current.pause();
            }else {
                videoRef.current.pause();
            }
        }

        // if (isPlaying) {
        //     videoRef.current.play();
        // } else {
        // }
    }, [isVideoVisible,isPlaying]);

    useEffect(() => {
        videoRef.current.volume = progess ;
        if(progess===0) {
            setIsMute(true);
        }else {
            setIsMute(false);
        }
    }, [progess]);
    const handlePlayVideo = () => {
        setIsPlaying(!isPlaying);
    };
    const handleMute = () => {
        setIsMute(!isMute);
        if(isMute) {
            setProgess(1)
        } else setProgess(0)
    };

    const progessCal = (e) => {
        const infoRect = progessRef.current.getBoundingClientRect();

        const subtraction = infoRect.bottom - e.clientY;
        if (subtraction >= 48) {
            return 1;
        } else if (subtraction > 0 && subtraction < 48) {
            return subtraction / 48;
        }else if(subtraction <= 0) {
            return 0;
        }
    };

    const handleControlVolume = (e) => {
        const newProgess = progessCal(e);
        // console.log(progessRef.current,newProgess);
        setProgess(newProgess);
    };
    const handleMouseDownCircle = (e) => {
        e.preventDefault();
        e.target.focus();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        function handleMouseMove(e) {
            // console.log(e.clientY)
            const newProgess = progessCal(e);
            setProgess(newProgess);
        }
        function handleMouseUp() {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }
    return (
        <div className={cx('video-wrapper')}>
            <div className={cx('video-card')}>
                <video
                    ref={videoRef}
                    src={data || "https://files.fullstack.edu.vn/f8-tiktok/videos/3177-654b9e6dc23d4.mp4"}
                    // controls
                    onEnded={() => setIsPlaying(false)}
                ></video>
                <div className={cx('auto-play-video')} ref={buttonRef}></div>

                <div className={cx('controls')} tabIndex={0}>
                    <span
                        className={cx('control-play')}
                        onClick={handlePlayVideo}
                    >
                        {isPlaying ? <PauseIcon /> : <PlayIcon />}
                    </span>
                    <div className={cx('voice-control')} tabIndex={0} >
                        <div className={cx('volume-control')}>
                            <div
                                ref={progessRef}
                                className={cx('control-progess')}
                                onClick={(e) => handleControlVolume(e)}
                            ></div>
                            <div
                                className={cx('control-baret')}
                                style={{
                                    transform: `scaleY(${progess})`,
                                }}
                                onClick={(e) => {
                                    handleControlVolume(e);
                                }}
                            ></div>
                            <div
                                className={cx('control-circle')}
                                style={{
                                    transform: `translateY(-${translateControlCircleY}px)`,
                                }}
                                onMouseDown={handleMouseDownCircle}
                                tabIndex={0}
                            ></div>
                        </div>
                        <div className={cx('video-sound')} onClick={handleMute}>
                            {isMute ? <MuteIcon /> : <VolumeIcon />}
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Item */}

            <div className={cx('action-items')}>
                <button className={cx('button-action')}>
                    <span className={cx('icon-wrapper')} onClick={() => setIsLike(!isLike)}>
                        {isLike ? <HeartActiveIcon/> : <HeartIcon/>}
                    </span>
                    <strong className={cx('strong-text')}>1.2M</strong>
                </button>
                <button className={cx('button-action')}>
                    <span className={cx('icon-wrapper')}>
                        <OpenCommentIcon/>
                    </span>
                    <strong className={cx('strong-text')}>1.2M</strong>
                </button>
                <button className={cx('button-action')}>
                    <span className={cx('icon-wrapper')}>
                        <FavoriteVideoIcon/>
                    </span>
                    <strong className={cx('strong-text')}>1.2M</strong>
                </button>
                <button className={cx('button-action')}>
                    <span className={cx('icon-wrapper')}>
                        <ShareIcon/>
                    </span>
                    <strong className={cx('strong-text')}>1.2M</strong>
                </button>
            </div>
        </div>
    );
}

export default VideoItem;
