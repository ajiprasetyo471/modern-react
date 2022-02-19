import { Feature } from '../../components';
import './Features.css';

const featuresData = [
  {
    title: 'Improving and distrust instantly',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan interdum libero et molestie. Donec vel ex et sapien semper sagittis vel eu metus.',
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan interdum libero et molestie. Donec vel ex et sapien semper sagittis vel eu metus.',
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan interdum libero et molestie. Donec vel ex et sapien semper sagittis vel eu metus.',
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan interdum libero et molestie. Donec vel ex et sapien semper sagittis vel eu metus. Integer vel rhoncus quam. Morbi et pharetra ligula. Maecenas vel blandit enim. Aliquam erat volutpat.',
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize it. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
