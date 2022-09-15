import Image from 'next/image';
import React from 'react';
import { Tile, TileBackground, TileContent, TileWrapper } from './Tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './Work';

const Works = () => {
    return (
        <TileWrapper numOfPages={3}>
            <TileBackground>
                <WorkBackground/>
            </TileBackground>
            <TileContent>
                <Tile page={0} renderContent={({progress}) => (
                    <WorkContainer>
                        <WorkLeft
                            progress={progress}
                        >
                            <div>We built</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                App Number One
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                            src="/assets/work-1.jpg" 
                            layout="responsive" 
                            width={840} 
                            height={1620} 
                            alt="work-1" />
                        </WorkRight>
                    </WorkContainer>
                )}></Tile>
                <Tile page={1} renderContent={({progress}) => (
                    <WorkContainer>
                        <WorkLeft
                            progress={progress}
                        >
                            <div>We built</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                App Number Two
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                            src="/assets/work-2.jpg" 
                            layout="responsive" 
                            width={840} 
                            height={1620} 
                            alt="work-2" />
                        </WorkRight>                    </WorkContainer>
                )}></Tile>
                <Tile page={2} renderContent={({progress}) => (
                    <WorkContainer>
                        <WorkLeft
                            progress={progress}
                        >
                            <div>We built</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                App Number Three
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image 
                            src="/assets/work-3.jpg" 
                            layout="responsive" 
                            width={840} 
                            height={1620} 
                            alt="work-3" />
                        </WorkRight>                    </WorkContainer>
                )}></Tile>
            </TileContent>
        </TileWrapper>
    );
};

export default Works;