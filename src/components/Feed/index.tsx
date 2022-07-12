import { Container, Tab, Tweets } from './styles';

import { Post } from '../Post';

export function Feed() {
  return (
    <Container>
      <Tab>DESTAQUES DO VIVEIRO</Tab>
      <Tweets>
        <Post
          ImageUrl={
            "https://i.ibb.co/RTxV6pJ/100793309-117417053314939-5697247072734937088-n.jpg"
          }
          description={
            "Encomende suas mudas com o viveiro Mata Nativa."
          }
        />

        <Post
          ImageUrl={
            'https://scontent.fppb8-1.fna.fbcdn.net/v/t1.6435-9/101648416_121289879594323_6247069042004197376_n.jpg?stp=dst-jpg_p600x600&_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeH2xcyFHJlB4HM822A1u43xT_msridbLg5P-ayuJ1suDosihNNE0seIj2k7oSj20LFuEYpCBCpDthtO-yJ1nr7H&_nc_ohc=uaDmLgEEIGcAX_bSVW7&_nc_ht=scontent.fppb8-1.fna&oh=00_AT_bsMhFUD3kReKz4sMawA6BQ0tP_YIhnhziMUsJrEmq8g&oe=62E5F06E'
          }
          description={
            "Sangra d'água, é uma planta ótima para o reflorestamento, pois seu crescimento é desenvolvido rapidamente."
          }
        />

        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post /> */}
      </Tweets>
    </Container>
  );
}
