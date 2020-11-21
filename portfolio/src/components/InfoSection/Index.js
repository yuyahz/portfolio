import React from 'react';
import { Button } from '../ButtonElements';

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';

const InfoSection = ({ lightBg, id, imgStart, topline, lightText, headline, darkText, description, buttonLabel, img, alt}) => {


    return (
        <div>
            <InfoContainer lightBg={lghtBg} id={id}>
                <InfoWrapper>
                    <InfoRo imgStart={imgStat}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRo>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default InfoSection;
