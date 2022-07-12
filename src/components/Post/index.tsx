import {
  Container,
  TwitterIcon,
  Body,
  Content,
  Description,
  ImageContent,
  Icons,
  Status,
  FacebookIcon,
} from './styles';

import { FacebookShareButton, TwitterShareButton } from 'next-share';

interface propsType {
  ImageUrl: string;
  description: string;
}

export function Post({ ImageUrl, description }: propsType) {
  return (
    <Container>
      <Body>
        <Content>
          <Description>{description}</Description>
          <ImageContent src={ImageUrl} />
          <Icons>
            <FacebookShareButton
              quote={'234234234234'}
              url={'https://viveiromatanativa.com.br'}
              hashtag={'#VIVEIROMATANATIVA'}
            >
              <Status>
                <FacebookIcon />
                facebook
              </Status>
            </FacebookShareButton>

            <TwitterShareButton
              title={`🌳${description}\n`}
              url={'https://viveiromatanativa.com.br'}
              hashtags={['VIVEIROMATANATIVA', 'IPÊ']}
            >
              <Status>
                <TwitterIcon />
                Twitter
              </Status>
            </TwitterShareButton>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
